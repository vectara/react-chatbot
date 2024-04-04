import Markdown from "markdown-to-jsx";
import { VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiSpinner, VuiText } from "../vui";
import { applyCitationOrder, extractCitations, reorderCitations } from "../vui/utils/citations";
import { DeserializedSearchResult } from "../types";
import { ChatReferences } from "./ChatReferences";
import { Error } from "./Icons";
import { useState } from "react";

const markDownCitations = (summary: string) => {
  const citations = extractCitations(summary);
  return citations
    .reduce((accum, { text, references }) => {
      if (references) {
        accum.push(text);

        const marginBefore = text ? text[text.length - 1] !== " " : false;
        if (marginBefore) {
          accum.push(" ");
        }

        references.forEach((reference, referenceIndex) => {
          if (referenceIndex > 0) {
            accum.push(" ");
          }

          accum.push(`<SummaryCitation reference={${reference}} />`);
        });
      } else {
        accum.push(text);
      }

      return accum;
    }, [] as string[])
    .join(" ");
};

type Props = {
  question?: string;
  answer?: string;
  searchResults?: DeserializedSearchResult[];
  onRetry?: () => void;
  isStreaming?: boolean;
};

/**
 * A component that encompasses a chat question-answer pair.
 * Defaults to showing just the user-supplied message, if it has not yet been answered.
 * Otherwise, shows both question and answer, plus applicable references.
 */
export const ChatItem = ({ question, answer, searchResults, onRetry, isStreaming }: Props) => {
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  let content;

  if (onRetry) {
    content = (
      <div className="vrcbChatMessageContainer vrcbChatMessageContainer--error">
        <VuiSpacer size="m" />
        <VuiFlexContainer alignItems="center" spacing="none">
          <VuiFlexContainer alignItems="center" spacing="xxs">
            <VuiFlexItem grow={false} shrink={true}>
              <Error />
            </VuiFlexItem>
            <VuiFlexItem grow={false}>Message not sent.</VuiFlexItem>
          </VuiFlexContainer>
          {onRetry && (
            <>
              <VuiSpacer size="s" />
              <VuiFlexContainer alignItems="center" spacing="none">
                <button className="vrcbRetryButton" onClick={() => onRetry()}>
                  Try again
                </button>
              </VuiFlexContainer>
            </>
          )}
        </VuiFlexContainer>
      </div>
    );
  } else if (answer) {
    const reorderedSearchResults = (searchResults ? applyCitationOrder(searchResults, answer) : []).slice(0, 7);
    const reorderedAnswer = searchResults ? reorderCitations(answer) : answer;
    const sanitizedAnswer = markDownCitations(reorderedAnswer);

    const SummaryCitation = ({ reference }: { reference: string }) => {
      return (
        <>
          {" "}
          <button onClick={() => setIsReferencesOpen(true)}>
            <span className="vrcbChatSummaryCitation">{reference}</span>
          </button>
        </>
      );
    };

    content = (
      <div className="vrcbChatMessageContainer vrcbChatMessageContainer--answer">
        <div className="vrcbChatMessage">
          <VuiText size="s">
            <Markdown
              children={sanitizedAnswer}
              options={{
                forceInline: true,
                overrides: {
                  SummaryCitation: {
                    component: SummaryCitation
                  }
                }
              }}
            />
            {isStreaming && (
              <span>
                {" "}
                <VuiSpinner size="xs" />
              </span>
            )}
          </VuiText>

          {reorderedSearchResults && reorderedSearchResults.length > 0 && (
            <>
              <VuiSpacer size="s" />

              <ChatReferences
                searchResults={reorderedSearchResults}
                isOpen={isReferencesOpen}
                setIsOpen={setIsReferencesOpen}
              />
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="vrcbChatMessageContainer vrcbChatMessageContainer--question">
        <div className="vrcbChatMessage">{question}</div>
      </div>

      <VuiSpacer size="xs" />

      {content}
    </>
  );
};
