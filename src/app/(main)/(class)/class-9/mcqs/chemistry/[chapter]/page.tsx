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
  const cat = ["class 9", "chemistry", "ch1"]
  const title = `Class 9 Chemistry Mcqs ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-9.webp"
                      : undefined
  return (
    <McqsChapterWrapper
      title={title}
      url={`/class-9/mcqs/chemistry/${params.chapter}/`}
      image={image}
      cat={cat}
      b1="World Knowledge"
      b1Link="/mcqs-point/general-knowledge/world-knowledge/"
      b2="Planets"
    ></McqsChapterWrapper>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  const title = `Class 9 Chemistry Online Test ${paramdata}`
  const description = `Class 9 Chemistry Online Test ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/9th/mcqs/chemistry/class-9-chemistry-mcqs-chapter-9.webp"
                      : undefined

  return {
    title: title,
    description: description,
    keywords: [
      "class 9",
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
      canonical: `class-9/mcqs/chemistry/${params.chapter}`
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
      url: `https://growlearnhub.com/class-9/mcqs/chemistry/${params.chapter}`,
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
