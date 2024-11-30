import React from "react";
import dynamic from "next/dynamic";
import styles from "./HomeTopics.module.scss";
import TopicCard from "../../../../components/card/TopicCard/page";
import Container from "../../../../components/elements/Container";
import { Button } from "../../../../components/ui/Button";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";

export default function Topics() {
  return (
    <div
      className={`bt relative bg-gradient-to-tl from-[#98ff98] via-[#3eb489] to-[#20c997] dark:bg-gradient-to-tl dark:from-gray-800 dark:to-gray-800 ${styles.section}`}
    >
      <Container>
        <div className="pb-20 md:py-16">
          <div className="grid grid-cols-1 items-center justify-between py-10 md:grid-cols-2">
            <div>
              <h3 className="mb-5 text-4xl font-bold text-white">
                Latest Topics
              </h3>
              <MutedPara className="p3 text-white dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ab ipsum possimus quos totam voluptates accusamus mollitia
                facilis dolor ducimus.
              </MutedPara>
            </div>
            <div className="mt-3 flex justify-start md:mt-0 md:justify-end">
              <Button
                variant="outline"
                title="See All Topics"
                className="rounded-full"
              >
                See All Topics
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map(
              (
                data: {
                  name: string;
                  date: string;
                },
                index,
              ) => {
                return <TopicCard key={index} data={data} />;
              },
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

const data = [
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024",
  },
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024",
  },
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024",
  },
];
