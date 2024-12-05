import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const fetchSingleMcqs = async (slug: string) => {
  try {
    const response = await axios.get(`/api/mcqs/${slug}`); // Replace with your actual endpoint
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || "Error fetching data from the server",
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const useSingleMcqs = (slug: string) => {
  return useQuery(["singleMcqsData", slug], () => fetchSingleMcqs(slug));
};
