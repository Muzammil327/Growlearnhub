import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'What is Compiler | VU CS201 | Definitions',
  description:
    'Compiler read the whole program and translates it into machine language completely.',
  canonical: '/vu/mid-term/cs201/definitions/what-is-compiler/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/definitions/what-is-compiler/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
    'compiler',
    'what is compiler',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="What is Compiler">
      <div className="my-20">
        <h2>What is Compiler.</h2>
        <p>
          Compiler read the whole program and translates it into machine
          language completely.
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
