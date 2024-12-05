// import React from "react";
// import Link from "next/link";
// import { FaBook } from "react-icons/fa";
// import { FaClipboard } from "react-icons/fa";
// import { FaQuestionCircle } from "react-icons/fa";
// import { FaLaptop } from "react-icons/fa";
// import { FaStickyNote } from "react-icons/fa";
// import { FaStream } from "react-icons/fa";
// import Container from "@/components/elements/Container";
// import { Button } from "@/components/ui/button";

// export default function Service() {
//   return (
//     <section className="pb-20 pt-10 md:py-20">
//       <Container>
//         <div className="mb-20 flex flex-col items-center justify-center">
//           <span className="border-primary mb-2 inline-block rounded-full border-[1px] border-solid px-5 py-2 font-sans text-sm font-medium uppercase leading-[15px] text-primary">
//             EDUCATION FOR EVERYONE
//           </span>
//           <h3 className="mt-2 text-4xl font-bold text-black dark:text-white">
//             Why Choose Us?
//           </h3>
//         </div>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {data.map(
//             (data: {
//               id: number;
//               name: string;
//               description: string;
//               icon: JSX.Element;
//               classname: string;
//               slug: string;
//             }) => {
//               return (
//                 <div
//                   className={`${data.classname} rounded-md p-5 shadow-md duration-300 ease-in-out hover:shadow-none`}
//                   key={data.id}
//                 >
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     className="!h-12 !w-12 !text-xl text-black"
//                   >
//                     {data.icon}
//                   </Button>
//                   <div className="body">
//                     <Link
//                       href={`/${data.slug}`}
//                       className="text-black hover:text-primary"
//                     >
//                       <h4 className="mb-2 mt-4 font-sans text-xl font-bold">
//                         {data.name}
//                       </h4>
//                     </Link>
//                     <p className="!my-0 text-gray-600"> {data.description}</MutedPara>
//                   </div>
//                 </div>
//               );
//             },
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// }

// const data = [
//   {
//     id: 0,
//     name: "Books",
//     description:
//       "Access a comprehensive collection of textbooks and reference materials for Class 9 to 12. Dive into detailed explanations and examples to strengthen your understanding of key concepts across all subjects.",
//     icon: <FaBook />,
//     classname: "bg-card1",
//     slug: "book-point",
//   },
//   {
//     id: 1,
//     name: "Past Paper",
//     description:
//       "Prepare for exams with past papers from previous years. Practice answering real questions to familiarize yourself with exam patterns and boost your confidence for better results.",
//     icon: <FaClipboard />,
//     classname: "bg-card2",
//     slug: "past-paper",
//   },
//   {
//     id: 2,
//     name: "Mcqs",
//     description:
//       "Test your knowledge with interactive quizzes tailored for Class 9 to 12. Challenge yourself with questions designed to help you retain key concepts and assess your progress.",
//     icon: <FaQuestionCircle />,
//     classname: "bg-card3",
//     slug: "mcqs-point",
//   },
//   {
//     id: 3,
//     name: "Online Test",
//     description:
//       "Engage in timed online quizzes to enhance your exam preparation. Compete against yourself or others while sharpening your skills across various subjects.",
//     icon: <FaLaptop />,
//     classname: "bg-card4",
//     slug: "online-test-point",
//   },
//   {
//     id: 4,
//     name: "Notes",
//     description:
//       "Review concise, well-organized notes for every subject. Perfect for quick revisions and understanding important topics in a simple and effective way.",
//     icon: <FaStickyNote />,
//     classname: "bg-card5",
//     slug: "notes",
//   },
//   {
//     id: 5,
//     name: "Pairing Scheme",
//     description:
//       "Get the latest pairing schemes for Class 9 to 12, outlining the weightage of chapters and topics for each subject. Plan your studies efficiently with this valuable resource.",
//     icon: <FaStream />,
//     classname: "bg-card6",
//     slug: "pairing-scheme",
//   },
// ];
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  FileText,
  FileQuestion,
  ListChecks,
  MonitorPlay,
  Zap,
} from "lucide-react";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Books",
      icon: Book,
      image: "/placeholder.svg?height=300&width=400",
      count: "250+ Books",
    },
    {
      title: "Notes",
      icon: FileText,
      image: "/placeholder.svg?height=300&width=400",
      count: "100+ Notes",
    },
    {
      title: "Past Papers",
      icon: FileQuestion,
      image: "/placeholder.svg?height=620&width=400",
      count: "1000+ Papers",
      featured: true,
    },
    {
      title: "Pairing Scheme",
      icon: ListChecks,
      image: "/placeholder.svg?height=300&width=400",
      count: "50+ Schemes",
    },
    {
      title: "Online Quiz",
      icon: MonitorPlay,
      image: "/placeholder.svg?height=300&width=400",
      count: "300+ Quizzes",
    },
    {
      title: "Live Classes",
      icon: Zap,
      image: "/placeholder.svg?height=620&width=400",
      count: "50+ Live Sessions",
      featured: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="grid gap-6">
          <CategoryCard category={categories[0]} />
          <CategoryCard category={categories[1]} />
        </div>
        <div className="grid gap-6">
          <CategoryCard category={categories[2]} className="sm:row-span-2" />
        </div>
        <div className="grid gap-6">
          <CategoryCard category={categories[3]} />
          <CategoryCard category={categories[4]} />
        </div>
        <div className="grid gap-6">
          <CategoryCard category={categories[5]} className="sm:row-span-2" />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category, className = "" }: any) {
  return (
    <Link
      href="#"
      className={`group relative overflow-hidden rounded-xl ${
        category.featured ? "bg-red-500" : "bg-gray-100"
      } ${className}`}
    >
      {!category.featured && (
        <Image
          src={category.image}
          alt={category.title}
          width={400}
          height={category.featured ? 620 : 300}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      )}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center transition-colors ${category.featured ? "bg-transparent" : "bg-black/0 group-hover:bg-red-500/90"}`}
      >
        {category.icon && (
          <category.icon
            className={`h-12 w-12 ${
              category.featured
                ? "text-white"
                : "text-white opacity-0 transition-opacity group-hover:opacity-100"
            }`}
          />
        )}
        <div>
          <h3
            className={`text-xl font-bold ${
              category.featured
                ? "text-white"
                : "text-white opacity-0 transition-opacity group-hover:opacity-100"
            }`}
          >
            {category.title}
          </h3>
          <MutedPara
            className={`mt-2 ${
              category.featured
                ? "text-white/90"
                : "text-white opacity-0 transition-opacity group-hover:opacity-100"
            }`}
          >
            {category.count}
          </MutedPara>
        </div>
      </div>
    </Link>
  );
}
