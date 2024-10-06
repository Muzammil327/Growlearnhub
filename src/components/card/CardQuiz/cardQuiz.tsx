import "./cardQuiz.scss"
import Link from "next/link"

interface CardQuizProps {
  title: string
  link: string
  className?: string
  option: string[]
  correctOption: string
  description?: string
}
interface CardQuizProps2 {
  title: string
  className?: string
  option: string[]
  correctOption: string
  para?: string
}

export const CardQuiz: React.FC<CardQuizProps> = ({
  title,
  link,
  correctOption,
  className = "",
  option,
  description
}) => {
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

export const CardQuizWithoutLink: React.FC<CardQuizProps2> = ({
  title,
  correctOption,
  option,
  para
}) => {
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
