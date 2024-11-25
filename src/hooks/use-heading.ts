import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsHeading } from "@/src/types/heading";

// GET all classes
export const useGetHeadings = (bookId: number) => {
  return useQuery<IpropsHeading[], Error>({
    queryKey: ["heading"],
    queryFn: () => getData<IpropsHeading[]>(`heading?bookId=${bookId}`),
    enabled: !!bookId, // Only fetch if bookId is truthy (not undefined or null)
  });
};
