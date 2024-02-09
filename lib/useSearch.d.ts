import { DeserializedSearchResult } from "./types";
/**
 * A hook that exposes a data fetcher.
 * This data fetcher sends a request to the supplied or default API endpoint
 * and automatically parses results before returning them to the calling hook or component.
 */
export declare const useSearch: (customerId: string, corpusId: string, apiKey: string, apiUrl?: string) => {
    fetchSearchResults: (query: string) => Promise<DeserializedSearchResult[]>;
    isLoading: boolean;
};
