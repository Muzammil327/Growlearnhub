import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getHeading2All() {
  try {
    const response = await axios.get(`${URL}/api/get/heading2`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch heading 1');
  }
}

export async function deleteHeading2(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/heading2/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
}
export async function getSingleHeading2(id: string) {
  try {
    const response = await axios.get(`${URL}/api/get/sheading2/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch heading 1');
  }
}
export async function postHeading2(data: any) {
  try {
    const response = await axios.post(`${URL}/api/post/heading2`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch heading 1');
  }
}
export async function updateHeading2(data: any, id: string) {
  try {
    const response = await axios.put(`${URL}/api/update/heading2/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch heading 1');
  }
}
