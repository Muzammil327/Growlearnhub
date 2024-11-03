import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "9th Class Gujranwala Board Result | Class 9",
  description:
    "All Gujranwala Boards have announced the 9th Class Result 2024 date and time. Students can check their results online and get complete details.",
  canonical: "/class-9/result/gujranwala-board/",
  index: true,
  follow: true,
  image: "/9th/result/class_9_result_gujranwala_board.webp",
  url: "https://growlearnhub.com/class-9/result/gujranwala-board/",
  keywords: [
    "growlearnhub gujranwala result",
    "growlearnhub class 9 gujranwala result",
    "gujranwala result",
    "class 9 gujranwala result",
    "9th class gujranwala result",
    "9th class growlearnhub gujranwala result"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Result", link: "/class-9/result" },
    { title: "Gujranwala Board" }
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
