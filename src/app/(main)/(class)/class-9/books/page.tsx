import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { Class9BookData } from "@/src/data/class9"

const data = {
  title: "9th Class Books | Class 9",
  description:
    "Class 9 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.",
  keywords: [
    "growlearnhub books",
    "growlearnhub class 9 books",
    "class 9 books",
    "9th class books",
    "9th class growlearnhub books"
  ],
  image: "/9th/class_9_book.webp",
  canonical: "/class-9/books/",
  url: "https://growlearnhub.com/class-9/books/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="my-10">
        {Class9BookData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2>{data.title}</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-9/books/${data.slug}`}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Simplewrapper>
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
