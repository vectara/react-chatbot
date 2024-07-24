import { useChat } from "./useChat";
import { act, renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as sendSearchRequestInterface from "./utils/sendSearchRequest";
import * as streamQueryInterface from "@vectara/stream-query-client";

jest.mock("@vectara/stream-query-client", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@vectara/stream-query-client")
  };
});

const MOCK_API_RESPONSE = {
  chat_id: "mock-conversation-id",
  answer: "mock-answer",
  turn_id: "mock-turn-id",
  search_results: [
    {
      score: 0.8,
      text: "mock-text",
      document_id: "mock-doc-id",
      document_metadata: [{ name: "mock-name", value: "mock-value" }],
      part_metadata: []
    }
  ]
};

describe("useChat", () => {
  let sendSearchRequestSpy: jest.SpyInstance;
  let streamQuerySpy: jest.SpyInstance;

  beforeEach(() => {
    sendSearchRequestSpy = jest.spyOn(sendSearchRequestInterface, "sendSearchRequest");
    streamQuerySpy = jest.spyOn(streamQueryInterface, "streamQueryV2");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("streaming", () => {
    it("should send messages and update hook values", async () => {
      const { result } = renderHook(() =>
          useChat({ customerId: "mock-customer-id", corpusKeys: "1", apiKey: "mock-api-key" })
      );

      streamQuerySpy.mockImplementation(async ({onStreamEvent}) => {
        await onStreamEvent({
          type: "generationChunk",
          updatedText: "mock-updated-text",
        });
      });

      await act(async () => {
        await result.current.sendMessage({ query: "mock-query" });
      });

      expect(result.current.activeMessage).toEqual({
        answer: "mock-updated-text",
        id: "placeholder-message-id",
        question: "mock-query",
        results: []
      });

      expect(result.current.isStreamingResponse).toEqual(true);
      expect(result.current.messageHistory).toEqual([]);

      streamQuerySpy.mockImplementation(async ({onStreamEvent}) => {
        await onStreamEvent({
          type: "end"
        });
      });

      await act(async () => {
        await result.current.sendMessage({ query: "mock-query" });
      });

      await waitFor(() => {
        expect(result.current.messageHistory.length).toEqual(1);
      });
    });
  });

  describe("non-streaming", () => {
    it("should send messages and update message history", async () => {
      const { result } = renderHook(() =>
          useChat({ customerId: "mock-customer-id", corpusKeys: "1", apiKey: "mock-api-key", enableStreaming: false })
      );

      sendSearchRequestSpy.mockImplementation(() => Promise.resolve(MOCK_API_RESPONSE));

      await act(async () => {
        await result.current.sendMessage({ query: "mock-query" });
      });

      expect(sendSearchRequestSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            query: "mock-query"
          })
      );

      expect(result.current.messageHistory.length).toEqual(1);
    });

    it("should reflect error state", async () => {
      const { result } = renderHook(() =>
          useChat({ customerId: "mock-customer-id", corpusKeys: "1", apiKey: "mock-api-key", enableStreaming: false })
      );
      sendSearchRequestSpy.mockImplementation(() => {
        throw "error";
      });

      await act(async () => {
        result.current.sendMessage({ query: "mock-query" });
      });

      expect(result.current.hasError).toEqual(true);
    });

    it("should reflect loading state", async () => {
      const { result } = renderHook(() =>
          useChat({ customerId: "mock-customer-id", corpusKeys: "1", apiKey: "mock-api-key" })
      );
      sendSearchRequestSpy.mockImplementation(() => {
        return new Promise(() => {});
      });

      act(() => {
        result.current.sendMessage({ query: "mock-query" });
      });

      expect(result.current.isLoading).toEqual(true);
    });
  });

  it("should be able to reset the conversation", async () => {
    const { result } = renderHook(() =>
        useChat({ customerId: "mock-customer-id", corpusKeys: "1", apiKey: "mock-api-key", enableStreaming: false })
    );
    sendSearchRequestSpy.mockImplementation(() => Promise.resolve(MOCK_API_RESPONSE));

    await act(async () => {
      await result.current.sendMessage({ query: "mock-query" });
      await result.current.sendMessage({ query: "mock-query-2" });
    });

    // Assert that the second request uses the current conversation id.
    expect(sendSearchRequestSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          chat: { store: true, conversationId: "mock-conversation-id" }
        })
    );

    sendSearchRequestSpy.mockImplementation(() =>
        Promise.resolve({
          ...MOCK_API_RESPONSE,
          chat_id: "mock-conversation-id-2",
          turn_id: "mock-turn-id",
          answer: "mock-answer"
        })
    );

    await act(async () => {
      await result.current.startNewConversation();
    });

    expect(result.current.messageHistory.length).toEqual(0);

    await act(async () => {
      await result.current.sendMessage({ query: "mock-query-3" });
    });

    const calls = sendSearchRequestSpy.mock.calls;
    const recentSendSearchRequestCall = calls[calls.length - 1][0];

    // Assert that the request after reset is has no conversation id.
    expect(recentSendSearchRequestCall.chat.conversationId).toEqual(undefined);
  });
});