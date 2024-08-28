// import React from 'react'
// import StructureQuizDetail from '@/src/components/McqsPoint/StructureQuizDetail'
// import { convertToUppercaseAndReplaceHyphens } from '@/src/functions/slugify'

// interface Iprops {
//   params: {
//     slug: string
//   }
// }

// export default function page({ params }: Iprops) {
//   const image = '/mcqs-point/mcqs-point.png'

//   return <StructureQuizDetail params={params} image={image} />
// }

// export async function generateMetadata({ params }: Iprops) {
//   const resultString = convertToUppercaseAndReplaceHyphens(params.slug)
//   const image = '/mcqs-point/mcqs-point.png'

//   return {
//     title: resultString,
//     description: resultString,
//     alternates: {
//       canonical: `mcqs-point/${params.slug}`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//       },
//     },
//     openGraph: {
//       title: resultString,
//       description: resultString,
//       url: `https://growlearnhub.com/mcqs-point/${params.slug}`,
//       images: [
//         {
//           src: image,
//           alt: resultString,
//         },
//       ],
//     },
//     twitter: {
//       title: resultString,
//       description: resultString,

//       images: {
//         src: image,
//         alt: resultString,
//       },
//     },
//   }
// }
import React from 'react'
import Wrapper from '@/src/components/element/Wrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { CardQuizWithoutLink } from '@/src/components/card/CardQuiz/cardQuiz'
import { SkeletalSystemMcqsData } from '@/src/app/(main)/mcqs-point/biology/skeletal-system/data'
import { BiologyMcqsSkeletalSystemBonesMcqs } from '../biology/skeletal-system/bones/data'

const data = {
  canonical: '/mcqs-point/biology/skeletal-system/types/',
  b1: 'Bones',
  b1Link: '/mcqs-point/biology/skeletal-system/bones/',
  image:
    '/mcqs-point/biology/skeletal-system/bones/bones-skeletal-system-biology-mcqs-point.webp',
}

interface IProps {
  params: {
    slug: string
  }
}

const combinedMcqs = [...BiologyMcqsSkeletalSystemBonesMcqs]

export default function Page({ params }: IProps) {
  const datas = combinedMcqs.filter(
    (data: any) => data.slug === params.slug
  )
  const Final_Data = datas[0]
  return (
    <Wrapper
      title={Final_Data.name}
      url={data.canonical}
      b1={data.b1}
      b1Link={data.b1Link}
      b2={Final_Data.name}
      image={data.image}
    >
      <div className="my-10 grid gap-4">
        {BiologyMcqsSkeletalSystemBonesMcqs.filter(
          (data: any) => data.slug === params.slug
        ).map((book: any) => (
          <CardQuizWithoutLink
            key={book.id}
            title={book.name}
            option={book.options}
            correctOption={book.correctOptions}
          />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {SkeletalSystemMcqsData.map((book: any) => (
          <CardSmall key={book.id} title={book.name} link={book.slug} />
        ))}
      </div>
    </Wrapper>
  )
}

export async function generateMetadata({ params }: IProps) {
  const datas = BiologyMcqsSkeletalSystemBonesMcqs.filter(
    (data: any) => data.slug === params.slug
  )
  const Final_Data = datas[0]

  return {
    title: Final_Data.name,
    description: Final_Data.name,
    keywords: Final_Data.correctOptions + Final_Data.name,
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
      title: Final_Data.name,
      description: Final_Data.name,
      url: `https://growlearnhub.com/mcqs-point/${params.slug}`,
      images: [
        {
          src: data.image,
          alt: Final_Data.name,
        },
      ],
    },
    twitter: {
      title: Final_Data.name,
      description: Final_Data.name,

      images: {
        src: data.image,
        alt: Final_Data.name,
      },
    },
  }
}
