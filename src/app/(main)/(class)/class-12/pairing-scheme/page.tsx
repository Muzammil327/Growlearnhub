import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { Class12PairingSchemeData } from "@/src/data/class12"

const data = {
  title: "12th Class Pairing Scheme | Class 12",
  description:
    "Class 12 Pairing Scheme providing interactive exams, instant feedback, and performance analytics for effective learning.",
  keywords: [
    "growlearnhub pairing scheme",
    "growlearnhub class 12 pairing scheme",
    "pairing scheme",
    "class 12 pairing scheme",
    "12th class pairing scheme",
    "12th class growlearnhub pairing scheme"
  ],
  image: "/12th/class_12_pairing_scheme.webp",
  canonical: "/class-12/pairing-scheme/",
  url: "https://growlearnhub.com/class-12/pairing-scheme/",
  index: true,
  follow: true,
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="grid gap-4 grid-cols-1 my-5">
        {Class12PairingSchemeData.map((data: any, index) => {
          return (
            <div key={index}>
              <Heading2 className="">{data.title}</Heading2>
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
                {data.child.map((data: any) => {
                  return (
                    <CardSmall
                      key={data.name}
                      title={data.name}
                      link={`class-12/pairing-scheme/${data.slug}`}
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