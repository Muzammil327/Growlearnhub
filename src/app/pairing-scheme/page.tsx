import React from "react"
import type { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { SmallCardProps } from "@/src/types/card"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Pairing Scheme All Classes || Growlearnhub",
  description: "",
  canonical: "/pairing-scheme/",
  index: true,
  follow: true,
  image: "/pairing-scheme-all-classes-growlearnhub.webp",
  url: "https://growlearnhub.com/pairing-scheme/",
  keywords: ["growlearnhub", "growlearnhub pairing scheme"],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Pairing Scheme" }]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class Wise Pairing Scheme</Heading2>
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
    link: "/class-9/pairing-scheme/"
  },
  {
    id: 1,
    title: "Class 10",
    link: "/class-10/pairing-scheme/"
  },
  {
    id: 2,
    title: "Class 11",
    link: "/class-11/pairing-scheme/"
  },
  {
    id: 3,
    title: "Class 12",
    link: "/class-12/pairing-scheme/"
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
