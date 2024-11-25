import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { DateSheetData } from "@/src/data/date-sheet"
import { SmallCardProps } from "@/src/components/card/cardSmall/types"

const data = {
  title: "Date Sheet All Classes || Growlearnhub",
  description: "",
  keywords: ["growlearnhub", "growlearnhub date-sheet"],
  image: "/date-sheet-all-classes-growlearnhub.webp",
  canonical: "/date-sheet/",
  url: "https://growlearnhub.com/date-sheet/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2>Class Wise Date Sheet</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {DateSheetData.map((book: SmallCardProps) => (
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
