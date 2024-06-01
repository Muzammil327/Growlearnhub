import { MetadataRoute } from "next";
import { convertToLowercaseWithHyphen } from "../views/function/convertToLowercaseWithHyphen";
const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const routes: MetadataRoute.Sitemap = route.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/${convertToLowercaseWithHyphen(product)}`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
      changeFrequency: "daily",
    }));
    // // response 1
    // const response1 = await fetch(`${URL}/api/get/allmcqs`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data1 = await response1.json();

    // const mcqsroutes: MetadataRoute.Sitemap = data1.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/mcqs/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.6,
    //   changeFrequency: "daily",
    // }));
    // // response 2

    // const response2 = await fetch(`${URL}/api/get/book`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data2 = await response2.json();

    // const bookroutes: MetadataRoute.Sitemap = data2.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/quiz/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.9,
    //   changeFrequency: "daily",
    // }));
    // // response 3

    // const response3 = await fetch(`${URL}/api/get/heading1`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data3 = await response3.json();

    // const heading1routes: MetadataRoute.Sitemap = data3.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/quiz/${convertToLowercaseWithHyphen(
    //     product.book.title
    //   )}/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.9,
    //   changeFrequency: "daily",
    // }));
    // // response 4

    // const response4 = await fetch(`${URL}/api/get/heading2`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data4 = await response4.json();

    // const heading2routes: MetadataRoute.Sitemap = data4.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/quiz/${convertToLowercaseWithHyphen(
    //     product.book.title
    //   )}/${convertToLowercaseWithHyphen(
    //     product.heading1.title
    //   )}/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.8,
    //   changeFrequency: "daily",
    // }));

    return [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      // ...bookroutes,
      // ...heading1routes,
      // ...heading2routes,
      // ...mcqsroutes,
      ...routes,
    ];
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}

const route = [
  "books/",
  "quiz/",
  "notes/",
  "online-tests/",
  "pairing-schemes/",
  "past-papers/",
  "sharp-brain/",

  "class-9/",
  "class-10/",
  "class-11/",
  "class-12/",
  "vu/",

  "books/class-9/",
  "books/class-9/punjab-board-physics/",
  "books/class-9/punjab-board-physics/english/",
  "books/class-9/punjab-board-physics/urdu/",

  "books/class-9/punjab-board-biology/",
  "books/class-9/punjab-board-biology/english/",
  "books/class-9/punjab-board-biology/urdu/",

  "books/class-9/punjab-board-chemistry/",
  "books/class-9/punjab-board-chemistry/english/",
  "books/class-9/punjab-board-chemistry/urdu/",

  "books/class-9/punjab-board-math/",
  "books/class-9/punjab-board-math/english/",
  "books/class-9/punjab-board-math/urdu/",

  "books/class-9/punjab-board-general-math/",
  "books/class-9/punjab-board-general-math/english/",
  "books/class-9/punjab-board-general-math/urdu/",

  "books/class-9/punjab-board-computer-science/",
  "books/class-9/punjab-board-computer-science/english/",
  "books/class-9/punjab-board-computer-science/urdu/",

  "books/class-9/punjab-board-pak-study/",
  "books/class-9/punjab-board-pak-study/english/",
  "books/class-9/punjab-board-pak-study/urdu/",

  "books/class-9/punjab-board-urdu/",
  "books/class-9/punjab-board-english/",
  "books/class-9/punjab-board-islamiat/",
  "books/class-9/punjab-board-economics/",
  "books/class-9/punjab-board-tarjuma-tul-quran/",
  "books/class-9/punjab-board-ikhlaqiat/",

  "books/class-10/",
  "books/class-10/punjab-board-physics/",
  "books/class-10/punjab-board-physics/english/",
  "books/class-10/punjab-board-physics/urdu/",

  "books/class-10/punjab-board-biology/",
  "books/class-10/punjab-board-biology/english/",
  "books/class-10/punjab-board-biology/urdu/",

  "books/class-10/punjab-board-chemistry/",
  "books/class-10/punjab-board-chemistry/english/",
  "books/class-10/punjab-board-chemistry/urdu/",

  "books/class-10/punjab-board-math/",
  "books/class-10/punjab-board-math/english/",
  "books/class-10/punjab-board-math/urdu/",

  "books/class-10/punjab-board-general-math/",
  "books/class-10/punjab-board-general-math/english/",
  "books/class-10/punjab-board-general-math/urdu/",

  "books/class-10/punjab-board-computer-science/",
  "books/class-10/punjab-board-computer-science/english/",
  "books/class-10/punjab-board-computer-science/urdu/",

  "books/class-10/punjab-board-pak-study/",
  "books/class-10/punjab-board-pak-study/english/",
  "books/class-10/punjab-board-pak-study/urdu/",

  "books/class-10/punjab-board-urdu/",
  "books/class-10/punjab-board-english/",
  "books/class-10/punjab-board-islamiat/",
  "books/class-10/punjab-board-economics/",
  "books/class-10/punjab-board-tarjuma-tul-quran/",
  "books/class-10/punjab-board-ikhlaqiat/",

  "books/class-11/",
  "books/class-12/",
];
