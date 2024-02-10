export type SearchResult = {
  title?: string;
  url?: string;
  date?: string;
  snippet: {
    pre: string;
    text: string;
    post: string;
  };
};

export type ChatRequest = {
  chatQuery: string;
  chatHistory: {
    question: string;
    answer: string;
  }[];
  language: string;
  promptName: string;
};

export type ChatResponse = {
  result: {
    results: SearchResult[];
    question: string;
    query: string;
    answer: string;
  };
  status: {
    code: number;
    message: string;
  };
};

export const sendSearchRequest = async (
  chatRequest: ChatRequest,
  apiBaseUrl: string,
  promptName: string
): Promise<ChatResponse> => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  let url = `${apiBaseUrl}/chat`;
  if (chatRequest.chatHistory.length > 50) {
    chatRequest.chatHistory = chatRequest.chatHistory.slice(-50);
  }

  const historyToUpload = chatRequest.chatHistory.map((turn) => {
    return {
      question: turn.question,
      answer: turn.answer
    };
  });

  chatRequest.chatHistory = historyToUpload;
  chatRequest.promptName = promptName;

  const result = {}; // await axios.post(url, chatRequest, headers);
  const chatResponse: ChatResponse = result.data as ChatResponse;
  return chatResponse;
};
