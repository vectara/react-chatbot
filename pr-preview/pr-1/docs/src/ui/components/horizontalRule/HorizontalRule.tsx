import { ButtonColor } from "../button/types";

type Props = {
  color?: ButtonColor;
};

export const VuiHorizontalRule = ({ color = "neutral" }: Props) => {
  return <hr className={`vuiHorizontalRule vuiHorizontalRule--${color}`} />;
};
