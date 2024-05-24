import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getCommentFormAll() {
  try {
    const response = await axios.get(`${URL}/api/get/commentform`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch comment form');
  }
}

export async function deleteNewsletter(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/commentform/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch comment form');
  }
}
export async function postCommentForm(data: any) {
  try {
    const response = await axios.post(`${URL}/api/post/commentform`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch comment form');
  }
}
