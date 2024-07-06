import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'What is Program | VU CS201 | Definitions',
  description:
    'A program is a precise sequence of steps to solve a particular problem.',
  canonical: '/vu/mid-term/cs201/definitions/what-is-program/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/definitions/what-is-program/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
    'program',
    'what is program',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="What is Program">
      <div className="my-20">
        <h2>What is Program.</h2>
        <p>
          A program is a precise sequence of steps to solve a particular
          problem.
        </p>
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
