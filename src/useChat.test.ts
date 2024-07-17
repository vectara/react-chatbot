import { useChat } from "./useChat";
import { act, renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as streamQueryInterface from "@vectara/stream-query-client";

jest.mock("@vectara/stream-query-client", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@vectara/stream-query-client")
  };
});

describe("useChat", () => {
  let streamQuerySpy: jest.SpyInstance;

  beforeEach(() => {
    streamQuerySpy = jest.spyOn(streamQueryInterface, "streamQueryV2");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("streaming", () => {
    it("should send messages and update hook values", async () => {
      const { result } = renderHook(() =>
        useChat({ customerId: "mock-customer-id", corpusKey: "1", apiKey: "mock-api-key" })
      );

      streamQuerySpy.mockImplementation(async (_, onStreamEvent) => {
        const event = {
          type: "generationChunk",
          updatedText: "mock-updated-text",
        };
        await onStreamEvent(event);
      });

      await act(async () => {
        await result.current.sendMessage({ query: "mock-query" });
      });

      expect(result.current.activeMessage).toEqual({
        answer: "mock-updated-text",
        id: "",
        question: "mock-query",
        results: []
      });

      expect(result.current.isStreamingResponse).toEqual(true);
      expect(result.current.messageHistory).toEqual([]);

      streamQuerySpy.mockImplementation(async (_, onStreamUpdate) => {
        await onStreamUpdate({
          references: [],
          detail: null,
          updatedText: "",
          isDone: true
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
});
