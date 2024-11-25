import React from "react";
import "./cardQuiz.scss";

export default function CardQuizWithoutLink({
  title,
  correctOption,
  option,
  para,
}: {
  title: string;
  className?: string;
  option: string[];
  correctOption: string;
  para?: string;
}) {
  return (
    <div className="cardquiz my-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <ul className="mb-4 list-disc pl-5">
        {option.map((opt, index) => (
          <li key={index} className="mb-1 text-gray-700">
            {opt}
          </li>
        ))}
      </ul>
      <span className="correctOption mb-2 font-medium text-green-600">
        The correct option is: {correctOption}
      </span>
      {para && (
        <div
          dangerouslySetInnerHTML={{ __html: para }}
          className="description text-gray-600"
        ></div>
      )}
    </div>
  );
}
