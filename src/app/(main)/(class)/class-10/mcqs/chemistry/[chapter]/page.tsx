import React from "react"
import McqsChapterWrapper from "@/src/components/Wrapper/mcqs/McqsChapterWrapper"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/slugify"

interface Iprops {
  params: {
    chapter: string
  }
}

export default function Page({ params }: Iprops) {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)
  const cat = ["class 10", "chemistry", "ch1"]
  const title = `Class 10 Chemistry Mcqs ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-9.webp"
                      : undefined
  return (
    <McqsChapterWrapper
      title={title}
      url={`/class-10/mcqs/chemistry/${params.chapter}/`}
      image={image}
      cat={cat}
      b1="Biology"
      b1Link="/class-10/mcqs/biology/"
      b2={paramdata}
    ></McqsChapterWrapper>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  const title = `Class 10 Chemistry Online Test ${paramdata}`
  const description = `Class 10 Chemistry Online Test ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/10th/mcqs/chemistry/class-10-chemistry-mcqs-chapter-9.webp"
                      : undefined

  return {
    title: title,
    description: description,
    keywords: [
      "class 10",
      "chemistry",
      "chapter 1",
      "chapter 2",
      "chapter 3",
      "chapter 4",
      "chapter 5",
      "chapter 6",
      "chapter 7",
      "chapter 8",
      "chapter 9",
      "mcqs"
    ],
    alternates: {
      canonical: `class-10/mcqs/chemistry/${params.chapter}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://growlearnhub.com/class-10s/mcqs/chemistry/${params.chapter}`,
      images: [
        {
          src: image,
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: image,
        alt: title
      }
    }
  }
}
