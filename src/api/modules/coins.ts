import type {
  CoinChartDataT,
  CoinT,
  CoinWithMarketDataT,
  MarketCoinOrder,
} from "../../CoinGeckoTypes";
import { api } from "../coinGeckoApi";

export const coins = {
  getById: async (coinId: string, params: { vs_currency: string }) => {
    const res = await api.get<CoinT>(`/coins/${coinId}`, {
      params,
    });
    return res.data;
  },
  markets: {
    get: async (params: {
      order?: MarketCoinOrder;
      vs_currency: string;
      per_page: number;
      page: number;
      locale?: string;
      sparkline?: boolean;
    }) => {
      const res = await api.get<CoinWithMarketDataT[]>("/coins/markets", {
        params,
      });
      return res.data;
    },
  },
  market_chart: {
    getById: async (
      coinId: string,
      params: { vs_currency: string; days: string; interval?: string },
    ) => {
      const res = await api.get<CoinChartDataT>(
        `/coins/${coinId}/market_chart`,
        { params },
      );
      return res.data;
    },
  },
};
