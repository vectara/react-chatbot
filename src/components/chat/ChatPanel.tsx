import { VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiTitle } from "../../vui";

type Props = {
  title: React.ReactNode;
  onClose: () => void;
  children?: React.ReactNode;
};

export const ChatPanel = ({ title, onClose, children }: Props) => {
  return (
    <div className="chatPanel">
      <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
        <VuiFlexItem grow={1}>
          <VuiTitle size="s">
            <h3>{title}</h3>
          </VuiTitle>
        </VuiFlexItem>

        <VuiFlexItem shrink={false} grow={false}>
          <button onClick={() => onClose()}>Close</button>
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="s" />

      {children}

      <VuiSpacer size="l" />
    </div>
  );
};
