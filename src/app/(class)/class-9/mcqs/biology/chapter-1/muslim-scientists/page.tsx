import React from 'react'
import { Metadata } from 'next'

import { CardQuiz } from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import QuizWrapper from '@/src/components/Wrapper/QuizWrapper'

import { MuslimScientists } from './data'

const data = {
  title: '9th class Biology Mcqs Chapter 1 Muslim Scientists',
  description:
    'Here you can access 9th Class Biology Solved Mcqs Chapter 1 Muslim Scientists are available in this website.',
  canonical: '/class-9/mcqs/biology/chapter-1/muslim-scientists/',
  index: true,
  follow: true,
  image: '/class/class-9/mcqs/biology/chapter-1/muslim-scientists.webp',
  url: 'https://growlearnhub.com/class-9/mcqs/biology/chapter-1/muslim-scientists/',
  keywords: [
    '9th biology chapter 1 mcqs',
    'chapter 1 solved mcqs of biology class 9',
    'chapter 1 biology mcqs class 9th',
    'mcqs class 9 biology chapter 1',
    'mcqs of biology chapter 1 for class 9',
    'biology chapter 1 9th class mcqs',
    'mcq chapter 1 for class 9 biology',
    'mcq of biology chapter 1 class 9',
    'solved mcqs of biology class 9 chapter 1',
    'class 9 biology chapter 1 mcq',
  ],
}

export default function page() {
  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="Quiz"
      b1Link="/class-9/quiz/"
      b2="Punjab Board Biology"
      b2Link="/class-9/quiz/biology/"
      b3="Chapter 1"
      b3Link="/class-9/quiz/biology/chapter-1/"
      b4="Muslim Scientists"
    >
      <p>
        Are you looking for a{' '}
        <strong>
          9th Class Biology Solved mcqs in Chapter 1 with Topic Wise of Muslim
          Scientists
        </strong>
        ? Here, you can access all the mcqs you need for free. Our website
        offers a complete collection of mcqs for students in Class 9, 10, 11,
        and 12. Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <ImageContainer
        image={data.image}
        title={data.title}
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>Class 9 Biology Solved Mcqs Chapter 1 Muslim Scientists</h2>
      <p>
        Here, you can read class 9 Biology Solved Mcqs Chapter 1 Introduction to
        Biology.
      </p>
      <div className="grid gap-4 grid-cols-1">
        {MuslimScientists.map((item: any) => (
          <CardQuiz
            key={item.id}
            title={item.questionName}
            correctOption={item.correctOption}
            link={item.slug}
            list={item.options || ''}
            className=""
          />
        ))}
      </div>
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
