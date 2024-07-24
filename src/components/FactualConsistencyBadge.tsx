import { VuiBadge, VuiFlexContainer, VuiLink, VuiSpinner, VuiText } from "../vui";

interface Props {
  score?: number;
}

export const FactualConsistencyBadge = ({ score }: Props) => {
  let badge;

  if (score === undefined) {
    badge = <VuiBadge color="accent">Calculating Factual Consistency Score…</VuiBadge>;
  } else {
    const sanitizedScore = parseFloat(score.toFixed(2));
    let badgeColor = "neutral";

    if (sanitizedScore === 0) {
      badgeColor = "danger";
    } else if (sanitizedScore === 1) {
      badgeColor = "success";
    }

    badge = (
        <VuiBadge color={badgeColor as "neutral" | "success" | "danger"}>
          Factual Consistency Score: {sanitizedScore}
        </VuiBadge>
    );
  }

  return (
      <VuiFlexContainer alignItems="center" data-testid="factualConsistencyBadge">
        {score === undefined && <VuiSpinner size="s" />}

        {badge}

        <VuiText size="xs">
          <p>
            <VuiLink
                href="https://docs.vectara.com/docs/api-reference/search-apis/search?#factual-consistency-score"
                target="_blank"
            >
              What's this?
            </VuiLink>
          </p>
        </VuiText>
      </VuiFlexContainer>
  );
};