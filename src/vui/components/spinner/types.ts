export const SPINNER_COLOR = ["accent", "primary", "success", "danger", "warning", "empty", "dark"] as const;
export const SPINNER_SIZE = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"] as const;

export type SpinnerColor = (typeof SPINNER_COLOR)[number];
