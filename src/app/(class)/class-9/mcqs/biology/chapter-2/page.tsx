import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'

import { class_Book } from '@/src/app/books/type'
import { Class9_quiz } from '@/src/app/(class)/class-9/mcqs/data'
import QuizWrapper from '@/src/components/Wrapper/QuizWrapper'

const data = {
  title: '9th class Biology Solved Mcqs Chapter 2',
  description:
    'Here you can access 9th Class Biology Solved Mcqs Chapter 2 and also Topic Wise like other chemistry physics and math available in this website.',
  canonical: '/class-9/mcqs/biology/chapter-2',
  index: true,
  follow: true,
  image: '/class/class-9/mcqs/biology/9th-biology-solved-mcqs-chapter-2.webp',
  url: 'https://growlearnhub.com/class-9/mcqs/biology/chapter-2',
  keywords: [
    '9th biology chapter 2 mcqs',
    'chapter 2 solved mcqs of biology class 9',
    'chapter 2 biology mcqs class 9th',
    'mcqs class 9 biology chapter 2',
    'mcqs of biology chapter 2 for class 9',
    'biology chapter 2 9th class mcqs',
    'mcq chapter 2 for class 9 biology',
    'mcq of biology chapter 2 class 9',
    'solved mcqs of biology class 9 chapter 2',
    'class 9 biology chapter 2 mcq',
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
      b4="Chapter 2"
    >
      <p>
        Are you looking for a{' '}
        <strong>9th Class Biology quiz in Chapter 2 and Topic Wise</strong>?
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

      <h2>9th Class Solved Biology Mcqs Chapter 2</h2>
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
      {Class9_quiz.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h3 className="text-xl font-semibold py-2">
              {data.name} Class 9 Quiz
            </h3>
            <p>
              Our collection of <strong>9th Class Solved Quiz</strong>{' '}
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
const quiz = [
  {
    id: '0',
    name: 'Biological Method',
    slug: 'biological-method',
  },
  {
    id: '1',
    name: 'Data Organization and Data Analysis',
    slug: 'data-organization-and-data-analysis',
  },
  {
    id: '2',
    name: 'Mathematics: As An Integral Part of Scientific Process',
    slug: 'mathematics-as-an-integral-part-of-scientific-process',
  },
]


