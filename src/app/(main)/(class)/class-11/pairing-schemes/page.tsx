import React from "react"
import type { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"

const data = {
  title: "Class 11 Pairing Scheme || Growlearnhub",
  description: "",
  canonical: "/class-11/pairing-scheme/",
  index: true,
  follow: true,
  image: "/pairing_scheme/class_11_pairing_scheme.webp",
  url: "https://growlearnhub.com/class-11/pairing-scheme/",
  keywords: [
    "growlearnhub",
    "growlearnhub pairing scheme",
    "class 11 pairing Scheme"
  ],
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Class 11", link: "/class-11/" },
    { title: "Pairing Scheme" }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <Heading2 variant="black">Book Wise Pairing Scheme</Heading2>
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
