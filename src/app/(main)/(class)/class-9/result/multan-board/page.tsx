import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class Multan Board Result | Class 9",
  description:
  "All Multan Boards have announced the 9th Class Result 2024 date and time. Students can check their results online and get complete details.",
  canonical: "/class-9/result/multan-board/",
  index: true,
  follow: true,
  image: "/9th/result/class_9_result_multan_board.webp",
  url: "https://growlearnhub.com/class-9/result/multan-board/",
  keywords: [
    "growlearnhub multan result",
    "growlearnhub class 9 multan result",
    "multan result",
    "class 9 multan result",
    "9th class multan result",
    "9th class growlearnhub multan result"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Result", link: "/class-9/result" },
    { title: "Multan Board" }
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
