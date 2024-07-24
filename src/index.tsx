import { ReactNode, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import { Props, ChatView } from "./components/ChatView";
import type {RerankerId, SummaryLanguage} from "./types";
export type { Props } from "components/ChatView";
export { DEFAULT_SUMMARIZER, DEFAULT_RERANKER_ID, DEFAULT_LAMBDA_VALUE } from "./useChat";

// @ts-ignore
import cssText from "index.scss";

class ReactChatbotWebComponent extends HTMLElement {
  sheet!: CSSStyleSheet;
  sr!: ShadowRoot;
  mountPoint!: HTMLDivElement;

  // References
  emptyStateDisplay!: ReactNode;

  static get observedAttributes() {
    return [
      "customerid",
      "corpuskeys",
      "apikey",
      "title",
      "placeholder",
      "examplequestions",
      "inputsize",
      "isinitiallyopen",
      "zindex",
      "emptystatedisplayupdatetime",
      "numberofsearchresults",
      "language",
      "enablefactualconsistencyscore",
      "summarypromptname",
      "rerankerId",
      "lambda",
      "enablestreaming",
    ];
  }

  constructor() {
    super();
    this.sr = this.attachShadow({ mode: "open" });

    // If the CSSStyleSheet constructor isn't supported, default to creating a style element.
    // We prefer the CSSStyleSheet approach as it's a recommended way to style web components, and growing in support:
    // https://webcomponents.guide/learn/components/styling/
    try {
      this.sheet = new CSSStyleSheet();
      this.sheet.replaceSync(cssText);
      this.sr.adoptedStyleSheets = [this.sheet];
    } catch {
      const styleElement = document.createElement("style");
      styleElement.innerText = cssText;
      this.sr.appendChild(styleElement);
    }

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
    const corpusKeys = (this.getAttribute("corpuskey") ?? "");
    const apiKey = this.getAttribute("apiKey") ?? "";
    const title = this.getAttribute("title") ?? undefined;
    const placeholder = this.getAttribute("placeholder") ?? undefined;
    const rawExampleQuestions = this.getAttribute("exampleQuestions");
    const exampleQuestions = rawExampleQuestions ? rawExampleQuestions.split(",") : undefined;
    const inputSize = this.getAttribute("inputSize") ?? undefined;
    const isInitiallyOpen = this.getAttribute("isInitiallyOpen") === "true";
    const emptyStateDisplay = this.emptyStateDisplay ?? undefined;
    const zIndex = this.getAttribute("zIndex") !== null ? parseInt(this.getAttribute("zIndex")!) : undefined;
    const numberOfSearchResults = parseInt(this.getAttribute("numberofsearchresults")!, 10) ?? 15;
    const language = (this.getAttribute("language") as SummaryLanguage) ?? undefined;
    const enableFactualConsistencyScore = this.getAttribute("enableFactualConsistencyScore") === "true";
    const summaryPromptName = this.getAttribute("summaryPromptName") ?? undefined;
    const rerankerId = this.getAttribute("rerankerId") !== null ? parseInt(this.getAttribute("rerankerId")!, 10) : undefined;
    const lambda = this.getAttribute("lambda") !== null ? parseFloat(this.getAttribute("lambda")!) : undefined;
    const enableStreaming =
        this.getAttribute("enableStreaming") !== null ? this.getAttribute("enableStreaming") == "true" : undefined;

    ReactDOM.render(
      <div>
        <ChatView
          customerId={customerId}
          corpusKeys={corpusKeys}
          apiKey={apiKey}
          title={title}
          placeholder={placeholder}
          exampleQuestions={exampleQuestions}
          inputSize={inputSize as Props["inputSize"]}
          emptyStateDisplay={emptyStateDisplay}
          isInitiallyOpen={isInitiallyOpen}
          zIndex={zIndex}
          enableStreaming={enableStreaming}
          numberOfSearchResults={numberOfSearchResults}
          language={language}
          enableFactualConsistencyScore={enableFactualConsistencyScore}
          summaryPromptName={summaryPromptName}
          rerankerId={rerankerId as RerankerId}
          lambda={lambda}
        />
      </div>,
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
    acc[propName] = typedProps[propName];

    return acc;
  }, {});

  // @ts-ignore
  return <react-chatbot ref={ref} {...updatedProps} />;
};

export { SummaryLanguage };
