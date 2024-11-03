import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class Sargodha Board Result | Class 9",
  description:
    "Class 9 Sargodha Board providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/result/sargodha-board/",
  index: true,
  follow: true,
  image: "/9th/result/class_9_result_sargodha_board.webp",
  url: "https://growlearnhub.com/class-9/result/sargodha-board/",
  keywords: [
    "growlearnhub sargodha result",
    "growlearnhub class 9 sargodha result",
    "sargodha result",
    "class 9 sargodha result",
    "9th class sargodha result",
    "9th class growlearnhub sargodha result"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Result", link: "/class-9/result" },
    { title: "Sargodha Board" }
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
