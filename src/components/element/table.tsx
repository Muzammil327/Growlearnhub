import Link from "next/link"

interface Chapter {
  id: number
  link: string
}

interface TableElementProps {
  content?: string
  className?: string
}

interface TableProps {
  chapterDATA: Chapter[]
  headingArray: string[] // Array for table headers
  contentArray?: string[] // Optional array for custom content in <td>
  chapterTitleArray?: string[] // Optional array for custom chapter titles
  trProps?: TableElementProps[]
  thProps?: TableElementProps[]
  tdProps?: TableElementProps[]
  headerTitle?: string // Prop for header title
}
const Table: React.FC<TableProps> = ({
  chapterDATA,
  headingArray,
  contentArray = [],
  chapterTitleArray = [],
  trProps = [],
  thProps = [],
  tdProps = [],
}) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200 mb-5">
      <thead className="bg-gray-100">
        <tr
          className={
            trProps[0]?.className || "bg-white border-b hover:bg-gray-50"
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
        {chapterDATA.map((data, index) => (
          <tr
            key={data.id}
            className={
              trProps[index + 1]?.className ||
              "bg-white border-b hover:bg-gray-50"
            }
          >
            <th
              scope="row"
              className={
                thProps[index + 1]?.className ||
                "px-6 py-4 font-medium text-gray-900"
              }
            >
              {chapterTitleArray[index] || `Chapter ${data.id}`}
            </th>
            <td className={tdProps[index + 1]?.className || "px-6 py-4"}>
              <Link href={data.link}>
                {contentArray[index] ||
                  tdProps[index + 1]?.content ||
                  "Download PDF English Medium"}{" "}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
