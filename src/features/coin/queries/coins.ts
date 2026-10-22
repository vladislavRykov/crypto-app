import { client } from "@/api";
import { useQuery } from "@tanstack/react-query";

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
