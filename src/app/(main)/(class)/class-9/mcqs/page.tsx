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
    { name: "Class 9 Notes", slug: "/class-9/notes/" },
    { name: "Class 10 Notes", slug: "/class-10/notes/" },
    { name: "Class 11 Notes", slug: "/class-11/notes/" },
    { name: "Class 12 Notes", slug: "/class-12/notes/" },

    { name: "Class 9 Books", slug: "/class-9/books/" },
    { name: "Class 10 Books", slug: "/class-10/books/" },
    { name: "Class 11 Books", slug: "/class-11/books/" },
    { name: "Class 12 Books", slug: "/class-12/books/" },

    { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
    { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
    { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },

    { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" },

    { name: "Class 9 Past Paper", slug: "/class-9/past-paper/" },
    { name: "Class 10 Past Paper", slug: "/class-10/past-paper/" },
    { name: "Class 11 Past Paper", slug: "/class-11/past-paper/" },
    { name: "Class 12 Past Paper", slug: "/class-12/past-paper/" },

    { name: "VU Mid Marks Calculator", slug: "/vu/mid-mark-calculator/" },
    { name: "VU Handouts", slug: "/vu/handouts/" },
    { name: "VU Mid Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "VU Final Mcqs", slug: "/vu/final-mcqs/" }
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
