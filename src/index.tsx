import React, { FC, ReactNode, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import { ChatView } from "components/ChatView";

// @ts-ignore
import cssText from "index.scss";

export interface Props {
  // Vectara customer ID
  customerId: string;

  // Vectara API key
  apiKey: string;

  // Vectara corpus IDs
  corpusIds: string[];

  // Title to be shown in the UI header
  title?: string;

  // Text to be shown when the input field has no text
  placeholder?: string;

  // Size of input. Defaults to "large".
  inputSize?: "large" | "medium";

  // Content to render into the messages display when there are no messages to show
  emptyStateDisplay?: ReactNode;

  // Used to explicitly configure the component's initial open/closed state.
  isInitiallyOpen?: boolean;

  // Used to control the component's z-index. Defaults to 9999.
  zIndex?: number;
}

/**
 * A client-side chat component that queries specific corpora with a user-provided message.
 */
const ReactChatbotInternal: FC<Props> = ({
  customerId,
  apiKey,
  corpusIds,
  title,
  placeholder,
  inputSize,
  emptyStateDisplay,
  isInitiallyOpen,
  zIndex
}) => {
  return (
    <div>
      <ChatView
        customerId={customerId}
        corpusIds={corpusIds}
        apiKey={apiKey}
        title={title}
        placeholder={placeholder}
        inputSize={inputSize}
        emptyStateDisplay={emptyStateDisplay}
        isInitiallyOpen={isInitiallyOpen}
        zIndex={zIndex}
      />
    </div>
  );
};

class ReactChatbotWebComponent extends HTMLElement {
  sheet!: CSSStyleSheet;
  sr!: ShadowRoot;
  mountPoint!: HTMLDivElement;

  // Props
  customerId!: string;
  corpusIds!: string[];
  apiKey!: string;
  title!: string;
  placeholder!: string;
  isInitiallyOpen!: boolean;
  zIndex!: number;
  emptyStateDisplay!: ReactNode;

  static get observedAttributes() {
    return [
      "customerid",
      "corpusids",
      "apikey",
      "title",
      "placeholder",
      "inputsize",
      "isinitiallyopen",
      "zindex",
      "emptystatedisplayupdatetime"
    ];
  }

  constructor() {
    super();
    this.sr = this.attachShadow({ mode: "open" });
    this.sheet = new CSSStyleSheet();
    this.sheet.replaceSync(cssText);
    this.sr.adoptedStyleSheets = [this.sheet];
    this.mountPoint = document.createElement("div");
    this.sr.appendChild(this.mountPoint);
  }

  public setEmptyStateDisplay(emptyStateDisplay: ReactNode) {
    this.emptyStateDisplay = emptyStateDisplay;

    // In order to trigger a re-render with the updated property,
    // we set an update timestamp as an attribute on this web component.
    this.setAttribute("emptystatedisplayupdatetime", Date.now().toString());
  }

  public connectedCallback() {
    const customerId = this.getAttribute("customerId") ?? "";
    const corpusIds = (this.getAttribute("corpusIds") ?? "").split(" ");
    const apiKey = this.getAttribute("apiKey") ?? "";
    const title = this.getAttribute("title") ?? undefined;
    const placeholder = this.getAttribute("placeholder") ?? undefined;
    const inputSize = this.getAttribute("inputSize") ?? undefined;
    const isInitiallyOpen = this.getAttribute("isInitiallyOpen") === "true";
    const emptyStateDisplay = this.emptyStateDisplay ?? undefined;
    const zIndex = this.getAttribute("zIndex") !== null ? parseInt(this.getAttribute("zIndex")!) : undefined;

    ReactDOM.render(
      <>
        <ReactChatbotInternal
          customerId={customerId}
          corpusIds={corpusIds}
          apiKey={apiKey}
          title={title}
          placeholder={placeholder}
          inputSize={inputSize as "large" | "medium" | undefined}
          emptyStateDisplay={emptyStateDisplay}
          isInitiallyOpen={isInitiallyOpen}
          zIndex={zIndex}
        />
      </>,
      this.mountPoint
    );
  }

  attributeChangedCallback() {
    this.connectedCallback();
  }
}

window.customElements.get("react-chatbot") || window.customElements.define("react-chatbot", ReactChatbotWebComponent);

export const ReactChatbot = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // emptyStateDisplay is an object prop so we need to handle it differently
    // If provided, we use a custom method to set it as property of the ReactChatbotWebComponent instance.
    if (props.emptyStateDisplay) {
      // @ts-ignore
      (ref.current as ReactChatbotWebComponent).setEmptyStateDisplay(props.emptyStateDisplay);
    }
  }, [props]);

  const typedProps = props as Record<string, any>;
  const updatedProps = Object.keys(props).reduce((acc: Record<string, string>, propName: string) => {
    if (propName === "emptyStateDisplay") return acc;
    if (propName === "corpusIds") {
      acc[propName] = typedProps["corpusIds"].join(" ");
    } else {
      acc[propName] = typedProps[propName];
    }

    return acc;
  }, {});

  // @ts-ignore
  return <react-chatbot ref={ref} {...updatedProps} />;
};
