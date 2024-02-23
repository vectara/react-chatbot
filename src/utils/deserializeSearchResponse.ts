import { DeserializedSearchResult, DocMetadata, SearchResponse } from "../types";
import { END_TAG, START_TAG } from "./sendSearchRequest";

/**
 * Convert query API response into a list of DeserializedSearchResult objects.
 */
export const deserializeSearchResponse = (
  searchResponse?: SearchResponse
): Array<DeserializedSearchResult> | undefined => {
  if (!searchResponse) return undefined;

  const results: Array<DeserializedSearchResult> = [];
  const { response: responses, document: documents } = searchResponse;

  responses.forEach((response) => {
    const { documentIndex, text: rawText } = response;
    const { pre, post, text } = parseSnippet(rawText);
    const document = documents[Number(documentIndex)];
    const { id, metadata: rawMetadata } = document;
    const { source, url, title, metadata } = parseMetadata(rawMetadata);

    results.push({
      id,
      snippet: {
        pre,
        text,
        post
      },
      source,
      url,
      title,
      metadata
    });
  });

  return results;
};

const parseMetadata = (rawMetadata: DocMetadata[]) => {
  const metadata = convertMetadataToObject(rawMetadata);
  return {
    source: metadata.source as string,
    url: metadata.url,
    title: metadata.title || "Untitled",
    metadata
  };
};

const parseSnippet = (source: string) => {
  const [pre, textAndPost] = source.indexOf(START_TAG) !== -1 ? source.split(START_TAG) : ["", source];
  const [text, post] = textAndPost.indexOf(END_TAG) !== -1 ? textAndPost.split(END_TAG) : [textAndPost, ""];
  return { pre, post, text };
};

const convertMetadataToObject = (metadata: DocMetadata[]) => {
  const obj: Record<string, string> = {};
  metadata.forEach((item) => {
    obj[item.name] = item.value;
  });
  return obj;
};
