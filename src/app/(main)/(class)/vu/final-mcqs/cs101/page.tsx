import React from "react"
import { Metadata } from "next"
import Wrapper from "@/src/components/element/Wrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

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
  clist: [
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" }
  ]
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Virtual University"
      b1Link="/vu/"
      b2="Final Mcqs"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/final-mcqs/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: "CS101 Final Mcqs",
    slug: "/vu/final-mcqs/cs101/"
  },
  {
    name: "CS201 Final Mcqs",
    slug: "/vu/final-mcqs/cs201/"
  },
  {
    name: "CS302 Final Mcqs",
    slug: "/vu/final-mcqs/cs302/"
  },
  {
    name: "ENG201 Final Mcqs",
    slug: "/vu/final-mcqs/eng201/"
  },
  {
    name: "MGT211 Final Mcqs",
    slug: "/vu/final-mcqs/mgt211/"
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
