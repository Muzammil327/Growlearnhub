import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "VU Handouts || Growlearnhub",
  description: "",
  canonical: "/vu/handouts/",
  index: true,
  follow: true,
  image: "/book_point/vu_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/",
  keywords: ["growlearnhub", "growlearnhub book", "VU Handouts"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "VU", link: "/vu/" },
    { title: "Book" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">VU Handouts</Heading2>
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
