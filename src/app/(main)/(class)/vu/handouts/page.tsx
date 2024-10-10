import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import VuHandoutsData from "@/src/app/(main)/(class)/vu/handouts/data"

const data = {
  title: "VU Handouts of All Subjects",
  description:
    "Virtual University handouts PDF page offering downloadable study materials and comprehensive notes for all courses.",
  canonical: "/vu/handouts/",
  index: true,
  follow: true,
  image: "/vu/vu_handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/",
  keywords: [
    "growlearnhub",
    "handouts",
    "growlearnhub vu handouts",
    "vu handouts",
    "virtual university handouts"
  ],
  clist: [
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" }
  ],
  b1: "Virtual University",
  b1Link: "/vu/",
  b2: "Handouts"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {VuHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/handouts/${data.slug}`}
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
