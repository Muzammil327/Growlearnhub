import React from "react"
import { Metadata } from "next"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { SmallCardProps } from "@/src/components/card/cardSmall/types"
import { OnlineTestBookData, OnlineTestClassData } from "@/src/data/online-test-point"

const data = {
  title: "Interactive Online Test Multiple Choice Questions (MCQs)",
  description: "",
  image: "/online-test-point.webp",
  keywords: ["growlearnhub", "growlearnhub online test point"],
  canonical: "/online-test-point/",
  url: "https://growlearnhub.com/online-test-point/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div>
        <Heading2>Class Wise Online Test</Heading2>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {OnlineTestClassData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
      </div>
      <div>
        <Heading2>Subjects Wise Online Test</Heading2>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {OnlineTestBookData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
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
