import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class12NotesData } from "@/src/data/class12"

const data = {
  title: "12th Class Notes | Class 12",
  description:
    "Class 12 notes providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub notes",
    "growlearnhub class 12 notes",
    "notes",
    "class 12 notes",
    "12th class notes",
    "12th class growlearnhub notes"
  ],
  image: "/12th/class_12_notes.webp",
  canonical: "/class-12/notes/",
  url: "https://growlearnhub.com/class-12/notes/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class12NotesData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-12/notes/${data.slug}`}
            />
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
