import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "General Knowledge MCQs on India - Test Your Knowledge",
  description: "",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/mcqs-point/general-knowledge/india/",
  keywords: [],
  canonical: "mcqs-point/general-knowledge/india/",
  image: "/mcqs-point.webp",
  breadcrumbs: [
    { title: "Home", link: "/" },
    { title: "Mcqs Point", link: "/mcqs-point" },
    {
      title: "General Knowledge",
      link: `/mcqs-point/general-knowledge/`
    },
    { title: "India" }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      
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
