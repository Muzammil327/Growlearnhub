import React from "react";
import Link from "@/src/components/ui/typography/Links/page";
import { FaArrowRight, FaClock } from "react-icons/fa";
import "./TopicCard.scss";

export default function TopicCard({
  data,
}: {
  data: {
    name: string;
    date: string;
  };
}) {
  return (
    <div className="topic-card">
      <div className="heading">
        <span>
          <FaClock />
        </span>
        <span>{data.date}</span>
      </div>
      <h4>{data.name}</h4>
      <div className="footer">
        <Link slug="/" title="Learn More" className="inner">
          <span>Learn More</span>
          <span className="icon">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
