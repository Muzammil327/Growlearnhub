import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsSubHeading } from "@/src/types/subheading";

// GET all classes
export const useGetSubHeadings = (headingId: number) => {
  return useQuery<IpropsSubHeading[], Error>({
    queryKey: ["subheading"],
    queryFn: () =>
      getData<IpropsSubHeading[]>(`subheading?headingId=${headingId}/`),
    enabled: !!headingId, // Only fetch if headingId is truthy (not undefined or null)
  });
};
