import React from 'react'
import StructureSubCatgeory from '@/src/components/McqsPoint/StructureSubCatgeory'

interface Iprops {
  params: {
    subCatgeory: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <StructureSubCatgeory
      bookId="general-knowledge"
      catgeoryId="india"
      subCatgeory={params.subCatgeory}
      title={`India ${params.subCatgeory} General Knowledge Solved Mcqs`}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="General Knowledge"
      b2Link="/mcqs-point/general-knowledge/"
      b3="India"
      b3Link="/mcqs-point/general-knowledge/india/"
      b4={`${params.subCatgeory}`}
      url={`/mcqs-point/general-knowledge/india/${params.subCatgeory}`}
    />
  )
}

export async function generateMetadata({ params }: Iprops) {
  const PAGE_TITLE = `India ${params.subCatgeory} General Knowledge Solved Mcqs`
  const PAGE_URL = `mcqs-point/general-knowledge/india/${params.subCatgeory}`

  return {
    title: PAGE_TITLE,
    description: PAGE_TITLE,
    alternates: {
      canonical: `${PAGE_URL}`,
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
      title: PAGE_TITLE,
      description: PAGE_TITLE,
      url: `https://growlearnhub.com/${PAGE_URL}`,
      images: [
        {
          alt: PAGE_TITLE,
        },
      ],
    },
    twitter: {
      title: PAGE_TITLE,
      description: PAGE_TITLE,

      images: {
        alt: PAGE_TITLE,
      },
    },
  }
}
