import { ChatTurn } from "./vui";

// eslint-disable-next-line
const HISTORY_KEY = `${location.hostname}:chatHistory`;

export const addHistoryItem = (chatTurn: ChatTurn, history: ChatTurn[]) => {
  const newChatHistory = [...history, chatTurn];
  persistHistory(newChatHistory);
  return newChatHistory;
};

export const editHistoryItem = (index: number, history: ChatTurn[]) => {
  const newChatHistory = [...history];
  newChatHistory[index] = history[index];
  persistHistory(newChatHistory);
  return newChatHistory;
};

export const deleteHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};

export const retrieveHistory = () => {
  const serializedHistory = localStorage.getItem(HISTORY_KEY);
  if (!serializedHistory) return [];
  return JSON.parse(serializedHistory);
};

export const persistHistory = (history: ChatTurn[]) => {
  const serializedHistory = JSON.stringify(history);
  localStorage.setItem(HISTORY_KEY, serializedHistory);
};
