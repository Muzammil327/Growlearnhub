import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function RightPostFollow() {
  return (
    <div className="mt-6 relative lg:my-8 md:my-6 my-4">
      <div className="title">
        <h3>Follow Us</h3>
      </div>
      <div className="follow">
        <ul className="grid grid-cols-2 gap-2">
          {data.map((data: any) => {
            return (
              <li className={data.class} key={data.id}>
                <Link
                  href={data.link}
                  target="_blank"
                  title="facebook"
                  className="flex items-center h-10 overflow-hidden text-white font-normal text-base"
                >
                  <span className="flex items-center justify-center w-8 h-full bg3 flex-shrink-0 border-r">
                    {data.icon}
                  </span>
                  <span className="text-sm px-4">{data.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const data = [
  {
    id: 0,
    title: "Facebook",
    icon: <FaFacebook />,
    link: "",
    class: "bg-facebook",
  },
  {
    id: 1,
    title: "Twitter",
    icon: <FaTwitter />,
    link: "",
    class: "bg-twitter",
  },
  {
    id: 2,
    title: "YouTube",
    icon: <FaYoutube />,
    link: "",
    class: "bg-youtube",
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FaInstagram />,
    link: "",
    class: "bg-instagram",
  },
];
