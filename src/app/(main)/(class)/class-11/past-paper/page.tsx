import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import DataClass11PastPaper from './DataClass11PastPaper'

const data = {
  title: '11th Class Past Paper | Class 11',
  description:
    'Class 11 Past Paper providing interactive exams, instant feedback, and performance analytics for effective learning.',
  canonical: '/class-11/past-paper/',
  index: true,
  follow: true,
  image: '/11th/class_11_past_paper.webp',
  url: 'https://growlearnhub.com/class-11/past-paper/',
  keywords: [
    'growlearnhub past paper',
    'growlearnhub class 11 past paper',
    'past paper',
    'class 11 past paper',
    '11th class past paper',
    '11th class growlearnhub past paper',
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
    { name: 'Class 9 Online Test', slug: '/class-9/online-test/' },
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
      b1="11th Class"
      b1Link="/class-11/"
      b2="Past Paper"
      image={data.image}
      clist={data.clist}
    >
      <DataClass11PastPaper />
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