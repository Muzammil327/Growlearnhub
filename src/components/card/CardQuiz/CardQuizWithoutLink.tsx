import React from "react"
import "./cardQuiz.scss"

export default function CardQuizWithoutLink({
  title,
  correctOption,
  option,
  para
}: {
  title: string
  className?: string
  option: string[]
  correctOption: string
  para?: string
}) {
  return (
    <div className="cardquiz border border-gray-300 rounded-lg shadow-lg p-4 my-4 bg-white">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <ul className="list-disc pl-5 mb-4">
        {option.map((opt, index) => (
          <li key={index} className="text-gray-700 mb-1">
            {opt}
          </li>
        ))}
      </ul>
      <span className="correctOption text-green-600 font-medium mb-2">
        The correct option is: {correctOption}
      </span>
      {para && (
        <div
          dangerouslySetInnerHTML={{ __html: para }}
          className="description text-gray-600"
        ></div>
      )}
    </div>
  )
}
