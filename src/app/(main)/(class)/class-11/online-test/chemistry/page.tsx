import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Class11OnlineTestBookData from "@/src/app/(main)/(class)/class-11/online-test/data/Class11OnlineTestBookData"
import { Class11OnlineTestChemistryChapterData } from "@/src/app/(main)/(class)/class-11/online-test/data/Class11OnlineTestChapterData"

const data = {
  title: "11th Class Chemistry Online Test | Class 11",
  description:
    "Class 11 Chemistry online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-11/online-test/chemistry/",
  index: true,
  follow: true,
  image: "/11th/online-test/class-11-chemistry-online-test.webp",
  url: "https://growlearnhub.com/class-11/online-test/chemistry/",
  keywords: [
    "growlearnhub chemistry online test",
    "growlearnhub class 11 chemistry online test",
    "chemistry online test",
    "class 11 chemistry online test",
    "11th class chemistry online test",
    "11th class growlearnhub chemistry online test"
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
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Online Test"
      b1Link="/class-11/online-test/"
      b2="Biology"
      image={data.image}
      clist={data.clist}
    >
      <Class11OnlineTestChemistryChapterData slug="chemistry" />
      <Class11OnlineTestBookData />
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
