import React from 'react'
import { Metadata } from 'next'
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import DataClass9PastPaper from '../DataClass9PastPaper'

const data = {
  title: '9th Class Faisalabad Board Chemistry Past Paper',
  description:
    'Class 9 faislabad board chemistry past paper providing interactive exams, instant feedback, and performance analytics for effective learning.',
  canonical: '/class-9/past-paper/faisalabad-board-chemistry/',
  index: true,
  follow: true,
  image: '/9th/past-paper/class_9_chemistry_past_paper.webp',
  url: 'https://growlearnhub.com/class-9/past-paper/faisalabad-board-chemistry/',
  keywords: [
    'growlearnhub faisalabad board chemistry past paper',
    'growlearnhub class 9 faisalabad board chemistry past paper',
    'faisalabad board chemistry past paper',
    'class 9 faisalabad board chemistry past paper',
    '9th class faisalabad board chemistry past paper',
    '9th class growlearnhub faisalabad board chemistry past paper',
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
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Past Paper"
      b1Link="/class-9/past-paper/"
      b2="Faisalabad Board Chemistry"
      image={data.image}
      clist={data.clist}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/past-paper/faisalabad-board-chemistry/${data.slug}`}
            />
          )
        })}
      </div>
      <DataClass9PastPaper />
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
