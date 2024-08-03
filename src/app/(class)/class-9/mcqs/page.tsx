import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import { class_Book } from '@/src/app/books/type'
import { Class9_quiz } from '@/src/app/(class)/class-9/mcqs/data'
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

      {Class9_quiz.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 9 Quiz
            </h2>
            <p>
              Our collection of <strong>9th Class Quiz</strong> of Punjab Baord
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
