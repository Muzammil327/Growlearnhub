import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { VuHighlightedHandoutsData } from "@/src/data/vu"

const data = {
  title: "VU Highlight Handouts of All Subjects",
  description:
    "Virtual University handouts PDF page offering downloadable study materials and comprehensive notes for all courses.",
  image: "/vu/vu_highlight_handouts.webp",
  keywords: [
    "growlearnhub",
    "highlight handouts",
    "growlearnhub vu highlight handouts",
    "vu highlight handouts",
    "virtual university highlight handouts"
  ],
  canonical: "/vu/highlight-handouts/",
  url: "https://growlearnhub.com/vu/highlight-handouts/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {VuHighlightedHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`vu/highlight-handouts/${data.slug}`}
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
