import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { Class10BookData } from "@/src/data/class10"

const data = {
  title: "10th Class Books | Class 10",
  description:
    "Class 10 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.",
  keywords: [
    "growlearnhub books",
    "growlearnhub class 10 books",
    "class 10 books",
    "10th class books",
    "10th class growlearnhub books"
  ],
  image: "/10th/class_10_book.webp",
  canonical: "/class-10/books/",
  url: "https://growlearnhub.com/class-10/books/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10">
        {Class10BookData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2>{data.title}</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-10/books/${data.slug}`}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
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
