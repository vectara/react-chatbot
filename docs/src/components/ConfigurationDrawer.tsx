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
  VuiTextArea
} from "../ui";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  corpusIds: string[];
  onUpdateCorpusIds: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customerId: string;
  onUpdateCustomerId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  apiKey: string;
  onUpdateApiKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onUpdateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onUpdatePlaceholder: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emptyMessagesContent: string;
  onUpdateEmptyMessagesContent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const ConfigurationDrawer = ({
  isOpen,
  onClose,
  corpusIds,
  onUpdateCorpusIds,
  customerId,
  onUpdateCustomerId,
  apiKey,
  onUpdateApiKey,
  title,
  onUpdateTitle,
  placeholder,
  onUpdatePlaceholder,
  emptyMessagesContent,
  onUpdateEmptyMessagesContent
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

      <VuiSpacer size="s" />

      <VuiFormGroup label="Customer ID" labelFor="customerId">
        <VuiTextInput value={customerId} onChange={onUpdateCustomerId} />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Corpus IDs (comma-separated)" labelFor="corpusId">
        <VuiTextInput value={corpusIds.join(",")} onChange={onUpdateCorpusIds} />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="API key" labelFor="apiKey">
        <VuiTextInput value={apiKey} onChange={onUpdateApiKey} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3 className="header">Customize appearance</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Title text" labelFor="titleText">
        <VuiTextInput value={title} onChange={onUpdateTitle} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Placeholder text" labelFor="placeholderText">
        <VuiTextInput value={placeholder} onChange={onUpdatePlaceholder} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Empty messages content (JSX)" labelFor="emptyMessagesContent">
        <VuiTextArea value={emptyMessagesContent} onChange={onUpdateEmptyMessagesContent} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiButtonPrimary color="primary" onClick={onClose}>
        Close
      </VuiButtonPrimary>
    </VuiDrawer>
  );
};
