import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'
import { Metadata } from 'next'

const data = {
  title: 'VU CS302 Mid Term Chapter 2 Mcqs',
  description:
    'Here you get cs302 mid term chapter 2 mcqs chapter wise, definitions, important  and further more in this platform.',
  canonical: '/vu/mid-term/cs302/mcqs/chapter-2/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs302/mcqs/chapter-2/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs302',
    'mcqs',
    'chapter 2',
    'cs302 mcqs',
    'cs302 mcqs chapter 2',
    'mid term cs302',
    'mid term mcqs cs302',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term MCQ's Chapter 2">
      <div className="my-20">
        <div className="flex justify-between items-center">
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/chapter-2/">
            Chapter 2
          </Link>
          <Link className="btn" href="/vu/mid-term/cs302/mcqs/chapter-3/">
            Chapter 3
          </Link>
        </div>
      </div>
    </VUWrapper>
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