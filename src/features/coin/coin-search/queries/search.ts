import { client } from "@/api";
import { useQuery } from "@tanstack/react-query";

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
