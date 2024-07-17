export type SearchResult = {
  document_id: string;
  document_metadata: Record<string, unknown>;
  part_metadata: Record<string, unknown>;
  score: number;
  text: string;
};

export type SearchResultWithSnippet = SearchResult & {
  snippet: {
    pre: string;
    text: string;
    post: string;
  };
};



export type DocMetadata = {
  name: string;
  value: string;
};

export type SearchResponse = {
  document: SearchResponseDoc[];
  response: SearchResponseResult[];
  summary: SearchResponseSummary[];
};

type SearchResponseDoc = {
  id: string;
  metadata: DocMetadata[];
};

type SearchResponseResult = {
  corpusKey: {
    corpusId: string;
    customerId: string;
    dim: string[];
  };
  documentIndex: string;
  resultLength: number;
  resultOffset: number;
  score: number;
  text: string;
};

type SearchResponseSummary = {
  text?: string;
  status?: string;
};

export const SUMMARY_LANGUAGES = [
  "auto",
  "eng",
  "deu",
  "fra",
  "zho",
  "kor",
  "ara",
  "rus",
  "tha",
  "nld",
  "ita",
  "por",
  "spa",
  "jpn",
  "pol",
  "tur",
  "heb",
  "vie",
  "ind",
  "ces",
  "ukr",
  "ell",
  "fas",
  "hin",
  "urd",
  "swe",
  "ben",
  "msa",
  "ron"
] as const;

export type SummaryLanguage = (typeof SUMMARY_LANGUAGES)[number];

export type SearchError = {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
  };
};

export type ChatTurn = {
  id: string;
  question: string;
  answer: string;
  results: SearchResultWithSnippet[];
  factualConsistencyScore?: number;
};

export type RerankerId = 272725717 | 272725719 | 272725718
export const mmrRerankerId = 272725718;