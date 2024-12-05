"use server";
import axios from "axios";

export async function GetUsers(slug: string) {
  try {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/question/slug?slug=${slug}`);

    return data.data;

  } catch (error) {
    // If an error occurs, log it and return a message or null
    console.error(error);
    return { error: "An error occurred while fetching data" };
  }
}
