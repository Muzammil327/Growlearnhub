import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import DataClass10OnlineTest from '../DataClass10OnlineTest'

const data = {
  title: '10th Class Biology Online Test | Class 10',
  description:
    'Class 10 biology online test page providing interactive exams, instant feedback, and performance analytics for effective learning.',
  canonical: '/class-10/online-test/biology/',
  index: true,
  follow: true,
  image: '/10th/online-test/class_10_biology_online_test.webp',
  url: 'https://growlearnhub.com/class-10/online-test/biology/',
  keywords: [
    'growlearnhub biology online test',
    'growlearnhub class 10 biology online test',
    'biology online test',
    'class 10 biology online test',
    '10th class biology online test',
    '10th class growlearnhub biology online test',
  ],
  clist: [
    { name: 'Class 9 Books', slug: '/class-9/books/' },
    { name: 'Class 10 Books', slug: '/class-10/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 12 Books', slug: '/class-12/books/' },
    { name: 'Class 9 Mcqs', slug: '/class-9/mcqs/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Online Test"
      b1Link="/class-10/online-test/"
      b2="Biology"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/online-test/biology/${data.slug}`}
            />
          )
        })}
      </div>
      <DataClass10OnlineTest />
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
