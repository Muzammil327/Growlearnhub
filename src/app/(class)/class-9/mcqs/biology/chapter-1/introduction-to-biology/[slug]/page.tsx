import React from 'react'
import { CardQuiz } from '@/src/components/card2/card3'

import QuizWrapper from '../../../../../../QuizWrapper'
import { IntroductionToBiology } from '../data'
import { Metadata } from 'next'

interface Iprops {
  params: {
    slug: string
  }
}

const image =
  '/class/class-9/mcqs/biology/chapter-1/introduction-to-biology.webp'

export default function Page({ params }: Iprops) {
  const filterdData = IntroductionToBiology.filter(
    (data) => data.slug === params.slug
  )
  const datas = filterdData[0]

  return (
    <QuizWrapper
      title={datas.questionName}
      url={`https://growlearnhub.com/class-9/mcqs/biology/chapter-1/introduction-to-biology/${datas.slug}`}
      b1="9 Class"
      b1Link="/class-9/"
      b2="Quiz"
      b2Link="/class-9/quiz/"
      b3="Punjab Board Biology"
      b3Link="/class-9/quiz/biology/"
      b4="Chapter 1"
    >
      <CardQuiz
        key={datas.id}
        title={datas.questionName}
        correctOption={datas.correctOption}
        link={datas.slug}
        list={datas.options || ''}
        className=""
      />
    </QuizWrapper>
  )
}

export async function generateMetadata({ params }: Iprops): Promise<Metadata> {
  const filteredData = IntroductionToBiology.filter(
    (data) => data.slug === params.slug
  )

  if (filteredData.length === 0) {
    return {
      title: 'Not Found',
      description: 'The requested data was not found.',
    }
  }

  const datas = filteredData[0]

  return {
    title: datas.questionName,
    description: datas.description,
    alternates: {
      canonical: `class-9/mcqs/biology/chapter-1/introduction-to-biology/${datas.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: datas.questionName,
      description: datas.description,
      url: `https://growlearnhub.com/class-9/mcqs/biology/chapter-1/introduction-to-biology/${datas.slug}`,
      images: [
        {
          url: image,

          alt: datas.questionName,
        },
      ],
    },
    twitter: {
      title: datas.questionName,
      images: {
        url: image,
        alt: datas.questionName,
      },
    },
  }
}
