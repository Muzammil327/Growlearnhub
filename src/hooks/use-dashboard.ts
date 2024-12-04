import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/axios";
import { IpropsDashboard } from "@/src/types/dashboard";

// GET all classes

export const useGetDashboard = (userId: number) => {
  return useQuery<IpropsDashboard, Error>({
    queryKey: ["dashboard"],
    queryFn: () => getData<IpropsDashboard>(`dashboard?userId=${userId}/`),
    enabled: !!userId,
  });
};
