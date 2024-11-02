import React from "react"
import { Metadata } from "next"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import Heading3 from "@/src/components/ui/typography/Heading3/page"
import UnorderedList from "@/src/components/ui/list/UnorderedList"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { SmallCardProps } from "@/src/types/card"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"

const data = {
  title: "Efficient and Interactive Multiple Choice Questions (MCQs)",
  description:
    "Explore a comprehensive collection of (MCQs) designed for all classes. This resource offers topic-wise MCQs across various subjects for preparing for competitive exams.",

  index: true,
  follow: true,
  image: "/mcqs-point.webp",
  canonical: "/mcqs-point/",
  url: "https://growlearnhub.com/mcqs-point/",
  keywords: ["growlearnhub", "growlearnhub mcqs"],
  breadcrumbs: [{ title: "Home", link: "/" }, { title: "Mcqs Point" }]
}

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        At Growlearnhub, we aim to make your learning journey more engaging and
        effective. Whether you&apos;re preparing for exams or competitive exams,
        our extensive range of multiple-choice questions (MCQs) provides a
        practical, hands-on approach to mastering key subjects. Designed for
        quick practice and in-depth understanding, our platform offers:
      </p>
      <UnorderedList
        items={[
          {
            description: "Instant feedback on your answers."
          },
          {
            description: "Detailed explanations for each question."
          },
          {
            description:
              "Structured learning paths that guide you step-by-step, from class-wise to topic-wise questions."
          }
        ]}
      />
      <p className="p5">
        Dive into a structured and interactive learning experience that helps
        you study smarter, not harder.
      </p>
      <section>
        <Heading2 variant="black">Class Wise Mcqs</Heading2>
        <p className="p5">
          Start preparing for your exams with questions tailored to your
          specific class level. Practice with a wide range of topics and boost
          your confidence.
        </p>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {ClassData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
      </section>
      <section>
        <Heading2 variant="black">Subjects Wise Mcqs</Heading2>
        <p className="p5">
          Our subject-wise sections help you focus on specific areas where you
          want to improve. Explore topics in detail and test your knowledge in
          key disciplines.
        </p>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
          {SubjectData.map((book: SmallCardProps) => (
            <CardSmall key={book.id} title={book.title} link={book.link} />
          ))}
        </div>
      </section>
      <section>
        <Heading3 variant="black">Why choose or rate MCQs?</Heading3>
        <p className="p5">
          We provide a unique, interactive experience that sets us apart from
          other MCQ platforms:
        </p>
        <UnorderedList
          items={[
            {
              title: "Efficient Learning",
              description:
                "Our platform is optimized for fast learning. Spend less time searching for relevant questions and more time practicing."
            },
            {
              title: "Interactive Features",
              description:
                "Instant feedback and detailed explanations help you understand not only what the correct answer is, but also what the correct answer is. But why is this correct?"
            },
            {
              title: "Detailed Structure",
              description:
                "Analysis by book, chapter, and topic helps you explore problems step-by-step. It covers each topic in detail and delves into subtopics such as bones, tendons, ligaments in biology. To achieve a comprehensive understanding"
            }
          ]}
        />
      </section>

      <section>
        <Heading3 variant="black">
          How can we help you master the topics?
        </Heading3>

        <UnorderedList
          items={[
            {
              title: "Book-Based MCQs",
              description:
                "Each subject has been categorized according to its respective book. To ensure that the learning content is consistent with the school curriculum."
            },
            {
              title: "MCQs by Chapter",
              description:
                "Within each book, chapters are organized with MCQs that test your understanding of two basic concepts. "
            },
            {
              title: "Topic-Based MCQs",
              description:
                "Dive into each topic by focusing on important topics, for example in Biology. If you are studying the skeletal system You will be able to study further in the Bones, Tendons and Ligaments section to ensure you have covered all the necessary details. It starts today Explore our wide range of MCQs. They are arranged by class, subject, book, chapter and topic. Whether you are preparing for a school exam or a competitive test, MCQs Point is here to support your academic success."
            }
          ]}
        />
      </section>
      <section>
        <Heading3 variant="black">Get Started Today</Heading3>
        <p className="p5">
          Explore our wide range of MCQs. They are arranged by class, subject,
          book, chapter and topic. Whether you are preparing for a school exam
          or a competitive test, <strong>MCQs Point</strong> is here to support
          your academic success.
        </p>
      </section>
      <p className="p5">
        Our platform is designed to provide quick feedback and detailed
        explanations to help you learn faster and better.
      </p>
    </SimpleWrapper>
  )
}

const ClassData: SmallCardProps[] = [
  {
    id: 0,
    title: "Class 9",
    link: "/class-9/mcqs/"
  },
  {
    id: 1,
    title: "Class 10",
    link: "/class-10/mcqs/"
  },
  {
    id: 2,
    title: "Class 11",
    link: "/class-11/mcqs/"
  },
  {
    id: 3,
    title: "Class 12",
    link: "/class-12/mcqs/"
  }
]

const SubjectData: SmallCardProps[] = [
  {
    id: 0,
    title: "Physics",
    link: "/mcqs-point/physics/"
  },
  {
    id: 1,
    title: "Chemistry",
    link: "/mcqs-point/chemistry/"
  },
  {
    id: 2,
    title: "Biology",
    link: "/mcqs-point/biology/"
  },
  {
    id: 3,
    title: "General Knowledge",
    link: "/mcqs-point/general-knowledge/"
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
