import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Class10OnlineTestBookData from "@/src/app/(main)/(class)/class-10/online-test/data/Class10OnlineTestBookData"
import { Class10OnlineTestChapterData } from "@/src/app/(main)/(class)/class-10/online-test/data/Class10OnlineTestChapterData"

const data = {
  title: "10th Class Physics Online Test | Class 10",
  description:
    "Class 10 Physics online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-10/online-test/physics/",
  index: true,
  follow: true,
  image: "/10th/online-test/class-10-physics-online-test.webp",
  url: "https://growlearnhub.com/class-10/online-test/physics/",
  keywords: [
    "growlearnhub physics online test",
    "growlearnhub class 10 physics online test",
    "physics online test",
    "class 10 physics online test",
    "10th class physics online test",
    "10th class growlearnhub physics online test"
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
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ],
  b1: "9th Class"
}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <Class10OnlineTestChapterData slug="physics" />
      <Class10OnlineTestBookData />
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
