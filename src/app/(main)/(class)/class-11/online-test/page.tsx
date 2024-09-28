import React from "react"
import { Metadata } from "next"
import Class11OnlineTestBookData from "@/src/app/(main)/(class)/class-11/online-test/data/Class11OnlineTestBookData"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "11th Class Online Test | Class 11",
  description:
    "Class 11 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-11/online-test/",
  index: true,
  follow: true,
  image: "/11th/class-11-online-test.webp",
  url: "https://growlearnhub.com/class-11/online-test/",
  keywords: [
    "growlearnhub online test",
    "growlearnhub class 11 online test",
    "online test",
    "class 11 online test",
    "11th class online test",
    "11th class growlearnhub online test"
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
      b1="11th Class"
      b1Link="/class-11/"
      b2="Online Test"
      image={data.image}
      clist={data.clist}
    >
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
