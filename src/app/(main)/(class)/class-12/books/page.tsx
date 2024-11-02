import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 12 Books || Growlearnhub",
  description: "",
  canonical: "/class-12/books/",
  index: true,
  follow: true,
  image: "/book_point/class_12_books.webp",
  url: "https://growlearnhub.com/class-12/books/",
  keywords: ["growlearnhub", "growlearnhub book", "class 12 books"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 12", link: "/class-12/" },
    { title: "Book" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Class 12 Books</Heading2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {MainDataClass11Book.map((data: {
          title: string
          child: {
            name: string
            slug: string
          }[]
        }) => {
          return (
            <div key={data.title}>
              <h2 className="">{data.title}</h2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: {
                  name: string
                  slug: string
                }) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`/class-12/books/${data.slug}/`}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </SimpleWrapper>
  )
}

const MainDataClass11Book = [
  {
    title: "Punjab Board",
    child: [
      {
        name: "Biology",
        slug: "punjab-board-biology"
      },
      {
        name: "Chemistry",
        slug: "punjab-board-chemistry"
      },
      {
        name: "Physics",
        slug: "punjab-board-physics"
      },
      {
        name: "Math",
        slug: "punjab-board-math"
      },
      {
        name: "English",
        slug: "punjab-board-english"
      },
      {
        name: "Urdu",
        slug: "punjab-board-urdu"
      },
      {
        name: "Economics",
        slug: "punjab-board-economics"
      },
      {
        name: "Tarjuma Tul Quran",
        slug: "punjab-board-tarjuma-tul-quran"
      },
      {
        name: "Pak Study",
        slug: "punjab-board-pak-study"
      },
      {
        name: "Computer Science",
        slug: "punjab-board-computer-science"
      }
    ]
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
