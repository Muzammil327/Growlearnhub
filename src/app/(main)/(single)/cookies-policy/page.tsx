import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { Metadata } from "next"

const data = {
  title: "Cookies Policy | Growlearnhub",
  canonical: "/cookies-policy/",
  url: "https://growlearnhub.com/cookies-policy/",
  description: "",
  index: true,
  follow: true,
  image: "/single/cookies_policy.webp",
  keywords: ["growlearnhub", "growlearnhub cookies policy", "cookies policy"],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Cookies Policy"
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
