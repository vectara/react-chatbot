import { ReactNode } from "react";
type Props = {
    onClose: () => void;
    isOpen?: boolean;
    children?: ReactNode[];
};
export declare const SearchModal: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export {};
