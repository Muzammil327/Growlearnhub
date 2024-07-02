import React from 'react'
import { Metadata } from 'next'

import Card2 from '@/src/components/card2/page'
import BookWrapper from '@/src/app/(class)/BookWrapper'

import { Books } from '@/src/app/books/type'

const data = {
  title: 'Complete Guide to Class 12 | Resources and Tips for 9th Class',
  description:
    'Explore everything you need to know about Class 12 , including syllabus details, study materials, and exam preparation tips for 9th class students.',
  canonical: '/class-12/',
  index: true,
  follow: true,
  image: '/class_9.webp',
  url: 'https://growlearnhub.com/class-12/',
  keywords: [
    'growlearnhub',
    'class 12',
    'class 12 books',
    'class 12 notes',
    'class 12 Past Paper',
    'class 12 quiz',
    'class 12 online test',
    'class 12 pairing scheme',
  ],
  BookDatas: [
    {
      id: 0,
      title: 'Class 12 Books',
      link: '/class-12/books/',
      para: 'Here you can download the class 12 all books of different boards.',
      image: '/books/class_9_books.webp',
    },
    {
      id: 1,
      title: 'Class 12 Notes',
      link: '/notes/class-12/',
      para: 'Here you can download the class 12 all notes of different boards.',
      image: '/notes/class_9_notes.webp',
    },
    {
      id: 2,
      title: 'Class 12 Past Paper',
      link: '/past-papers/class-12/',
      para: 'Here you can download the class 12 all past paper of different boards.',
      image: '/past-paper/class_9_past_paper.webp',
    },
    {
      id: 3,
      title: 'Class 12 Quiz',
      link: '/quiz/class-12/',
      para: 'Here you can download the class 12 all quiz of different boards.',
      image: '/quiz/class_9_quiz.webp',
    },
    {
      id: 4,
      title: 'Class 12 Online Tests',
      link: '/online-tests/class-12/',
      para: 'Here you can download the class 12 all online tests of different boards.',
      image: '/online-tests/class_9_online_tests.webp',
    },
    {
      id: 5,
      title: 'Class 12 Pairing Schemes',
      link: '/pairing-schemes/class-12/',
      para: 'Here you can download the class 12 all pairing schemes of different boards.',
      image: '/pairing-schemes/class_9_pairing_schemes.webp',
    },
  ],
  link1: '/',
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 12"
      link1={data.link1}
      clist={clist}
    >
      <h2>📚 12th class</h2>

      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
        {data.BookDatas.map((data: Books) => (
          <Card2
            key={data.id}
            title={data.title}
            link={data.link}
            para={data.para}
            image={data.image}
          />
        ))}
      </div>
    </BookWrapper>
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
  { title: 'Class 9 Books', link: '/class-9/books/' },
  { title: 'Class 10 Books', link: '/class-10/books/' },
  { title: 'Class 11 Books', link: '/class-11/books/' },

  { title: 'Class 9 Quiz', link: '/class-9/quiz/' },
  { title: 'Class 10 Quiz', link: '/class-10/quiz/' },
  { title: 'Class 11 Quiz', link: '/class-11/quiz/' },

  { title: 'Class 9 Notes', link: '/class-9/notes/' },
  { title: 'Class 10 Notes', link: '/class-10/notes/' },
  { title: 'Class 11 Notes', link: '/class-11/notes/' },

  { title: 'Class 9 Online Tests', link: '/class-9/online-test/' },
  { title: 'Class 10 Online Tests', link: '/class-10/online-test/' },
  { title: 'Class 11 Online Tests', link: '/class-11/online-test/' },

  { title: 'Class 9 Past Papers', link: '/class-9/past-papers/' },
  { title: 'Class 10 Past Papers', link: '/class-10/past-papers/' },
  { title: 'Class 11 Past Papers', link: '/class-11/past-papers/' },

  { title: 'Class 9 Pairing Schemes', link: '/class-9/pairing-schemes/' },
  { title: 'Class 10 Pairing Schemes', link: '/class-10/pairing-schemes/' },
  { title: 'Class 11 Pairing Schemes', link: '/class-11/pairing-schemes/' },
]
