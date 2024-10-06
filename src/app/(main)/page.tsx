import React from "react"
import type { Metadata } from "next"
import HomeView from "@/src/components/home/page"

const data = {
  title: "GrowLearnHub: Your Path to Continuous Learning",
  description:
    "Join GrowLearnHub for a transformative learning experience. Access diverse resources, courses, and a vibrant community dedicated to personal and professional growth.",
  canonical: "/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/",
  keywords: [
    "growlearnhub",
    "growlearnhub class 9",
    "growlearnhub class 10",
    "growlearnhub class 11",
    "growlearnhub class 12",
    "growlearnhub vu",
    "growlearnhub mcqs",
    "growlearnhub books",
    "growlearnhub online test",
    "growlearnhub past paper",
    "growlearnhub pairing scheme"
  ]
}

export default function Home() {
  return <HomeView />
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
        url: "https://nextjs.org/og.png",
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
      url: "https://nextjs.org/og.png",
      alt: data.title
    }
  }
}
