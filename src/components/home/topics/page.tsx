import React from "react"
import dynamic from "next/dynamic"
import styles from "./HomeTopics.module.scss"
import { FaArrowRight, FaClock } from "react-icons/fa"
const Container = dynamic(() => import("@/src/components/ui/Container"))
const LinkComponent = dynamic(
  () => import("@/src/components/ui/typography/Links/page")
)
const ButtonComponents = dynamic(
  () => import("@/src/components/ui/typography/button/page")
)

export default function Topics() {
  return (
    <div
      className={`bg-gradient-to-tl from-[#98ff98] via-[#3eb489] to-[#20c997] relative dark:bg-gradient-to-tl dark:from-gray-800 dark:to-gray-800 bt ${styles.section}`}
    >
      <Container>
        <div className="pb-20 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center py-10">
            <div>
              <h3 className="text-white text-4xl font-bold mb-5">
                Latest Topics
              </h3>
              <p className="p3 text-white dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ab ipsum possimus quos totam voluptates accusamus mollitia
                facilis dolor ducimus.
              </p>
            </div>
            <div className="flex md:justify-end justify-start md:mt-0 mt-3">
              <ButtonComponents
                variant="solid"
                title="See All Topics"
                className="rounded-full"
              >
                See All Topics
              </ButtonComponents>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {data.map((data: any) => {
              return (
                <div
                  className="bg-white dark:bg-slate-700 shadow-lg py-12 px-10 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  key={data.name}
                >
                  <div className="text-gray-800 dark:text-gray-200 flex gap-2 items-center text-color2 text-sm mb-8">
                    <span>
                      <FaClock />
                    </span>
                    <span>March 20, 2024</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                    Understand The Background Of lms.
                  </h4>
                  <div className="mt-10">
                    <LinkComponent
                      slug="/"
                      title="Learn More"
                      className="items-center inline-flex"
                    >
                      <span>
                      Learn More
                      </span>
                      <span className="ml-2">
                        <FaArrowRight />
                      </span>
                    </LinkComponent>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

const data = [
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024"
  },
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024"
  },
  {
    name: "Understand The Background Of lms.",
    date: "March 20, 2024"
  }
]
