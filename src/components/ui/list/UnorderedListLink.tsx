import React from "react"
import Link from "next/link"

interface ListItemLink {
  title?: string // Optional title
  link: string // Required description
}

interface UnorderedListLinkProps {
  items: ListItemLink[] // Array of list items
}

export default function UnorderedListLink({ items }: UnorderedListLinkProps) {
  return (
    <div>
      <ul className="list-disc pl-6 space-y-4 mb-4">
        {items.map((item, index) => (
          <li key={index} className="">
            <Link
              href={item.link}
              className="ml-2 text-gray-600 dark:text-gray-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
