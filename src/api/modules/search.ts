import type { searchResponseDataT } from "../../CoinGeckoTypes";
import { api } from "../coinGeckoApi";

export const search = {
  get: async (params: { query: string }) => {
    const res = await api.get<searchResponseDataT>("/search", { params });
    return res.data;
  },
};
