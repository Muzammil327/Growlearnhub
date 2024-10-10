import React from "react"
import { Metadata } from "next"
import Class10McqsBookData from "@/src/app/(main)/(class)/class-10/mcqs/data/Class10McqsBookData"
import { Class10McqsChapterData } from "@/src/app/(main)/(class)/class-10/mcqs/data/Class10McqsChapterData"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "10th Class Biology Mcqs | Class 10",
  description:
    "Class 10 Biology MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  canonical: "/class-10/mcqs/biology/",
  index: true,
  follow: true,
  image: "/10th/mcqs/class-10-biology-mcqs.webp",
  url: "https://growlearnhub.com/class-10/mcqs/biology/",
  keywords: [
    "growlearnhub biology mcqs",
    "growlearnhub class 10 biology mcqs",
    "class 10 biology mcqs",
    "10th class biology mcqs",
    "10th class growlearnhub biology mcqs"
  ],
  clist: [
    { name: "Class 9 Books", slug: "/class-9/books/" },
    { name: "Class 10 Books", slug: "/class-10/books/" },
    { name: "Class 11 Books", slug: "/class-11/books/" },
    { name: "Class 12 Books", slug: "/class-12/books/" },
    { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
    { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
    { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
    { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ],
  b1: "9th Class"

}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <Class10McqsChapterData slug="biology" />
      <Class10McqsBookData />
    </SimpleWrapper>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title
      }
    ]
  },
  alternates: {
    canonical: data.canonical
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow
    }
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title
    }
  }
}
