import { ReactElement } from "react";
import { TITLE_SIZE } from "./types";
declare const TEXT_ALIGN: readonly ["left", "center", "right"];
interface Props {
    children: ReactElement<any>;
    className?: string;
    size: (typeof TITLE_SIZE)[number];
    align?: (typeof TEXT_ALIGN)[number];
}
export declare const VuiTitle: ({ children, className, size, align, ...rest }: Props) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
