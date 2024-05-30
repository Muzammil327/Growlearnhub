import React from "react";
import Link from "next/link";
import FaReadme from "@/src/components/layout/footer/FaReadme";
import QuestionMarkCircleIcon from "@/src/components/layout/footer/QuestionMarkCircleIcon";
import BookOpenIcon from "@/src/components/layout/footer/BookOpenIcon";

const footer = [
  {
    id: 0,
    name: "Books",
    link: "/books/",
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 1,
    name: "Quiz's",
    link: "/quiz/",
    icon: BookOpenIcon,
  },
  {
    id: 2,
    name: "Notes",
    link: "/notes/",
    icon: BookOpenIcon,
  },
  {
    id: 3,
    name: "Online Tests",
    link: "/online-tests/",
    icon: BookOpenIcon,
  },
  {
    id: 4,
    name: "Past Papers",
    link: "/past-papers/",
    icon: BookOpenIcon,
  },
  {
    id: 5,
    name: "Pairing Schemes",
    link: "/pairing-schemes/",
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
