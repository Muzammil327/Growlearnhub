import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { SmallCardProps } from "@/src/types/card"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Past Papers All Classes || Growlearnhub",
  description: "",
  canonical: "/past-paper/",
  index: true,
  follow: true,
  image: "/past-paper-all-classes-growlearnhub.webp",
  url: "https://growlearnhub.com/past-paper/",
  keywords: ["growlearnhub", "growlearnhub past paper"],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Past Paper" }]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class Wise Past Paper</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {ClassData.map((book: SmallCardProps) => (
          <CardSmall key={book.id} title={book.title} link={book.link} />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const ClassData: SmallCardProps[] = [
  {
    id: 0,
    title: "Class 9",
    link: "/class-9/past-paper/"
  },
  {
    id: 1,
    title: "Class 10",
    link: "/class-10/past-paper/"
  },
  {
    id: 2,
    title: "Class 11",
    link: "/class-11/past-paper/"
  },
  {
    id: 3,
    title: "Class 12",
    link: "/class-12/past-paper/"
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
