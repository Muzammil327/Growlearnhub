import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { SmallCardProps } from "@/src/types/card"

const data = {
  title: "Date Sheet All Classes || Growlearnhub",
  description: "",
  canonical: "/date-sheet/",
  index: true,
  follow: true,
  image: "/date-sheet-all-classes-growlearnhub.webp",
  url: "https://growlearnhub.com/date-sheet/",
  keywords: ["growlearnhub", "growlearnhub date-sheet"],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Date Sheet" }]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class Wise Date Sheet</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {ClassData.map((book: SmallCardProps) => (
          <CardSmall key={book.id} title={book.title} link={`${book.link}`} />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const ClassData: SmallCardProps[] = [
  {
    id: 0,
    title: "Class 9",
    link: "/class-9/date-sheet/"
  },
  {
    id: 1,
    title: "Class 10",
    link: "/class-10/date-sheet/"
  },
  {
    id: 2,
    title: "Class 11",
    link: "/class-11/date-sheet/"
  },
  {
    id: 3,
    title: "Class 12",
    link: "/class-12/date-sheet/"
  }
]

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
