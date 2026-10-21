import { getlocalStorageData } from "@/services/storageService";

const KEY = "crypto-search-history";
const MAX_LENGTH = 3;

export type HistoryCoinSearchT = {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
};

export function getHistory(): HistoryCoinSearchT[] | null {
  return getlocalStorageData(KEY);
}

export function saveHistory(history: HistoryCoinSearchT[]) {
  localStorage.setItem(KEY, JSON.stringify(history));
}
export function clearHistory() {
  localStorage.removeItem(KEY);
}

export const updateHistory = (newRecord: HistoryCoinSearchT) => {
  const prevHistory = getHistory();
  if (!prevHistory) return saveHistory([newRecord]);
  else if (prevHistory.length === MAX_LENGTH) {
    prevHistory.shift();
    saveHistory([...prevHistory, newRecord]);
    return;
  } else {
    saveHistory([...prevHistory, newRecord]);
  }
};
