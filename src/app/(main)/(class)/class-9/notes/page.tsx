import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "9th Class Notes | Class 9",
  description:
    "Class 9 notes providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/notes/",
  index: true,
  follow: true,
  image: "/9th/class_9_notes.webp",
  url: "https://growlearnhub.com/class-9/notes/",
  keywords: [
    "growlearnhub notes",
    "growlearnhub class 9 notes",
    "notes",
    "class 9 notes",
    "9th class notes",
    "9th class growlearnhub notes"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Notes" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {MainDataClass9Notes.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/notes/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
  )
}

const MainDataClass9Notes = [
  {
    name: "Biology",
    slug: ""
  },
  {
    name: "Chemistry",
    slug: ""
  },
  {
    name: "Physics",
    slug: ""
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
