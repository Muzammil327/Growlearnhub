import React from 'react'
import { Metadata } from 'next'

import ImageContainer from '@/src/components/element/image'

import QuizWrapper from '@/src/components/Wrapper/QuizWrapper'

const data = {
  title: '9th class Solved Mcqs Chapter Wise',
  description:
    'Here you can access class 9 quiz in english medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/class-9/mcqs/',
  index: true,
  follow: true,
  image: '/class/class-9/mcqs/9th-solved-mcqs-chapter-wise.webp',
  url: 'https://growlearnhub.com/class-9/mcqs/',
  keywords: [
    'mcqs',
    'class 9 mcqs',
    'class 9th mcqs',
    '9th class mcqs',
    '9th class chapter wise mcqs',
    'mcqs for class 9',
    'mcqs class 9',
  ],
}

export default function page() {
  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="9th Class"
      b1Link="/class-9/"
      b2="Mcqs"
    >
      <p>
        Are you looking for a <strong>9 Class Quiz</strong>? Here, you can
        access all the quiz you need for free. Our website offers a complete
        collection of quiz for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Quiz of all Subjects"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />
    </QuizWrapper>
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
