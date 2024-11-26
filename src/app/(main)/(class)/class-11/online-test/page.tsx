import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/elements/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class11OnlineTestData } from "@/src/data/class11"

const data = {
  title: "11th Class Online Test | Class 11",
  description:
    "Class 11 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub online test",
    "growlearnhub class 11 online test",
    "online test",
    "class 11 online test",
    "11th class online test",
    "11th class growlearnhub online test"
  ],
  image: "/11th/class_11_online_test.webp",
  canonical: "/class-11/online-test/",
  url: "https://growlearnhub.com/class-11/online-test/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class11OnlineTestData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-11/online-test/${data.slug}`}
              />
            </div>
          )
        })}
      </div>{" "}
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
