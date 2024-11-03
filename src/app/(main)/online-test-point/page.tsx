import React from "react"
import { Metadata } from "next"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { SmallCardProps } from "@/src/types/card"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Interactive Online Test Multiple Choice Questions (MCQs)",
  description: "",
  index: true,
  follow: true,
  image: "/online-test-point.webp",
  canonical: "/online-test-point/",
  url: "https://growlearnhub.com/online-test-point/",
  keywords: ["growlearnhub", "growlearnhub online test point"],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Online Test Point" }]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div>
        <Heading2 variant="black">Class Wise Online Test</Heading2>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {ClassData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
      </div>
      <div>
        <Heading2 variant="black">Subjects Wise Online Test</Heading2>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {SubjectData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
      </div>
    </SimpleWrapper>
  )
}

const ClassData: SmallCardProps[] = [
  {
    id: 0,
    title: "Class 9",
    link: "/class-9/online-test/"
  },
  {
    id: 1,
    title: "Class 10",
    link: "/class-10/online-test/"
  },
  {
    id: 2,
    title: "Class 11",
    link: "/class-11/online-test/"
  },
  {
    id: 3,
    title: "Class 12",
    link: "/class-12/online-test/"
  }
]

const SubjectData: SmallCardProps[] = [
  {
    id: 0,
    title: "Physics",
    link: "/online-test-point/physics/"
  },
  {
    id: 1,
    title: "Chemistry",
    link: "/online-test-point/chemistry/"
  },
  {
    id: 2,
    title: "Biology",
    link: "/online-test-point/biology/"
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
