import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "9th Class Result | Class 9",
  description:
  "All Punjab Boards have announced the 9th Class Result 2024 date and time. Students can check their results online on 22nd August at 10 AM and get complete details.",
  canonical: "/class-9/result/",
  index: true,
  follow: true,
  image: "/9th/class_9_result.webp",
  url: "https://growlearnhub.com/class-9/result/",
  keywords: [
    "growlearnhub result",
    "growlearnhub class 9 result",
    "result",
    "class 9 result",
    "9th class result",
    "9th class growlearnhub result"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Result" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        {MainDataClass9Result.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`/class-9/result/${data.slug}/`}
              />
            </div>
          )
        })}
      </div>
    </SimpleWrapper>
  )
}

const MainDataClass9Result = [
  {
    name: "Faisalabad Board",
    slug: "faisalabad-board"
  },
  {
    title: "Lahore Board",
    slug: "lahore-board"
  },
  {
    title: "Multan Board",
    slug: "multan-board"
  },
  {
    title: "Sahiwal Board",
    slug: "sahiwal-board"
  },
  {
    title: "Sargodha Board",
    slug: "sargodha-board"
  },
  {
    title: "Bahawalpur Board",
    slug: "bahawalpur-board"
  },
  {
    title: "Rawalpindi Board",
    slug: "rawalpindi-board"
  },
  {
    title: "Gujranwala Board",
    slug: "gujranwala-board"
  },
  {
    title: "DG Khan Board",
    slug: "dg-khan-board"
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
