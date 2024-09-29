// interface Iprops {
//   head: string
//   subhead: string
// }

// export default function Heading({ head, subhead }: Iprops) {
//   return (
//     <>
//       <div className="text-center my-20 mr-6 relative">
//         {/* <div className="flex items-center justify-center">
//           <span className="text xl:text-[5rem] text-[3rem] absolute xl:-top-20 md:-top-12 sm:-top-20 -top-16 opacity-5">
//             {subhead}
//           </span>
//         </div> */}
//         <span className="text-color2 font-medium text-base">{subhead}</span>
//         <h3 className="my-4 text font-bold lg:text-3xl text-2xl">{head}</h3>
//       </div>
//     </>
//   )
// }

import React from "react"
import Link from "next/link"

// Heading 1
export const Heading1: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h1 className="font-bold text-gray-800 lg:text-5xl text-4xl mb-4">
    {children}
  </h1>
)

// Heading 2
export const Heading2: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h2 className="font-bold text-gray-800 lg:text-4xl text-3xl mb-4">
    {children}
  </h2>
)

// Heading 3
export const Heading3: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h3 className="font-bold text-gray-800 lg:text-3xl text-2xl mb-4">
    {children}
  </h3>
)

// Heading 4
export const Heading4: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h4 className="font-bold text-gray-800 lg:text-2xl text-xl mb-4">
    {children}
  </h4>
)

// Heading 5
export const Heading5: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h5 className="font-bold text-gray-800 lg:text-xl text-lg mb-4">
    {children}
  </h5>
)

// Heading 6
export const Heading6: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h6 className="font-bold text-gray-800 lg:text-lg text-base mb-4">
    {children}
  </h6>
)

// Paragraph Component
export const Paragraph: React.FC<{ children: React.ReactNode }> = ({
  children
}) => <p className="mt-6 text-gray-700 text-lg">{children}</p>

// Span Component
export const Span: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block mt-4 text-blue-500 underline">{children}</span>
)

// Link Component
export const Links: React.FC<{ children: React.ReactNode; slug: string }> = ({
  children,
  slug
}) => (
  <Link href={slug} className="inline-block mt-4 text-blue-500 underline">
    {children}
  </Link>
)
