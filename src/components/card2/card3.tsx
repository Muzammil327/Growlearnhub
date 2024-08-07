import { list } from 'postcss'
import './card.scss'
import Link from 'next/link'

export default function Card3(props: {
  title: string
  link: string
  className?: string
}) {
  return (
    <Link href={`${props.link}`} className={props.className}>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="shine"></div>
        <div className="background">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </Link>
  )
}

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
  description?: string
}

export const CardQuiz: React.FC<CardQuizProps> = ({
  title,
  link,
  correctOption,
  className = '',
  option,
  description,
}) => {
  return (
    <Link href={link} className={className}>
      <div className="card">
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
        <div className="shine"></div>
        <div className="background">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </Link>
  )
}

export const CardQuizWithoutLink: React.FC<CardQuizProps2> = ({
  title,
  correctOption,
  className = '',
  option,
  description,
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {option.map((index: any) => {
          return <li key={index}>{index}</li>
        })}
      </ul>
      <span className="correctOption">
        The correct option is: {correctOption}
      </span>
      {description && (
        <div dangerouslySetInnerHTML={{ __html: description }} className='description'></div>
      )}
      <div className="shine"></div>
      <div className="background">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
  )
}
