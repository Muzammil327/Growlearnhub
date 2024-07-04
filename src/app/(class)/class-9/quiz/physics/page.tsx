import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import { class_Book } from '@/src/app/books/type'
import { Class9_quiz } from '../data'
import Link from 'next/link'
import QuizWrapper from '../../../QuizWrapper'

const data = {
  title: 'Class 9 Physics Mcqs PDF',
  description:
    'Here you can access class 9 Physics Mcqs in chapter wise and topic Wise in english and urdu medium available in this website.',
  canonical: '/class-9/quiz/physics/',
  index: true,
  follow: true,
  image: '/books/class-9/punjab/class-9-physics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/quiz/physics/',
  keywords: [
    '9 class quiz physics',
    '9 class physics quiz pdf',
    'phy class 9',
    'class 9 physics quiz',
    'class 9th physics quiz pdf',
    'class 9 physics pdf',
    'class nine physics quiz',
    '9th class physics quiz pdf',
  ],
}

export default function page() {
  return (
    <QuizWrapper
      title={data.title}
      url={data.url}
      b1="9 Class"
      b1Link="/class-9/"
      b2="Quiz"
      b2Link="/class-9/quiz/"
      b3="Punjab Board Physics"
      clist={clist}
    >
      <p>
        Are you looking for a{' '}
        <strong>9th Class physics quiz in Chapter Wise and Topic Wise</strong>?
        Here, you can access all the quiz you need for free. Our website offers
        a complete collection of quiz for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access 9th Class Physics Mcqs of english Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>9th Class Physics Quiz English Medium</h2>
      <p>Here, you can read Matric class 9 Physics Mcqs for English Medium.</p>

      <ul>
        <li>
          <Link href="/">Download PDF Chapter 1</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 2</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 3</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 4</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 5</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 6</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 7</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 8</Link>
        </li>
        <li>
          <Link href="/">Download PDF Chapter 9</Link>
        </li>
      </ul>

      {Class9_quiz.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 9 Quiz
            </h3>
            <p>
              Our collection of <strong>9 Class Quiz</strong> of Punjab Baord
              encompasses all subjects included Physics, Biology, Chemistry,
              Math, English, Urdu, Pak Study, Islamiat, General Math, Computer
              Science, Economics, Tarjuma Tul Quran, Ikhlaqiat, ensuring you
              have the resources you need to succeed.
            </p>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        )
      })}
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

const clist = [
  {
    title: 'Class 10 Physics Quiz',
    link: '/class-10/quiz/physics/',
  },
  {
    title: 'Class 10th Chemistry Quiz',
    link: '/class-10/quiz/chemistry/',
  },
  {
    title: '10 class Biology Quiz',
    link: '/class-10/quiz/biology/',
  },
  {
    title: '10th class Math Quiz',
    link: '/class-10/quiz/math/',
  },
  {
    title: 'Class 11 Physics Quiz',
    link: '/class-11/quiz/physics/',
  },
  {
    title: 'Class 11th Chemistry Quiz',
    link: '/class-11/quiz/chemistry/',
  },
  {
    title: '11 class Biology Quiz',
    link: '/class-11/quiz/biology/',
  },
  {
    title: '11th class Math Quiz',
    link: '/class-11/quiz/math/',
  },
  {
    title: 'Class 12 Physics Quiz',
    link: '/class-12/quiz/physics/',
  },
  {
    title: 'Class 12th Chemistry Quiz',
    link: '/class-12/quiz/chemistry/',
  },
  {
    title: '12 class Biology Quiz',
    link: '/class-12/quiz/biology/',
  },
  {
    title: '12th class Math Quiz',
    link: '/class-12/quiz/math/',
  },
]