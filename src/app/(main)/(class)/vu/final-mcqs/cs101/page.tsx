import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { mainDataVuFinalMcqs } from "@/src/app/(main)/(class)/vu/final-mcqs/mainDataVuFinalMcqs"

const data = {
  title: "VU CS101 Final Term Mcqs",
  description:
    "cs101 Final Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.",
  canonical: "/vu/final-mcqs/cs101/",
  index: true,
  follow: true,
  image: "/vu/final-term/cs101_mcqs.webp",
  url: "https://growlearnhub.com/vu/final-mcqs/cs101/",
  keywords: [
    "growlearnhub",
    "final mcqs cs101",
    "growlearnhub vu cs101 final mcqs",
    "vu final mcqs cs101",
    "virtual university final cs101 mcqs"
  ],
  breadcrumbs:[]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainDataVuFinalMcqs.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/final-mcqs/${data.slug}/`}
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
