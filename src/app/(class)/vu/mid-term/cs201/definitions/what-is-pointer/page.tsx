import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'What is Pointer | VU CS201 | Definitions',
  description:
    'Pointer is a special type of variable that contains a memory address. It is not a variable that contains a value.',
  canonical: '/vu/mid-term/cs201/definitions/what-is-pointer/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/definitions/what-is-pointer/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'cs201 definitions',
    'mid term cs201',
    'mid term cs201 definitions',
    'pointer',
    'what is pointer',
  ],
}
export default function Page() {
  return (
    <VUWrapper title="What is Pointer">
      <div className="my-20">
        <h2>What is Pointer.</h2>
        <p>
          Pointer is a special type of variable that contains a memory address.
          It is not a variable that contains a value, rather an address of the
          memory that is contained inside a pointer variable.
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
