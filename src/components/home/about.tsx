import React from "react"
import ButtonComponents from "../ui/typography/button/page"
import Container from "../ui/Container"

export default function AboutUs() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="w-full mb-4">
              <span className="border-[1px] border-solid border-color1 text-color1 rounded-full inline-block uppercase px-5 py-2 text-sm font-medium mb-4 leading-[15px] font-sans">
                About Grow Learn Hub.
              </span>
              <h2 className="mb-4 text-4xl font-semibold text-black dark:text-white">
                What is Growlearnhub For You?.
              </h2>
              <p className="text-color2">
                Welcome to <em>Growlearnhub</em>, which is a complete platform
                for learning, designed to help and support in your education.
                Each resource has been freshly selected to make learning
                engaging and effective.
              </p>
              <p className="text-color2">
                Moreover, our learning materials will also offer you well-done
                Notes, and a large collection of Past Papers to reinforce your
                understanding and build your confidence. With Growlearnhub, you
                have acces to everything you need to do well in your studies,
                all in one place. Begin Your Journey To Success Here!
              </p>
              <ButtonComponents
                variant="outline"
                href="/about-us"
                className="rounded-md inline-block md:w-40 w-full"
              >
                About Us
              </ButtonComponents>
            </div>
          </div>
          <div className="">
            <img
              src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/about-06.webp"
              alt="Growlearnhub About Us"
              title="Growlearnhub About Us"
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
