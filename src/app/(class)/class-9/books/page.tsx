import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/(class)/BookWrapper'

import { class_Book } from '@/src/app/books/type'
import { Class9_Book } from '@/src/app/(class)/class-9/books/data'

const data = {
  title: 'Class 9 Books || GrowLearnHub',
  description:
    'Here you can access class 9 books in english and urdu medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/class-9/books/',
  index: true,
  follow: true,
  image: '/books/class_9_books.webp',
  url: 'https://growlearnhub.com/class-9/books/',
  keywords: [
    'class 9 books',
    'class 9 textbooks',
    'class 9th books',
    '9 class books',
    '9th class books',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Class 9"
      b2="Books"
      b1Link="/class-9/"
      clist={clist}
    >
      <p>
        Are you looking for a <strong>Class 9 book</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 9 Book of all Subjects"
        class="my-4 w-full"
        height={720}
        width={1280}
        priority
      />
      <p>
        Welcome to our Educational Hub, an innovative platform designed for high
        school student in Class 9 to 12, Chartered Accountancy (CA), and Virtual
        University learners to fulfil academic needs. Our mission is to provide
        a one-stop solution for all your educational requirements, empowering
        you to achieve excellence in your studies and professional goals.
      </p>

      {Class9_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 9 Textbooks
            </h2>
            <p>
              Our collection of <strong>Class 9 Textbooks</strong> of Punjab
              Baord encompasses all subjects included Physics, Biology,
              Chemistry, Math, English, Urdu, Pak Study, Islamiat, General Math,
              Computer Science, Economics, Tarjuma Tul Quran, Ikhlaqiat,
              ensuring you have the resources you need to succeed.
            </p>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
              {data.list.map((item: any) => (
                <Card3 key={item.id} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        )
      })}
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
  { title: 'Class 10 Books', link: '/class-10/books/' },
  { title: 'Class 11 Books', link: '/class-11/books/' },
  { title: 'Class 12 Books', link: '/class-12/books/' },

  { title: 'Class 10 Quiz', link: '/class-10/quiz/' },
  { title: 'Class 11 Quiz', link: '/class-11/quiz/' },
  { title: 'Class 12 Quiz', link: '/class-12/quiz/' },

  { title: 'Class 10 Notes', link: '/class-10/notes/' },
  { title: 'Class 11 Notes', link: '/class-11/notes/' },
  { title: 'Class 12 Notes', link: '/class-12/notes/' },

  { title: 'Class 10 Online Tests', link: '/class-10/online-tests/' },
  { title: 'Class 11 Online Tests', link: '/class-11/online-tests/' },
  { title: 'Class 12 Online Tests', link: '/class-12/online-tests/' },

  { title: 'Class 10 Past Papers', link: '/class-10/past-papers/' },
  { title: 'Class 11 Past Papers', link: '/class-11/past-papers/' },
  { title: 'Class 12 Past Papers', link: '/class-12/past-papers/' },

  { title: 'Class 10 Pairing Schemes', link: '/class-10/pairing-schemes/' },
  { title: 'Class 11 Pairing Schemes', link: '/class-11/pairing-schemes/' },
  { title: 'Class 12 Pairing Schemes', link: '/class-12/pairing-schemes/' },
]
