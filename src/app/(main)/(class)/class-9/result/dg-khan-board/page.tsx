import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class DJ Khan Board Result | Class 9",
  description:
    "Class 9 DJ Khan Board providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/result/gj-kanboard-board/",
  index: true,
  follow: true,
  image: "/9th/result/class_9_result_gj_khan_board.webp",
  url: "https://growlearnhub.com/class-9/result/gj-khan-board/",
  keywords: [
    "growlearnhub gj khan result",
    "growlearnhub class 9 gj khan result",
    "gj khan result",
    "class 9 gj khan result",
    "9th class gj khan result",
    "9th class growlearnhub gj khan result"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Result", link: "/class-9/result" },
    { title: "DJ Khan Board" }
  ]
}

export default function Page() {
  return <SimpleWrapper data={data}></SimpleWrapper>
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
