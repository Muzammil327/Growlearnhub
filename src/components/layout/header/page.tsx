import Image from "next/image"
import Link from "next/link"
import ButtonComponents from "../../ui/typography/button/page"
import Container from "../../ui/Container"

export default function Header() {
  return (
    <section className="">
      <Container>
        <div className="grid md:grid-cols-5 md:gap-4 py-8 md:justify-between items-center">
          <div className="md:py-24 py-12 md:col-span-3">
            <div className="mt-4 md:text-left text-center">
              <span className="border-[1px] border-solid border-color1 text-color1 rounded-full inline-block uppercase px-5 py-2 text-sm font-medium mb-4 leading-[15px] font-sans">
                👋 Education for Everyone
              </span>
              <h1 className="mb-4 lg:text-4xl md:text-2xl text-3xl uppercase font-semibold text-black dark:text-white font-sans">
                Empowering Future Minds with Growlearnhub Learning
              </h1>
              <p className="max-w-lg text-color2 mb-5">
                At <strong> Growlearnhub</strong>, we don&apos;t just teach. But
                we inspire! Let your full potential with interactive quizzes,
                fun books, eye-opening information and build deeper skills for
                your growth.
              </p>
              <div className="flex items-center gap-6 md:justify-start justify-center">
                <ButtonComponents
                  variant="outline"
                  href="/register"
                  title="Register"
                className="rounded-md"
                >
                  Register
                </ButtonComponents>
                <ButtonComponents
                  variant="solid"
                  href="/sign-in"
                  title="Sign In"
                  className="rounded-md"
                >
                  Sign In
                </ButtonComponents>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <Image
              src="/home-banner-top.webp"
              alt=""
              title=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
