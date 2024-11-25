import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class10NotesData } from "@/src/data/class10"

const data = {
  title: "10th Class Notes | Class 10",
  description:
    "Class 10 notes providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub notes",
    "growlearnhub class 10 notes",
    "notes",
    "class 10 notes",
    "10th class notes",
    "10th class growlearnhub notes"
  ],
  image: "/10th/class_10_notes.webp",
  canonical: "/class-10/notes/",
  url: "https://growlearnhub.com/class-10/notes/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class10NotesData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-10/notes/${data.slug}`}
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
