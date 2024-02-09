import classNames from "classnames";
import { ReactElement, forwardRef } from "react";
import { Link } from "react-router-dom";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { Props as LinkProps } from "../link/Link";
import { ButtonColor, BUTTON_SIZE } from "./types";
import { createButtonIcon } from "./createButtonIcon";

type Props = {
  className?: string;
  icon: ReactElement;
  color?: ButtonColor;
  size?: (typeof BUTTON_SIZE)[number];
  onClick?: () => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  tabIndex?: number;
  isAnchor?: boolean;
};

export const VuiIconButton = forwardRef<HTMLButtonElement | null, Props>(
  (
    {
      className,
      icon,
      color = "primary",
      size = "m",
      onClick,
      href,
      target,
      track,
      tabIndex,
      isAnchor,
      ...rest
    }: Props,
    ref
  ) => {
    const props = {
      className: classNames("vuiIconButton", className, `vuiIconButton--${color}`, `vuiIconButton--${size}`),
      onClick,
      tabIndex,
      ...rest
    };

    const buttonIcon = createButtonIcon(icon, size, color);

    if (href) {
      // Uncouple from react-router.
      if (isAnchor) {
        return (
          // @ts-expect-error HTMLAnchorElement is not HTMLButtonElement.
          <a href={href} target={target} {...props} {...getTrackingProps(track)} ref={ref}>
            {buttonIcon}
          </a>
        );
      }

      return (
        // @ts-expect-error Type 'string' is not assignable to type 'HTMLAttributeReferrerPolicy | undefined'.
        <Link to={href} target={target} {...props} {...getTrackingProps(track)}>
          <button ref={ref}>{buttonIcon}</button>
        </Link>
      );
    }

    return (
      <button {...props} ref={ref}>
        {buttonIcon}
      </button>
    );
  }
);
