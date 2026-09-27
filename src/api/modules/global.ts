import type { GlobalDataT } from "../../CoinGeckoTypes";
import { api } from "../coinGeckoApi";

export const global = {
  get: async () => {
    const res = await api.get<GlobalDataT>("/global");
    return res.data;
  },
};
