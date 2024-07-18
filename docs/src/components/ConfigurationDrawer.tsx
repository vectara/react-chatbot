import {
  VuiButtonPrimary,
  VuiDrawer,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiFormGroup,
  VuiTextInput,
  VuiToggle,
  VuiTextArea,
  VuiRadioButton,
  VuiLabel,
  VuiSelect, VuiNumberInput
} from "../ui";

import { SummaryLanguage } from "@vectara/react-chatbot";

import { SUMMARY_LANGUAGES, RerankerId } from "../../../src/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  corpusKey: string;
  onUpdateCorpusKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customerId: string;
  onUpdateCustomerId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  apiKey: string;
  onUpdateApiKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onUpdateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onUpdatePlaceholder: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputSize: "large" | "medium";
  onUpdateInputSize: (inputSize: "large" | "medium") => void;
  emptyMessagesContent: string;
  onUpdateEmptyMessagesContent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  numberOfSearchResults: number;
  onUpdateNumberOfSearchResults: (isStreamingEnabled: number) => void;
  language: SummaryLanguage;
  onUpdateLanguage: (language: SummaryLanguage) => void;
  exampleQuestions: string;
  onUpdateExampleQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  enableFactualConsistencyScore: boolean;
  onUpdateEnableFactualConsistencyScore: (enableFactualConsistencyScore: boolean) => void;
  summaryPromptName: string;
  onUpdateSummaryPromptName: (summaryPromptName: string) => void;
  rerankerId: RerankerId;
  onUpdateRerankerId: (rerankerId: RerankerId) => void;
  lambda: number;
  onUpdateLambda: (lamda: number) => void;
  isStreamingEnabled: boolean;
  onUpdateIsStreamingEnabled: (isStreamingEnabled: boolean) => void;
};

export const ConfigurationDrawer = ({
  isOpen,
  onClose,
  corpusKey,
  onUpdateCorpusKey,
  customerId,
  onUpdateCustomerId,
  apiKey,
  onUpdateApiKey,
  title,
  onUpdateTitle,
  placeholder,
  onUpdatePlaceholder,
  inputSize,
  onUpdateInputSize,
  emptyMessagesContent,
  onUpdateEmptyMessagesContent,
  numberOfSearchResults,
  onUpdateNumberOfSearchResults,
  language,
  onUpdateLanguage,
  exampleQuestions,
  onUpdateExampleQuestions,
  enableFactualConsistencyScore,
  onUpdateEnableFactualConsistencyScore,
  summaryPromptName,
  onUpdateSummaryPromptName,
  rerankerId,
  onUpdateRerankerId,
  lambda,
  onUpdateLambda,
  isStreamingEnabled,
  onUpdateIsStreamingEnabled,
}: Props) => {
  return (
    <VuiDrawer
      color="primary"
      isOpen={isOpen}
      onClose={onClose}
      title={
        <VuiTitle size="s">
          <h2>Search configuration</h2>
        </VuiTitle>
      }
    >
      <VuiTitle size="s">
        <h3 className="header">Connect to Vectara data</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiText>
        <p>
          <VuiLink isAnchor href="https://github.com/vectara/react-chatbot?tab=readme-ov-file#set-up-your-search-data">
            How to set up your Vectara data
          </VuiLink>
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Customer ID" labelFor="customerId">
        <VuiTextInput value={customerId} onChange={onUpdateCustomerId} />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Corpus Key" labelFor="corpusId">
        <VuiTextInput value={corpusKey} onChange={onUpdateCorpusKey} />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="API key" labelFor="apiKey">
        <VuiTextInput value={apiKey} onChange={onUpdateApiKey} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3 className="header">Customize appearance</h3>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Title text" labelFor="titleText">
        <VuiTextInput value={title} onChange={onUpdateTitle} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Placeholder text" labelFor="placeholderText">
        <VuiTextInput value={placeholder} onChange={onUpdatePlaceholder} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Example questions" labelFor="exampleQuestions">
        <VuiTextInput value={exampleQuestions} onChange={onUpdateExampleQuestions} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiLabel>Enable streaming</VuiLabel>
      <VuiToggle
          onChange={(e) => {
            onUpdateIsStreamingEnabled(e.target.checked);
          }}
          checked={isStreamingEnabled}
      />

      <VuiSpacer size="m" />

      <VuiFormGroup label="Number of search results to summarize" labelFor="numberOfSearchResults">
        <VuiNumberInput value={numberOfSearchResults} onChange={(numberOfSearchResults) => onUpdateNumberOfSearchResults(numberOfSearchResults as number)} step={1} />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Response language" labelFor="responseLanguage">
        <VuiSelect
          value={language}
          onChange={(evt) => {
            onUpdateLanguage(evt.target.value as SummaryLanguage);
          }}
          options={SUMMARY_LANGUAGES.filter((lang) => lang !== "auto").map((lang) => ({
            text: lang,
            value: lang
          }))}
        />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiLabel>Input size</VuiLabel>

      <VuiSpacer size="xs" />

      <VuiRadioButton
        groupName="inputSize"
        label="Large"
        onChange={() => onUpdateInputSize("large")}
        checked={inputSize === "large"}
      />

      <VuiSpacer size="xs" />

      <VuiRadioButton
        groupName="inputSize"
        label="Medium"
        onChange={() => onUpdateInputSize("medium")}
        checked={inputSize === "medium"}
      />

      <VuiSpacer size="m" />

      <VuiFormGroup label="Empty messages content (JSX)" labelFor="emptyMessagesContent">
        <VuiTextArea value={emptyMessagesContent} onChange={onUpdateEmptyMessagesContent} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiLabel>Enable Factual Consistency Score</VuiLabel>

      <VuiSpacer size="xs" />

      <VuiToggle
        onChange={(e) => {
          onUpdateEnableFactualConsistencyScore(e.target.checked);
        }}
        checked={enableFactualConsistencyScore}
      />

      <VuiSpacer size="m" />

      <VuiFormGroup label="Summary prompt name" labelFor="summaryPromptName">
        <VuiTextInput value={summaryPromptName} onChange={(e) => onUpdateSummaryPromptName(e.target.value)} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Reranker ID" labelFor="rerankerId">
        <VuiNumberInput value={rerankerId} onChange={(rerankerId) => onUpdateRerankerId(rerankerId as RerankerId)} />
      </VuiFormGroup>

      <VuiSpacer size="m" />

      <VuiFormGroup label="Lambda" labelFor="lambda">
        <VuiNumberInput value={lambda} onChange={(lambda) => onUpdateLambda(lambda as number)} max={1} min={0} step={0.001} />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiButtonPrimary color="primary" onClick={onClose}>
        Close
      </VuiButtonPrimary>
    </VuiDrawer>
  );
};
