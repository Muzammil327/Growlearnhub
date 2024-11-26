import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { Class10PastPaperData } from "@/src/data/class10"

const data = {
  title: "10th Class Past Paper | Class 10",
  description:
    "Class 10 Past Paper providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub past paper",
    "growlearnhub class 10 past paper",
    "past paper",
    "class 10 past paper",
    "10th class past paper",
    "10th class growlearnhub past paper"
  ],
  image: "/10th/class_10_past_paper.webp",
  canonical: "/class-10/past-paper/",
  url: "https://growlearnhub.com/class-10/past-paper/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class10PastPaperData.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2 className="">{data.title}</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-10/past-paper/${data.slug}`}
                    />
                  )
                })}
              </div>
            </div>
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
