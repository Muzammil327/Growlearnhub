import React from "react"
import { Metadata } from "next"
import Class9McqsBookData from "@/src/app/(main)/(class)/class-9/mcqs/data/Class9McqsBookData"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class Mcqs | Class 9",
  description:
    "Class 9 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  canonical: "/class-9/mcqs/",
  index: true,
  follow: true,
  image: "/9th/class-9-mcqs.webp",
  url: "https://growlearnhub.com/class-9/mcqs/",
  keywords: [
    "growlearnhub mcqs",
    "growlearnhub class 9 mcqs",
    "class 9 mcqs",
    "9th class mcqs",
    "9th class growlearnhub mcqs"
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
  ]
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="9th Class"
      b1Link="/class-9/"
      b2="Mcqs"
      image={data.image}
      clist={data.clist}
    >
      <Class9McqsBookData />
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
