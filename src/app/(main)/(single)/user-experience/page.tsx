import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "User Experience | Growlearnhub",
  canonical: "/user-experience/",
  url: "https://growlearnhub.com/user-experience/",
  description: "",
  index: true,
  follow: true,
  image: "/single/user_experience.webp",
  keywords: ["growlearnhub", "growlearnhub user experience", "user experience"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "User Experience"
    }
  ]
}

export default function page() {
  return <SimpleWrapper data={data}></SimpleWrapper>
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