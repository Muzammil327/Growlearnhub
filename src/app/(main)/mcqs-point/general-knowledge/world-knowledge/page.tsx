import React from "react"
import { Metadata } from "next"
import Wrapper from "@/src/components/element/Wrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: "World General Knowledge Solved Mcqs",
  description:
    "Here you can get solved mcqs wise of World General Knowledge like dams, rivers, canals, natural resources, forest, road and motorways.",
  canonical: "/mcqs-point/general-knowledge/world-knowledge/",
  index: true,
  follow: true,
  image: "/mcqs-point/general-knowledge/general-knowledge-world-mcqs-point.png",
  url: "https://growlearnhub.com/mcqs-point/general-knowledge/world-knowledge/",
  keywords: [
    "mcqs",
    "mcqs world",
    "mcqs general knowledge",
    "world general knowledge",
    "mcqs general knowledge world"
  ]
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="General Knowledge"
      b2Link="/mcqs-point/general-knowledge/"
      b3="World Knowledge"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`${data.canonical}${book.slug}`}
          />
        ))}
      </div>
    </Wrapper>
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
    name: "Planet",
    slug: "planet"
  }
]
