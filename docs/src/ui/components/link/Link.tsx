import classNames from "classnames";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { getTrackingProps } from "../../utils/getTrackingProps";

export type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: "_blank";
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  track?: boolean;
  // ...rest
  title?: string;
  id?: string;
  role?: string;
  isAnchor?: boolean;
};

export const VuiLinkInternal = ({ ...rest }: Props) => {
  return <VuiLink {...rest} track />;
};

export const VuiLink = ({ children, href, target, onClick, className, track, isAnchor, ...rest }: Props) => {
  if (!href) {
    return (
      <button className={classNames("vuiLink", "vuiLink--button", className)} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  const props: {
    target?: string;
    rel?: string;
    referrerpolicy?: string;
    title?: string;
    id?: string;
    role?: string;
  } = { ...rest, ...getTrackingProps(track) };

  if (target === "_blank") {
    props.target = target;
  }

  // Uncouple from react-router.
  if (isAnchor) {
    return (
      <a className={classNames("vuiLink", className)} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames("vuiLink", className)} to={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};
