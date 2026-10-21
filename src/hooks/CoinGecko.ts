import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { client } from "../api";
import type { MarketCoinOrder } from "@/CoinGeckoTypes";

export const useCoinPrice = (params: {
  names: string;
  vs_currencies: string;
}) => {
  return useQuery({
    queryKey: ["coins", params.vs_currencies],
    queryFn: () => client.simple.price.get(params),
  });
};
export const useSearchForCoin = (
  params: { query: string },
  enabled: boolean = true,
  staleTime: number = 30_000,
) => {
  return useQuery({
    queryKey: ["searchCoins", params.query],
    queryFn: () => client.search.get(params),
    enabled,
    staleTime,
  });
};
export const useGetCoinChartById = (
  params: { vs_currency: string; days: string; interval?: string | undefined },
  coinId: string,
) => {
  return useQuery({
    queryKey: ["coinChart", coinId, { ...params }],
    queryFn: () => client.coins.market_chart.getById(coinId, params),
    staleTime: 30_000, // 30 секунд
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
export const useGetGlobal = () => {
  return useQuery({
    queryKey: ["global"],
    queryFn: () => client.global.get(),
    staleTime: 1000 * 60 * 5,
  });
};
export const useGetCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: () => client.simple.supported_vs_currencies.get(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetCoinById = (
  params: { vs_currency: string },
  coinId: string,
) => {
  return useQuery({
    queryKey: ["coinData", coinId, { ...params }],
    queryFn: () => client.coins.getById(coinId, params),
    staleTime: 300_000, // 300 секунд
  });
};
