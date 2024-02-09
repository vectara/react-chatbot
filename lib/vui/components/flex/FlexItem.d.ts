import { ReactNode } from "react";
declare const GROW: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
declare const SHRINK: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
declare const BASIS: readonly ["auto", "content", "fill", "maxContent", "minContent", "none"];
declare const alignItemsToClassNameMap: {
    readonly baseline: "vuiFlexItem--alignItemsBaseline";
    readonly center: "vuiFlexItem--alignItemsCenter";
    readonly end: "vuiFlexItem--alignItemsEnd";
    readonly start: "vuiFlexItem--alignItemsStart";
    readonly stretch: "vuiFlexItem--alignItemsStretch";
};
type Props = {
    children?: ReactNode;
    grow?: (typeof GROW)[number] | boolean;
    shrink?: (typeof SHRINK)[number] | boolean;
    basis?: (typeof BASIS)[number];
    alignItems?: keyof typeof alignItemsToClassNameMap;
    className?: string;
    truncate?: boolean;
};
export declare const VuiFlexItem: ({ children, grow, shrink, basis, alignItems, className, truncate, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
