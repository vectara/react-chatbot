import { ReactNode } from "react";

export type LinkProps = {
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
  tabIndex?: number;
  "data-testid"?: string;
};
