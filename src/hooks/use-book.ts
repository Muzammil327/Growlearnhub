import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsBook } from "@/src/types/book";

// GET all classes
export const useGetBooks = (classId: number) => {
  return useQuery<IpropsBook[], Error>({
    queryKey: ["book"],
    queryFn: () => getData<IpropsBook[]>(`book?classId=${classId}`),
    enabled: !!classId, // Only fetch if classId is truthy (not undefined or null)
  });
};
