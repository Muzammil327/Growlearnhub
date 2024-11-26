import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class11McqsData } from "@/src/data/class11"

const data = {
  title: "11th Class Mcqs | Class 11",
  description:
    "Class 11 MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  keywords: [
    "growlearnhub mcqs",
    "growlearnhub class 11 mcqs",
    "class 11 mcqs",
    "11th class mcqs",
    "11th class growlearnhub mcqs"
  ],
  image: "/11th/class_11_mcqs.webp",
  canonical: "/class-11/mcqs/",
  url: "https://growlearnhub.com/class-11/mcqs/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class11McqsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`class-11/mcqs/${data.slug}`}
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
