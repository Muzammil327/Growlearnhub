import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import DataClass12Mcqs from '../DataClass12Mcqs'

const data = {
  title: '12th Class Chemistry Mcqs | Class 12',
  description:
    'Class 12 Chemistry MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.',
  canonical: '/class-12/mcqs/chemistry/',
  index: true,
  follow: true,
  image: '/12th/mcqs/class_12_chemistry_mcqs.webp',
  url: 'https://growlearnhub.com/class-12/mcqs/chemistry/',
  keywords: [
    'growlearnhub chemistry mcqs',
    'growlearnhub class 12 chemistry mcqs',
    'class 12 chemistry mcqs',
    '12th class chemistry mcqs',
    '12th class growlearnhub chemistry mcqs',
  ],
  clist: [
    { name: 'Class 9 Books', slug: '/class-9/books/' },
    { name: 'Class 10 Books', slug: '/class-10/books/' },
    { name: 'Class 11 Books', slug: '/class-11/books/' },
    { name: 'Class 12 Books', slug: '/class-12/books/' },
    { name: 'Class 10 Mcqs', slug: '/class-10/mcqs/' },
    { name: 'Class 11 Mcqs', slug: '/class-11/mcqs/' },
    { name: 'Class 12 Mcqs', slug: '/class-12/mcqs/' },
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
    { name: 'Class 11 Online Test', slug: '/class-11/online-test/' },
    { name: 'Class 10 Online Test', slug: '/class-10/online-test/' },
    { name: 'Class 12 Online Test', slug: '/class-12/online-test/' },
  ],
}

export default function Page() {
  return (
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Mcqs"
      b1Link="/class-12/mcqs/"
      b2="Chemistry"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-12/mcqs/chemistry/${data.slug}`}
            />
          )
        })}
      </div>
      <DataClass12Mcqs />
    </SimpleWrapper >
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
