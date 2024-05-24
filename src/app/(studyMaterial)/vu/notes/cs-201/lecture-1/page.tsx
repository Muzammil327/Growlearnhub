import React from "react";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Link from "next/link";
import styles from "@/src/styles/content.module.css";

const data = {
  title: "CS-201 Introducing to Programming Chapter 1",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <p className={styles.para}>
              <strong>
                All the content copy from Virtual University Handouts.{" "}
              </strong>
            </p>
            <p className={styles.para}>
              A <span className={styles.span}>program</span> is a precise
              sequence of steps to solve a particular problem.
            </p>
            <p className={styles.para}>
              <span className={styles.span}>
                Alan Perlis, a professor at Yale University, says:
              </span>{" "}
              <blockquote>
                &quot;It goes against the grain of modern education to teach
                children to program. What fun is there in making plans,
                acquiring discipline in organizing thoughts, devoting attention
                to detail and learning to be self-critical?&quot;
              </blockquote>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Learning programming improves analytical and problem-solving
                skills.
              </li>
              <li className={styles.li}>Programming is a creative.</li>
            </ul>
            <p className={styles.para}>
              <span className={styles.span}>Comments</span> are used to explain
              the functioning of the programs. It helps the other programmers as
              well as the creator of the program to understand the code. The
              comment statements do not affect the performance of the program as
              these are ignored by the compiler and do not take any memory in
              the computer.
            </p>
            <pre className={styles.code}>
              <code>{`<!-- This is an HTML comment -->`}</code>
            </pre>
            <pre className={styles.code}>
              <code>{`/* This is an CSS comment */`}</code>
            </pre>
            <pre className={styles.code}>
              <code>{`// This is a single-line JavaScript / C / C++ comment
/*
   This is a multi-line
   JavaScript / C / C++ comment
*/
`}</code>
            </pre>
            <div className="flex items-center justify-between">
              <Link href="/vu/notes/cs-201/" className={styles.btn}>
                CS 201 Notes
              </Link>
              <Link href="/vu/notes/cs-201/lecture-1/" className={styles.btn}>
                Chapter 1
              </Link>
              <Link href="/vu/notes/cs-201/lecture-2/" className={styles.btn}>
                Chapter 2
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}
