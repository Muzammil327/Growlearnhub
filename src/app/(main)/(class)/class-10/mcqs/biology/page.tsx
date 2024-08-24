import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: '10th Class Biology Mcqs | Class 10',
  description:
    'Class 10 Biology MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.',
  canonical: '/class-10/mcqs/biology/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/class-10/mcqs/biology/',
  keywords: [
    'growlearnhub biology mcqs',
    'growlearnhub class 10 biology mcqs',
    'class 10 biology mcqs',
    '10th class biology mcqs',
    '10th class growlearnhub biology mcqs',
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Mcqs"
      b1Link="/class-10/mcqs/"
      b2="Biology"
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/mcqs/biology/${data.slug}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  { name: 'Chapter 1', slug: '#' },
  { name: 'Chapter 2', slug: '#' },
  { name: 'Chapter 3', slug: '#' },
  { name: 'Chapter 4', slug: '#' },
  { name: 'Chapter 5', slug: '#' },
  { name: 'Chapter 6', slug: '#' },
  { name: 'Chapter 7', slug: '#' },
  { name: 'Chapter 8', slug: '#' },
  { name: 'Chapter 9', slug: '#' },
]

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
