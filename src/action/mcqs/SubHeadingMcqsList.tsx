"use client";
import React, { useState } from "react";
import CardQuizWithLink from "@/src/components/card/CardQuiz/CardQuizWithLink";
import { Processing } from "@/src/components/elements/Icon";
import { useSubheadingMcqs } from "@/src/hooks/useSubheadingMcqs";

const SubHeadingMcqsList: React.FC<{
  headingName: string;
  bookName: string;
  subHeadingName: string;
}> = ({ headingName, bookName, subHeadingName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; // Set limit for questions per page

  // Fetch data using the custom hook
  const { data, error, isLoading } = useSubheadingMcqs(
    bookName,
    headingName,
    subHeadingName,
    currentPage,
    limit,
  );

  // Handle loading state
  if (isLoading)
    return (
      <div className="mx-auto flex h-40 items-center justify-center">
        <Processing />
      </div>
    );

  // Handle error state
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  // Pagination component
  const renderPagination = () => {
    const totalPages = data.totalPages; // Assuming `totalPages` comes from API response

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="my-5">
        {data.questions.map(
          (book: {
            id: number;
            name: string;
            slug: string;
            options: string[];
            correctOptions: string;
          }) => (
            <CardQuizWithLink
              key={book.id}
              title={book.name}
              link={`/mcqs-point/${book.slug}`}
              option={book.options}
              correctOption={book.correctOptions}
            />
          ),
        )}
      </div>
      {data.totalPages > 1 && renderPagination()}{" "}
    </div>
  );
};

export default SubHeadingMcqsList;
