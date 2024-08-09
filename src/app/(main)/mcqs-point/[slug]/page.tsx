import React from 'react'
import StructureQuizDetail from '@/src/components/McqsPoint/StructureQuizDetail'
import { convertToUppercaseAndReplaceHyphens } from '@/src/functions/slugify'

interface Iprops {
  params: {
    slug: string
  }
}

export default function page({ params }: Iprops) {
  const image = '/mcqs-point/mcqs-point.png'

  return <StructureQuizDetail params={params} image={image} />
}

export async function generateMetadata({ params }: Iprops) {
  const resultString = convertToUppercaseAndReplaceHyphens(params.slug)
  const image = '/mcqs-point/mcqs-point.png'

  return {
    title: resultString,
    description: resultString,
    alternates: {
      canonical: `mcqs-point/${params.slug}`,
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
      title: resultString,
      description: resultString,
      url: `https://growlearnhub.com/mcqs-point/${params.slug}`,
      images: [
        {
          src: image,
          alt: resultString,
        },
      ],
    },
    twitter: {
      title: resultString,
      description: resultString,

      images: {
        src: image,
        alt: resultString,
      },
    },
  }
}
