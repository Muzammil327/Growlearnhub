import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import QuizWrapper from '@/src/components/Wrapper/QuizWrapper'

const data = {
  title: '9th class Biology Solved Mcqs Chapter 1',
  description:
    'Here you can access 9th Class Biology Solved Mcqs Chapter 1 and also Topic Wise like other chemistry physics and math available in this website.',
  canonical: '/class-9/mcqs/biology/chapter-1',
  index: true,
  follow: true,
  image: '/class/class-9/mcqs/biology/9th-biology-solved-mcqs-chapter-1.webp',
  url: 'https://growlearnhub.com/class-9/mcqs/biology/chapter-1',
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
      b1="9th Class"
      b1Link="/class-9/"
      b2="Mcqs"
      b2Link="/class-9/mcqs/"
      b3="Biology"
      b3Link="/class-9/mcqs/biology/"
      b4="Chapter 1"
    >
      <p>
        Are you looking for a{' '}
        <strong>9th Class Biology quiz in Chapter 1 and Topic Wise</strong>?
        Here, you can access all the quiz you need for free. Our website offers
        a complete collection of quiz for students in Class 9, 10, 11, and 12.
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

      <h2>9th Class Solved Biology Mcqs Chapter 1</h2>
      <p>Here, you can read class 9 Biology Mcqs in topic wise.</p>
      <div className="grid gap-4 grid-cols-1">
        {quiz.map((item: any) => (
          <Card3
            key={item.id}
            title={item.name}
            link={item.slug}
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

const quiz = [
  {
    id: '0',
    name: 'Introduction To Biology',
    slug: 'introduction-to-biology',
  },
  {
    id: '1',
    name: 'Muslim Scientists',
    slug: 'muslim-scientists',
  },
  {
    id: '2',
    name: 'Levels Of Organization',
    slug: 'levels-of-organization',
  },
]
