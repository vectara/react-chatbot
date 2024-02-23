import { Fragment, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer, VuiFlexItem, VuiSpacer } from "../vui";
import { QueryInput } from "./QueryInput";
import { ChatItem } from "./ChatItem";
import "./chatView.scss";
import { useChat } from "../useChat";
import { Loader } from "./Loader";
import { ChatBubble, Minimize } from "components/Icons";

interface Props {
  customerId: string;
  corpusIds: string[];
  apiKey: string;
  title?: string;
  placeholder?: string;
  emptyStateDisplay: ReactNode;
}

/**
 * The main chat view
 * Defaults to a minimized button at the bottom of the screen.
 * Expands to show a chat window consisting of a text input, submit button, and chat messages window.
 */
export const ChatView = ({
  customerId,
  corpusIds,
  apiKey,
  title = "My Chatbot",
  placeholder = "Chat with your AI Assistant",
  emptyStateDisplay = <DefaultEmptyMessagesState />
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const { sendMessage, messageHistory, isLoading, error } = useChat(customerId, corpusIds, apiKey);
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

  const chatItems = messageHistory.map((turn, index) => {
    const { question, answer, results } = turn;
    const onRetry =
      error && index === messageHistory.length - 1 ? () => sendMessage({ query: question, isRetry: true }) : undefined;

    return <ChatItem key={index} question={question} answer={answer} searchResults={results} onRetry={onRetry} />;
  });

  if (isLoading) {
    chatItems.push(<Loader />);
  }

  const chatInputClasses = classNames("vrcbChatInputContainer");
  const hasContent = isLoading || messageHistory.length > 0;

  const onSendQuery = useCallback(() => {
    if (isLoading) return;
    sendMessage({ query });
    setQuery("");
  }, [setQuery, sendMessage, isLoading]);

  useEffect(updateScrollPosition, [isLoading, messageHistory]);

  return (
    <div className={`vrcbChatbotWrapper${isOpen ? " vrcbChatbotWrapper--isOpen" : ""}`}>
      {isOpen ? (
        <>
          <VuiFlexContainer className="vrcbHeader" spacing="none" direction="row">
            <VuiFlexItem grow={1} alignItems="center">
              {title}
            </VuiFlexItem>
            <VuiFlexItem alignItems="center">
              <button onClick={() => setIsOpen(false)}>
                <Minimize />
              </button>
            </VuiFlexItem>
          </VuiFlexContainer>
          <VuiFlexContainer direction="column" spacing="none" className="vrcbChatbotInnerWrapper">
            <VuiFlexItem className="vrcbMessagesWrapper" basis="fill">
              <div ref={appLayoutRef}>
                {!hasContent ? (
                  emptyStateDisplay
                ) : (
                  <>
                    <VuiSpacer size="xl" />
                    {chatItems.map((item, index) => {
                      let spacer;
                      if (messageHistory[index]?.answer === "") {
                        spacer = null;
                      } else {
                        spacer = index < chatItems.length - 1 ? <VuiSpacer size="m" /> : <VuiSpacer size="xl" />;
                      }
                      return (
                        <Fragment key={index}>
                          {item}
                          {spacer}
                        </Fragment>
                      );
                    })}
                  </>
                )}
              </div>
            </VuiFlexItem>
            <VuiFlexItem grow={false} shrink={false} className={chatInputClasses}>
              <QueryInput
                placeholder={placeholder}
                buttonLabel="Send"
                query={query}
                setQuery={setQuery}
                isDisabled={isLoading}
                onSubmit={onSendQuery}
              />
            </VuiFlexItem>
          </VuiFlexContainer>
        </>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <VuiFlexContainer className="vrcbHeader" spacing="none" direction="row">
            <VuiFlexItem grow={1} alignItems="center">
              Chat with your AI assistant
            </VuiFlexItem>
            <VuiFlexItem alignItems="center">
              <ChatBubble />
            </VuiFlexItem>
          </VuiFlexContainer>
        </button>
      )}
    </div>
  );
};

const DefaultEmptyMessagesState = () => (
  <VuiFlexContainer
    className="vrcbEmptyMessages"
    spacing="none"
    alignItems="center"
    justifyContent="center"
    direction="column"
  >
    <ChatBubble size="150px" color="#000000" />
    Ask anything.
  </VuiFlexContainer>
);
