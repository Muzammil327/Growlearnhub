import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsTags } from "@/src/types/tag";

// GET all classes
export const useGetTags = () => {
  return useQuery<IpropsTags[], Error>({
    queryKey: ["tag"],
    queryFn: () => getData<IpropsTags[]>("tag"),
  });
};
