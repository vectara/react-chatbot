import { useEffect, useRef, useState } from "react";
import { ChatTurn, SummaryLanguage } from "types";
import { ChatDetail, streamQuery, StreamUpdate } from "@vectara/stream-query-client";
import { sendSearchRequest } from "utils/sendSearchRequest";
import { deserializeSearchResponse } from "utils/deserializeSearchResponse";

/**
 * A hook that exposes:
 *  - sendMessage: a request utility for sending a text string to the query API
 *  - activeMessage: an object representing a message that the platform has not completed responding to yet
 *  - messageHistory: an array of previous messages
 *  - isLoading: a boolean indicating a pending response from the platform
 *  - isStreamingResponse: a boolean indicating that the platform is currently streaming data to the client
 *  - startNewConversation: a utility method for clearing the chat context
 *  - hasError: a boolean indicating an error was encountered while sending a message to the platform
 */
export const useChat = (
  customerId: string,
  corpusIds: string[],
  apiKey: string,
  useStreaming: boolean = true,
  language: SummaryLanguage = "eng"
) => {
  const [messageHistory, setMessageHistory] = useState<ChatTurn[]>([]);
  const recentQuestion = useRef<string>("");
  const [activeMessage, setActiveMessage] = useState<ChatTurn | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStreamingResponse, setIsStreamingResponse] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const sendMessage = async ({ query, isRetry = false }: { query: string; isRetry?: boolean }) => {
    if (isLoading) return;
    if (isRetry) {
      setHasError(false);
    }

    setActiveMessage(null);
    recentQuestion.current = query;

    // Optimistically add a placeholder entry as the active message.
    // We'll replace this later on with data from the server.
    setActiveMessage({
      id: "placeholder-message-id",
      question: query,
      answer: "",
      results: []
    });

    const baseSearchRequestParams = {
      filter: "",
      queryValue: query,
      rerank: true,
      rerankNumResults: 7,
      rerankerId: 272725718,
      rerankDiversityBias: 0.3,
      customerId: customerId,
      corpusId: corpusIds.join(","),
      endpoint: "api.vectara.io",
      apiKey: apiKey
    };

    setIsLoading(true);

    if (useStreaming) {
      try {
        await streamQuery(
          {
            ...baseSearchRequestParams,
            corpusIds,
            summaryNumResults: 7,
            summaryNumSentences: 3,
            summaryPromptName: "vectara-summary-ext-v1.2.0",
            language,
            chat: { store: true, conversationId: conversationId ?? undefined }
          },
          (update) => onStreamUpdate(update)
        );
      } catch (error) {
        console.log("Summary error", error);
        setIsLoading(false);
        setHasError(true);
        return;
      }
    } else {
      try {
        const response = await sendSearchRequest({
          ...baseSearchRequestParams,
          hybridNumWords: 2,
          hybridLambdaLong: 0.0,
          hybridLambdaShort: 0.1,
          summaryMode: true,
          summaryNumResults: 7,
          summaryNumSentences: 3,
          summaryPromptName: "vectara-summary-ext-v1.2.0",
          language,
          chat: { conversationId: conversationId ?? undefined }
        });

        setConversationId(response.summary[0].chat.conversationId);
        setMessageHistory((prev) => [
          ...prev,
          {
            id: response.summary[0].chat.turnId,
            question: recentQuestion.current,
            answer: response?.summary[0].text ?? "",
            results: deserializeSearchResponse(response) ?? []
          }
        ]);
        setActiveMessage(null);
        setIsLoading(false);
      } catch (error) {
        console.log("Summary error", error);
        setHasError(true);
        setIsLoading(false);
        return;
      }
    }
  };

  const startNewConversation = () => {
    setMessageHistory([]);
    setConversationId(null);
  };

  const onStreamUpdate = ({ references, details, updatedText, isDone }: StreamUpdate) => {
    if (updatedText) {
      setIsStreamingResponse(true);
      setIsLoading(false);
    }

    const chatDetail = details?.find((detail) => detail.type === "chat") as ChatDetail | undefined;

    if (chatDetail) {
      setConversationId(chatDetail.data.conversationId ?? null);
    }

    if (isDone) {
      setIsStreamingResponse(false);
    } else {
      setActiveMessage((prev) => ({
        id: chatDetail ? chatDetail.data.turnId : "",
        question: recentQuestion.current,
        answer: updatedText ?? "",
        results: [...(prev?.results ?? []), ...(references ?? [])]
      }));
    }
  };

  useEffect(() => {
    if (!isStreamingResponse && activeMessage) {
      setMessageHistory([...messageHistory, activeMessage]);
      setActiveMessage(null);
    }
  }, [isStreamingResponse]);

  return {
    sendMessage,
    activeMessage,
    messageHistory,
    isLoading,
    isStreamingResponse,
    startNewConversation,
    hasError
  };
};
