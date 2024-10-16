import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { mainDataVuMidMcqs } from "@/src/app/(main)/(class)/vu/mid-mcqs/mainDataVuMidMcqs"

const data = {
  title: "VU CS101 Mid Term Mcqs",
  description:
    "cs101 Mid Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.",
  canonical: "/vu/mid-mcqs/cs101/",
  index: true,
  follow: true,
  image: "/vu/mid-term/cs101_mcqs.webp",
  url: "https://growlearnhub.com/vu/mid-mcqs/cs101/",
  keywords: [
    "growlearnhub",
    "mid mcqs cs101",
    "growlearnhub vu cs101 mid mcqs",
    "vu mid mcqs cs101",
    "virtual university mid cs101 mcqs"
  ],
  clist: [
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" }
  ],
  b1: "Virtual University",
  b1Link: "/vu/",
  b2: "Final Mcqs"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainDataVuMidMcqs.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/mid-mcqs/${data.slug}/`}
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
