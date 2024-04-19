import { createContext, useContext, ReactNode } from "react";
import { LinkProps } from "../link/types";

type LinkProvider = (linkConfig: LinkProps) => JSX.Element;
type PathProvider = () => string;

interface VuiContextType {
  createLink: LinkProvider;
  getPath: PathProvider;
  DrawerTitle: keyof JSX.IntrinsicElements;
}

const VuiContext = createContext<VuiContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
  linkProvider?: LinkProvider;
  pathProvider?: PathProvider;
  drawerTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const VuiContextProvider = ({ children, linkProvider, pathProvider, drawerTitle = "h2" }: Props) => {
  const createLink = (linkConfig: LinkProps) => {
    if (linkProvider) return linkProvider(linkConfig);

    const { className, href, onClick, children, ...rest } = linkConfig;

    return (
      <a className={className} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  };

  const getPath = () => {
    return pathProvider ? pathProvider() : window.location.pathname;
  };

  const DrawerTitle = drawerTitle as keyof JSX.IntrinsicElements;

  return <VuiContext.Provider value={{ createLink, getPath, DrawerTitle }}>{children}</VuiContext.Provider>;
};

export const useVuiContext = () => {
  const context = useContext(VuiContext);
  if (context === undefined) {
    throw new Error("useVuiContext must be used within a VuiContextProvider");
  }
  return context;
};
