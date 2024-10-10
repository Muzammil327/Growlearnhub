import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Class12OnlineTestBookData from "@/src/app/(main)/(class)/class-12/online-test/data/Class12OnlineTestBookData"
import { Class12OnlineTestChemistryChapterData } from "@/src/app/(main)/(class)/class-12/online-test/data/Class12OnlineTestChapterData"

const data = {
  title: "12th Class Chemistry Online Test | Class 12",
  description:
    "Class 12 Chemistry online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-12/online-test/chemistry/",
  index: true,
  follow: true,
  image: "/12th/online-test/class-12-chemistry-online-test.webp",
  url: "https://growlearnhub.com/class-12/online-test/chemistry/",
  keywords: [
    "growlearnhub chemistry online test",
    "growlearnhub class 12 chemistry online test",
    "chemistry online test",
    "class 12 chemistry online test",
    "12th class chemistry online test",
    "12th class growlearnhub chemistry online test"
  ],
  clist: [
    { name: "Class 9 Books", slug: "/class-9/books/" },
    { name: "Class 10 Books", slug: "/class-10/books/" },
    { name: "Class 11 Books", slug: "/class-11/books/" },
    { name: "Class 12 Books", slug: "/class-12/books/" },
    { name: "Class 9 Mcqs", slug: "/class-9/mcqs/" },
    { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
    { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
    { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
    { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" }
  ],
  b1: "9th Class"
}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <Class12OnlineTestChemistryChapterData slug="chemistry" />
      <Class12OnlineTestBookData />
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
