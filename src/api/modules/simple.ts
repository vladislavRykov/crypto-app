import type { CurrenciesT } from "../../CoinGeckoTypes";
import { api } from "../coinGeckoApi";

export const simple = {
  price: {
    get: async (params: { names: string; vs_currencies: string }) => {
      const res = await api.get("/simple/price", { params });
      return res.data;
    },
  },
  supported_vs_currencies: {
    get: async () => {
      const res = await api.get<CurrenciesT>("/simple/supported_vs_currencies");
      return res.data;
    },
  },
};
