import { FC } from "react";
import "./_index.scss";

export interface Props {
  // Vectara customer ID
  customerId: string;

  // Vectara API key
  apiKey: string;

  // Vectara corpus ID
  corpusId: string;

  // An optional API url to direct requests toward
  apiUrl?: string;

  // The number of previous searches to cache.
  // Default is 0.
  historySize?: number;

  // The search input placeholder.
  placeholder?: string;

  // Whether to enable deeplinking to a particular search.
  isDeeplinkable?: boolean;

  // Whether to open selected results in a new browser tab.
  openResultsInNewTab?: boolean;
}

/**
 * A client-side search component that queries a specific corpus with a user-provided string.
 */
export const ReactChat: FC<Props> = ({
  customerId,
  apiKey,
  corpusId,
  apiUrl,
  historySize = 10,
  placeholder = "Search"
}) => {
  console.log(customerId, apiKey, corpusId, apiUrl, historySize, placeholder);
  return <div>React-Chat</div>;
};
