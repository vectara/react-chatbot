import { ChangeEvent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { BiLogoGithub } from "react-icons/bi";
import JsxParser from "react-jsx-parser";
import { ReactChatbot, SummaryLanguage, DEFAULT_SUMMARIZER, DEFAULT_RERANKER_ID } from "@vectara/react-chatbot";
import {
  VuiAppContent,
  VuiAppHeader,
  VuiAppLayout,
  VuiButtonSecondary,
  VuiCode,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiIconButton,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "./ui";
import { HeaderLogo } from "./components/HeaderLogo";
import { ConfigurationDrawer } from "components/ConfigurationDrawer";
import "./ui/_index.scss";
import "./index.scss";
import {RerankerIds} from "../../src/types";

const formatStringProp = (value?: string) => {
  if (!value) {
    return;
  }

  return value.match('"') ? `'${value}'` : `"${value}"`;
};

const generateCodeSnippet = (
  customerId?: string,
  corpusIds?: string[],
  apiKey?: string,
  title?: string,
  placeholder?: string,
  inputSize?: string,
  emptyStateDisplay?: string,
  isStreamingEnabled?: boolean,
  language?: SummaryLanguage,
  exampleQuestions?: string,
  rerankerId?: RerankerIds
) => {
  const props = [
    `customerId="${customerId === "" ? "<Your Vectara customer ID>" : customerId}"`,
    `corpusIds=${
      corpusIds?.length === 0 ? '"<Your Vectara corpus IDs>"' : `{["${corpusIds?.join('","').replace(/\s/g, "")}"]}`
    }`,
    `apiKey="${apiKey === "" ? "<Your Vectara API key>" : apiKey}"`
  ];

  if (title) {
    props.push(`title=${formatStringProp(title)}`);
  }

  if (placeholder) {
    props.push(`placeholder=${formatStringProp(placeholder)}`);
  }

  if (exampleQuestions) {
    props.push(
      `exampleQuestions={[${exampleQuestions
        .split(",")
        .map((value) => formatStringProp(value.trim()))
        .join(", ")}]}`
    );
  }

  if (inputSize) {
    props.push(`inputSize="${inputSize}"`);
  }

  if (emptyStateDisplay) {
    props.push(`emptyStateDisplay={${emptyStateDisplay.replace(/\n/g, "").replace(/\s+/g, " ")}}`);
  }

  props.push(`enableStreaming={${isStreamingEnabled}}`);

  props.push(`language="${language}"`);
  props.push(`rerankerId=${rerankerId}`);

  props.push(`isInitiallyOpen={ /* (optional) true, if the component should be initially opened */ }`);
  props.push(`zIndex={ /* (optional) number representing the z-index the component should have */ }`);

  return `import { ReactChatbot } from "@vectara/react-chatbot";

export const App = () => (
  <div>
    <ReactChatbot
      ${props.join("\n      ")}
    />
  </div>
);`;
};

const DEFAULT_CORPUS_IDS = ["1"];
const DEFAULT_CUSTOMER_ID = "1366999410";
const DEFAULT_API_KEY = "zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA";
const DEFAULT_TITLE = "Vectara Docs Chatbot";
const DEFAULT_PLACEHOLDER = 'Try "What is Vectara?" or "How does RAG work?"';

const App = () => {
  const [isConfigurationDrawerOpen, setIsConfigurationDrawerOpen] = useState(false);
  const [isChatbotForcedOpen, setIsChatbotForcedOpen] = useState(true);
  const [corpusIds, setCorpusIds] = useState<string[]>([]);
  const [customerId, setCustomerId] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [title, setTitle] = useState<string>(DEFAULT_TITLE);
  const [placeholder, setPlaceholder] = useState<string>(DEFAULT_PLACEHOLDER);
  const [inputSize, setInputSize] = useState<"large" | "medium">("large");
  const [isStreamingEnabled, setIsStreamingEnabled] = useState<boolean>(true);
  const [language, setLanguage] = useState<SummaryLanguage>("eng");
  const [emptyStateJsx, setEmptyStateJsx] = useState<string>("");
  const [exampleQuestions, setExampleQuestions] = useState<string>("What is Vectara?, How does RAG work?");
  const [enableFactualConsistencyScore, setEnableFactualConsistencyScore] = useState<boolean>(false);
  const [summaryPromptName, setSummaryPromptName] = useState<string>(DEFAULT_SUMMARIZER);
  const [rerankerId, setRerankerId] = useState<RerankerIds>(DEFAULT_RERANKER_ID);

  const onUpdateCorpusIds = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.trim();

    if (sanitizedValue === "") {
      setCorpusIds([]);
      return;
    }
    setCorpusIds(sanitizedValue.split(","));
  }, []);

  const onUpdateCustomerId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCustomerId(e.target.value);
  }, []);

  const onUpdateApiKey = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  }, []);

  const onUpdateTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onUpdatePlaceholder = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(e.target.value);
  }, []);

  const onUpdateEmptyMessagesContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmptyStateJsx(e.target.value);
  }, []);

  const onUpdateExampleQuestions = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setExampleQuestions(e.target.value);
  }, []);

  const CustomEmptyStateDisplay = useCallback(() => {
    return (
      // @ts-ignore
      <JsxParser jsx={emptyStateJsx} />
    );
  }, [emptyStateJsx]);

  const parsedExampleQuestions = exampleQuestions && exampleQuestions.split(",");

  return (
    <>
      <VuiAppHeader
        left={
          <VuiFlexContainer spacing="m" alignItems="center">
            <VuiFlexItem grow={false} shrink={false}>
              <HeaderLogo />
            </VuiFlexItem>

            <VuiFlexItem grow={false} shrink={false}>
              <VuiTitle size="xs">
                <h1>
                  <strong>Vectara React-Chatbot</strong>
                </h1>
              </VuiTitle>
            </VuiFlexItem>
          </VuiFlexContainer>
        }
        right={
          <VuiIconButton
            isAnchor
            href="https://github.com/vectara/react-chat"
            target="_blank"
            color="neutral"
            size="l"
            icon={
              <VuiIcon>
                <BiLogoGithub />
              </VuiIcon>
            }
          />
        }
      />

      <VuiAppLayout>
        <VuiAppContent className="appExampleContent" padding="xl">
          <div className="content">
            <VuiTitle size="l">
              <h1>Vectara React-Chatbot</h1>
            </VuiTitle>
            <VuiSpacer size="m" />
            <VuiText>
              <p>React-Chatbot instantly adds a Vectara-powered chatbot to your React applications.</p>
            </VuiText>
            <VuiSpacer size="m" />

            {/**
             * Here we ensure that if the field is blank, we use the default props that point to the docs page.
             * This ensures that we don't voluntarily display the docs corpus details in the text fields.
             */}
            <ReactChatbot
              corpusIds={corpusIds.length === 0 ? DEFAULT_CORPUS_IDS : corpusIds}
              customerId={customerId === "" ? DEFAULT_CUSTOMER_ID : customerId}
              apiKey={apiKey === "" ? DEFAULT_API_KEY : apiKey}
              title={title === "" ? undefined : title}
              placeholder={placeholder}
              inputSize={inputSize}
              exampleQuestions={parsedExampleQuestions}
              emptyStateDisplay={emptyStateJsx === "" ? undefined : <CustomEmptyStateDisplay />}
              isInitiallyOpen={isChatbotForcedOpen}
              zIndex={9}
              enableStreaming={isStreamingEnabled}
              language={language}
              enableFactualConsistencyScore={enableFactualConsistencyScore}
              summaryPromptName={summaryPromptName}
              rerankerId={rerankerId}
            />

            <VuiSpacer size="m" />
            <VuiButtonSecondary
              color="primary"
              onClick={() => {
                setIsChatbotForcedOpen(false);
                setIsConfigurationDrawerOpen(true);
              }}
            >
              Edit configuration
            </VuiButtonSecondary>
            <VuiSpacer size="xxl" />
            <VuiTitle size="m">
              <h2>Use it in your code</h2>
            </VuiTitle>
            <VuiSpacer size="m" />
            <VuiText>
              <p>
                For help,{" "}
                <VuiLink isAnchor href="https://github.com/vectara/react-chatbot">
                  read the docs.
                </VuiLink>
              </p>
            </VuiText>
            <VuiSpacer size="m" />
            <VuiCode>npm install @vectara/react-chatbot</VuiCode>
            <VuiSpacer size="s" />

            <VuiCode language="tsx">
              {generateCodeSnippet(
                customerId,
                corpusIds,
                apiKey,
                title,
                placeholder,
                inputSize,
                emptyStateJsx,
                isStreamingEnabled,
                language,
                exampleQuestions,
                rerankerId
              )}
            </VuiCode>

            <VuiSpacer size="xxl" />
            <VuiTitle size="m">
              <h2>Create your own view</h2>
            </VuiTitle>
            <VuiSpacer size="m" />
            <VuiText>
              <p>
                React-Chatbot also exposes a useChat hook that sends and receives data to/from the chat API. This is
                perfect for rolling your own components that are powered by Vectara's chat functionality.
              </p>
              <p>Check out the example below.</p>
            </VuiText>
            <VuiSpacer size="s" />

            <VuiCode language="tsx">
              {`
import { useChat } from "@vectara/react-chatbot/lib/useChat";

export const App = () => {
  const {
    sendMessage,
    activeMessage,
    messageHistory,
    isLoading,
    isStreamingResponse,
    hasError
    startNewConversation
  } = useChat({
    customerId: DEFAULT_CUSTOMER_ID,
    corpusIds: DEFAULT_CORPUS_IDS,
    apiKey: DEFAULT_API_KEY,
    enableStreaming: true, // Enable streaming, false otherwise. Defaults to true.
    language: "fra" // Response language. Defaults to "eng" for English.
  });

  /* You can pass the values returned by the hook to your custom components as props, or use them
  however you wish. */
};
`}
            </VuiCode>

            <VuiSpacer size="m" />
            <VuiText>
              <p></p>
              <p>The hook returns:</p>
              <ul>
                <li>sendMessage - a function that sends a string to the Chat API endpoint</li>
                <li>activeMessage - the current message awaiting a response from the platform</li>
                <li>messageHistory - an array of objects representing messages from the entire conversation</li>
                <li>isLoading - a boolean value indicating whether or not a chat message request is pending</li>
                <li>
                  isStreamingResponse - a boolean value indicating whether or not a response is currently being streamed
                  to the browser (only available if streaming is enabled)
                </li>
                <li>
                  hasError - a boolean value indicating whether or not the previous message request returned an error
                </li>
                <li>startNewConversation - a function that resets the conversational context</li>
              </ul>
            </VuiText>
            <VuiSpacer size="m" />
            <VuiText>
              For more details, including return value types,{" "}
              <VuiLink isAnchor href="https://github.com/vectara/react-chatbot">
                read the docs.
              </VuiLink>
            </VuiText>

            <ConfigurationDrawer
              isOpen={isConfigurationDrawerOpen}
              onClose={() => setIsConfigurationDrawerOpen(false)}
              corpusIds={corpusIds}
              onUpdateCorpusIds={onUpdateCorpusIds}
              customerId={customerId}
              onUpdateCustomerId={onUpdateCustomerId}
              apiKey={apiKey}
              onUpdateApiKey={onUpdateApiKey}
              title={title}
              onUpdateTitle={onUpdateTitle}
              placeholder={placeholder}
              onUpdatePlaceholder={onUpdatePlaceholder}
              inputSize={inputSize}
              onUpdateInputSize={setInputSize}
              emptyMessagesContent={emptyStateJsx}
              onUpdateEmptyMessagesContent={onUpdateEmptyMessagesContent}
              isStreamingEnabled={isStreamingEnabled}
              onUpdateIsStreamingEnabled={setIsStreamingEnabled}
              language={language}
              onUpdateLanguage={setLanguage}
              exampleQuestions={exampleQuestions}
              onUpdateExampleQuestions={onUpdateExampleQuestions}
              enableFactualConsistencyScore={enableFactualConsistencyScore}
              onUpdateEnableFactualConsistencyScore={setEnableFactualConsistencyScore}
              summaryPromptName={summaryPromptName}
              onUpdateSummaryPromptName={setSummaryPromptName}
              rerankerId={rerankerId}
              onUpdateRerankerId={setRerankerId}
            />
          </div>
        </VuiAppContent>
      </VuiAppLayout>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
