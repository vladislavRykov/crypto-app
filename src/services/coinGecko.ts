import { api } from "../api/coinGeckoApi";
import type { CoinChartDataT, searchResponseDataT } from "../CoinGeckoTypes";

export const getCurrencyPrice = (params: {
  names: string;
  vs_currencies: string;
}) => api.get("/simple/price", { params });

export const searchForCoin = (params: { query: string }) =>
  api.get<searchResponseDataT>("/search", { params });

export const getCoinChartById = (
  coinId: string,
  params: { vs_currency: string; days: string; interval?: string },
) => api.get<CoinChartDataT>(`/coins/${coinId}/market_chart`, { params });
