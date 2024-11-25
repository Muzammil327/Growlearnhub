import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api/", // Default base URL
  // headers: {
  //   "Content-Type": "application/json", // Set default content type for JSON requests
  // },
  // timeout: 8000,
});

// Generic type for API responses
export type ApiResponse<T> = AxiosResponse<T>;

// HTTP Methods

// GET request
export const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axiosInstance.get(url, config);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error); // Handle and rethrow errors
    throw error;
  }
};

// Fetch paginated data
export const getPaginatedData = async <T>(
  url: string,
  page: number = 1,
  pageSize: number = 10,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, {
      ...config,
      params: {
        ...config?.params, // Preserve any additional params
        page, // Pagination parameters
        pageSize,
      },
    });
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw error;
  }
};

// POST request
export const postData = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axiosInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw error;
  }
};

// PUT request
export const putData = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw error;
  }
};

// DELETE request
export const deleteData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
    throw error;
  }
};

// Utility function for handling Axios errors
const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    // Log detailed Axios error for debugging
    console.error("Axios error:", {
      message: error.message,
      config: error.config,
      response: error.response ? error.response.data : "No response received",
      status: error.response?.status,
    });
  } else {
    // Log unexpected errors
    console.error("Unexpected error:", error);
  }
};

export default axiosInstance;
