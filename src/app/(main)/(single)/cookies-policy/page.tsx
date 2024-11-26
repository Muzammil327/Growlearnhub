import React from "react"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import { Metadata } from "next"

const data = {
  title: "Cookies Policy | Growlearnhub",
  description: "",
  image: "/single/cookies_policy.webp",
  keywords: ["growlearnhub", "growlearnhub cookies policy", "cookies policy"],
  canonical: "/cookies-policy/",
  url: "https://growlearnhub.com/cookies-policy/",
  index: false,
  follow: false,
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
