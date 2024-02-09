import { ChangeEventHandler, FormEventHandler, KeyboardEventHandler } from "react";
type Props = {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    autoFocus?: boolean;
    onSubmit?: FormEventHandler;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};
export declare const SearchInput: ({ value, onChange, placeholder, autoFocus, onSubmit, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
