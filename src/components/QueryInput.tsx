import { ChangeEvent, FormEvent } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../vui";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: () => void;
  placeholder: string;
  buttonLabel: string;
  isDisabled?: boolean;
  size: "l" | "m";
};

/**
 * The chat window input field and submit button.
 */
export const QueryInput = ({ query, setQuery, onSubmit, placeholder, buttonLabel, isDisabled, size }: Props) => {
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <VuiFlexContainer alignItems="center" spacing="xs">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          size={size}
          value={query}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          placeholder={placeholder}
          autoFocus
          data-testid="queryInput"
        />
      </VuiFlexItem>

      <VuiFlexItem>
        <VuiButtonPrimary color="primary" size={size} onClick={() => onSubmit()} isDisabled={isDisabled}>
          {buttonLabel}
        </VuiButtonPrimary>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
