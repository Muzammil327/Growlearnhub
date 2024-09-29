import React from "react"
import { Metadata } from "next"
import Class10McqsBookData from "@/src/app/(main)/(class)/class-10/mcqs/data/Class10McqsBookData"
import { Class10McqsChapterData } from "@/src/app/(main)/(class)/class-10/mcqs/data/Class10McqsChapterData"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "10th Class Physics Mcqs | Class 10",
  description:
    "Class 10 Physics MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  canonical: "/class-10/mcqs/physics/",
  index: true,
  follow: true,
  image: "/10th/mcqs/class_10_physics_mcqs.webp",
  url: "https://growlearnhub.com/class-10/mcqs/physics/",
  keywords: [
    "growlearnhub physics mcqs",
    "growlearnhub class 10 physics mcqs",
    "class 10 physics mcqs",
    "10th class physics mcqs",
    "10th class growlearnhub physics mcqs"
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
      b1="Mcqs"
      b1Link="/class-10/mcqs/"
      b2="Physics"
      image={data.image}
      clist={data.clist}
    >
      <Class10McqsChapterData slug="physics" />
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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title
    }
  }
}
