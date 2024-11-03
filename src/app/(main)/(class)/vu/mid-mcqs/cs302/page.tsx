import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { mainDataVuMidMcqs } from "@/src/app/(main)/(class)/vu/mid-mcqs/mainDataVuMidMcqs"

const data = {
  title: "VU CS302 Mid Term Mcqs",
  description:
    "cs302 Mid Term MCQs page offering extensive question banks, practice questions, answers, and detailed explanations to enhance learning.",
  canonical: "/vu/mid-mcqs/cs302/",
  index: true,
  follow: true,
  image: "/vu/mid-term/cs302_mcqs.webp",
  url: "https://growlearnhub.com/vu/mid-mcqs/cs302/",
  keywords: [
    "growlearnhub",
    "mid mcqs cs302",
    "growlearnhub vu cs302 mid mcqs",
    "vu mid mcqs cs302",
    "virtual university mid cs302 mcqs"
  ],
  breadcrumbs:[]
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
