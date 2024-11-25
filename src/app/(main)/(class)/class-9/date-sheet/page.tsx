import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class9DateSheetData } from "@/src/data/class9"

const data = {
  title: "9th Class Date Sheet | Class 9",
  description:
    "Class 9 Date Sheet providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub date sheet",
    "growlearnhub class 9 date sheet",
    "date sheet",
    "class 9 date sheet",
    "9th class date sheet",
    "9th class growlearnhub date sheet"
  ],
  image: "/9th/class_9_date_sheet.webp",
  canonical: "/class-9/date-sheet/",
  url: "https://growlearnhub.com/class-9/date-sheet/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class9DateSheetData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-9/data-sheet/${data.slug}`}
              />
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
