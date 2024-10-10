import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: "India General Knowledge Solved Mcqs Wise",
  description:
    "Here you can get solved mcqs wise of India General Knowledge like dams, rivers, canals, natural resources, forest, road and motorways.",
  canonical: "/mcqs-point/general-knowledge/india/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/mcqs-point/general-knowledge/india/",
  keywords: [
    "mcqs",
    "mcqs india",
    "mcqs general knowledge",
    "india general knowledge",
    "mcqs general knowledge india"
  ],
  b1: "Mcqs Point",
  b1Link: "/mcqs-point/",
  b2: "General Knowledge",
  b2Link: "/mcqs-point/general-knowledge/",
  b3: "India"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`${data.canonical}${book.slug}`}
          />
        ))}
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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title
    }
  }
}

const BookSubjectData: Subject[] = [
  {
    id: 0,
    name: "River",
    slug: "river"
  },
  {
    id: 1,
    name: "Dam",
    slug: "dam"
  },
  {
    id: 2,
    name: "Largest",
    slug: "largest"
  },
  {
    id: 3,
    name: "Longest",
    slug: "longest"
  }
]
