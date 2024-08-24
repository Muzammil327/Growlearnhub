import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { SkeletalSystemMcqsData, SkeletalSystemTypesMcqsData } from './data'

interface Subject {
  id: number
  name: string
  slug: string
}

const data = {
  title: 'Skeletal System Biology Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of biology skeletal system like Bones, Joints, Cartilage, Ligaments and Axial and Appendicular Skeleton.',
  canonical: '/mcqs-point/biology/skeletal-system/',
  index: true,
  follow: true,
  image: '/mcqs-point/general-knowledge/general-knowledge-quiz.png',
  url: 'https://growlearnhub.com/mcqs-point/biology/skeletal-system/',
  keywords: ['mcqs', 'mcqs biology', 'Skeletal System'],
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1="Biology"
      b1Link="/mcqs-point/biology/"
      b2="Skeletal System "
      image={data.image}
    >
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
