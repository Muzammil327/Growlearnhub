import React from "react"
import type { Metadata } from "next"
import BlogView from "@/src/components/blogs/BlogView"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "Blogs || Growlearnhub",
  description:
    "Growlearnhub provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/blogs/",
  index: true,
  follow: true,
  image: "/blogs.webp",
  url: "https://growlearnhub.com/blogs/",
  keywords: [
    "blog post",
    "muzblogs blog post",
    "blog with muzammil blog post",
    "muzammil blog blog post",
    "muzammil with blog blog post"
  ],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Blogs"
    }
  ]
}
export default function page() {
  return (
    <SimpleWrapper data={data}>
      <BlogView />
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
