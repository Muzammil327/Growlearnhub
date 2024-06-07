import React from 'react'
import { Metadata } from 'next'

import Card3 from '@/src/components/card2/card3'
import ImageContainer from '@/src/components/element/image'
import BookWrapper from '@/src/app/books/BookWrapper'

import { class_Book } from '@/src/app/books/type'
import { Class10_Book } from '@/src/app/books/class-10/data'
import Link from 'next/link'

const data = {
  title: 'Class 10 Books || GrowLearnHub',
  description:
    'Here you can access class 10 books in english and urdu medium of all subjects like physics, chemistry biology and math available in this website.',
  canonical: '/books/class-10/',
  index: true,
  follow: true,
  image: '/books/class_10_books.webp',
  url: 'https://growlearnhub.com/books/class-10/',
  keywords: [
    'class 10 books',
    'class 10 textbooks',
    'class 10th books',
    '10 class books',
    '10th class books',
  ],
}

export default function page() {
  return (
    <BookWrapper
      title={data.title}
      url={data.url}
      b1="Books"
      b2="Class 10"
      b1Link="/books/"
      image={data.image}
    >
      <p>
        Are you looking for a <strong>Class 10 book</strong>? Here, you can
        access all the books you need for free. Our website offers a complete
        collection of books for students in Class 9, 10, 11, and 12. Whether
        you&apos;re preparing for exams or need extra resources, we&apos;ve got
        you covered.
      </p>
      <ImageContainer
        image={data.image}
        title="Access Class 10 Book of all Subjects"
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

      {Class10_Book.map((data: class_Book) => {
        return (
          <div key={data.name}>
            <h2 className="text-xl font-semibold py-2">
              {data.name} Class 10 Textbooks
            </h2>
            <p>
              Our collection of <strong>Class 10 Textbooks</strong> of Punjab
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

      <div>
        <h2>Additional Resources Class 10</h2>
        <ul>
          <li>
            <Link href="/notes/">Class 10 Subject Notes:</Link> Detailed notes for each
            subject to help you grasp and review important concepts.
          </li>
          <li>
            <Link href="/pairing-schemes/">10th Class Pairing Schemes:</Link> Guides to help you
            focus on the most crucial topics for your exams.
          </li>
          <li>
            Class 10 Online MCQ Tests: Practice tests to assess your knowledge
            and improve your readiness for the exams.
          </li>
        </ul>
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
