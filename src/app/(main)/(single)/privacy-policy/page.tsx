import React from "react"
import Simplewrapper from "@/src/components/wrapper/Simplewrapper"
import { Metadata } from "next"

const data = {
  title: "Privacy Policy | Growlearnhub",
  description: "",
  image: "/single/privacy_policy.webp",
  keywords: ["growlearnhub", "growlearnhub privacy policy", "privacy policy"],
  canonical: "/privacy-policy/",
  url: "https://growlearnhub.com/privacy-policy/",
  index: false,
  follow: false,
}

export default function page() {
  return <Simplewrapper data={data}></SimpleWrapper>
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
