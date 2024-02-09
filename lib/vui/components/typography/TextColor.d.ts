import { ReactNode } from "react";
import { TextColor } from "./types";
type Props = {
    children?: ReactNode;
    color: TextColor;
    className?: string;
};
export declare const VuiTextColor: ({ children, color, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
