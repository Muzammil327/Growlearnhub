import { MetadataRoute } from 'next'
import { convertToLowercaseWithHyphen } from '../views/function/convertToLowercaseWithHyphen'
const URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const routes: MetadataRoute.Sitemap = route.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/${convertToLowercaseWithHyphen(product)}`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
      changeFrequency: 'daily',
    }))
    // response 1

    // const response1 = await fetch(`${URL}/api/get/book`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data1 = await response1.json();

    // const bookroutes: MetadataRoute.Sitemap = data1.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/quiz/subject-wise/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.6,
    //   changeFrequency: "hourly",
    // }));
    // // response 2

    // const response2 = await fetch(`${URL}/api/get/heading1`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data2 = await response2.json();
    // const heading1routes: MetadataRoute.Sitemap = data2.map((product: any) => ({
    //   url: `${
    //     process.env.NEXT_PUBLIC_FRONTEND_URL
    //   }/quiz/subject-wise/${convertToLowercaseWithHyphen(
    //     product.book.title
    //   )}/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.9,
    //   changeFrequency: "hourly",
    // }));
    // // response 3

    // const response3 = await fetch(`${URL}/api/get/mcqs`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data3 = await response3.json();
    // const quizroutes: MetadataRoute.Sitemap = data3.data.map(
    //   (product: any) => ({
    //     url: `${
    //       process.env.NEXT_PUBLIC_FRONTEND_URL
    //     }/quizCenter/${convertToLowercaseWithHyphen(product.title)}/`,
    //     lastModified: new Date().toISOString(),
    //     priority: 0.9,
    //     changeFrequency: "hourly",
    //   })
    // );
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
        changeFrequency: 'hourly',
      },
      // ...bookroutes,
      // ...heading1routes,
      // ...quizroutes,
      // ...heading2routes,
      // ...mcqsroutes,
      ...routes,
    ]
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

const route = [
  'class-9/',
  'class-10/',
  'class-11/',
  'class-12/',

  'class-9/books/',
  'class-9/books/punjab-board-physics/',
  'class-9/books/punjab-board-math/',
  'class-9/books/punjab-board-chemistry/',
  'class-9/books/punjab-board-biology/',
  'class-9/notes/',
  'class-9/notes/punjab-board-physics/',
  'class-9/notes/punjab-board-math/',
  'class-9/notes/punjab-board-chemistry/',
  'class-9/notes/punjab-board-biology/',
  'class-9/past-papers/',
  'class-9/quiz/',
  'class-9/quiz/physics/',
  'class-9/quiz/math/',
  'class-9/quiz/chemistry/',
  'class-9/quiz/biology/',
  'class-9/online-test/',
  'class-9/pairing-schemes/',

  'class-10/books/',
  'class-11/books/',
  'class-12/books/',

  'class-10/notes/',
  'class-11/notes/',
  'class-12/notes/',

  'vu/',
  'vu/handouts/',
  'vu/handouts/cs101/',
  'vu/handouts/cs201/',
  'vu/handouts/cs302/',
  'vu/handouts/eng201/',
  'vu/handouts/mgt211/',
  'vu/handouts/mth104/',
  'vu/handouts/mth301/',
  'vu/mid-term/',

  'vu/mid-term/cs101/',
  'vu/mid-term/cs101/abbreviation/',
  'vu/mid-term/cs101/mcqs/',  
  'vu/mid-term/cs101/mcqs/chapter-1/',
  'vu/mid-term/cs101/mcqs/chapter-2/',
  'vu/mid-term/cs101/mcqs/chapter-3/',

  'vu/mid-term/cs201/',
  'vu/mid-term/cs201/abbreviation/',
  'vu/mid-term/cs201/mcqs/',
  'vu/mid-term/cs201/mcqs/chapter-1/',
  'vu/mid-term/cs201/mcqs/chapter-2/',
  'vu/mid-term/cs201/mcqs/chapter-3/',
  'vu/mid-term/cs201/definitions/',
  'vu/mid-term/cs201/definitions/what-is-pointer/',
  'vu/mid-term/cs201/definitions/what-is-reference/',
  'vu/mid-term/cs201/definitions/what-is-interpreter/',
  'vu/mid-term/cs201/definitions/what-is-compiler/',
  'vu/mid-term/cs201/definitions/what-is-program/',
  
  'vu/mid-term/cs302/',
  'vu/mid-term/cs302/abbreviation/',
  'vu/mid-term/cs302/mcqs/',
  'vu/mid-term/cs302/mcqs/chapter-1/',
  'vu/mid-term/cs302/mcqs/chapter-2/',
  'vu/mid-term/cs302/mcqs/chapter-3/',

  'vu/mid-mark-calculator/',
]
