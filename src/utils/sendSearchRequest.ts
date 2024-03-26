import axios, { AxiosRequestConfig } from "axios";
import { DeserializedSearchResult, SummaryLanguage } from "../types";

type Config = {
  filter: string;
  queryValue?: string;
  language?: SummaryLanguage;
  summaryMode?: boolean;
  rerank?: boolean;
  rerankNumResults?: number;
  rerankerId?: number;
  rerankDiversityBias?: number;
  hybridNumWords: number;
  hybridLambdaShort?: number;
  hybridLambdaLong?: number;
  summaryNumResults?: number;
  summaryNumSentences?: number;
  summaryPromptName?: string;
  customerId: string;
  corpusId: string;
  endpoint: string;
  apiKey: string;
  chat?: {
    conversationId?: string;
  };
};

/**
 * Send a request to the query API.
 */
export const sendSearchRequest = async ({
  filter,
  queryValue,
  language,
  summaryMode,
  rerank,
  rerankNumResults,
  rerankerId,
  rerankDiversityBias,
  hybridNumWords,
  hybridLambdaShort,
  hybridLambdaLong,
  summaryNumResults,
  summaryNumSentences,
  summaryPromptName,
  customerId,
  corpusId,
  endpoint,
  apiKey,
  chat
}: Config) => {
  const lambda =
    typeof queryValue === "undefined" || queryValue.trim().split(" ").length > hybridNumWords
      ? hybridLambdaLong
      : hybridLambdaShort;
  const corpusKeyList = corpusId.split(",").map((id) => {
    return {
      customerId,
      corpusId: id,
      lexicalInterpolationConfig: {
        lambda: lambda
      },
      metadataFilter: filter ? `doc.source = '${filter}'` : undefined
    };
  });

  const body = {
    query: [
      {
        query: queryValue,
        start: 0,
        numResults: rerank ? rerankNumResults : 10,
        corpusKey: corpusKeyList,
        contextConfig: {
          sentencesBefore: summaryMode ? summaryNumSentences : 2,
          sentencesAfter: summaryMode ? summaryNumSentences : 2,
          startTag: START_TAG,
          endTag: END_TAG
        },
        ...(summaryMode
          ? {
              summary: [
                {
                  responseLang: language,
                  maxSummarizedResults: summaryNumResults,
                  summarizerPromptName: summaryPromptName,
                  chat: {
                    store: true,
                    conversationId: chat?.conversationId
                  }
                }
              ]
            }
          : {}),
        ...(rerank
          ? {
              rerankingConfig: {
                rerankerId: rerankerId,
                ...(rerankerId === 272725718
                  ? {
                      mmrConfig: {
                        diversityBias: rerankDiversityBias
                      }
                    }
                  : {})
              }
            }
          : {})
      }
    ]
  };

  const url = `https://${endpoint}/v1/query`;
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "customer-id": customerId,
      "x-api-key": apiKey,
      "grpc-timeout": "60S",
      "x-source": "react-chatbot"
    }
  };

  const result = await axios.post(url, body, headers);

  const status = result["data"]["responseSet"][0]["status"];
  if (status.length > 0 && status[0]["code"] === "UNAUTHORIZED") {
    console.log("UNAUTHORIZED access; check your API key and customer ID");
  }

  if (summaryMode) {
    const summaryStatus = result["data"]["responseSet"][0]["summary"][0]["status"];
    if (summaryStatus.length > 0 && summaryStatus[0]["code"] === "BAD_REQUEST") {
      throw new Error(
        `BAD REQUEST: Too much text for the summarizer to summarize. Please try reducing the number of search results to summarize, or the context of each result by adjusting the 'summary_num_sentences', and 'summary_num_results' parameters respectively.`
      );
    }
    if (
      summaryStatus.length > 0 &&
      summaryStatus[0]["code"] === "NOT_FOUND" &&
      summaryStatus[0]["statusDetail"] === "Failed to retrieve summarizer."
    ) {
      throw new Error(`BAD REQUEST: summarizer ${summaryPromptName} is invalid for this account.`);
    }
  }

  return result["data"]["responseSet"][0];
};

export const START_TAG = "%START_SNIPPET%";
export const END_TAG = "%END_SNIPPET%";

export const sendSummaryRequest = async (
  {
    filter,
    queryValue,
    language,
    summaryMode,
    rerank,
    rerankNumResults,
    rerankerId,
    rerankDiversityBias,
    hybridNumWords,
    hybridLambdaShort,
    hybridLambdaLong,
    summaryNumResults,
    summaryNumSentences,
    summaryPromptName,
    customerId,
    corpusId,
    endpoint,
    apiKey,
    chat
  }: Config,
  onStreamUpdate: (
    conversationId: string,
    turnId: string,
    text: string,
    searchResults: Array<DeserializedSearchResult>
  ) => void
) => {
  const lambda =
    typeof queryValue === "undefined" || queryValue.trim().split(" ").length > hybridNumWords
      ? hybridLambdaLong
      : hybridLambdaShort;
  const corpusKeyList = corpusId.split(",").map((id) => {
    return {
      customerId,
      corpusId: id,
      lexicalInterpolationConfig: {
        lambda: lambda
      },
      metadataFilter: filter ? `doc.source = '${filter}'` : undefined
    };
  });

  const requestBody = JSON.stringify({
    query: [
      {
        query: queryValue,
        start: 0,
        numResults: rerank ? rerankNumResults : 10,
        corpusKey: corpusKeyList,
        contextConfig: {
          sentencesBefore: summaryMode ? summaryNumSentences : 2,
          sentencesAfter: summaryMode ? summaryNumSentences : 2,
          startTag: START_TAG,
          endTag: END_TAG
        },
        ...(summaryMode
          ? {
              summary: [
                {
                  responseLang: language,
                  maxSummarizedResults: summaryNumResults,
                  summarizerPromptName: summaryPromptName,
                  chat: {
                    store: true,
                    conversationId: chat?.conversationId
                  }
                }
              ]
            }
          : {}),
        ...(rerank
          ? {
              rerankingConfig: {
                rerankerId: rerankerId,
                ...(rerankerId === 272725718
                  ? {
                      mmrConfig: {
                        diversityBias: rerankDiversityBias
                      }
                    }
                  : {})
              }
            }
          : {})
      }
    ]
  });

  const requestHeaders = {
    "x-api-key": apiKey,
    "customer-id": customerId,
    "Content-Type": "application/json"
  };

  const answer: string[] = [];

  const stream = await generateStream(requestHeaders, requestBody, endpoint);

  for await (const chunk of stream) {
    try {
      const parts = chunk.split("\n");

      parts.forEach((part) => {
        const dataObj = JSON.parse(part);

        if (!dataObj.result.summary || !dataObj.result.summary.chat) {
          return;
        }

        const conversationId = dataObj.result.summary.chat.conversationId;
        const turnId = dataObj.result.summary.chat.turnId;

        answer.push(dataObj.result.summary?.text ?? "");

        onStreamUpdate(conversationId, turnId, answer.join(""), []);
      });
    } catch (error) {}
  }

  return {};
};

export const generateStream = async (
  requestHeaders: Record<string, string>,
  requestBody: string,
  endpoint: string
): Promise<AsyncIterable<string>> => {
  const response = await fetch(`https://${endpoint}/v1/stream-query`, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody
  });
  if (response.status !== 200) throw new Error(response.status.toString());
  if (!response.body) throw new Error("Response body does not exist");
  return getIterableStream(response.body);
};

export async function* getIterableStream(body: ReadableStream<Uint8Array>): AsyncIterable<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    const decodedChunk = decoder.decode(value, { stream: true });
    yield decodedChunk;
  }
}
