import {useEffect, useRef, useState} from "react";
import {
  ChatQueryResponse,
  ChatTurn, END_TAG,
  mmrRerankerId,
  SearchResult,
  SearchResultWithSnippet, START_TAG,
  SummaryLanguage
} from "types";
import {ApiV2, streamQueryV2} from "@vectara/stream-query-client";
import {parseSnippet} from "./utils/parseSnippet";
import {sendSearchRequest} from "./utils/sendSearchRequest";

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
export const DEFAULT_RERANKER_ID = 272725718

export const DEFAULT_LAMBDA_VALUE = 0.005

type UseChatConfig = {
  customerId: string;
  corpusKeys: string;
  apiKey: string;
  numberOfSearchResults?: number;
  language?: SummaryLanguage;
  enableFactualConsistencyScore?: boolean;
  summaryPromptName?: string;
  rerankerId?: number;
  lambda?: number;
  enableStreaming?: boolean;
};

export const useChat = ({
  customerId,
  corpusKeys,
  apiKey,
  numberOfSearchResults = 10,
  language = "eng",
  enableFactualConsistencyScore,
  summaryPromptName = DEFAULT_SUMMARIZER,
  rerankerId = DEFAULT_RERANKER_ID,
  lambda = DEFAULT_LAMBDA_VALUE,
  enableStreaming = true,
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
      results: [],
      factualConsistencyScore: undefined
    });
    setIsLoading(true);
    let resultsWithSnippets: SearchResultWithSnippet[];
    if (enableStreaming) {
      try {

        const onStreamEvent = (event: ApiV2.StreamEvent) => {
          switch (event.type) {
            case "requestError":
            case "genericError":
            case "error":
              setHasError(true);
              setIsLoading(false);
              break;

            case "chatInfo":
              setConversationId(event.chatId);
              setActiveMessage((prevState) => ({
                id: event.chatId,
                question: recentQuestion.current,
                answer: prevState?.answer ?? "",
                results: prevState?.results ?? [],
              }));

              break;

            case "searchResults":
              resultsWithSnippets = event.searchResults.map((result: SearchResult) => {
                const { pre, text, post } = parseSnippet(result.text);

                return {
                  ...result,
                  snippet: {
                    pre,
                    text,
                    post
                  }
                };
              });

              setActiveMessage((prevState) => ({
                id: prevState?.id ?? "",
                question: recentQuestion.current,
                answer: prevState?.answer ?? "",
                results: resultsWithSnippets
              }));
              break;

            case "generationChunk":
              setIsStreamingResponse(true);
              setIsLoading(false);
              setActiveMessage((prevState) => ({
                id: prevState?.id ?? "",
                question: recentQuestion.current,
                answer: event.updatedText ?? "",
                results: prevState?.results ?? [],
              }));
              break;

            case "factualConsistencyScore":
              setActiveMessage((prevState) => ({
                id: prevState?.id ?? "",
                question: recentQuestion.current,
                answer: prevState?.answer ?? "",
                results: prevState?.results ?? [],
                factualConsistencyScore: event.factualConsistencyScore
              }));
              break;

            case "end":
              setIsStreamingResponse(false);
              break;
          }
        };

        const streamQueryConfig: ApiV2.StreamQueryConfig = {
          apiKey: apiKey!,
          customerId: customerId!,
          query: query,
          corpusKey: corpusKeys!,
          search: {
            offset: 0,
            metadataFilter: "",
            lexicalInterpolation: lambda,
            reranker: rerankerId === mmrRerankerId
                ? {
                  type: "mmr",
                  diversityBias: 0
                }
                : {
                  type: "customer_reranker",
                  // rnk_ prefix needed for conversion from API v1 to v2.
                  rerankerId: `rnk_${rerankerId}`
                },
            contextConfiguration: {
              sentencesBefore: 2,
              sentencesAfter: 2,
            }
          },

          chat: { store: true, conversationId: conversationId ?? undefined },
          generation: {
            promptName: summaryPromptName,
            maxUsedSearchResults: numberOfSearchResults,
            enableFactualConsistencyScore: enableFactualConsistencyScore,
            responseLanguage: language

          }
        };

        await streamQueryV2({ streamQueryConfig, onStreamEvent })
      }
      catch (error) {
        console.log("Summary error", error);
        setHasError(true);
        setIsLoading(false);
        return;
      }
    }
    else {
      try {
        const response: ChatQueryResponse = await sendSearchRequest({
          apiKey: apiKey!,
          customerId: customerId!,
          query: query,
          corpusKeys: corpusKeys!,
          search: {
            offset: 0,
            metadataFilter: "",
            lexicalInterpolation: lambda,
            reranker: rerankerId === mmrRerankerId
                ? {
                  type: "mmr",
                  diversityBias: 0
                }
                : {
                  type: "customer_reranker",
                  // rnk_ prefix needed for conversion from API v1 to v2.
                  rerankerId: `rnk_${rerankerId}`
                },
            contextConfiguration: {
              sentencesBefore: 2,
              sentencesAfter: 2,
              startTag: START_TAG,
              endTag: END_TAG
            }
          },

          chat: {store: true, conversationId: conversationId ?? undefined},
          generation: {
            promptName: summaryPromptName,
            maxUsedSearchResults: numberOfSearchResults,
            enableFactualConsistencyScore: enableFactualConsistencyScore,
            responseLanguage: language

          }
        })

        resultsWithSnippets = response.search_results.map((result: SearchResult) => {
          const { pre, text, post } = parseSnippet(result.text);

          return {
            ...result,
            snippet: {
              pre,
              text,
              post
            }
          };
        });
        setConversationId(response.chat_id);
        setMessageHistory((prev) => [
          ...prev,
          {
            id: response.chat_id,
            question: recentQuestion.current,
            answer: response?.answer ?? "",
            results: resultsWithSnippets ?? [],
            factualConsistencyScore: response.factual_consistency_score
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

  // Handle this in an effect instead of directly in the onStreamEvent callback
  // because onStreamEvent doesn't have access to the latest state of activeMessage.
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
