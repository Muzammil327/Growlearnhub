'use client'
import QuizPercentage from './Quiz'
import GDBPercentage from './GDB'
import MidPercentage from './mid'
import AssignmentPercentage from './Assignment'
import { useState } from 'react'
import Button from '@/src/components/ui/Button'
import VUWrapper from '../VUWrapper'
import { Metadata } from 'next'

const data = {
  title: 'VU Mark Calculator Grow Learn Hub',
  description:
    'Here you can calculate mark by mark calculator, which marks are required in final exam to complete the semester.',
  canonical: '/vu/mid-mark-calculator/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-mark-calculator/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid mark calculator',
    'vu mid term',
    'calculator',
  ],
}

export default function Page() {
  const [calculatedAssignment, setCalculatedAssignment] = useState<number>(0)
  const [calculatedQuiz, setCalculatedQuiz] = useState<number>(0)
  const [calculatedGDB, setCalculatedGDB] = useState<number>(0)
  const [calculatedMid, setCalculatedMid] = useState<number>(0)

  const totalSum =
    calculatedAssignment + calculatedMid + calculatedGDB + calculatedQuiz
  const roundedTotalSum = totalSum.toFixed(2) // Round to 2 decimal places

  return (
    <VUWrapper title="VU Marks Calculator">
      <div className="my-10">
        <QuizPercentage
          calculatedQuiz={calculatedQuiz}
          setCalculatedQuiz={setCalculatedQuiz}
        />
        <GDBPercentage
          calculatedGDB={calculatedGDB}
          setCalculatedGDB={setCalculatedGDB}
        />
        <AssignmentPercentage
          calculatedAssignment={calculatedAssignment}
          setCalculatedAssignment={setCalculatedAssignment}
        />
        <MidPercentage
          calculatedMid={calculatedMid}
          setCalculatedMid={setCalculatedMid}
        />
        <Button className={'btn w-full mt-5'}>{roundedTotalSum}</Button>
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
