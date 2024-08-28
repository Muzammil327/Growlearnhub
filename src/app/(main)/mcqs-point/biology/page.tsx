import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Biology Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of biology like cell devision, tissue, organ, plant and animal and human.',
  canonical: '/mcqs-point/biology/',
  index: true,
  follow: true,
  image: '/mcqs-point/biology/biology-mcqs-point.png',
  url: 'https://growlearnhub.com/mcqs-point/biology/',
  keywords: ['mcqs', 'quiz', 'mcqs biology', 'biology mcqs'],
  b1: 'Mcqs Point',
  b2: 'Biology',
  b1Link: '/mcqs-point/',
  clist: [],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1={data.b1}
      b1Link={data.b1Link}
      b2={data.b2}
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: any) => (
          <CardSmall
            key={book.name}
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

const BookSubjectData = [
  {
    name: 'Skeletal System',
    slug: 'skeletal-system',
  },
]
