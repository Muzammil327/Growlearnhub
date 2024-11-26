import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class10McqsData } from "@/src/data/class10"

const data = {
  title: "10th Class Mcqs | Class 10",
  description:
    "Class 10 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  keywords: [
    "growlearnhub mcqs",
    "growlearnhub class 10 mcqs",
    "class 10 mcqs",
    "10th class mcqs",
    "10th class growlearnhub mcqs"
  ],
  image: "/10th/class_10_mcqs.webp",
  canonical: "/class-10/mcqs/",
  url: "https://growlearnhub.com/class-10/mcqs/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class10McqsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-10/mcqs/${data.slug}`}
            />
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
