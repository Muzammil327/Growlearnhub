import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "9th Class Mcqs | Class 9",
  description:
    "Class 9 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  canonical: "/class-9/mcqs/",
  index: true,
  follow: true,
  image: "/9th/class_9_mcqs.webp",
  url: "https://growlearnhub.com/class-9/mcqs/",
  keywords: [
    "growlearnhub mcqs",
    "growlearnhub class 9 mcqs",
    "class 9 mcqs",
    "9th class mcqs",
    "9th class growlearnhub mcqs"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Mcqs" }
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
              link={`/class-9/mcqs/${data.slug}`}
            />
          )
        })}
      </div>{" "}
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
