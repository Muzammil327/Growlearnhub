import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "FAQs | Growlearnhub",
  canonical: "/faqs/",
  url: "https://growlearnhub.com/faqs/",
  description: "",
  index: true,
  follow: true,
  image: "/single/faqs.webp",
  keywords: ["growlearnhub", "growlearnhub faqs", "faqs"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "FAQs"
    }
  ]
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
