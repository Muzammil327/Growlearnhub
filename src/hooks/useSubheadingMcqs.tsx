import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const fetchSubHeadingMcqs = async (
  bookName: string,
  headingName: string,
  subHeadingName: string,
  currentPage: number,
  limit: number,
) => {
  try {
    const response = await axios.get(
      `/api/mcqs/subHeadingmcqs?bookName=${encodeURIComponent(
        bookName,
      )}&headingName=${encodeURIComponent(
        headingName,
      )}&subHeadingName=${encodeURIComponent(
        subHeadingName,
      )}&page=${currentPage}&limit=${limit}`,
    );
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

export const useSubheadingMcqs = (
  headingName: string,
  bookName: string,
  subHeadingName: string,
  currentPage: number,
  limit: number,
) => {
  return useQuery(
    [
      "mcqsSubHeadingData",
      headingName,
      bookName,
      subHeadingName,
      currentPage,
      limit,
    ],
    () =>
      fetchSubHeadingMcqs(
        headingName,
        bookName,
        subHeadingName,
        currentPage,
        limit,
      ),
  );
};
