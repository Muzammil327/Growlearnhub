import './cardSmall.scss'
import Link from 'next/link'

export default function CardSmall(props: {
  title: string
  link: string
  className?: string
}) {
  return (
    <Link href={`${props.link}`} className={`${props.className}`}>
      <div className="card">
        <span>{props.title}</span>
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
