import { ChangeEvent, FormEvent } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../vui";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: () => void;
  placeholder: string;
  buttonLabel: string;
  isDisabled?: boolean;
};

/**
 * The chat window input field and submit button.
 */
export const QueryInput = ({ query, setQuery, onSubmit, placeholder, buttonLabel, isDisabled }: Props) => {
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <VuiFlexContainer alignItems="center">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          size="m"
          value={query}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          placeholder={placeholder}
          autoFocus
          data-testid="corpusSearchInput"
        />
      </VuiFlexItem>

      <VuiFlexItem>
        <VuiButtonPrimary color="primary" size="m" onClick={() => onSubmit()} isDisabled={isDisabled}>
          {buttonLabel}
        </VuiButtonPrimary>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
