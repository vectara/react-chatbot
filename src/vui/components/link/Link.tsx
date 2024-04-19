import classNames from "classnames";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "./types";

export const VuiLinkInternal = ({ ...rest }: LinkProps) => {
  return <VuiLink {...rest} track />;
};

export const VuiLink = ({ children, href, target, onClick, className, track, isAnchor, ...rest }: LinkProps) => {
  const { createLink } = useVuiContext();

  if (!href) {
    return (
      <button className={classNames("vuiLink", "vuiLink--button", className)} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  const props: {
    target?: LinkProps["target"];
    rel?: string;
    referrerpolicy?: string;
    title?: string;
    id?: string;
    role?: string;
  } = { ...rest, ...getTrackingProps(track) };

  if (target === "_blank") {
    props.target = target;
  }

  if (isAnchor) {
    return (
      <a className={classNames("vuiLink", className)} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return createLink({
    className: classNames("vuiLink", className),
    href,
    onClick,
    children,
    ...props
  });
};
