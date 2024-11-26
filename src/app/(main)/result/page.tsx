import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { SmallCardProps } from "@/src/components/card/cardSmall/types"
import { ResultData } from "@/src/data/result"

const data = {
  title: "Results All Classes || Growlearnhub",
  description: "",
  image: "/result-all-classes-growlearnhub.webp",
  keywords: ["growlearnhub", "growlearnhub result"],
  canonical: "/result/",
  url: "https://growlearnhub.com/result/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2>Class Wise Result</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {ResultData.map((book: SmallCardProps) => (
          <CardSmall key={book.id} title={book.title} link={`${book.link}`} />
        ))}
      </div>
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
