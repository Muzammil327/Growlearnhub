import React from 'react'
import StructureSubCatgeory from '@/src/components/McqsPoint/MPSubjectSubCat/StructureSubCatgeory'

interface Iprops {
  params: {
    subCatgeory: string
  }
}

export default function Page({ params }: Iprops) {
  return (
    <StructureSubCatgeory
      bookId="general-knowledge"
      catgeoryId="world-knowledge"
      subCatgeory={params.subCatgeory}
      title={`World ${params.subCatgeory} General Knowledge Solved Mcqs`}
      b1="Mcqs Point"
      b1Link="/mcqs-point/"
      b2="General Knowledge"
      b2Link="/mcqs-point/general-knowledge/"
      b3="World Knowledge"
      b3Link="/mcqs-point/general-knowledge/world-knowledge/"
      b4={`${params.subCatgeory}`}
      url={`/mcqs-point/general-knowledge/world-knowledge/${params.subCatgeory}`}
    />
  )
}

export async function generateMetadata({ params }: Iprops) {
  const PAGE_TITLE = `World ${params.subCatgeory} General Knowledge Solved Mcqs`
  const PAGE_URL = `mcqs-point/general-knowledge/world-knowledge/${params.subCatgeory}`

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