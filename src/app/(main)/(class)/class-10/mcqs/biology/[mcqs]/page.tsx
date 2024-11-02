// import React from "react"
// import ClassMcqsList from "@/src/action/mcqs/ClassMcqsList"
// import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
// import Heading2 from "@/src/components/ui/typography/Heading2/page"
// import { convertHyphensToSpaces } from "@/src/functions/slugify"

// export default function page({
//   params
// }: {
//   params: {
//     mcqs: string
//   }
// }) {
//   return (
//     <SimpleWrapper
//       data={{
//         title: `Class 10 Biology ${convertHyphensToSpaces(params.mcqs)} Mcqs`,
//         image: "/mcqs_point/10th/class_10_biology_mcqs.webp",
//         canonical: `/class-10/mcqs/biology/${params.mcqs}/`,
//         url: `https://growlearnhub.com/class-10/mcqs/biology/${params.mcqs}/`,
//         breadcrumbs: [
//           { title: "Home", link: "/" },
//           { title: "Class 10", link: "/class-10/" },
//           { title: "Mcqs", link: "/class-10/mcqs/" },
//           { title: "Biology", link: "/class-10/mcqs/biology/" },
//           {
//             title: convertHyphensToSpaces(params.mcqs)
//           }
//         ]
//       }}
//     >
//       <Heading2 variant="black">
//         Class 10 Biology {convertHyphensToSpaces(params.mcqs)} Mcqs
//       </Heading2>

//       <ClassMcqsList
//         className="Class 10"
//         bookName="biology"
//         chapterName={params.mcqs}
//       />
//     </SimpleWrapper>
//   )
// }

// export async function generateMetadata({
//   params
// }: {
//   params: {
//     mcqs: string
//   }
// }) {
//   const title = `Class 10 Biology ${convertHyphensToSpaces(params.mcqs)} Mcqs`
//   const description = `${convertHyphensToSpaces(params.mcqs)} of Class 10 Biology with engaging multiple-choice questions. Test your knowledge to enhance your exam preparation.`

//   return {
//     title: title,
//     description: description,
//     keywords: [
//       "growlearnhub",
//       "growlearnhub biology mcqs",
//       "biology mcqs",
//       `biology ${convertHyphensToSpaces(params.mcqs)} mcqs`
//     ],
//     alternates: {
//       canonical: `/class-10/mcqs/biology/${params.mcqs}/`
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true
//       }
//     },
//     openGraph: {
//       title: title,
//       description: description,
//       url: `/class-10/mcqs/biology/${params.mcqs}/`,
//       images: [
//         {
//           src: "/mcqs_point/10th/class_10_biology_mcqs.webp",
//           alt: title
//         }
//       ]
//     },
//     twitter: {
//       title: title,
//       description: description,

//       images: {
//         src: "/mcqs_point/10th/class_10_biology_mcqs.webp",
//         alt: title
//       }
//     }
//   }
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
