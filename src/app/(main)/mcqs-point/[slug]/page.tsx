import React from 'react'
import StructureQuizDetail from './StructureQuizDetail'
import { convertToUppercaseAndReplaceHyphens } from '@/src/functions/slugify'

interface Iprops {
  params: {
    slug: string
  }
}

export default function page({ params }: Iprops) {
  return <StructureQuizDetail params={params} />
}

export async function generateMetadata({ params }: Iprops) {
  const resultString = convertToUppercaseAndReplaceHyphens(params.slug)

  return {
    title: resultString,
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
      url: `https://growlearnhub.com/mcqs-point/${params.slug}`,
      images: [
        {
          alt: resultString,
        },
      ],
    },
    twitter: {
      title: resultString,
      images: {
        alt: resultString,
      },
    },
  }
}
