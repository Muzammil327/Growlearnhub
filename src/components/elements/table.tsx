import Link from "next/link";

interface Chapter {
  id?: number;
  link?: string;
}

interface TableElementProps {
  content?: string;
  className?: string;
}

interface TableProps {
  chapterDATA?: Chapter[]; // Optional chapter data
  headingArray: string[]; // Array for table headers
  contentArray?: string[]; // Optional array for custom content in <td>
  chapterTitleArray?: string[]; // Optional array for custom chapter titles
  trProps?: TableElementProps[];
  thProps?: TableElementProps[];
  tdProps?: TableElementProps[];
  headerTitle?: string; // Prop for header title
}

const Table: React.FC<TableProps> = ({
  chapterDATA = [], // Provide a default empty array for chapterDATA
  headingArray,
  contentArray = [],
  chapterTitleArray = [],
  trProps = [],
  thProps = [],
  tdProps = [],
}) => {
  // Determine if we should show data from chapterDATA or use chapterTitleArray and contentArray
  const hasChapterData = chapterDATA && chapterDATA.length > 0;
  const rowCount = hasChapterData
    ? chapterDATA.length
    : Math.max(chapterTitleArray.length, contentArray.length);

  return (
    <table className="mb-5 min-w-full border-collapse border border-gray-200">
      <thead className="bg-gray-100">
        <tr
          className={
            trProps[0]?.className || "border-b bg-white hover:bg-gray-50"
          }
        >
          {headingArray.map((heading, index) => (
            <th
              key={index}
              className={
                thProps[index]?.className ||
                "px-6 py-4 text-left font-medium text-gray-700"
              }
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Use either chapterDATA or fallback to chapterTitleArray and contentArray */}
        {Array.from({ length: rowCount }).map((_, index) => (
          <tr
            key={index}
            className={
              trProps[index + 1]?.className ||
              "border-b bg-white hover:bg-gray-50"
            }
          >
            <th
              scope="row"
              className={
                thProps[index + 1]?.className ||
                "px-6 py-4 font-medium text-gray-900"
              }
            >
              {hasChapterData
                ? chapterTitleArray[index] ||
                  `Chapter ${chapterDATA[index]?.id}`
                : chapterTitleArray[index] || `Title ${index + 1}`}
            </th>
            <td className={tdProps[index + 1]?.className || "px-6 py-4"}>
              {hasChapterData ? (
                <Link href={chapterDATA[index]?.link || "#"}>
                  {contentArray[index] ||
                    tdProps[index + 1]?.content ||
                    "Download PDF English Medium"}
                </Link>
              ) : (
                contentArray[index] ||
                tdProps[index + 1]?.content ||
                "No content available"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
