import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import ClassMcqsList from "@/src/action/ClassMcqsList"

interface Iprops {
  params: {
    chapter: string
    mcqs: string
  }
}

const data = {
  title: "9th Class Biology Mcqs | Class 9",
  description:
    "Class 9 Biology MCQs page offering a wide range of practice questions, online tests, and detailed answers for thorough exam preparation.",
  canonical: "/class-9/mcqs/biology/",
  index: true,
  follow: true,
  image: "/9th/mcqs/class-9-biology-mcqs.webp",
  url: "https://growlearnhub.com/class-9/mcqs/biology/",
  keywords: [
    "growlearnhub biology mcqs",
    "growlearnhub class 9 biology mcqs",
    "class 9 biology mcqs",
    "9th class biology mcqs",
    "9th class growlearnhub biology mcqs"
  ],
  clist: [
    { name: "Class 9 Books", slug: "/class-9/books/" },
    { name: "Class 10 Books", slug: "/class-10/books/" },
    { name: "Class 11 Books", slug: "/class-11/books/" },
    { name: "Class 12 Books", slug: "/class-12/books/" },
    { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
    { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
    { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
    { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
    { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
    { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
    { name: "Class 12 Online Test", slug: "/class-12/online-test/" }
  ],
  b1: "Past Paper",
  b1Link: "/class-9/past-paper/",
  b2: "Lahore Board Physics"
}

export default function page({ params }: Iprops) {
  return (
    <SimpleWrapper data={data}>
      <ClassMcqsList
        className="Class 11"
        slug="class-11"
        bookName={params.chapter}
        chapterName={params.mcqs}
      />
    </SimpleWrapper>
  )
}
