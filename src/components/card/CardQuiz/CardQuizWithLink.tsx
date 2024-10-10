import React from "react"
import Link from "next/link"
import "./cardQuiz.scss"

export default function CardQuizWithLink({
  title,
  link,
  correctOption,
  className = "",
  option,
  description
}: {
  title: string
  link: string
  className?: string
  option: string[]
  correctOption: string
  description?: string
}) {
  return (
    <Link href={link} className={className}>
      <div className="cardquiz">
        <h3>
          <div dangerouslySetInnerHTML={{ __html: title }}></div>
        </h3>
        <ul>
          {option.map((index: any) => {
            return <li key={index}>{index}</li>
          })}
        </ul>
        <span className="correctOption">
          The correct option is: {correctOption}
        </span>
        {description && (
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        )}
      </div>
    </Link>
  )
}
