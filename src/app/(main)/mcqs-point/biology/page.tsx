import React from "react"
import { Metadata } from "next"
import { SmallCardProps } from "@/src/types/card"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Efficient Biology Multiple Choice Questions (MCQs)",
  description: "Explore a comprehensive collection of biology (MCQs) covering essential topics such as cell biology, genetics, ecology, and human anatomy, aiding in thorough preparation for exams.",
  index: true,
  follow: true,
  image: "/mcqs_point/biology_mcqs.webp",
  canonical: "/mcqs-point/biology/",
  url: "https://growlearnhub.com/mcqs-point/biology/",
  keywords: ["growlearnhub", "growlearnhub biology mcqs", "biology mcqs"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Mcqs Point", link: "/mcqs-point/" },
    { title: "Biology" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {MainData.map((book: SmallCardProps) => (
          <CardSmall key={book.id} title={book.title} link={`/mcqs-point/biology/${book.link}/`} />
        ))}
      </div>
    </SimpleWrapper>
  )
}

const MainData: SmallCardProps[] = [
  {
    id: 0,
    title: "Skeletal System",
    link: "skeletal-system"
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
