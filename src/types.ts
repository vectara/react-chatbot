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

export type NoneReranker = { type: "none" };

export type CustomerSpecificReranker = {
  type: "customer_reranker";
  reranker_id: string;
};

export type MmrReranker = {
  type: "mmr";
  diversity_bias: number;
};

export type SearchConfiguration = {
  corpora: {
    corpus_key: string;
    metadata_filter?: string;
    lexical_interpolation?: number;
    custom_dimensions?: Record<string, number>;
    semantics?: "default" | "query" | "response";
  }[];
  offset: number;
  limit?: number;
  context_configuration?: {
    characters_before?: number;
    characters_after?: number;
    sentences_before?: number;
    sentences_after?: number;
    start_tag?: string;
    end_tag?: string;
  };
  reranker?: NoneReranker | CustomerSpecificReranker | MmrReranker;
};

export type NoneCitations = {
  style: "none";
};

export type NumericCitations = {
  style: "numeric";
};

export type HtmlCitations = {
  style: "html";
  url_pattern: string;
  text_pattern: string;
};

export type MarkdownCitations = {
  style: "markdown";
  url_pattern: string;
  text_pattern: string;
};

export type GenerationConfiguration = {
  prompt_name?: string;
  max_used_search_results?: number;
  prompt_text?: string;
  max_response_characters?: number;
  response_language?: SummaryLanguage;
  model_parameters?: {
    max_tokens: number;
    temperature: number;
    frequency_penalty: number;
    presence_penalty: number;
  };
  citations?: NoneCitations | NumericCitations | HtmlCitations | MarkdownCitations;
  enable_factual_consistency_score?: boolean;
};

export type ChatConfiguration = {
  store?: boolean;
  conversation_id?: string;
};

export type ChatQueryBody = {
  query: string;
  search: SearchConfiguration;
  stream_response?: boolean;
  generation?: GenerationConfiguration;
  chat?: ChatConfiguration;
};

export type ChatQueryRequestHeaders = {
  ["customer-id"]: string;
  ["Content-Type"]: string;
  ["x-api-key"]?: string;
  ["Authorization"]?: string;
};

export type ChatQueryResponse = {
  chat_id: string;
  turn_id: string;
  answer: string;
  search_results: SearchResult[];
  factual_consistency_score: number;
  response_language: string;
  rendered_prompt: string;
  rephrased_query: string
}

export type RerankerId = 272725717 | 272725719 | 272725718
export const mmrRerankerId = 272725718;
export const DEFAULT_DOMAIN = "https://api.vectara.io";

export const START_TAG = "%START_SNIPPET%";
export const END_TAG = "%END_SNIPPET%";