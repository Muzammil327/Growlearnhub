import React from "react"
import './FeedbackCard.scss'

export default function FeedbackCard({
  data
}: {
  data: {
    name: string
    description: string
    image: string
    career: string
  }
}) {
  return (
    <div className="feedback-card">
      <div className="header">
        <div className="thumb">
          <img
            src={data.image}
            alt=""
          />
        </div>
        <div className="info">
          <h5>{data.name}</h5>
          <span>{data.career}</span>
        </div>
      </div>
      <div className="footer">
        <p>{data.description}</p>
      </div>
    </div>
  )
}
