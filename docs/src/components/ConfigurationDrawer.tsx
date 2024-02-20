import {
  VuiButtonPrimary,
  VuiDrawer,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiFormGroup,
  VuiTextInput,
  VuiToggle
} from "../ui";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  corpusIds: string[];
  onUpdateCorpusId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customerId: string;
  onUpdateCustomerId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  apiKey: string;
  onUpdateApiKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onUpdatePlaceholder: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ConfigurationDrawer = ({
  isOpen,
  setIsOpen,
  corpusIds,
  onUpdateCorpusId,
  customerId,
  onUpdateCustomerId,
  apiKey,
  onUpdateApiKey,
  placeholder,
  onUpdatePlaceholder
}: Props) => {
  return (
    <VuiDrawer
      color="primary"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
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
          <VuiLink isAnchor href="https://github.com/vectara/react-search?tab=readme-ov-file#set-up-your-search-data">
            How to set up your Vectara data
          </VuiLink>
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Customer ID" labelFor="customerId">
        <VuiTextInput value={customerId} onChange={onUpdateCustomerId} />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Corpus ID" labelFor="corpusId">
        <VuiTextInput value={corpusIds.join(",")} onChange={onUpdateCorpusId} />
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

      <VuiFormGroup label="Placeholder text" labelFor="placeholderText">
        <VuiTextInput value={placeholder} onChange={onUpdatePlaceholder} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(false)}>
        Close
      </VuiButtonPrimary>
    </VuiDrawer>
  );
};
