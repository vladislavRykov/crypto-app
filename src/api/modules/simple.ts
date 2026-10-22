import { api } from "../coinGeckoApi";
import type { CurrencyT } from "../types";

export const simple = {
  price: {
    get: async (params: { names: string; vs_currencies: string }) => {
      const res = await api.get("/simple/price", { params });
      return res.data;
    },
  },
  supported_vs_currencies: {
    get: async () => {
      const res = await api.get<CurrencyT[]>("/simple/supported_vs_currencies");
      return res.data;
    },
  },
};
