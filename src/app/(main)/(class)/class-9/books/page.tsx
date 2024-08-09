import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: '9th Class Books | Class 9',
  description:
    'Class 9 books page providing essential textbooks, study guides, and reference materials for comprehensive learning.',
  canonical: '/class-9/books/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/class-9/books/',
  keywords: [
    'growlearnhub books',
    'growlearnhub class 9 books',
    'class 9 books',
    '9th class books',
    '9th class growlearnhub books',
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="9th Class"
      b1Link="/class-9/"
      b2="Books"
    >
      {mainData.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-9/books/punjab-board-${data.slug}`}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const mainData = [
  {
    title: 'Punjab Board',
    child: [
      {
        name: 'Biology',
        slug: 'biology',
      },
      {
        name: 'Chemistry',
        slug: 'chemistry',
      },
      {
        name: 'Physics',
        slug: 'physics',
      },
      {
        name: 'Math',
        slug: 'math',
      },
    ],
  },
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
