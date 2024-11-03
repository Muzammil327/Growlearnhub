import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { SmallCardProps } from "@/src/types/card"

const data = {
  title: "Jobs Opportunities || Growlearnhub",
  description: "",
  canonical: "/jobs-opportunities/",
  index: true,
  follow: true,
  image: "/jobs_opportunities.webp",
  url: "https://growlearnhub.com/jobs-opportunities/",
  keywords: [
    "growlearnhub",
    "growlearnhub jobs opportunities",
    "jobs opportunities"
  ],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Jobs Opportunities" }]
}

export default function Page() {
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
