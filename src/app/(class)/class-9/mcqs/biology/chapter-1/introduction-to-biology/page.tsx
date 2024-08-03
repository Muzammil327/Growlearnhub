import React from 'react'
import { Metadata } from 'next'

import Card3, { CardQuiz } from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import { class_Book } from '@/src/app/books/type'
import { Class9_quiz } from '../../../data'
import QuizWrapper from '../../../../../QuizWrapper'
import { Quiz } from '@/src/components/home/service'
import { IntroductionToBiology } from '../data'

const data = {
  title: 'Class 9 Biology Chapter 1 Mcqs',
  description:
    'Here you can access class 9 Biology Mcqs in chapter wise and topic Wise in english and urdu medium available in this website.',
  canonical: '/class-9/quiz/biology/',
  index: true,
  follow: true,
  image: '/books/class-9/punjab/class-9-physics-book-punjab-board.webp',
  url: 'https://growlearnhub.com/class-9/quiz/biology/',
  keywords: [
    '9 class quiz biology',
    '9 class biology quiz pdf',
    'phy class 9',
    'class 9 biology quiz',
    'class 9th biology quiz pdf',
    'class 9 biology pdf',
    'class nine biology quiz',
    '9th class biology quiz pdf',
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
      b3="Punjab Board Biology"
      b3Link="/class-9/quiz/biology/"
      b4="Chapter 1"
    >
      <p>
        Are you looking for a{' '}
        <strong>9th Class Biology quiz in Chapter Wise and Topic Wise</strong>?
        Here, you can access all the quiz you need for free. Our website offers
        a complete collection of quiz for students in Class 9, 10, 11, and 12.
        Whether you&apos;re preparing for exams or need extra resources,
        we&apos;ve got you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access 9th Class Biology Mcqs of english Medium"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />

      <h2>9th Class Biology Quiz Chapter 1</h2>
      <p>Here, you can read Matric class 9 Biology Mcqs for English Medium.</p>
      <div className="grid gap-4 grid-cols-1">
        {IntroductionToBiology.map((item: any) => (
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
