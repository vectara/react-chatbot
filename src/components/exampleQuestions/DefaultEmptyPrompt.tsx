import { VuiFlexContainer, VuiText, VuiTextColor } from "vui";
import { ChatBubbleIcon } from "../Icons";

export const DefaultEmptyPrompt = () => (
  <VuiFlexContainer
    className="vrcbEmptyMessages"
    spacing="none"
    alignItems="center"
    justifyContent="center"
    direction="column"
  >
    <ChatBubbleIcon size="80px" color="#cbcdde" />

    <VuiText>
      <p>
        <VuiTextColor color="subdued">Ask anything.</VuiTextColor>
      </p>
    </VuiText>
  </VuiFlexContainer>
);
