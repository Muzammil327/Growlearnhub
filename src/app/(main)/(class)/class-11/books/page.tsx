import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import DataClass11Book from './DataClass11Book'

const data = {
  title: '11th Class Books | Class 11',
  description:
    'Class 11 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.',
  canonical: '/class-11/books/',
  index: true,
  follow: true,
  image: '/class/class-11/class_11_books.webp',
  url: 'https://growlearnhub.com/class-11/books/',
  keywords: [
    'growlearnhub books',
    'growlearnhub class 11 books',
    'class 11 books',
    '11th class books',
    '11th class growlearnhub books',
  ],
  clist: [
    { name: 'Class 9 Books', slug: '/class-9/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 12 Books', slug: '/class-12/books/' },
    { name: 'Class 9 Mcqs', slug: '/class-9/mcqs/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
  b1: "9th Class"
}

export default function Page() {
  return (
    <SimpleWrapper
      data={data}
    >
      <DataClass11Book />
    </SimpleWrapper >
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
}
