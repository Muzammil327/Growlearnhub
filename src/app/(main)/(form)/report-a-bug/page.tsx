import React from "react"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import { Metadata } from "next"

const data = {
  title: "Report a Bug | Growlearnhub",
  description: "",
  image: "/single/report_bug.webp",
  keywords: ["growlearnhub", "growlearnhub report bug", "report bug"],
  canonical: "/report-a-bug/",
  url: "https://growlearnhub.com/report-a-bug/",
  index: true,
  follow: true,
}

export default function page() {
  return <Simplewrapper data={data}></Simplewrapper>
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
