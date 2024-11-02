import React from "react"
import SubHeadingMcqsList from "@/src/action/mcqs/SubHeadingMcqsList"
import { convertHyphensToSpaces } from "@/src/functions/convertHyphensToSpaces"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/convertToUppercaseAndReplaceHyphens"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"

interface Iprops {
  params: {
    mcqs: string
  }
}

const BookName = "General Knowledge"
const BookNameSlug = "general-knowledge"
const HeadingName = "World Knowledge"
const HeadingNameSlug = "world-knowledge"

export default function page({ params }: Iprops) {
  const mcqs = convertHyphensToSpaces(params.mcqs)

  const data = {
    title: `${HeadingName} ${mcqs} MCQs - ${BookName}`,
    url: `https://growlearnhub.com/mcqs-point/${BookNameSlug}/skeletal-system/${params.mcqs}/`,
    canonical: `/mcqs-point/${BookNameSlug}/${HeadingNameSlug}/${params.mcqs}/`,
    image: "/mcqs-point.webp",
    breadcrumbs: [
      { title: "Home", link: "/" },
      { title: "Mcqs Point", link: "/mcqs-point" },
      { title: BookName, link: BookNameSlug },
      { title: HeadingName, link: HeadingNameSlug },
      { title: params.mcqs }
    ]
  }
  return (
    <SimpleWrapper data={data}>
      <SubHeadingMcqsList
        bookName={BookNameSlug}
        headingName={HeadingNameSlug}
        subHeadingName={params.mcqs}
      />
    </SimpleWrapper>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const paramdata3 = convertToUppercaseAndReplaceHyphens(params.mcqs)

  const title = `${HeadingName} ${paramdata3} MCQs - ${BookName} Multiple Choice Questions`
  const description = `
  Test your understanding of the ${paramdata3} in the ${HeadingName} with our ${BookName} MCQs. These multiple-choice questions focus on the types of bones, their functions.`

  return {
    title: title,
    description: description,
    keywords: [
      "growlearnhub",
      "growlearnhub biology mcqs",
      "biology mcqs",
      "growlearnhub chemistry mcqs",
      "chemistry mcqs",
      "growlearnhub physics mcqs",
      "physics mcqs",
      "growlearnhub math mcqs",
      "math mcqs",
      "growlearnhub english mcqs",
      "english mcqs"
    ],
    alternates: {
      canonical: `/mcqs-point/${BookNameSlug}/${HeadingNameSlug}/${params.mcqs}/`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://growlearnhub.com/mcqs-point/${BookNameSlug}/${HeadingNameSlug}/${params.mcqs}/`,
      images: [
        {
          src: "",
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: "",
        alt: title
      }
    }
  }
}
