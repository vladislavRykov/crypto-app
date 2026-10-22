import { client } from "@/api";
import type { MarketCoinOrder } from "@/api/modules/coins";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useInfiniteCoinsListMarket = (params: {
  order?: MarketCoinOrder;
  vs_currency: string;
  per_page: number;
  initialPage: number;
  locale?: string;
  sparkline?: boolean;
}) => {
  return useInfiniteQuery({
    initialPageParam: params.initialPage,
    queryKey: ["coinsInfListMarket", { ...params }],
    queryFn: ({ pageParam = params.initialPage }) =>
      client.coins.markets.get({ ...params, page: pageParam }),
    staleTime: 1 * 60_000, // 1 минута,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === params.per_page
        ? allPages.length + 1
        : undefined;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const currentPageId = allPages.length;
      return currentPageId > 1 ? currentPageId - 1 : undefined;
    },
  });
};

export const useCoinsListMarket = (params: {
  vs_currency: string;
  per_page: number;
  page: number;
  locale?: string;
  sparkline?: boolean;
}) => {
  return useQuery({
    queryKey: ["coinsListMarket", { ...params }],
    queryFn: () => client.coins.markets.get(params),
    staleTime: 1 * 60_000, // 1 минута
  });
};
