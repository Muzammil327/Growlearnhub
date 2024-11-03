import React from "react"
import SingleMcqsList from "@/src/action/mcqs/SingleMcqsList"
import { convertHyphensToSpaces } from "@/src/functions/convertHyphensToSpaces"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/convertToUppercaseAndReplaceHyphens"
import dynamic from "next/dynamic"
import SubHeader from "@/src/components/layout/header/subheader/page"
import Container from "@/src/components/ui/Container"
import BreadCrumb from "@/src/components/ui/breadcrumb"
import Sidebar from "@/src/components/ui/sidebar/page"
const CommentForm = dynamic(
  () => import("@/src/components/ui/form/CommentForm")
)

interface Iprops {
  params: {
    slug: string
  }
}

export default function page({ params }: Iprops) {
  const mcqs = convertHyphensToSpaces(params.slug)

  const data = {
    title: `${mcqs} MCQs`,
    url: `https://growlearnhub.com/detail-point/${params.slug}/`,
    canonical: `/mcqs-detail/${params.slug}/`
  }
  return (
    <main>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 md:gap-6 md:my-20 sm:my-10 my-5">
          <div className="lg:col-span-8">
            <BreadCrumb
              breadcrumbs={[
                { title: "Home", link: "/" },
                { title: "Mcqs Details", link: "/mcqs-point" },
                { title: `${mcqs}` }
              ]}
            />
            <SingleMcqsList slug={params.slug} />
            <CommentForm url={`https://growlearnhub.com${data.canonical}`} />
          </div>
          <aside className="lg:col-span-3">
            <Sidebar title="" url={data.url} />
          </aside>
        </div>
      </Container>
    </main>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const paramdata1 = convertToUppercaseAndReplaceHyphens(params.slug)

  const title = `${paramdata1} - MCQs`
  const description = `
  Test your understanding of the with our ${paramdata1} MCQs. These multiple-choice questions focus on the types of bones, their functions.`
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
      canonical: `/mcqs-detail/${params.slug}/`
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
      url: `https://growlearnhub.com/mcqs-detail/${params.slug}/`,
      images: [
        {
          src: "/mcqs-point.webp",
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: "/mcqs-point.webp",
        alt: title
      }
    }
  }
}
