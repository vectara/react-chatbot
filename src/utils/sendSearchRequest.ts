import { SummaryLanguage } from "../types";

type Config = {
  customerId: string;
  corpusId: string;
  endpoint: string;
  apiKey: string;
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
  enableFactualConsistencyScore?: boolean;
  chat?: {
    conversationId?: string;
  };
};

/**
 * Send a request to the query API.
 */
export const sendSearchRequest = async ({
  customerId,
  corpusId,
  endpoint,
  apiKey,
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
  enableFactualConsistencyScore,
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
                  factualConsistencyScore: enableFactualConsistencyScore,
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
    "Content-Type": "application/json",
    Accept: "application/json",
    "customer-id": customerId,
    "x-api-key": apiKey,
    "grpc-timeout": "60S",
    "x-source": "react-chatbot"
  };
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });

  if (response.status !== 200) throw new Error(response.status.toString());

  const result = await response.json();
  const status = result["responseSet"][0]["status"];
  if (status.length > 0 && status[0]["code"] === "UNAUTHORIZED") {
    console.log("UNAUTHORIZED access; check your API key and customer ID");
  }

  if (summaryMode) {
    const summaryStatus = result["responseSet"][0]["summary"][0]["status"];
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

  return result["responseSet"][0];
};

export const START_TAG = "%START_SNIPPET%";
export const END_TAG = "%END_SNIPPET%";
