import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { Heading3 } from "@/src/components/ui/Heading"
import UnorderedList from "@/src/components/ui/list/UnorderedList"

const data = {
  title: "Class 9 Study Guide | Important Resources, MCQs, Tests, Books",
  description:
    "Explore the Guide to Grade 9 on GrowLearnHub. Discover important resources including MCQs, online quizzes. and recommended books To improve your learning and master your subjects effectively.",
  keywords: [
    "GrowLearnHub",
    "Class 9 study resources",
    "9th class learning materials",
    "MCQs for Class 9",
    "Online tests for Class 9",
    "Essential books for 9th class",
    "Class 9 tips for success",
    "GrowLearnHub Class 9 resources"
  ],
  canonical: "/class-9/",
  index: true,
  follow: true,
  image: "/9th/class-9.webp",
  url: "https://growlearnhub.com/class-9/",
  clist: [
    { name: "Class 10", slug: "/class-10/" },
    { name: "Class 11", slug: "/class-11/" },
    { name: "Class 12", slug: "/class-12/" },

    { name: "Class 10 Notes", slug: "/class-10/" },
    { name: "Class 11 Notes", slug: "/class-11/" },
    { name: "Class 12 Notes", slug: "/class-12/" },

    { name: "Class 10 Books", slug: "/class-10/" },
    { name: "Class 11 Books", slug: "/class-11/" },
    { name: "Class 12 Books", slug: "/class-12/" },

    { name: "Class 10 Mcqs", slug: "/class-10/" },
    { name: "Class 11 Mcqs", slug: "/class-11/" },
    { name: "Class 12 Mcqs", slug: "/class-12/" },

    { name: "Class 10 Online Test", slug: "/class-10/" },
    { name: "Class 11 Online Test", slug: "/class-11/" },
    { name: "Class 12 Online Test", slug: "/class-12/" },

    { name: "Class 10 Past Paper", slug: "/class-10/" },
    { name: "Class 11 Past Paper", slug: "/class-11/" },
    { name: "Class 12 Past Paper", slug: "/class-12/" },

    { name: "VU", slug: "/vu/" },
    { name: "VU Handouts", slug: "/vu/" },
    { name: "VU Mid Marks Calculator", slug: "/vu/" },
    { name: "VU Mid Mcqs", slug: "/vu/" },
    { name: "VU Final Mcqs", slug: "/vu/" }
  ],
  b1: "9th Class"
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p>
        Welcome to the <strong>Class 9 </strong> page! Here, you&apos;ll find a
        comprehensive list of textbooks and resources that are essential for
        students in the 9th grade.
      </p>

      <Heading3>Subjects Covered for Class 9</Heading3>
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
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/${data.slug}`}
            />
          )
        })}
      </div>
      <Heading3>Online Tests for Class 9</Heading3>
      <p>
        In the current digital age Online testers have become a popular tool for
        students to assess their understanding and readiness. These tests
        provide a flexible platform for students to practice and assess their
        knowledge in various subjects.
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
      <Heading3>Past Papers for Class 9</Heading3>
      <p>
        Past papers are an invaluable resources for students preparing for
        exams. It provides insights into the types of questions being asked, the
        exam format and the marking scheme.
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
