import { client } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetGlobal = () => {
  return useQuery({
    queryKey: ["global"],
    queryFn: () => client.global.get(),
    staleTime: 1000 * 60 * 5,
  });
};
