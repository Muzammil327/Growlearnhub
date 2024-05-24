import React from "react";
import ViewPost from "@/src/views/posts";
import type { Metadata } from "next";

const data = {
  title: "Blog Post || MuzBlogs",
  description:
    "MuzBlogs provides programming solutions, tips, and latest techniques to optimize your code and tackle common coding challenges.",
  canonical: "/posts",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://muzblogs.vercel.app/posts",
  keywords: [
    "blog post",
    "muzblogs blog post",
    "blog with muzammil blog post",
    "muzammil blog blog post",
    "muzammil with blog blog post",
  ],
};
export default function page() {
  return (
    <main className="my-20">
      <ViewPost />
    </main>
  );
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
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
};
