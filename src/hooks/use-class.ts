import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsClass } from "@/src/types/class";

// GET all classes
export const useGetClasses = () => {
  return useQuery<IpropsClass[], Error>({
    queryKey: ["class"],
    queryFn: () => getData<IpropsClass[]>("class"),
  });
};
