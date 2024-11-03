import OnlineTestChapterWrapper from "@/src/components/Wrapper/onlineTest/OnlineTestChapterWrapper"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/slugify"
import Class12OnlineTestBookData from "@/src/app/(main)/(class)/class-12/online-test/data/Class12OnlineTestBookData"
import { Class12OnlineTestChemistryChapterData } from "@/src/app/(main)/(class)/class-12/online-test/data/Class12OnlineTestChapterData"

interface Iprops {
  params: {
    chapter: string
  }
}

const Quiz = ({ params }: Iprops) => {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  return (
    <OnlineTestChapterWrapper
      title={`Class 12 Chemistry Online Test ${paramdata}`}
      canonical={`/class-12/online-test/chemistry/${params.chapter}/`}
      b1="Chemistry"
      b1Link="/class-12/online-test/chemistry"
      paramdata={paramdata}
      image={
        params.chapter === "chapter-1"
          ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-1.webp"
          : params.chapter === "chapter-2"
            ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-2.webp"
            : params.chapter === "chapter-3"
              ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-3.webp"
              : params.chapter === "chapter-4"
                ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-4.webp"
                : params.chapter === "chapter-5"
                  ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-5.webp"
                  : params.chapter === "chapter-6"
                    ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-6.webp"
                    : params.chapter === "chapter-7"
                      ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-7.webp"
                      : params.chapter === "chapter-8"
                        ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-8.webp"
                        : params.chapter === "chapter-9"
                          ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-9.webp"
                          : undefined
      } //
      clist={[
        { name: "Class 9 Books", slug: "/class-9/books/" },
        { name: "Class 10 Books", slug: "/class-10/books/" },
        { name: "Class 11 Books", slug: "/class-11/books/" },
        { name: "Class 12 Books", slug: "/class-12/books/" },
        { name: "Class 9 Mcqs", slug: "/class-9/mcqs/" },
        { name: "Class 10 Mcqs", slug: "/class-10/mcqs/" },
        { name: "Class 11 Mcqs", slug: "/class-11/mcqs/" },
        { name: "Class 12 Mcqs", slug: "/class-12/mcqs/" },
        { name: "Class 9 Online Test", slug: "/class-9/online-test/" },
        { name: "Class 10 Online Test", slug: "/class-10/online-test/" },
        { name: "Class 11 Online Test", slug: "/class-11/online-test/" },
      ]}
      cat={
        params.chapter === "chapter-1"
          ? ["class 12", "chemistry", "ch1"]
          : params.chapter === "chapter-2"
            ? ["class 12", "chemistry", "ch2"]
            : params.chapter === "chapter-3"
              ? ["class 12", "chemistry", "ch3"]
              : params.chapter === "chapter-4"
                ? ["class 12", "chemistry", "ch4"]
                : params.chapter === "chapter-5"
                  ? ["class 12", "chemistry", "ch5"]
                  : params.chapter === "chapter-6"
                    ? ["class 12", "chemistry", "ch6"]
                    : params.chapter === "chapter-7"
                      ? ["class 12", "chemistry", "ch7"]
                      : params.chapter === "chapter-8"
                        ? ["class 12", "chemistry", "ch8"]
                        : params.chapter === "chapter-9"
                          ? ["class 12", "chemistry", "ch9"]
                          : []
      }
    >
      <Class12OnlineTestChemistryChapterData slug="chemistry" />
      <Class12OnlineTestBookData />
    </OnlineTestChapterWrapper>
  )
}

export default Quiz

export async function generateMetadata({ params }: Iprops) {
  const paramdata = convertToUppercaseAndReplaceHyphens(params.chapter)

  const title = `Class 12 Chemistry Online Test ${paramdata}`
  const description = `Class 12 Chemistry Online Test ${paramdata}`
  const image =
    params.chapter === "chapter-1"
      ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-1.webp"
      : params.chapter === "chapter-2"
        ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-2.webp"
        : params.chapter === "chapter-3"
          ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-3.webp"
          : params.chapter === "chapter-4"
            ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-4.webp"
            : params.chapter === "chapter-5"
              ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-5.webp"
              : params.chapter === "chapter-6"
                ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-6.webp"
                : params.chapter === "chapter-7"
                  ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-7.webp"
                  : params.chapter === "chapter-8"
                    ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-8.webp"
                    : params.chapter === "chapter-9"
                      ? "/12th/online-test/chemistry/class-12-chemistry-online-test-chapter-9.webp"
                      : undefined

  return {
    title: title,
    description: description,
    keywords: [
      "class 12",
      "chemistry",
      "chapter 1",
      "chapter 2",
      "chapter 3",
      "chapter 4",
      "chapter 5",
      "chapter 6",
      "chapter 7",
      "chapter 8",
      "chapter 9",
      "online test"
    ],
    alternates: {
      canonical: `class-12/online-test/chemistry/${params.chapter}`
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
      url: `https://growlearnhub.com/class-12/online-test/chemistry/${params.chapter}`,
      images: [
        {
          src: image,
          alt: title
        }
      ]
    },
    twitter: {
      title: title,
      description: description,

      images: {
        src: image,
        alt: title
      }
    }
  }
}
