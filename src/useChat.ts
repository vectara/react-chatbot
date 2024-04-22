import { useEffect, useRef, useState } from "react";
import { ChatTurn, SummaryLanguage } from "types";
import { streamQuery, StreamUpdate } from "@vectara/stream-query-client";
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

export const DEFAULT_SUMMARIZER = "vectara-summary-ext-v1.2.0";

type UseChatConfig = {
  customerId: string;
  corpusIds: string[];
  apiKey: string;
  enableStreaming?: boolean;
  language?: SummaryLanguage;
  enableFactualConsistencyScore?: boolean;
  summaryPromptName?: string;
};

export const useChat = ({
  customerId,
  corpusIds,
  apiKey,
  enableStreaming = true,
  language = "eng",
  enableFactualConsistencyScore,
  summaryPromptName = DEFAULT_SUMMARIZER
}: UseChatConfig) => {
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

    if (enableStreaming) {
      try {
        await streamQuery(
          {
            ...baseSearchRequestParams,
            corpusIds,
            summaryNumResults: 7,
            summaryNumSentences: 3,
            summaryPromptName,
            language,
            enableFactualConsistencyScore,
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
          summaryPromptName,
          language,
          enableFactualConsistencyScore,
          chat: { conversationId: conversationId ?? undefined }
        });

        setConversationId(response.summary[0].chat.conversationId);
        setMessageHistory((prev) => [
          ...prev,
          {
            id: response.summary[0].chat.turnId,
            question: recentQuestion.current,
            answer: response?.summary[0].text ?? "",
            results: deserializeSearchResponse(response) ?? [],
            factualConsistencyScore: response.summary[0].factualConsistency?.score
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

  const onStreamUpdate = (update: StreamUpdate) => {
    const { references, details, updatedText, isDone } = update;

    const factualConsistencyScore = details?.factualConsistency?.score;

    if (updatedText) {
      setIsStreamingResponse(true);
      setIsLoading(false);
    }

    if (details?.chat) {
      setConversationId(details.chat.conversationId ?? null);
    }

    setActiveMessage((prev) => ({
      id: details?.chat?.turnId ?? "",
      question: recentQuestion.current,
      answer: updatedText ?? "",
      results: [...(prev?.results ?? []), ...(references ?? [])],
      factualConsistencyScore
    }));

    const isFactualConsistencyScoreComplete = enableFactualConsistencyScore
      ? factualConsistencyScore !== undefined
      : true;
    const isResponseComplete = isDone && isFactualConsistencyScoreComplete;

    if (isResponseComplete) {
      setIsStreamingResponse(false);
    }
  };

  // Handle this in an effect instead of directly in the onStreamUpdate callback
  // because onStreamUpdate doesn't have access to the latest state of activeMessage.
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
