import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { Class11BookData } from "@/src/data/class11"

const data = {
  title: "11th Class Books | Class 11",
  description:
    "Class 11 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.",
  keywords: [
    "growlearnhub books",
    "growlearnhub class 11 books",
    "class 11 books",
    "11th class books",
    "11th class growlearnhub books"
  ],
  image: "/11th/class_11_book.webp",
  canonical: "/class-11/books/",
  url: "https://growlearnhub.com/class-11/books/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10">
        {Class11BookData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2>{data.title}</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-11/books/${data.slug}`}
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
