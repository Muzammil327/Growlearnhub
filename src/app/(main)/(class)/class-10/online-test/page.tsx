import React from "react"
import { Metadata } from "next"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Class10OnlineTestData } from "@/src/data/class10"

const data = {
  title: "10th Class Online Test | Class 10",
  description:
    "Class 10 online test page providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub online test",
    "growlearnhub class 10 online test",
    "online test",
    "class 10 online test",
    "10th class online test",
    "10th class growlearnhub online test"
  ],
  image: "/10th/class_10_online_test.webp",
  canonical: "/class-10/online-test/",
  url: "https://growlearnhub.com/class-10/online-test/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <Simplewrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class10OnlineTestData.map((data: any, index) => {
          return (
            <div key={index}>
              <CardSmall
                key={data.name}
                title={data.name}
                link={`class-10/online-test/${data.slug}`}
              />
            </div>
          )
        })}
      </div>{" "}
    </Simplewrapper>
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
