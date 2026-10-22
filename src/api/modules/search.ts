import { api } from "../coinGeckoApi";
import type { SearchResponseDataT } from "../types";

export const search = {
  get: async (params: { query: string }) => {
    const res = await api.get<SearchResponseDataT>("/search", { params });
    return res.data;
  },
};
