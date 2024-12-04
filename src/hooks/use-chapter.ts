import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsChapter } from "@/src/types/chapter";

export const useGetChapter = (bookId: number) => {
  return useQuery<IpropsChapter[], Error>({
    queryKey: ["chapter"],
    queryFn: () => getData<IpropsChapter[]>(`chapter?bookId=${bookId}`),
    enabled: !!bookId,
  });
};
