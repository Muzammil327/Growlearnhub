import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { CardQuiz } from '@/src/components/card/CardQuiz/cardQuiz'
import { SkeletalSystemMcqsData, SkeletalSystemTypesMcqsData } from '../data'

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: 'Ligaments Skeletal System Biology Mcqs',
  description:
    'Here you can get solved mcqs topic wise of biology skeletal system like Bones, Joints, Cartilage, Ligaments and Axial and Appendicular Skeleton.',
  canonical: '/mcqs-point/biology/skeletal-system/ligaments/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/mcqs-point/biology/skeletal-system/ligaments/',
  keywords: ['mcqs', 'mcqs biology', 'Skeletal System'],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Skeletal System"
      b1Link="/mcqs-point/biology/skeletal-system/"
      b2="Ligaments"
      image={data.image}
    >
      <div className="my-10 grid gap-4">
        {datas.map((book: any) => (
          <CardQuiz
            key={book.id}
            title={book.name}
            link={`/mcqs-point/biology/skeletal-system/${book.slug}`} 
            option={book.options} 
            correctOption={book.correctOptions} 
              />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {SkeletalSystemMcqsData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`/mcqs-point/biology/skeletal-system/${book.slug}`}
          />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {SkeletalSystemTypesMcqsData.map((book: Subject) => (
          <CardSmall
            key={book.id}
            title={book.name}
            link={`/mcqs-point/biology/skeletal-system/${book.slug}`}
          />
        ))}
      </div>
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

const datas = [
  {
    id: 0,
    name: 'the muscles that control urine in bladder are known as  which book mcqs',
    slug:'',
    options: ['Options 1', 'Options 2', 'Options 3', 'Options 4'],
    correctOptions: 'Options 1',
  },
  {
    id: 1,
    name: 'the muscles that control urine in bladder are known as  which book mcqs',
    slug:'',
    options: ['Options 1', 'Options 2', 'Options 3', 'Options 4'],
    correctOptions: 'Options 1',
  },
]
