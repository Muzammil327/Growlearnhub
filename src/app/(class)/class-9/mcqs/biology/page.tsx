import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import ImageContainer from '@/src/components/element/image'

import QuizWrapper from '@/src/components/Wrapper/QuizWrapper'

const data = {
  title: '9th class Biology Solved Mcqs Chapter Wise',
  description:
    'Here you can access 9th Class Biology Solved Mcqs Chapter Wise and also Topic Wise like other chemistry physics and math available in this website.',
  canonical: '/class-9/mcqs/biology/',
  index: true,
  follow: true,
  image: '/class/class-9/mcqs/9th-biology-solved-mcqs-chapter-wise.webp',
  url: 'https://growlearnhub.com/class-9/mcqs/biology/',
  keywords: [
    'mcqs of biology for class 9',
    'biology mcqs class 9th',
    'biology 9th class mcqs',
    '9th biology chapter wise mcqs',
    'mcqs class 9 biology',
    'mcq for class 9 biology',
    'mcq of biology class 9',
    'solved mcqs of biology class 9',
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
      b2Link="/class-9/mcqs/"
      b3="Biology"
    >
      <p>
        Are you looking for a
        <strong>9th Class biology mcqs in Chapter Wise and Topic Wise</strong>?
        Here, you can access all the mcqs you need for free. Our website offers
        a complete collection of mcqs for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>

      <ImageContainer
        image={data.image}
        title={data.description}
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>Class 9 Biology Solved Mcqs Chapter Wise</h2>
      <p>
        Here, you can read <b>class 9 Biology Mcqs Chapter Wise</b>. These Mcqs
        are also sub-divided to topic wise.
      </p>

      <ul>
        {chapter.map((index) => {
          return (
            <li key={index}>
              <Link href={`/class-9/mcqs/biology/chapter-${index}`}>
                Chapter {index} Biology Solved Mcqs
              </Link>
            </li>
          )
        })}
      </ul>

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
const chapter = ['1']
