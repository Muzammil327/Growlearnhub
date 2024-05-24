"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "next-share";
import Link from "next/link";

interface SidebarProps {
  title: string;
  videoId?: string;
  list?: Iprops[];
  url: string;
}
interface Iprops {
  id: number;
  title: string;
  slug: string;
}
const Sidebar: React.FC<SidebarProps> = ({ title, videoId, url, list }) => {
  return (
    <aside>
      <div className="joinsocials">
        <div className="title">
          <h3>Join Us:</h3>
        </div>
        <div className="flex gap-3">
          <ul className="flex gap-2 items-center">
            <li className="bg-[#1877F2] p-2 rounded-md text-white">
              <Link href="https://web.facebook.com/growlearnhub/">
                <svg
                  fill="#fff"
                  width="20px"
                  height="20px"
                  viewBox="-7 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  className="jam jam-facebook"
                >
                  <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
                </svg>
              </Link>
            </li>
            <li className="bg-red-600 p-2 rounded-md text-white">
              <Link
                href="https://youtube.com/@growlearnhub?si=_zzC-f6q-1FKTRbH?sub_confirmation=1"
                target="_blank"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.754 1.754 0 01-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.754 1.754 0 01-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289zm-3.24 4.612l-3.645 2.1V5.9l3.644 2.11z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="vedio">
        {videoId && (
          <LiteYouTubeEmbed
            id={videoId}
            title={title}
            aspectWidth={16}
            aspectHeight={9}
          />
        )}
      </div>
      <div className="menu mt-4">
        <span className="text-lg font-semibold my-2">Useful Links</span>
        <ul className="pt-3">
          {list &&
            list.map((data: Iprops) => {
              return (
                <>
                  <li className="flex flex-col gap-y-4" key={data.id}>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${data.slug}`}
                      title={data.title}
                      className="text-indigo-600 transition-all mb-3"
                      aria-label={data.title}
                    >
                      {data.title}
                    </Link>
                  </li>
                </>
              );
            })}
        </ul>
      </div>

      <div className="my-5 friendsocials">
        <div className="title">
          <h3>Share it with Friends:</h3>
        </div>
        <div className="pt-1 flex gap-3">
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={"#growlearnhub"}
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const menu: Iprops[] = [
  {
    id: 0,
    title: "General Knowledge Mcqs",
    slug: "/quiz/general-knowledge/",
  },
  {
    id: 1,
    title: "Geography Mcqs",
    slug: "/quiz/general-knowledge/geography/",
  },
  {
    id: 2,
    title: "Geography Dams Mcqs",
    slug: "/quiz/general-knowledge/geography/dams/",
  },
  {
    id: 3,
    title: "Geography Rivers Mcqs",
    slug: "/quiz/general-knowledge/geography/rivers/",
  },
];
