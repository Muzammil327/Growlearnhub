import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "Study Group | Growlearnhub",
  canonical: "/study-group/",
  url: "https://growlearnhub.com/study-group/",
  description: "",
  index: true,
  follow: true,
  image: "/single/study_group.webp",
  keywords: ["growlearnhub", "growlearnhub study group", "study group"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Study Group"
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