import React from "react"

interface ListItem {
  title?: string // Optional title
  description: string // Required description
}

interface UnorderedListProps {
  items: ListItem[] // Array of list items
}

export default function UnorderedList({ items }: UnorderedListProps) {
  return (
    <div>
      <ul className="list-disc pl-6 space-y-4 mb-4">
        {items.map((item, index) => (
          <li key={index} className="">
            {item.title && (
              <strong className="text-lg text-gray-800 dark:text-color2">
                {item.title}:
              </strong>
            )}
            <span className="ml-2 text-gray-600 dark:text-gray-100">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
