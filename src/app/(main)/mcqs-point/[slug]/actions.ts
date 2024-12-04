"use server";

export async function GetUsers(slug: string) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/question/slug?slug=${slug}`);

    if (!data.ok) {
      return { error: "Quiz not found" };
    }

    const ownApiData = await data.json();
    return ownApiData;

  } catch (error) {
    // If an error occurs, log it and return a message or null
    console.error(error);
    return { error: "An error occurred while fetching data" };
  }
}
