import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'
import { Metadata } from 'next'
import QuizLayout from '@/src/components/element/quiz'

const data = {
  title: 'VU CS201 Mid Term Chapter 2 Mcqs',
  description:
    'Here you get cs201 mid term chapter 2 mcqs chapter wise, definitions, important  and further more in this platform.',
  canonical: '/vu/mid-term/cs201/mcqs/chapter-2/',
  index: true,
  follow: true,
  image: '/books/books_growlearnhub.webp',
  url: 'https://growlearnhub.com/vu/mid-term/cs201/mcqs/chapter-2/',
  keywords: [
    'growlearnhub vu',
    'vu',
    'mid term',
    'vu mid term',
    'cs201',
    'mcqs',
    'chapter 2',
    'cs201 mcqs',
    'cs201 mcqs chapter 2',
    'mid term cs201',
    'mid term mcqs cs201',
  ],
}

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's Chapter 2">
      <div className="my-20">
        {datas.map((data: any) => {
          return (
            <QuizLayout
              key={data.questionName}
              questionName={data.questionName}
              option1={data.option1}
              option2={data.option2}
              option3={data.option3}
              option4={data.option4}
              correctOption={data.correctOption}
            />
          )
        })}
        <div className="flex justify-between items-center">
          <Link className="btn" href="/vu/mid-term/cs201/mcqs/chapter-1/">
            Chapter 1
          </Link>
          <Link className="btn" href="/vu/mid-term/cs201/mcqs/chapter-3/">
            Chapter 3
          </Link>
        </div>
      </div>
    </VUWrapper>
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

const datas = [
  {
    questionName: 'The C language was developed in late 60’s and 70’s in',
    option1: 'Richards laboratories',
    option2: 'Microsoft laboratories',
    option3: 'Bell laboratories',
    option4: 'IBM laboratries',
    correctOption: 'Bell laboratories',
  },
]
