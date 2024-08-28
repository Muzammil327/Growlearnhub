import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

const data = {
  title: 'Biology Class 12 Book PDF | 12th Class Punjab Text Book',
  description:
    'Download the official Biology Class 12 textbook PDF by Punjab Board. This comprehensive guide covers the entire syllabus with clear explanations and detailed diagrams, perfect for exam preparation.',
  canonical: '/class-12/books/',
  index: true,
  follow: true,
  image: '/class/class-12/class_12_books.webp',
  url: 'https://growlearnhub.com/class-12/books/',
  keywords: [
    'biology class 12 punjab text book pdf',
    'class 12 biology book pdf punjab board',
    '12th class biology punjab text book',
    'biology book class 12 punjab board',
    'class 12 biology book punjab board',
  ],
  clist: [
    { name: 'Class 9 Books', slug: '/class-9/books/' },
    { name: 'Class 10 Books', slug: '/class-10/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 9 Mcqs', slug: '/class-9/mcqs/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="12th Class"
      b1Link="/class-12/"
      b2="Books"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-12/${data.slug}/`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const mainData = [
  {
    name: 'Biology',
    slug: '#',
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
