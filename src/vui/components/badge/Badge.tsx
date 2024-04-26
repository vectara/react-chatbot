import { MouseEvent } from "react";
import classNames from "classnames";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";

export const BADGE_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral"] as const;

type Props = {
  children: React.ReactNode;
  className?: string;
  color: (typeof BADGE_COLOR)[number];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
};

export const VuiBadge = ({ children, className, color, onClick, href, target, track, ...rest }: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames(className, "vuiBadge", `vuiBadge--${color}`, {
    "vuiBadge--clickable": onClick ?? href
  });

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children,
      target,
      ...getTrackingProps(track)
    });
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
