import React from "react"
import { Metadata } from "next"
import { SmallCardProps } from "@/src/types/card"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Efficient Chemistry Multiple Choice Questions (MCQs)",
  description:
    "Explore a comprehensive collection of chemistry (MCQs) covering essential topics such including organic chemistry, inorganic chemistry, physical chemistry, and analytical chemistry, aiding for exams.",
  index: true,
  follow: true,
  image: "/mcqs_point/chemistry_mcqs.webp",
  canonical: "/mcqs-point/chemistry/",
  url: "https://growlearnhub.com/mcqs-point/chemistry/",
  keywords: ["growlearnhub", "growlearnhub chemistry mcqs", "chemistry mcqs"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Mcqs Point", link: "/mcqs-point/" },
    { title: "Chemistry" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {MainData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/mcqs-point/chemistry/${book.link}/`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const MainData: SmallCardProps[] = []

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
