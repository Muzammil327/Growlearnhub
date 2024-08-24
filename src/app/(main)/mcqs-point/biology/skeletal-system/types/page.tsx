import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { CardQuiz } from '@/src/components/card/CardQuiz/cardQuiz'
import { SkeletalSystemTypesMcqsDatasPage1 } from './data'
import { SkeletalSystemTypesMcqsData } from '../data'

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: 'Types of Skeletal System Biology Mcqs',
  description:
    'Here you can get solved mcqs topic wise of biology skeletal system like Bones, Joints, Cartilage, Ligaments and Axial and Appendicular Skeleton.',
  canonical: '/mcqs-point/biology/skeletal-system/types/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/mcqs-point/biology/skeletal-system/types/',
  keywords: ['mcqs', 'mcqs biology', 'Skeletal System'],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Skeletal System"
      b1Link="/mcqs-point/biology/skeletal-system/"
      b2="Types"
      image={data.image}
    >
      <div className="my-10 grid gap-4">
        {SkeletalSystemTypesMcqsDatasPage1.map((book: any) => (
          <CardQuiz
            key={book.id}
            title={book.name}
            link={`/mcqs-point/biology/skeletal-system/types/${book.slug}`}
            option={book.options}
            correctOption={book.correctOptions}
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
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {BookSubjectData.map((book: Subject) => (
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

const BookSubjectData: Subject[] = [
  { id: 0, name: 'Types', slug: 'types' },
  { id: 1, name: 'Bones', slug: 'bones' },
  { id: 2, name: 'Joints', slug: 'joints' },
  { id: 3, name: 'Cartilage', slug: 'cartilage' },
  { id: 4, name: 'Ligaments', slug: 'ligaments' },
]
