import React from "react";
import "./FeedbackCard.scss";
import Image from "next/image";
import MutedPara from "../../ui/typography/MutedPara/page";

export default function FeedbackCard({
  data,
}: {
  data: {
    name: string;
    description: string;
    image: string;
    career: string;
  };
}) {
  return (
    <div className="feedback-card">
      <div className="header">
        <div className="thumb">
          <Image src={data.image} alt="" title="" height={400} width={400} />
        </div>
        <div className="info">
          <h5>{data.name}</h5>
          <span>{data.career}</span>
        </div>
      </div>
      <div className="footer">
        <MutedPara>{data.description}</MutedPara>
      </div>
    </div>
  );
}
