import { useEffect, useRef, useState } from "react";
import {
  AgenticMessageHistoryItem,
  AgenticResponse,
  AgenticResponseActionConfiguration,
  ChatActionOption,
  ChatQueryResponse,
  ChatTurn,
  END_TAG,
  MessageHistoryItem,
  mmrRerankerId,
  SearchResult,
  SearchResultWithSnippet,
  START_TAG,
  SummaryLanguage
} from "types";
import { ApiV2, streamQueryV2 } from "@vectara/stream-query-client";
import { parseSnippet } from "./utils/parseSnippet";
import { sendSearchRequest } from "./utils/sendSearchRequest";

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
export const DEFAULT_RERANKER_ID = 272725718;

export const DEFAULT_LAMBDA_VALUE = 0.005;

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
  agenticConfiguration?: {
    url: string;
    onAgenticResponse: (response: AgenticResponse) => AgenticResponseActionConfiguration | undefined;
  };
  requestSource?: string;
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
  agenticConfiguration,
  requestSource
}: UseChatConfig) => {
  const [messageHistory, setMessageHistory] = useState<Array<MessageHistoryItem>>([]);
  const recentQuestion = useRef<string>("");
  const [activeMessage, setActiveMessage] = useState<ChatTurn | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStreamingResponse, setIsStreamingResponse] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [userActionOptions, setUserActionOptions] = useState<Array<ChatActionOption> | null>(null);

  const sendMessage = async ({ query, isRetry = false }: { query: string; isRetry?: boolean }) => {
    let agenticResponseMessageContent: string | undefined;
    let agenticResponseMessagePostContent: string | undefined;
    let agenticResponseActionConfiguration: AgenticResponseActionConfiguration | undefined;

    if (isLoading) return;

    if (isRetry) {
      setHasError(false);
    }

    setActiveMessage(null);
    recentQuestion.current = query;

    setIsLoading(true);

    // Optimistically add a placeholder entry as the active message.
    // We'll replace this later on with data from the server.
    setActiveMessage({
      id: "placeholder-message-id",
      type: "turn",
      question: query,
      answer: "",
      results: [],
      factualConsistencyScore: undefined
    });

    // Query the agentic url if an agentic configuration was defined.
    if (agenticConfiguration) {
      // Extract all chat turns from message history.
      // These message history items, which contain messages to and from the chatbot,
      // will be sent to the agentic service for evaluation.
      const chatTurns: Array<ChatTurn> = messageHistory.reduce(
        (acc: Array<ChatTurn>, messageHistoryItem: MessageHistoryItem) => {
          if (messageHistoryItem.type === "turn") {
            acc.push(messageHistoryItem as ChatTurn);
          }
          return acc;
        },
        []
      );

      // Format the chat turn messages for the agentic service.
      const agenticMessageHistory: Array<AgenticMessageHistoryItem> = chatTurns.reduce(
        (acc: Array<AgenticMessageHistoryItem>, chatTurn: ChatTurn) => {
          acc.push({
            role: "user",
            message: chatTurn.question
          });

          if (chatTurn.answer) {
            acc.push({
              role: "chatbot",
              message: chatTurn.answer
            });
          }
          return acc;
        },
        []
      );

      // For the last item, push the user's most recent message.
      // This is not part of message history yet, as it's currently set as the active message.
      agenticMessageHistory.push({
        role: "user",
        message: recentQuestion.current
      });

      const agenticResponse = await fetch(agenticConfiguration.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: agenticMessageHistory })
      });

      const responseData = await agenticResponse.json();
      agenticResponseActionConfiguration = agenticConfiguration.onAgenticResponse(responseData);

      ({ content: agenticResponseMessageContent, post: agenticResponseMessagePostContent } =
        agenticResponseActionConfiguration?.message ?? {});
    }

    let resultsWithSnippets: SearchResultWithSnippet[];

    if (enableStreaming) {
      setIsStreamingResponse(true);

      // If the agentic response overrides the query API, simply respond with the overriding content
      // Otherwise, hit the chat API. Note that if specified by the agentic service, we may need to append some custom content
      // to the end of the chat API's generated message.
      if (agenticResponseMessageContent) {
        setIsLoading(false);
        await streamAgenticAnswer(agenticResponseMessageContent);

        if (agenticResponseMessagePostContent) {
          await streamAgenticAnswer("", true);
          await streamAgenticAnswer(agenticResponseMessagePostContent);
        }

        setIsStreamingResponse(false);
        setUserActionOptions(agenticResponseActionConfiguration?.userActionOptions ?? null);
      } else {
        try {
          const onStreamEvent = async (event: ApiV2.StreamEvent) => {
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
                  type: "turn",
                  question: recentQuestion.current,
                  answer: prevState?.answer ?? "",
                  results: prevState?.results ?? []
                }));

                break;

              case "searchResults":
                resultsWithSnippets = event.searchResults.map((result: SearchResult) => {
                  agenticResponseActionConfiguration?.userActionOptions;
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
                  type: "turn",
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
                  type: "turn",
                  question: recentQuestion.current,
                  answer: event.updatedText ?? "",
                  results: prevState?.results ?? []
                }));
                break;

              case "factualConsistencyScore":
                setActiveMessage((prevState) => ({
                  id: prevState?.id ?? "",
                  type: "turn",
                  question: recentQuestion.current,
                  answer: prevState?.answer ?? "",
                  results: prevState?.results ?? [],
                  factualConsistencyScore: event.factualConsistencyScore
                }));
                break;

              case "end":
                // If there is agentic content to be displayed post-query response,
                // add a line break and then append the agentic content.
                if (agenticResponseMessagePostContent) {
                  await streamAgenticAnswer("", true);
                  await streamAgenticAnswer(agenticResponseMessagePostContent);
                }
                setIsStreamingResponse(false);

                // If the agentic configurations prescribes showing the user some actions they can take, add them now.
                setUserActionOptions(agenticResponseActionConfiguration?.userActionOptions ?? null);

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
              reranker:
                rerankerId === mmrRerankerId
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

            chat: { store: true, conversationId: conversationId ?? undefined },
            generation: {
              generationPresetName: summaryPromptName,
              maxUsedSearchResults: numberOfSearchResults,
              enableFactualConsistencyScore: enableFactualConsistencyScore,
              responseLanguage: language
            }
          };

          await streamQueryV2({ streamQueryConfig, onStreamEvent, requestSource });
        } catch (error) {
          console.log("Summary error", error);
          setHasError(true);
          setIsLoading(false);
          return;
        }
      }
    } else {
      try {
        if (agenticResponseMessageContent) {
          setMessageHistory((prev) => [
            ...prev,
            {
              id: `agentic-query-${Date.now()}`,
              type: "turn",
              question: recentQuestion.current,
              answer:
                agenticResponseMessageContent +
                (agenticResponseMessagePostContent ? `<br><br>${agenticResponseMessagePostContent}` : ""),
              results: resultsWithSnippets ?? [],
              factualConsistencyScore: undefined
            }
          ]);
        } else {
          const response: ChatQueryResponse = await sendSearchRequest({
            apiKey: apiKey!,
            customerId: customerId!,
            query: query,
            corpusKeys: corpusKeys!,
            search: {
              offset: 0,
              metadataFilter: "",
              lexicalInterpolation: lambda,
              reranker:
                rerankerId === mmrRerankerId
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

            chat: { store: true, conversationId: conversationId ?? undefined },
            generation: {
              promptName: summaryPromptName,
              maxUsedSearchResults: numberOfSearchResults,
              enableFactualConsistencyScore: enableFactualConsistencyScore,
              responseLanguage: language
            }
          });

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
              type: "turn",
              question: recentQuestion.current,
              answer:
                (response?.answer ?? "") +
                (agenticResponseMessagePostContent ? `<br><br>${agenticResponseMessagePostContent}` : ""),
              results: resultsWithSnippets ?? [],
              factualConsistencyScore: response.factual_consistency_score
            }
          ]);
        }

        setUserActionOptions(agenticResponseActionConfiguration?.userActionOptions ?? null);

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

  // Given a string, adds this string to the message feed as part of the chatbot's
  // answer to the user's most recent question.
  const streamAgenticAnswer = (message: string, addLineBreak?: boolean): Promise<void> => {
    return new Promise((resolve) => {
      const chars = message.split("");

      const activeMessageBasis: Omit<ChatTurn, "answer" | "results"> = {
        id: "placeholder-message-id",
        type: "turn",
        question: recentQuestion.current,
        factualConsistencyScore: undefined
      };

      // Start typing the message to the user.
      const interval = window.setInterval(() => {
        const charToAdd = chars.shift() ?? "";

        setActiveMessage((prev) => {
          return {
            ...activeMessageBasis,
            results: prev?.results ?? [],
            answer: (prev?.answer ?? "") + charToAdd
          };
        });

        if (chars.length === 0) {
          clearInterval(interval);

          if (addLineBreak)
            setActiveMessage((prev) => ({
              ...activeMessageBasis,
              results: prev?.results ?? [],
              answer: (prev?.answer ?? "") + "<br><br>"
            }));
          resolve();
        }
      }, 10);
    });
  };

  // Handle this in an effect instead of directly in the onStreamEvent callback
  // because onStreamEvent doesn't have access to the latest state of activeMessage.
  useEffect(() => {
    if (!isStreamingResponse && activeMessage) {
      setMessageHistory([...messageHistory, activeMessage]);
      setActiveMessage(null);
    }
  }, [isStreamingResponse]);

  useEffect(() => {
    if (userActionOptions) {
      setMessageHistory((prev) => {
        return [
          ...prev,
          {
            id: `user-action-${Date.now().toString()}`,
            type: "action",
            options: userActionOptions
          }
        ];
      });
    }

    setUserActionOptions(null);
  }, [userActionOptions]);

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
