import React from "react";
import Link from "next/link";
import FaReadme from "@/src/components/layout/footer/FaReadme";
import FaPeopleArrows from "@/src/components/layout/footer/FaPeopleArrows";
import QuestionMarkCircleIcon from "@/src/components/layout/footer/QuestionMarkCircleIcon";
import BookOpenIcon from "@/src/components/layout/footer/BookOpenIcon";
import Newsletter from "@/src/components/layout/footer/newsletter";

const footer = [
  {
    id: 0,
    name: "Quiz",
    link: "/quiz",
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 1,
    name: "Books",
    link: "/books",
    icon: BookOpenIcon,
  },
];

export default function FooterMenu() {
  return (
    <>
      {footer.map((footer) => (
        <div className="flex items-center" key={footer.name}>
          <div className="rounded-md bg-white/5 p-2 mr-5 ring-1 ring-indigo-600">
            <footer.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <Link
            href={footer.link}
            title={footer.name}
            className="font-semibold text-white"
          >
            {footer.name}
          </Link>
        </div>
      ))}
    </>
  );
}
