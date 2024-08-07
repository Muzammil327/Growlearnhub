import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getHeading1All() {
  try {
    const response = await axios.get(`${URL}/api/get/heading1`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch heading 1");
  }
}

export async function deleteHeading1(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/heading1/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
}
export async function getSingleHeading1(id: string) {
  try {
    const response = await axios.get(`${URL}/api/get/sheading1/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch heading 1");
  }
}
export async function postHeading1(data: any) {
  try {
    const response = await axios.post(`${URL}/api/post/heading1`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch heading 1");
  }
}
export async function updateHeading1(data: any, id: string) {
  try {
    const response = await axios.put(`${URL}/api/update/heading1/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch heading 1");
  }
}
