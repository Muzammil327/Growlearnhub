import React from "react";
import Link from "next/link";

interface ListItemLink {
  title?: string; // Optional title
  link: string; // Required description
}

interface UnorderedListLinkProps {
  items: ListItemLink[]; // Array of list items
}

export default function UnorderedListLink({ items }: UnorderedListLinkProps) {
  return (
    <div>
      <ul className="mb-4 list-disc space-y-4 pl-6">
        {items.map((item, index) => (
          <li key={index} className="">
            <Link
              href={item.link}
              className="link ml-2 text-gray-600 dark:text-gray-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
