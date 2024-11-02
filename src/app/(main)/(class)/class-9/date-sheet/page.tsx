import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Class 9 Date Sheet || Growlearnhub",
  description: "",
  canonical: "/class-9/date-sheet/",
  index: true,
  follow: true,
  image: "/date_sheet/class_9_date_sheet.webp",
  url: "https://growlearnhub.com/class-9/date-sheet/",
  keywords: ["growlearnhub", "growlearnhub date-sheet", "class 9 date sheet"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Date Sheet" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 9 Date Sheet</Heading2>
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
