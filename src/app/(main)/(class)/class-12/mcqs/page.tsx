import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class12McqsData } from "@/src/data/class12"

const data = {
  title: "12th Class Mcqs | Class 12",
  description:
    "Class 12 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  keywords: [
    "growlearnhub mcqs",
    "growlearnhub class 12 mcqs",
    "class 12 mcqs",
    "12th class mcqs",
    "12th class growlearnhub mcqs"
  ],
  image: "/12th/class_12_mcqs.webp",
  canonical: "/class-12/mcqs/",
  url: "https://growlearnhub.com/class-12/mcqs/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class12McqsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-12/mcqs/${data.slug}`}
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
