import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "9th Class Date Sheet | Class 9",
  description:
    "Class 9 Date Sheet providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/date-sheet/",
  index: true,
  follow: true,
  image: "/9th/class_9_date_sheet.webp",
  url: "https://growlearnhub.com/class-9/date-sheet/",
  keywords: [
    "growlearnhub date sheet",
    "growlearnhub class 9 date sheet",
    "date sheet",
    "class 9 date sheet",
    "9th class date sheet",
    "9th class growlearnhub date sheet"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Date Sheet" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        {MainDataClass9DateSheet.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`/class-9/data-sheet/${data.slug}`}
              />
            </div>
          )
        })}
      </div>
    </SimpleWrapper>
  )
}

const MainDataClass9DateSheet = [
  {
    name: "Faisalabad Board",
    slug: "#"
  },
  {
    title: "Lahore Board",
    slug: "#"
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
