import React from "react"
import Container from "../element/container"
import Link from "next/link"
import { FaBook } from "react-icons/fa"
import { FaClipboard } from "react-icons/fa"
import { FaQuestionCircle } from "react-icons/fa"
import { FaLaptop } from "react-icons/fa"
import { FaStickyNote } from "react-icons/fa"
import { FaStream } from "react-icons/fa"
import ButtonIcon from "../ui/ButtonIcon"

export default function Service() {
  return (
    <section className="md:py-20 pt-10 pb-20">
      <Container>
        <div className="flex items-center justify-center flex-col mb-20">
          <span className="border-[1px] border-solid border-color1 text-color1 rounded-full inline-block uppercase px-5 py-2 text-sm font-medium mb-2 leading-[15px] font-sans">
            EDUCATION FOR EVERYONE
          </span>
          <h3 className="font-bold text-4xl text-black dark:text-white mt-2">Why Choose Us?</h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map((data: any) => {
            return (
              <div
                className={`${data.classname} duration-300 ease-in-out p-5 shadow-md rounded-md hover:shadow-none`}
                key={data.id}
              >
                <ButtonIcon variant="outline" className="!text-xl !h-12 !w-12 text-black">
                {data.icon}
                </ButtonIcon>
                <div className="body">
                  <Link
                    href={`/${data.slug}`}
                    className="text-black hover:text-color1"
                  >
                    <h4 className="mb-2 mt-4 text-xl font-bold font-sans ">
                      {data.name}
                    </h4>
                  </Link>
                  <p className="text-gray-600 !my-0"> {data.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const data = [
  {
    id: 0,
    name: "Books",
    description:
      "Access a comprehensive collection of textbooks and reference materials for Class 9 to 12. Dive into detailed explanations and examples to strengthen your understanding of key concepts across all subjects.",
    icon: <FaBook />,
    classname: "bg-card1",
    slug: "book-point"
  },
  {
    id: 1,
    name: "Past Paper",
    description:
      "Prepare for exams with past papers from previous years. Practice answering real questions to familiarize yourself with exam patterns and boost your confidence for better results.",
    icon: <FaClipboard />,
    classname: "bg-card2",
    slug: "past-paper"
  },
  {
    id: 2,
    name: "Mcqs",
    description:
      "Test your knowledge with interactive quizzes tailored for Class 9 to 12. Challenge yourself with questions designed to help you retain key concepts and assess your progress.",
    icon: <FaQuestionCircle />,
    classname: "bg-card3",
    slug: "mcqs-point"
  },
  {
    id: 3,
    name: "Online Test",
    description:
      "Engage in timed online quizzes to enhance your exam preparation. Compete against yourself or others while sharpening your skills across various subjects.",
    icon: <FaLaptop />,
    classname: "bg-card4",
    slug: "online-test-point"
  },
  {
    id: 4,
    name: "Notes",
    description:
      "Review concise, well-organized notes for every subject. Perfect for quick revisions and understanding important topics in a simple and effective way.",
    icon: <FaStickyNote />,
    classname: "bg-card5",
    slug: "notes"
  },
  {
    id: 5,
    name: "Pairing Scheme",
    description:
      "Get the latest pairing schemes for Class 9 to 12, outlining the weightage of chapters and topics for each subject. Plan your studies efficiently with this valuable resource.",
    icon: <FaStream />,
    classname: "bg-card6",
    slug: "pairing-scheme"
  }
]
