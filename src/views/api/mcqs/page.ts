import { McqsFormTypes } from "@/src/types/page";
import axios from "axios";
import slugify from "slugify";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getMcqsAll(page: number, limit: number) {
  try {
    const response = await axios.get(
      `${URL}/api/get/mcqs?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch artist playlists");
  }
}

export async function getMcqs() {
  try {
    const response = await axios.get(`${URL}/api/get/allmcqs`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch artist playlists");
  }
}

export async function deleteMcqs(id: string) {
  try {
    const response = await axios.delete(`${URL}/api/delete/mcqs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
}
export async function postMcqs(data: McqsFormTypes) {
  try {
    const response = await axios.post(`${URL}/api/post/mcqs`, {
      slug: slugify(data.title, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: "vi", // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      }),
      title: data.title,
      options: data.options,
      correctOption: data.correctOption,
      description: data.description,
      bookId: data.bookId,
      heading1Id: data.heading1Id,
      heading2Id: data.heading2Id,
      relatedId: data.relatedId,
      image: data.image,
    });
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
}
