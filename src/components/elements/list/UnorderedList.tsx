import React from "react";
import MutedPara from "../../ui/typography/MutedPara/page";

interface ListItem {
  title?: string; // Optional title
  description: string; // Required description
}

interface UnorderedListProps {
  items: ListItem[]; // Array of list items
}

export default function UnorderedList({ items }: UnorderedListProps) {
  return (
    <div>
      <ul className="my-4 list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="">
            {item.title && (
              <strong className="text-lg text-primary">{item.title}:</strong>
            )}
            <MutedPara className="ml-2">{item.description}</MutedPara>
          </li>
        ))}
      </ul>
    </div>
  );
}
