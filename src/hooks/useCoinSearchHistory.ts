import {
  clearHistory,
  getHistory,
  saveHistory,
  type HistoryCoinSearchT,
} from "@/utils/coin-search/searchCoinHistrory";
import { useState } from "react";

const MAX_LENGTH = 3;

export const useCoinSearchHistory = () => {
  const historyLS = getHistory();
  const [history, setHistory] = useState(historyLS);

  const updateHistoryF = (newRecord: HistoryCoinSearchT) => {
    const prevHistory = getHistory();
    if (!prevHistory) {
      setHistory([newRecord]);
      return saveHistory([newRecord]);
    } else if (prevHistory.length === MAX_LENGTH) {
      prevHistory.shift();
    }
    saveHistory([...prevHistory, newRecord]);
    setHistory([...prevHistory, newRecord]);
  };
  const clearHistoryF = () => {
    clearHistory();
    setHistory(null);
  };

  return { history, updateHistoryF, clearHistoryF };
};
