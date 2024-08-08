import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: 'Physics Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of physics like optics, electromagnetism, thermodynamics, quantum physics, and mechanics.',
  canonical: '/mcqs-point/physics/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/mcqs-point/physics/',
  keywords: ['mcqs', 'mcqs physics'],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="Physics"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`${data.canonical}${book.slug}`}
          />
        ))}
      </div>
    </Wrapper>
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
    name: '',
    slug: '',
  },
]
