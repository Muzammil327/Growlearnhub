import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Class9OnlineTestBookData from "@/src/app/(main)/(class)/class-9/online-test/data/Class9OnlineTestBookData"
import { Class9OnlineTestChapterData } from "@/src/app/(main)/(class)/class-9/online-test/data/Class9OnlineTestChapterData"

const data = {
  title: "9th Class Physics Online Test | Class 9",
  description:
    "Class 9 Physics online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/online-test/physics/",
  index: true,
  follow: true,
  image: "/9th/online-test/class-9-physics-online-test.webp",
  url: "https://growlearnhub.com/class-9/online-test/physics/",
  keywords: [
    "growlearnhub physics online test",
    "growlearnhub class 9 physics online test",
    "physics online test",
    "class 9 physics online test",
    "9th class physics online test",
    "9th class growlearnhub physics online test"
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
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ],
  b1: "Past Paper",
  b1Link: "/class-9/past-paper/",
  b2: "Lahore Board Physics"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Class9OnlineTestChapterData slug="physics" />
      <Class9OnlineTestBookData />
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
