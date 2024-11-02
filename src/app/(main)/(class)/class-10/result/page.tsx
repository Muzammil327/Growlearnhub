import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Class 10 Results || Growlearnhub",
  description: "",
  canonical: "/class-10/result/",
  index: true,
  follow: true,
  image: "/result/class-10-result.webp",
  url: "https://growlearnhub.com/class-10/result/",
  keywords: ["growlearnhub", "growlearnhub result", "class 10 result"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 10", link: "/class-10/" },
    { title: "Result" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 10 Result</Heading2>
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
