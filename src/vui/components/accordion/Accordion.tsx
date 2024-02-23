import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { createId } from "../../utils/createId";
import { ChevronDown, ChevronRight } from "components/Icons";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const VuiAccordion = ({ header, children, isOpen, setIsOpen, ...rest }: Props) => {
  const buttonId = createId();
  const contentId = createId();

  return (
    <>
      <button
        className="vuiAccordionHeader"
        onClick={() => setIsOpen(!isOpen)}
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        {...rest}
      >
        <VuiFlexContainer alignItems="center" justifyContent="start" spacing="xxs">
          <VuiFlexItem grow={false} shrink={false}>
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </VuiFlexItem>

          <VuiFlexItem className="vuiAccordionHeader__title" grow={1}>
            {header}
          </VuiFlexItem>
        </VuiFlexContainer>
      </button>

      {isOpen && (
        <div id={contentId} aria-labelledby={buttonId}>
          {children}
        </div>
      )}
    </>
  );
};
