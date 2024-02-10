import { FC, useEffect, useState } from "react";
import { VuiFormGroup, VuiSpacer, VuiFlexContainer } from "./vui";
import { Select, Chat, CHAT_LANGUAGES, ChatLanguage, ChatStyle, ChatTurnType } from "./components";
import { ChatRequest, ChatResponse, sendSearchRequest } from "./sendSearchRequest";
import { addHistoryItem, deleteHistory, editHistoryItem, retrieveHistory } from "./history";
import { humanizeLanguage } from "./types";
import "./_index.scss";

const DEFAULT_QUERY_API_URL = "https://api.vectara.io/v1/query";

const updateMessageWithError = (index: number, conversation: ChatTurnType[], error: string) => {
  if (conversation[index]) {
    conversation[index].isLoading = false;
    conversation[index].error = {
      message: error
    };
  }
  return [...conversation];
};

const updateMessageWithAnswer = (index: number, conversation: ChatTurnType[], chatTurnData: Partial<ChatTurnType>) => {
  if (conversation[index]) {
    conversation[index].isLoading = false;
    Object.assign(conversation[index], chatTurnData);
  }
  return [...conversation];
};

const handleResponse = (index: number, history: ChatTurnType[], response?: ChatResponse, error?: any) => {
  if (response?.status.code === 200 && response.result) {
    const updatedHistory = updateMessageWithAnswer(index, history, response.result);
    editHistoryItem(index, updatedHistory);
    return updatedHistory;
  } else {
    let errorMessage;
    if (error) {
      if (error?.response) {
        errorMessage = `Request failed with status code ${error?.response.data.status.code} ${error?.response.data.status.message}`;
      } else {
        errorMessage = `An error occurred: ${error?.message}`;
      }
    } else {
      errorMessage = `An error occurred`;
    }
    const updatedHistory = updateMessageWithError(index, history, errorMessage);
    editHistoryItem(index, updatedHistory);
    return updatedHistory;
  }
};

const languageOptions = CHAT_LANGUAGES.map((code) => ({
  text: humanizeLanguage(code),
  value: code
}));

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

  const [chatStyle, setChatStyle] = useState<ChatStyle>("closed");
  const [history, setHistory] = useState<ChatTurnType[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState<ChatLanguage>("eng");

  useEffect(() => {
    setHistory(retrieveHistory());
  }, []);

  const clearHistory = () => {
    setHistory([]);
    deleteHistory();
  };

  useEffect(() => {
    if (!isProcessing) {
      const turnToProcess = history.find((turn) => turn.isLoading === true);

      if (turnToProcess) {
        setIsProcessing(true);
        processChatTurn(turnToProcess)
          .then(() => setIsProcessing(false))
          .catch(() => setIsProcessing(false));
      }
    }
  }, [history, isProcessing]);

  const processChatTurn = async (turn: ChatTurnType) => {
    try {
      const response = await sendSearchRequest(
        {
          chatQuery: turn.question,
          chatHistory: history,
          language: language
        } as ChatRequest,
        apiUrl ?? "DEFAULT_QUERY_API_URL",
        "vectara-summary-ext-v1.3.3"
      );
      setHistory((prev) => handleResponse(prev.indexOf(turn), prev, response));
    } catch (error) {
      setHistory((prev) => handleResponse(prev.indexOf(turn), prev, undefined, error));
    }
  };

  const handleUserInput = (input: string) => {
    const turn: ChatTurnType = {
      question: input,
      language: language,
      isLoading: true
    };
    setHistory(addHistoryItem(turn, history));
  };

  const handleRetry = (turn: ChatTurnType) => {
    setHistory((prev) => {
      const index = prev.indexOf(turn);
      prev[index].isLoading = true;
      prev[index].error = undefined;
      return [...prev];
    });
  };

  const settings = (
    <div>
      <VuiFormGroup label="Language" labelFor="optionsList1" helpText="Select a language.">
        <Select
          id="optionsList1"
          options={languageOptions}
          value={language}
          onChange={(event) => setLanguage(event.target.value as ChatLanguage)}
        />
      </VuiFormGroup>
    </div>
  );

  return (
    <>
      <VuiFlexContainer className="chatView" direction="column" alignItems="center" spacing="none">
        <VuiSpacer size="s" />
        <Chat
          openPrompt={"Chat title"}
          chatStyle={chatStyle}
          setChatStyle={setChatStyle}
          introduction={"Chat introduction"}
          onInput={handleUserInput}
          onRetry={handleRetry}
          onReset={() => clearHistory()}
          conversation={history}
          suggestions={["suggestion 1", "suggestion 2", "suggestion 3"]}
          settings={settings}
        />
      </VuiFlexContainer>
    </>
  );
};
