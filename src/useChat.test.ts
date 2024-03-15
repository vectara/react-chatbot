import { useChat } from "./useChat";
import { sendSearchRequest } from "./utils/sendSearchRequest";
import { act, renderHook } from "@testing-library/react-hooks";

jest.mock("utils/sendSearchRequest", () => ({
  sendSearchRequest: jest.fn()
}));

const MOCK_API_RESPONSE = {
  document: [
    {
      id: "mock-doc-id",
      metadata: [{ name: "mock-name", value: "mock-value" }]
    }
  ],
  response: [
    {
      corpusKey: {
        customerId: 0,
        corpusId: 1
      },
      documentIndex: 0,
      metadata: [],
      score: 0.8,
      text: "mock-text"
    }
  ],
  summary: [
    {
      chat: {
        conversationId: "mock-conversation-id",
        turnId: "mock-turn-id",
        text: "mock-answer"
      }
    }
  ]
};

describe("useChat", () => {
  it("should send messages and update message history", async () => {
    const { result } = renderHook(() => useChat("mock-customer-id", ["1"], "mock-api-key"));

    (sendSearchRequest as jest.Mock).mockImplementation(() => Promise.resolve(MOCK_API_RESPONSE));

    await act(async () => {
      await result.current.sendMessage({ query: "mock-query" });
    });

    expect(sendSearchRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        queryValue: "mock-query"
      })
    );

    expect(result.current.messageHistory.length).toEqual(1);
  });

  it("should reflect error state", async () => {
    const { result } = renderHook(() => useChat("mock-customer-id", ["1"], "mock-api-key"));
    (sendSearchRequest as jest.Mock).mockImplementation(() => {
      throw "error";
    });

    await act(async () => {
      result.current.sendMessage({ query: "mock-query" });
    });

    expect(result.current.hasError).toEqual(true);
  });

  it("should reflect loading state", async () => {
    const { result } = renderHook(() => useChat("mock-customer-id", ["1"], "mock-api-key"));
    (sendSearchRequest as jest.Mock).mockImplementation(() => {
      return new Promise(() => {});
    });

    act(() => {
      result.current.sendMessage({ query: "mock-query" });
    });

    expect(result.current.isLoading).toEqual(true);
  });

  it("should reset the conversation", async () => {
    const { result } = renderHook(() => useChat("mock-customer-id", ["1"], "mock-api-key"));
    (sendSearchRequest as jest.Mock).mockImplementation(() => Promise.resolve(MOCK_API_RESPONSE));

    await act(async () => {
      await result.current.sendMessage({ query: "mock-query" });
      await result.current.sendMessage({ query: "mock-query-2" });
    });

    // Assert that the second request uses the current conversation id.
    expect(sendSearchRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        chat: {
          conversationId: "mock-conversation-id"
        }
      })
    );

    (sendSearchRequest as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ...MOCK_API_RESPONSE,
        summary: [
          {
            chat: {
              conversationId: "mock-conversation-id-2",
              turnId: "mock-turn-id",
              text: "mock-answer"
            }
          }
        ]
      })
    );

    await act(async () => {
      await result.current.resetConversation();
    });

    expect(result.current.messageHistory.length).toEqual(0);

    await act(async () => {
      await result.current.sendMessage({ query: "mock-query-3" });
    });

    const calls = (sendSearchRequest as jest.Mock).mock.calls;
    const recentSendSearchRequestCall = calls[calls.length - 1][0];

    // Assert that the request after reset is has no conversation id.
    expect(recentSendSearchRequestCall.chat.conversationId).toEqual(undefined);
  });
});
