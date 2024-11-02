import ClassMcqsList from "@/src/action/mcqs/ClassMcqsList"
import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import { convertHyphensToSpaces } from "@/src/functions/slugify"

interface Iprops {
  params: {
    mcqs: string
  }
}

export default function page({ params }: Iprops) {
  return (
    <SimpleWrapper
      data={{
        title: `Class 11 Biology ${convertHyphensToSpaces(params.mcqs)} Mcqs`,
        image: "/mcqs_point/11th/class_11_biology_mcqs.webp",
        canonical: `/class-11/mcqs/biology/${params.mcqs}/`,
        url: `https://growlearnhub.com/class-11/mcqs/biology/${params.mcqs}/`,
        breadcrumbs: [
          { title: "Home", link: "/" },
          { title: "Class 11", link: "/class-11/" },
          { title: "Mcqs", link: "/class-11/mcqs/" },
          { title: "Biology", link: "/class-11/mcqs/biology/" },
          {
            title: convertHyphensToSpaces(params.mcqs)
          }
        ]
      }}
    >
      <Heading2 variant="black">
        Class 11 Biology {convertHyphensToSpaces(params.mcqs)} Mcqs
      </Heading2>

      <ClassMcqsList
        className="Class 11"
        bookName="biology"
        chapterName={params.mcqs}
      />
    </SimpleWrapper>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const title = `Class 11 Biology ${convertHyphensToSpaces(params.mcqs)} Mcqs`
  const description = `${convertHyphensToSpaces(params.mcqs)} of Class 11 Biology with engaging multiple-choice questions. Test your knowledge to enhance your exam preparation.`

  return {
    title: title,
    description: description,
    keywords: [
      "growlearnhub",
      "growlearnhub biology mcqs",
      "biology mcqs",
      `biology ${convertHyphensToSpaces(params.mcqs)} mcqs`
    ],
    alternates: {
      canonical: `/class-11/mcqs/biology/${params.mcqs}/`
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
      url: `/class-11/mcqs/biology/${params.mcqs}/`,
      images: [
        {
          src: "/mcqs_point/11th/class_11_biology_mcqs.webp",
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: "/mcqs_point/11th/class_11_biology_mcqs.webp",
        alt: title
      }
    }
  }
}
