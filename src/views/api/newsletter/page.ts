import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getNewsletterAll() {
  try {
    const response = await axios.get(`${URL}/api/get/newsletter`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch newsletter");
  }
}

export async function deleteNewsletter(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/newsletter/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch newsletter");
  }
}
export async function postNewsletter(data: any) {
  try {
    const response = await axios.post(`${URL}/api/post/newsletter`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch newsletter");
  }
}
