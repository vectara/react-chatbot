import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { LinkProps } from "../link/types";
import { VuiContextProvider } from "./Context";

const linkProvider = (linkConfig: LinkProps) => {
  const { className, href, onClick, children, ...rest } = linkConfig;

  return (
    <Link className={className} to={href ?? ""} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
};

export const renderWithContext = (children: React.ReactNode, ...rest: any): ReturnType<typeof render> => {
  return render(<VuiContextProvider linkProvider={linkProvider}>{children}</VuiContextProvider>, ...rest);
};
