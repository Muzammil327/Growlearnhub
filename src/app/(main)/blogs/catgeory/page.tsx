import React from "react"
import type { Metadata } from "next"
import BlogCatgeoryView from "@/src/components/blogs/BlogCatgeoryView"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "Blogs Catgeory || Growlearnhub",
  description:
    "MuzBlogs provides blogs on the catgeory og programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/blogs/catgeory/",
  index: true,
  follow: true,
  image: "/opengraph-image.webp",
  url: "https://growlearnhub.com/blogs/catgeory/",
  keywords: [
    "catgeory us",
    "muzblogs catgeory us",
    "blog with muzammil catgeory us",
    "muzammil blog catgeory us",
    "muzammil with blog catgeory us"
  ],
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Blogs",
      link: "/blogs"
    },
    {
      title: "Catgeory"
    }
  ]
}

export default function page() {
  return (
    <SimpleWrapper data={data}>
      <BlogCatgeoryView />
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
