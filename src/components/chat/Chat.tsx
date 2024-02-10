import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { VuiFlexContainer, VuiFlexItem, VuiSpacer } from "../../vui";
import { ChatStyle, ChatTurnType, CHAT_STYLE_ORDER } from "./types";
import { ChatTurn } from "./ChatTurn";
import { ChatPanel } from "./ChatPanel";

type Props = {
  openPrompt: string;
  chatStyle: ChatStyle;
  setChatStyle: (chatStyle: ChatStyle) => void;
  introduction?: string;
  suggestions?: string[];
  onInput: (input: string) => void;
  onRetry: (trun: ChatTurnType) => void;
  onReset: () => void;
  conversation: ChatTurnType[];
  settings?: React.ReactNode;
};

export const Chat = ({
  openPrompt,
  chatStyle,
  setChatStyle,
  introduction,
  suggestions,
  onInput,
  onRetry,
  onReset,
  conversation,
  settings
}: Props) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [input, setInput] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isScrolledToBottomRef = useRef(true);
  const prevConversationRef = useRef({
    isBottomQuestionLoading: true,
    length: 0
  });

  const isOpen = chatStyle !== "closed";

  useEffect(() => {
    const onScrollChat = (e: Event) => {
      isScrolledToBottomRef.current = conversationRef.current
        ? Math.abs(
            conversationRef.current.scrollHeight -
              conversationRef.current.clientHeight -
              conversationRef.current.scrollTop
          ) < 1
        : true;
    };

    // We're going to track the scroll position, which will determine
    // or not the user is at the bottom of the chat.
    conversationRef.current?.addEventListener("scroll", onScrollChat);

    return () => {
      conversationRef.current?.removeEventListener("scroll", onScrollChat);
    };
  }, []);

  useEffect(() => {
    // Scrolling UX rules:
    // * Scroll down if the last recorded scroll position was already
    //   at the bottom of the list and if the last question has resolved
    //   to an answer.
    // * If the user has scrolled to another position, then don’t
    //   auto-scroll.
    // * If the question that has resolved is not the last question,
    //   don’t auto-scroll.
    //
    // This way if the user takes control of the scroll position, they
    // remain in control. If the user hasn’t taken control of the scroll
    // position, then the scroll feels stable (by staying at the
    // bottom) as opposed to scrolling unpredictably through the list
    // as questions resolve.

    const hasBottomQuestionJustChanged =
      // A new question has been added to the bottom of the list.
      prevConversationRef.current.length !== conversation.length ||
      // The last question has just resolved to an answer.
      prevConversationRef.current.isBottomQuestionLoading !== Boolean(conversation[conversation.length - 1]?.isLoading);

    // If the intro is really long, the chat can be in a state where
    // the user is at the top of the chat and their first question is
    // off-screen. In this case, we want to scroll to the bottom.
    const shouldStickToBottom =
      conversation.length === 1 || (isScrolledToBottomRef.current && hasBottomQuestionJustChanged);

    if (isOpen && shouldStickToBottom) {
      // Scroll to the bottom of the chat to keep the latest turn in view.
      conversationRef.current?.scrollTo({
        left: 0,
        top: conversationRef.current?.scrollHeight,
        behavior: "smooth"
      });
    }

    prevConversationRef.current = {
      length: conversation.length,
      isBottomQuestionLoading:
        conversation.length > 0 ? Boolean(conversation[conversation.length - 1].isLoading) : false
    };
  }, [conversation]);

  useEffect(() => {
    // Only autofocus if the user has interacted with the component.
    // This prevents the component stealing focus when it first mounts.
    if (isTouched) {
      if (isOpen) {
        inputRef.current?.focus();
      } else {
        buttonRef.current?.focus();
      }
    }
  }, [isOpen]);

  const onSubmit = () => {
    if (!input?.trim()) return;
    onInput(input);
    setInput("");
  };

  const cycleChatStyle = () => {
    setIsTouched(true);
    const currentIndex = CHAT_STYLE_ORDER.indexOf(chatStyle);
    setChatStyle(
      currentIndex === CHAT_STYLE_ORDER.length - 1 ? CHAT_STYLE_ORDER[0] : CHAT_STYLE_ORDER[currentIndex + 1]
    );
  };

  const buttonClasses = classNames("chatButton", {
    "chatButton-isHidden": isOpen
  });

  const classes = classNames("chat", `chat--${chatStyle}`);

  return (
    <>
      <button
        // @ts-expect-error React doesn't support inert yet
        inert={isOpen ? "" : null}
        className={buttonClasses}
        onClick={() => setChatStyle("condensed")}
        ref={buttonRef}
      >
        <div className="chatButton__prompt">{openPrompt}</div>
      </button>

      <div
        // @ts-expect-error React doesn't support inert yet
        inert={!isOpen ? "" : null}
        className={classes}
        onKeyDown={(e) => {
          if (e.key === "Escape") setChatStyle("closed");
        }}
      >
        <div className="chat__header">
          <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
            <VuiFlexItem grow={1}>
              <div className="chatButton__prompt">
                <h2>{openPrompt}</h2>
              </div>
            </VuiFlexItem>

            {settings && (
              <VuiFlexItem shrink={false} grow={false}>
                <button onClick={() => setIsSettingsOpen(true)}>Settings</button>
              </VuiFlexItem>
            )}
          </VuiFlexContainer>
        </div>

        <div className="chat__conversation" ref={conversationRef}>
          {(introduction || suggestions) && (
            <div className="chat__introduction">
              {introduction}
              {introduction && <VuiSpacer size="s" />}
              {suggestions?.map((suggestion) => (
                <button key={suggestion} onClick={() => onInput(suggestion)}>
                  {suggestion}
                </button>
              ))}
              {suggestions && suggestions.length > 0 && <VuiSpacer size="s" />}
            </div>
          )}

          {conversation.length > 0 && (
            <div className="chat__turns">
              {conversation.map((turn, index) => (
                <ChatTurn turn={turn} onRetry={onRetry} key={index} />
              ))}
            </div>
          )}

          {conversation.length > 0 && (
            <div className="chat__conversationActions">
              <VuiFlexContainer alignItems="center" justifyContent="center">
                <VuiFlexItem>
                  <button onClick={onReset}>Start over</button>
                </VuiFlexItem>
              </VuiFlexContainer>
            </div>
          )}
        </div>

        <div className="chat__input">
          <VuiFlexContainer alignItems="center" spacing="xxs">
            <VuiFlexItem grow={1}>
              <input
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.currentTarget.value);
                }}
                onSubmit={onSubmit}
                ref={inputRef}
              />
            </VuiFlexItem>

            <VuiFlexItem shrink={false} grow={false}>
              <button onClick={onSubmit}>Submit</button>
            </VuiFlexItem>

            <VuiFlexItem shrink={false} grow={false}>
              <button onClick={cycleChatStyle}>Size</button>
            </VuiFlexItem>
          </VuiFlexContainer>
        </div>

        {isSettingsOpen && (
          <ChatPanel title="Chat settings" onClose={() => setIsSettingsOpen(false)}>
            {settings}
          </ChatPanel>
        )}
      </div>
    </>
  );
};
