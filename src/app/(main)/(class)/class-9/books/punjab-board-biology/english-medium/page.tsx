import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import PDFViewer from '@/src/components/element/PDFViewer'

const data = {
  title: 'Punjab Text Book Biology 9th Class PDF English Medium',
  description:
    'Download the Punjab Text Book for 9th Class Biology in English Medium PDF format. Access coverage of the syllabus with clear explanations.',
  canonical: '/class-9z/books/punjab-board-biology/english-medium/',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/class-9/books/punjab-board-biology/english-medium/',
  keywords: [
    'biology class 9 punjab text book pdf',
    'class 9 biology book pdf punjab board',
    '9th class biology punjab text book',
    'biology book class 9 punjab board',
    'class 9 biology book punjab board',
    'punjab text book biology 9th class pdf english medium',
  ],
  fileId_english: '1MFRZ5yO0SrrfTkAM_ewXBp_Pec4zTOA-',
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="9th Class"
      b1Link="/class-9/"
      b2="Books"
      b2Link="/class-9/books/"
      b3="Punjab Board Biology"
      b3Link="/class-9/books/punjab-board-biology/"
      b4="Biology 9th Class Book English Medium"
    >
      <h3>Biology 9th Class Book English Medium PDF Download Punjab Board</h3>
      <p>
        Here, you can download Matric{' '}
        <strong>Biology 9th Class Book English Medium PDF</strong>
        Format. This book is officially published by Punjab Text Book Board.
      </p>
      <PDFViewer pdfUrl={data.fileId_english} />
    </Wrapper>
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
