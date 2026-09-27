import type { CoinChartDataT, CoinWithMarketDataT } from "../../CoinGeckoTypes";
import { api } from "../coinGeckoApi";

export const coins = {
  markets: {
    get: async (params: {
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
  MarketChartById: {
    get: async (
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
