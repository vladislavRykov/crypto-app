import { api } from "../coinGeckoApi";
import type { GlobalDataT } from "../types";

export const global = {
  get: async () => {
    const res = await api.get<GlobalDataT>("/global");
    return res.data;
  },
};
