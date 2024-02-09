import { useCallback } from "react";

export const useSearchHistory = (searchId: string, size: number = 10) => {
  const getStorageKey = useCallback(() => {
    return `vectara-search:${searchId}:history`;
  }, [searchId]);

  const getPreviousSearches = useCallback(() => {
    const storedData = window.localStorage.getItem(getStorageKey());
    return JSON.parse(storedData ?? "[]");
  }, [getStorageKey]);

  const addPreviousSearch = useCallback(
    (searchTerm: string) => {
      const previousSearches = getPreviousSearches();

      // Add previous search to the begining of the array.
      // Slice off previous history beyond history size.
      const updatedPreviousSearches = [searchTerm, ...previousSearches].slice(
        0,
        size
      );

      window.localStorage.setItem(
        getStorageKey(),
        JSON.stringify(updatedPreviousSearches)
      );
    },
    [getStorageKey]
  );

  return {
    getPreviousSearches,
    addPreviousSearch,
  };
};
