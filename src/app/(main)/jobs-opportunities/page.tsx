import React from "react"
import type { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"

const data = {
  title: "Jobs Opportunities || Growlearnhub",
  description: "",
  image: "/jobs_opportunities.webp",
  keywords: [
    "growlearnhub",
    "growlearnhub jobs opportunities",
    "jobs opportunities"
  ],
  canonical: "/jobs-opportunities/",
  url: "https://growlearnhub.com/jobs-opportunities/",
  index: true,
  follow: true,
}

export default function Page() {
  return <Simplewrapper data={data}></SimpleWrapper>
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
