import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { vuFinalMcqsData } from "@/src/data/vu"

const data = {
  title: "Virtual University Final Term Mcqs",
  description:
    "Final Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.",
  keywords: [
    "growlearnhub",
    "final mcqs",
    "growlearnhub vu final mcqs",
    "vu final mcqs",
    "virtual university final mcqs"
  ],
  image: "/vu/vu_final_term_mcqs.webp",
  canonical: "/vu/final-mcqs/",
  url: "https://growlearnhub.com/vu/final-mcqs/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {vuFinalMcqsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`vu/final-mcqs/${data.slug}`}
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
