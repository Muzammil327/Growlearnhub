import React from 'react'
import { Metadata } from 'next'
import McqsPoint from '@/src/components/McqsPoint/page'

const data = {
  title: 'Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of physics, chemistry, biology general knowledge of ppsc, css etc.',
  canonical: '/mcqs-point/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/mcqs-point/',
  keywords: [
    'mcqs',
    'mcqs point',
    'mcqs physics',
    'mcqs biology',
    'mcqs chemistry',
    'mcqs general knowledge',
  ],
}

export default function page() {
  return <McqsPoint />
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
