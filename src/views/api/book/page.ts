import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getBookAll() {
  try {
    const response = await axios.get(`${URL}/api/get/book`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
}

export async function deleteBook(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/book/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete books");
  }
}

export async function getSingleBook(id: string) {
  try {
    const response = await axios.get(`${URL}/api/get/sbook/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to get single book books");
  }
}

export async function postBook(data: any) {
  try {
    const response = await axios.post(`${URL}/api/post/book`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to post books");
  }
}

export async function updateBook(data: any, id: string) {
  try {
    const response = await axios.put(`${URL}/api/update/book/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update books");
  }
}
export async function paginationBook(page: number, limit: number) {
  try {
    const response = await axios.get(
      `${URL}/api/get/book?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to pagination books");
  }
}
