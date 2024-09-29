import React from "react"
import { Metadata } from "next"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "Complete Guide to Class 10 | Resources and Tips for 10th Class",
  description:
    "Comprehensive Class 10 page featuring MCQs, online tests, and essential books for efficient learning and thorough subject mastery.",
  canonical: "/class-10/",
  index: true,
  follow: true,
  image: "/10th/class-10.webp",
  url: "https://growlearnhub.com/class-10/",
  keywords: [
    "growlearnhub",
    "growlearnhub class 10",
    "class 10",
    "10th class",
    "10th class growlearnhub"
  ],
  clist: [
    { name: "Class 9", slug: "/class-9/" },
    { name: "Class 11", slug: "/class-11/" },
    { name: "Class 12", slug: "/class-12/" },
    { name: "VU", slug: "/vu/" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="10th Class"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
  )
}
const mainData = [
  {
    name: "Online Test",
    slug: "online-test"
  },
  {
    name: "Mcqs",
    slug: "mcqs"
  },
  {
    name: "Books",
    slug: "books"
  },
  {
    name: "Past Paper",
    slug: "past-paper"
  },
  {
    name: "Notes",
    slug: "notes"
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
