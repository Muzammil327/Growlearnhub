import { list } from 'postcss'
import style from './card3Component.module.css'
import Link from 'next/link'

export default function Card3(props: {
  title: string
  link: string
  className?: string
}) {
  return (
    <Link href={`${props.link}`} className={props.className}>
      <div className={style.card}>
        <h3 className={style.h4}>{props.title}</h3>
        <div className={style.shine}></div>
        <div className={style.background}>
          <div className={`${style.line} ${style.line1}`}></div>
          <div className={`${style.line} ${style.line2}`}></div>
          <div className={`${style.line} ${style.line3}`}></div>
        </div>
      </div>
    </Link>
  )
}

interface CardQuizProps {
  title: string
  link: string
  className?: string
  list?: string[]
  correctOption: string
}

export const CardQuiz: React.FC<CardQuizProps> = ({
  title,
  link,
  correctOption,
  className = '',
  list = [],
}) => {
  return (
    <Link href={link} className={className}>
      <div className={style.card}>
        <h3 className={style.h4}>{title}</h3>
        <ul>
          {list.map((data, index) => (
            <li key={index} className={style.li}>
              {data}
            </li>
          ))}
        </ul>
        <span className={style.span}>The correct option is: {correctOption}</span>
        <div className={style.shine}></div>
        <div className={style.background}>
          <div className={`${style.line} ${style.line1}`}></div>
          <div className={`${style.line} ${style.line2}`}></div>
          <div className={`${style.line} ${style.line3}`}></div>
        </div>
      </div>
    </Link>
  )
}
