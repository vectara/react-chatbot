import { FC, ReactNode } from "react";
import { ChatView } from "components/ChatView";

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

  // Content to render into the messages display when there are no messages to show
  emptyStateDisplay?: ReactNode;
}

/**
 * A client-side chat component that queries specific corpora with a user-provided message.
 */
export const ReactChatbot: FC<Props> = ({ customerId, apiKey, corpusIds, title, placeholder, emptyStateDisplay }) => {
  return (
    <div>
      <ChatView
        customerId={customerId}
        corpusIds={corpusIds}
        apiKey={apiKey}
        title={title}
        placeholder={placeholder}
        emptyStateDisplay={emptyStateDisplay}
      />
    </div>
  );
};
