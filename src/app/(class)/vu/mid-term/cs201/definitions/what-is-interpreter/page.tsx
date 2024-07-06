import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'What is Interpreter | VU CS201 | Definitions',
  description:
    'Interpreters translates the program line by line meaning it reads one line of program and translates it.',
  canonical: '/vu/mid-term/cs201/definitions/what-is-interpreter/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/definitions/what-is-interpreter/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
    'interpreter',
    'what is interpreter',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="What is Interpreters">
      <div className="my-20">
        <h2>What is Interpreter.</h2>
        <p>
          Interpreters translates the program line by line meaning it reads one
          line of program and translates it, then it reads second line,
          translate it and so on.
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
