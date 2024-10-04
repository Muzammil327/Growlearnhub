import React from "react"
import Newsletter from "@/src/components/layout/footer/newsletter"
import Container from "../../element/container"
import Social from "./social"
import Link from "next/link"
import Logo from "../../ui/Logo"

const footer = [
  {
    id: 0,
    name: "Home",
    link: "/"
  },
  {
    id: 1,
    name: "About Us",
    link: "/"
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/online-test-point/"
  },
  {
    id: 3,
    name: "Blogs",
    link: "/"
  },
  {
    id: 4,
    name: "Privacy Policy",
    link: "/"
  },
  {
    id: 5,
    name: "Terms and Conditions",
    link: "/"
  },
  {
    id: 6,
    name: "Disclaimer",
    link: "/"
  }
]

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-white ">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-8 py-16 sm:py-24">
          <div className="max-w-xl lg:max-w-lg col-span-3">
            <Logo />
            <p className="text-color2">
              Stay in the loop with the latest news, and tips straight to your
              inbox! Don&apos;t miss out on valuable insights and exciting
              updates from us.
            </p>
            <Newsletter />
          </div>
          <div className="col-span-3">
            <h5 className="text-black font-bold text-lg md:mb-8 mb-4">
              Useful Links
            </h5>
            <ul className="grid grid-cols-2 gap-x-4">
              {footer.map((footer) => (
                <li key={footer.name} className="mb-4">
                  <Link
                    href="/"
                    className="relative text-sm text-color2 hover:text-color1 transition-all ease-linear duration-300"
                  >
                    {footer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-black font-bold text-lg md:mb-8 mb-4">
              Get Contact
            </h5>
            <ul>
              <li className="flex gap-1 text-sm text-color2 mb-3">
                <span className="font-bold">Phone:</span>
                <span>+923144878266</span>
              </li>
              <li className="flex gap-1 text-sm text-color2 mb-3">
                <span className="font-bold">Email:</span>
                <span>mmuzammiloff327@gmail.com</span>
              </li>
              <li className="flex gap-1 text-sm text-color2 mb-3">
                <span className="font-bold">Location:</span>
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
            <Social />
          </div>
        </div>
      </Container>
      <div className="copyright border-t border-gray-300 py-3 text-center">
        <Container>
          <span className="text-black text-sm">
            ©2024 GrowLearnHub. All Rights Reserved bg{" "}
            <Link
              href="https://mmuzammil-portfolio.vercel.app/"
              className="underline text-color1"
            >
              Muzammil Safdar
            </Link>
            .
          </span>{" "}
        </Container>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
    </footer>
  )
}
