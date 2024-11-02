import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "Terms And Conditions | Growlearnhub",
  canonical: "/terms-and-conditions/",
  url: "https://growlearnhub.com/terms-and-conditions/",
  description: "",
  index: true,
  follow: true,
  image: "/single/term_and_condition.webp",
  keywords: ["growlearnhub", "growlearnhub term and condition", "term and condition"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Terms And Conditions"
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
