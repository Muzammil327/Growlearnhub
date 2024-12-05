import React from "react";
import "./cardQuiz.scss";

// Define the type for QuizOption (assuming you have this structure)
type QuizOption = {
  text: string;
  value: string;
};

interface CardQuizWithoutLinkProps {
  title: string;
  correctOption: string;
  option: string[]; // Accepting an array of strings for options
  para?: string;
  keywords?: string[]; // Ensure keywords is an optional array of strings
  description?: string; // Add description as an optional string prop
  className?: string;
}

export default function CardQuizWithoutLink({
  title,
  correctOption,
  option,
  para,
  keywords = [], // Default to an empty array if no keywords are provided
  description, // Accept description here
  className,
}: CardQuizWithoutLinkProps) {
  return (
    <div
      className={`cardquiz my-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg ${className}`}
    >
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>

      {/* Display the list of options */}
      <ul className="mb-4 list-disc pl-5">
        {option.map((opt, index) => (
          <li key={index} className="mb-1 text-gray-700">
            {opt} {/* Display the text of each option */}
          </li>
        ))}
      </ul>

      {/* Display the correct option */}
      <span className="correctOption mb-2 font-medium text-green-600">
        The correct option is: {correctOption}
      </span>

      {/* Display additional paragraph content if available */}
      {para && (
        <div
          dangerouslySetInnerHTML={{ __html: para }}
          className="description text-gray-600"
        ></div>
      )}

      {/* Display description if available */}
      {description && (
        <div className="description mt-2 text-gray-600">{description}</div>
      )}

      {/* Display tags if parsedTags has items */}
      {keywords.length > 0 && (
        <div className="tags mt-2 text-sm text-gray-500">
          <strong>Tags:</strong>{" "}
          {keywords.map((tag: any, index: any) => (
            <span
              key={index}
              className="mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
