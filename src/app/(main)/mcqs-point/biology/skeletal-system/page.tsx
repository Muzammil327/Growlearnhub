import React from 'react'
import { Metadata } from 'next'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { SkeletalSystemMcqsData } from '@/src/app/(main)/mcqs-point/biology/skeletal-system/data'

const data = {
  title: 'Skeletal System Biology Solved Mcqs Topic Wise',
  description:
    'Here you can get solved mcqs topic wise of biology skeletal system like Bones, Joints, Cartilage, Ligaments and Axial and Appendicular Skeleton.',
  canonical: '/mcqs-point/biology/skeletal-system/',
  index: true,
  follow: true,
  image:
    '/mcqs-point/biology/skeletal-system/skeletal-system-biology-mcqs-point.webp',
  url: 'https://growlearnhub.com/mcqs-point/biology/skeletal-system/',
  keywords: ['mcqs', 'mcqs biology', 'Skeletal System'],
  b1: 'Biology',
  b1Link: '/mcqs-point/biology/',
  b2: 'Skeletal System',
}

export default function Page() {
  return (
    <Wrapper
      title={data.title}
      url={data.canonical}
      b1={data.b1}
      b1Link={data.b1Link}
      b2={data.b2}
      image={data.image}
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {SkeletalSystemMcqsData.map((book: any) => (
          <CardSmall key={book.name} title={book.name} link={book.slug} />
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
