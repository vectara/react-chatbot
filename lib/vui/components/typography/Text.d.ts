import { ReactNode } from "react";
import { TEXT_SIZE } from "./types";
declare const TEXT_ALIGN: readonly ["left", "center", "right"];
type Props = {
    className?: string;
    id?: string;
    children?: ReactNode;
    size?: (typeof TEXT_SIZE)[number];
    align?: (typeof TEXT_ALIGN)[number];
    truncate?: boolean;
};
export declare const VuiText: ({ children, className, id, truncate, size, align, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
