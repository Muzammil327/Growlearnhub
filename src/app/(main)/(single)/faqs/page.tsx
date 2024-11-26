import React from "react"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "FAQs | Growlearnhub",
  description: "",
  keywords: ["growlearnhub", "growlearnhub faqs", "faqs"],
  image: "/single/faqs.webp",
  canonical: "/faqs/",
  url: "https://growlearnhub.com/faqs/",
  index: true,
  follow: true,
}

export default function page() {
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
