import { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { VuiButtonSecondary, VuiContextProvider, VuiFlexContainer, VuiFlexItem, VuiSpacer } from "../vui";
import { QueryInput } from "./QueryInput";
import { ChatItem } from "./ChatItem";
import { useChat } from "../useChat";
import { Loader } from "./Loader";
import { MinimizeIcon } from "./Icons";
import { FactualConsistencyBadge } from "./FactualConsistencyBadge";
import { ExampleQuestions } from "./exampleQuestions/ExampleQuestions";
import {RerankerIds, SummaryLanguage} from "types";

const inputSizeToQueryInputSize = {
  large: "l",
  medium: "m"
} as const;

export interface Props {
  // Vectara customer ID
  customerId: string;

  // Vectara API key
  apiKey: string;

  // Vectara corpus IDs
  corpusIds: string[];

  // Title to be shown in the UI header
  title?: string;

  // Text to be shown when the input field has no text
  placeholder?: string;

  // Example questions to prompt the user
  exampleQuestions?: string[];

  // Size of input. Defaults to "large".
  inputSize?: "large" | "medium";

  // Content to render into the messages display when there are no messages to show
  emptyStateDisplay?: ReactNode;

  // Configures the component's initial open/closed state.
  isInitiallyOpen?: boolean;

  // Defines the component's z-index. Defaults to 9999.
  zIndex?: number;

  // Enables streaming responses from the API. Defaults to true.
  enableStreaming?: boolean;

  // The language the responses should be in. Defaults to English.
  language?: SummaryLanguage;

  // Enables the factual consistency score in the API response. Defaults to false.
  enableFactualConsistencyScore?: boolean;

  // Defines the name of the summary prompt. Defaults to "vectara-summary-ext-v1.2.0".
  summaryPromptName?: string;

  //Define the reranker Id to be used , Defaults to "272725718"
  rerankerId?: RerankerIds;
}

/**
 * The main chat view
 * Defaults to a minimized button at the bottom of the screen, unless specified otherwise by `isOpened` prop.
 * Expands to show a chat window consisting of a text input, submit button, and chat messages window.
 */
export const ChatView = ({
  customerId,
  corpusIds,
  apiKey,
  title = "My Chatbot",
  placeholder = "Chat with your AI Assistant",
  exampleQuestions,
  inputSize = "large",
  emptyStateDisplay,
  isInitiallyOpen,
  zIndex = 9999,
  enableStreaming = true,
  language = "eng",
  enableFactualConsistencyScore,
  summaryPromptName,
  rerankerId,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);
  const [query, setQuery] = useState<string>("");
  const { sendMessage, startNewConversation, messageHistory, isLoading, hasError, activeMessage, isStreamingResponse } =
    useChat({
      customerId,
      corpusIds,
      apiKey,
      enableStreaming,
      language,
      enableFactualConsistencyScore,
      summaryPromptName,
      rerankerId
    });

  const appLayoutRef = useRef<HTMLDivElement>(null);
  const isScrolledToBottomRef = useRef(true);

  const updateScrollPosition = () => {
    setTimeout(() => {
      if (isScrolledToBottomRef.current) {
        appLayoutRef.current?.scrollTo({
          left: 0,
          top: appLayoutRef.current?.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 0);
  };

  useEffect(() => {
    if (isInitiallyOpen !== undefined) {
      setIsOpen(isInitiallyOpen);
    }
  }, [isInitiallyOpen]);

  useEffect(() => {
    const layoutNode = appLayoutRef.current;
    const onScrollContent = () => {
      const isScrolledToBottom = appLayoutRef.current
        ? Math.abs(
            appLayoutRef.current.scrollHeight - appLayoutRef.current.clientHeight - appLayoutRef.current.scrollTop
          ) < 50
        : true;

      isScrolledToBottomRef.current = isScrolledToBottom;
    };

    layoutNode?.addEventListener("scroll", onScrollContent);

    return () => {
      layoutNode?.removeEventListener("scroll", onScrollContent);
    };
  }, []);

  const historyItems = useMemo(
    () =>
      messageHistory.map((turn, index) => {
        const { question, answer, results, factualConsistencyScore } = turn;
        const onRetry =
          hasError && index === messageHistory.length - 1
            ? () => sendMessage({ query: question, isRetry: true })
            : undefined;

        return (
          <Fragment key={index}>
            <ChatItem
              question={question}
              answer={answer}
              searchResults={results}
              factualConsistencyScore={
                enableFactualConsistencyScore && <FactualConsistencyBadge score={factualConsistencyScore} />
              }
              onRetry={onRetry}
            />
            {index < messageHistory.length - 1 && <VuiSpacer size="m" />}
          </Fragment>
        );
      }),
    [messageHistory]
  );

  const hasContent = isLoading || messageHistory.length > 0 || activeMessage;
  const isRequestDisabled = isLoading || isStreamingResponse || query.trim().length === 0;

  const onSendQuery = (queryOverride?: string) => {
    if (isRequestDisabled && !queryOverride) return;
    sendMessage({ query: queryOverride ?? query });
    setQuery("");
  };

  const spacer = historyItems.length === 0 ? null : <VuiSpacer size={activeMessage ? "m" : "l"} />;

  useEffect(updateScrollPosition, [isLoading, activeMessage]);

  const content = isOpen ? (
    <div className="vrcbChatbotWrapper" style={{ zIndex }}>
      <VuiFlexContainer className="vrcbHeader" spacing="none" direction="row">
        <VuiFlexItem grow={1} alignItems="center">
          {title}
        </VuiFlexItem>

        <VuiFlexItem alignItems="center">
          <button onClick={() => setIsOpen(false)}>
            <MinimizeIcon size="12px" color="#2c313a" />
          </button>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiFlexContainer direction="column" spacing="none" className="vrcbChatbotInnerWrapper">
        <VuiFlexItem className="vrcbMessagesWrapper" basis="fill">
          <div ref={appLayoutRef}>
            {!hasContent ? (
              emptyStateDisplay ?? (
                <ExampleQuestions exampleQuestions={exampleQuestions ?? []} onSubmitChat={onSendQuery} />
              )
            ) : (
              <>
                <VuiSpacer size="xs" />
                {historyItems}
                {spacer}
                {activeMessage && (
                  <>
                    <ChatItem
                      question={activeMessage.question}
                      answer={activeMessage.answer}
                      searchResults={activeMessage.results}
                      factualConsistencyScore={
                        enableFactualConsistencyScore && (
                          <FactualConsistencyBadge score={activeMessage.factualConsistencyScore} />
                        )
                      }
                      onRetry={
                        hasError ? () => sendMessage({ query: activeMessage.question, isRetry: true }) : undefined
                      }
                      isStreaming={isStreamingResponse}
                    />
                    <VuiSpacer size="l" />
                  </>
                )}
                {isLoading && <Loader />}
                <VuiFlexContainer fullWidth={true} justifyContent="center">
                  <VuiFlexItem>
                    <VuiButtonSecondary color="neutral" size="xs" onClick={startNewConversation} isDisabled={isLoading}>
                      Start new conversation
                    </VuiButtonSecondary>
                  </VuiFlexItem>
                </VuiFlexContainer>
                <VuiSpacer size="l" />
              </>
            )}
          </div>
        </VuiFlexItem>

        <VuiFlexItem grow={false} shrink={false} className="vrcbChatInputContainer">
          <QueryInput
            placeholder={placeholder}
            buttonLabel="Send"
            query={query}
            setQuery={setQuery}
            isButtonDisabled={isRequestDisabled}
            onSubmit={onSendQuery}
            size={inputSizeToQueryInputSize[inputSize]}
          />
        </VuiFlexItem>
      </VuiFlexContainer>
    </div>
  ) : (
    <button className="vrcbChatbotButton" onClick={() => setIsOpen(true)} style={{ zIndex }}>
      {title}
    </button>
  );

  return <VuiContextProvider>{content}</VuiContextProvider>;
};
