import classNames from "classnames";
import { VuiFlexContainer, VuiFlexItem, VuiSpinner, VuiText, VuiTextColor, VuiSpacer } from "../../vui";
import { ChatTurnType } from "./types";

type Props = {
  turn: ChatTurnType;
  onRetry: (turn: ChatTurnType) => void;
};

export const ChatTurn = ({ turn, onRetry }: Props) => {
  const turnClasses = classNames("chatQuestion", {
    "chatQuestion--error": !turn.isLoading && turn.error
  });

  return (
    <div className="chatTurn">
      <div className={turnClasses}>
        <h3>{turn.question}</h3>
      </div>

      <div className="chatAnswer">
        {turn.isLoading ? (
          <VuiFlexContainer alignItems="center" spacing="xs">
            <VuiFlexItem grow={false}>
              <VuiSpinner size="xs" />
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiText>
                <p>
                  <VuiTextColor color="subdued">Thinking…</VuiTextColor>
                </p>
              </VuiText>
            </VuiFlexItem>
          </VuiFlexContainer>
        ) : turn.error ? (
          <>
            <VuiText>
              <p>
                <VuiTextColor color="subdued">{turn.error?.message}</VuiTextColor>
              </p>
            </VuiText>

            <VuiSpacer size="s" />

            <button onClick={() => onRetry(turn)}>Ask again</button>
          </>
        ) : (
          turn.answer
        )}
      </div>
    </div>
  );
};
