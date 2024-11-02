import React from "react"
import type { Metadata } from "next"
import BlogTagView from "@/src/components/blogs/BlogTagView"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

const data = {
  title: "Blog Tags || Growlearnhub",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/blogs/tag/",
  index: true,
  follow: true,
  image: "/opengraph-image.webp",
  url: "https://growlearnhub.com/blogs/tag/",
  keywords: [
    "tag",
    "muzblogs tag",
    "blog with muzammil tag",
    "muzammil blog tag",
    "muzammil with blog tag"
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
      title: "Tags"
    }
  ]
}
export default function page() {
  return (
    <SimpleWrapper data={data}>
      <BlogTagView />
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
