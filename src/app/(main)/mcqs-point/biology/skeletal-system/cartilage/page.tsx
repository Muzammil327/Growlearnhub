import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import CardQuizWithLink from "@/src/components/card/CardQuiz/CardQuizWithLink"
import { SkeletalSystemMcqsData } from "@/src/app/(main)/mcqs-point/biology/skeletal-system/data"
import { BiologyMcqsSkeletalSystemCartilageMcqs } from "@/src/app/(main)/mcqs-point/biology/skeletal-system/cartilage/data"

const data = {
  title: "Cartilage Skeletal System Biology Mcqs",
  description:
    "Here you can get solved mcqs topic wise of biology skeletal system like Bones, Joints, Cartilage, Ligaments and Axial and Appendicular Skeleton.",
  canonical: "/mcqs-point/biology/skeletal-system/cartilage/",
  index: true,
  follow: true,
  image: "/mcqs-point/general-knowledge/general-knowledge-quiz.png",
  url: "https://growlearnhub.com/mcqs-point/biology/skeletal-system/cartilage/",
  keywords: ["mcqs", "mcqs biology", "Skeletal System"],
  b1: "Skeletal System",
  b1Link: "/mcqs-point/biology/skeletal-system/",
  b2: "Cartilage"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <div className="my-10 grid gap-4">
        {BiologyMcqsSkeletalSystemCartilageMcqs.map((book: any) => (
          <CardQuizWithLink
            key={book.id}
            title={book.name}
            link={`/mcqs-point/${book.slug}`}
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
    </SimpleWrapper>
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
        alt: data.title
      }
    ]
  },
  alternates: {
    canonical: data.canonical
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow
    }
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title
    }
  }
}
