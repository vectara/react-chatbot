import {VuiFlexContainer, VuiFlexItem, VuiText, VuiAccordion, VuiSpacer, VuiLink} from "../vui";
import { SearchResultWithSnippet } from "../types";

type Props = {
  searchResults: SearchResultWithSnippet[];
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

/**
 * A component that lists all references referred to in answers given by the Vectara platform.
 */
export const ChatReferences = ({ searchResults, isOpen = false, setIsOpen = () => {} }: Props) => {
  return (
    <VuiAccordion
      header={`Based on ${searchResults.length} ${searchResults.length === 1 ? "fact" : "facts"}`}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <VuiSpacer size="s" />

      {searchResults.map((result, i) => (
        <div key={i}>
          <ChatReference result={result} position={i} />
          {i < searchResults.length - 1 && <VuiSpacer size="s" />}
        </div>
      ))}
    </VuiAccordion>
  );
};

const ChatReference = ({ result, position }: { result: SearchResultWithSnippet; position: number }) => {
  const text = result?.snippet?.text;
  const url = result.document_metadata.url as string;

  return (
    <>
      <VuiFlexContainer alignItems="start" spacing="s">
        <VuiFlexItem grow={false} shrink={false}>
          <div className="vrcbChatSearchResultPosition">{position + 1}</div>
        </VuiFlexItem>

        <VuiFlexItem grow={1} shrink={1}>
          <VuiText size="s">
            <p>
              {url ? (
                  <a href={url} target="_blank">
                    {text}
                  </a>
              ) : (
                  text
              )}
            </p>
          </VuiText>
        </VuiFlexItem>
      </VuiFlexContainer>
    </>
  );
};
