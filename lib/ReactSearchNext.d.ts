import { ReactNode } from "react";
import { Props } from "types";
/**
 * An implementation of the ReactSearch component for NextJs.
 * For NextJs, the ReactSearch child component is imported and rendered via useEffect.
 * Doing it this way guarantees that the component is only rendered on the client, avoiding server-side errors.
 */
export declare const ReactSearchNext: (props: Props) => ReactNode;
