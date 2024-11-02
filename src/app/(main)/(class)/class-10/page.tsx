import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import Heading3 from "@/src/components/ui/typography/Heading3/page"
import UnorderedList from "@/src/components/ui/list/UnorderedList"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import LinkComponent from "@/src/components/ui/typography/Links/page"

const data = {
  title: "Class 10 Study Guide | Important Resources, MCQs, Tests, Books",
  description:
    "Explore the Guide to Grade 10 on GrowLearnHub. Discover important resources including MCQs, online quizzes. and recommended books To improve your learning and master your subjects effectively.",
  keywords: [
    "GrowLearnHub",
    "Class 10 study resources",
    "10th class learning materials",
    "MCQs for Class 10",
    "Online tests for Class 10",
    "Essential books for 10th class",
    "Class 10 tips for success",
    "GrowLearnHub Class 10 resources"
  ],
  canonical: "/class-10/",
  index: true,
  follow: true,
  image: "/class_10.webp",
  url: "https://growlearnhub.com/class-10/",
  breadcrumbs: [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Class 10"
    }
  ]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to the <strong>Class 10 </strong> page! Here, you&apos;ll find a
        comprehensive list of textbooks and resources that are essential for
        students in the 10th grade.
      </p>

      <Heading2 variant="black">Subjects Covered for Class 10</Heading2>
      <UnorderedList
        items={[
          { description: "Physics" },
          { description: "Chemistry" },
          { description: "Biology" },
          { description: "English" },
          { description: "Urdu" },
          { description: "Computer Science" },
          { description: "Economics" },
          { description: "Math" },
          { description: "General Knowledge" },
          { description: "Ikhlaqiat" },
          { description: "Islamiyat" },
          { description: "Pak Study" },
          { description: "Tarjuma Tul Quaran" }
        ]}
      />
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: {
          name: string
          slug: string
        }) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-10/${data.slug}`}
            />
          )
        })}
      </div>
      <Heading3 variant="black">Online Tests for Class 10:</Heading3>
      <p className="p5">
        In the current digital age{" "}
        <LinkComponent slug="/online-test-point">Online tests</LinkComponent>{" "}
        have become a popular tool for students to assess their understanding
        and readiness. These tests provide a flexible platform for students to
        practice and assess their knowledge in various subjects.
      </p>
      <UnorderedList
        items={[
          {
            title: "Convenience",
            description:
              "Students can take the test from home according to their needs."
          },
          {
            title: "Instant Feedback",
            description:
              "Instant grading helps students identify their strengths and weaknesses."
          },
          {
            title: "Variety of Questions",
            description:
              "Exposure to different target formats and difficulty levels will improve preparation."
          }
        ]}
      />
      <Heading3 variant="black">Past Papers for Class 10:</Heading3>
      <p className="p5">
        <LinkComponent slug="/past-paper"> Past papers</LinkComponent> are an
        invaluable resources for students preparing for exams. It provides
        insights into the types of questions being asked, the exam format and
        the marking scheme.
      </p>
      <UnorderedList
        items={[
          {
            title: "Knowledge of exam format",
            description:
              "Understanding the layout and structure of the exam which can reduces anxiety."
          },
          {
            title: "Time Management Skills",
            description:
              "Practicing past papers helps students learn to manage their time effectively during exams."
          },
          {
            title: "Identifying Important Topics",
            description:
              "Past papers often highlight frequently tested concepts, guiding study focus."
          }
        ]}
      />
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: "Online Test",
    slug: "online-test"
  },
  {
    name: "Mcqs",
    slug: "mcqs"
  },
  {
    name: "Books",
    slug: "books"
  },
  {
    name: "Past Paper",
    slug: "past-paper"
  },
  {
    name: "Notes",
    slug: "notes"
  },
  {
    name: "Results",
    slug: "result"
  },
  {
    name: "Date Sheet",
    slug: "date-sheet"
  },
  {
    name: "Pairing Schemes",
    slug: "pairing-schemes"
  }
]

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
