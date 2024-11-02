import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Class 9 Books || Growlearnhub",
  description: "",
  canonical: "/class-9/books/",
  index: true,
  follow: true,
  image: "/book_point/class_9_books.webp",
  url: "https://growlearnhub.com/class-9/books/",
  keywords: ["growlearnhub", "growlearnhub book", "class 9 books"],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9/" },
    { title: "Book" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10">
        {MainDataClass9Book.map((data: any) => {
          return (
            <div key={data.title}>
              <Heading2 variant="black">Class 9 {data.title} Books</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: { name: string; slug: string }) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`/class-9/books/${data.slug}`}
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

const MainDataClass9Book = [
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
        name: "Islamiyat",
        slug: "punjab-board-islamiyat"
      },
      {
        name: "Ikhlaqiat",
        slug: "punjab-board-ikhlaqiat"
      },
      {
        name: "Tarjuma Tul Quran",
        slug: "punjab-board-tarjuma-tul-quran"
      },
      {
        name: "General Math",
        slug: "punjab-board-general-math"
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
