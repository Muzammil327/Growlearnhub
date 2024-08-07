import React from 'react'
import MPSubject from '@/src/components/McqsPoint/MPSubject/page'
import { Metadata } from 'next'

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: 'Chemistry Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of chemistry like physical, analytical, biochemistry, organic and inorganic chemistry.',
  canonical: '/mcqs-point/chemistry/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/mcqs-point/chemistry/',
  keywords: ['mcqs', 'mcqs chemistry'],
}

export default function Page() {
  return (
    <MPSubject
      BookSubjectData={BookSubjectData}
      title={data.title}
      url={data.canonical}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="Chemistry"
    />
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
        url: 'https://nextjs.org/og.png',
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
      url: 'https://nextjs.org/og.png',
      alt: data.title,
    },
  },
}

const BookSubjectData: Subject[] = [
  {
    id: 0,
    name: 'Physics',
    slug: 'physics',
  },
]
