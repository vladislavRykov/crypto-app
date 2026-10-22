import { client } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: () => client.simple.supported_vs_currencies.get(),
    staleTime: 1000 * 60 * 5,
  });
};
