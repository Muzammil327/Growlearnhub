import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "Report a Bug | Growlearnhub",
  canonical: "/report-a-bug/",
  url: "https://growlearnhub.com/report-a-bug/",
  description: "",
  index: true,
  follow: true,
  image: "/single/report_bug.webp",
  keywords: ["growlearnhub", "growlearnhub report bug", "report bug"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Report a Bug"
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