import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { SmallCardProps } from "@/src/types/card"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Biology MCQs on Skeletal System - Test Your Knowledge",
  description: "",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/mcqs-point/biology/skeletal-system/",
  keywords: [],
  canonical: "mcqs-point/biology/skeletal-system/",
  image: "/mcqs-point.webp",
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Mcqs Point", link: "/mcqs-point" },
    {
      title: "Biology",
      link: `/mcqs-point/biology/`
    },
    { title: "Skeletal System" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {MainData.map((book: SmallCardProps) => (
          <CardSmall
            key={book.id}
            title={book.title}
            link={`/mcqs-point/biology/skeletal-system/${book.link}/`}
          />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const MainData: SmallCardProps[] = [
  { id: 0, title: "Bones", link: "bones" },
  { id: 1, title: "Skeleton", link: "skeleton" },
  { id: 2, title: "Joints", link: "joints" },
  { id: 3, title: "Tendons", link: "tendons" },
  { id: 4, title: "Ligaments", link: "ligaments" }
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
