import { VuiGrid, VuiSpacer, VuiText, VuiTextColor } from "../../vui";
import { ExampleQuestion } from "./ExampleQuestion";
import { DefaultEmptyPrompt } from "./DefaultEmptyPrompt";

type Props = {
  exampleQuestions: string[];
  onSubmitChat: (query: string) => void;
};

export const ExampleQuestions = ({ exampleQuestions, onSubmitChat }: Props) => {
  const hasExampleQuestions = exampleQuestions.length > 0;
  if (!hasExampleQuestions) return <DefaultEmptyPrompt />;

  return (
    <div className="vrcbExampleQuestionsContainer">
      <VuiText>
        <p>
          <VuiTextColor color="subdued">Try out these example questions</VuiTextColor>
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiGrid columns={3}>
        {exampleQuestions.map((exampleQuestion) => (
          <ExampleQuestion
            key={exampleQuestion}
            onClick={() => onSubmitChat(exampleQuestion)}
            title={exampleQuestion}
          />
        ))}
      </VuiGrid>
    </div>
  );
};
