import React from "react"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import { Metadata } from "next"

const data = {
  title: "User Experience | Growlearnhub",
  description: "",
  image: "/single/user_experience.webp",
  keywords: ["growlearnhub", "growlearnhub user experience", "user experience"],
  canonical: "/user-experience/",
  url: "https://growlearnhub.com/user-experience/",
  index: true,
  follow: true,
}

export default function page() {
  return <Simplewrapper data={data}></Simplewrapper>
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
