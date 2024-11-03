import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "9th Class Past Paper | Class 9",
  description:
    "Class 9 Past Paper providing interactive exams, instant feedback, and performance analytics for effective learning.",
  canonical: "/class-9/past-paper/",
  index: true,
  follow: true,
  image: "/9th/class_9_past_paper.webp",
  url: "https://growlearnhub.com/class-9/past-paper/",
  keywords: [
    "growlearnhub past paper",
    "growlearnhub class 9 past paper",
    "past paper",
    "class 9 past paper",
    "9th class past paper",
    "9th class growlearnhub past paper"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 9", link: "/class-9" },
    { title: "Past Paper" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-10">
        {MainDataClass9PastPaper.map((data: any) => {
          return (
            <div key={data.title}>
              <h2 className="">{data.title}</h2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`/class-9/past-paper/${data.slug}`}
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

const MainDataClass9PastPaper = [
  {
    title: "Faisalabad Board",
    child: [
      {
        name: "Biology",
        slug: "#"
      },
      {
        name: "Chemistry",
        slug: "#"
      },
      {
        name: "Physics",
        slug: "#"
      }
    ]
  },
  {
    title: "Lahore Board",
    child: [
      {
        name: "Biology",
        slug: "#"
      },
      {
        name: "Chemistry",
        slug: "#"
      },
      {
        name: "Physics",
        slug: "#"
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
