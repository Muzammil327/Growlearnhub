"use client"
import { Fragment, useEffect, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import Link from "next/link"

import { FaBars, FaSun, FaTimes } from "react-icons/fa"
import Container from "@/src/components/ui/Container"
import Logo from "@/src/components/ui/Logo"
import Button from "@/src/components/ui/Button"
import { FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"
import ButtonIcon from "@/src/components/ui/ButtonIcon"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-700 pb-12 shadow-xl">
                <div className="flex pb-2 px-4 absolute top-4 right-0">
                  <ButtonIcon
                    className={`
                    btnIcon relative -m-2 inline-flex items-center justify-center rounded-md border-2 border-solid duration-300 ease-in`}
                    onClick={() => setOpen(false)}
                  >
                    <FaTimes />
                  </ButtonIcon>
                </div>

                <Logo />
                <div className="space-y-6 border-t border1 px-4 py-6">
                  {navigation.pages.map((page: any) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="block text-sm font-medium border-b border-gray-300 py-3"
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-1 px-4 overflow-x-auto scrollbar-hide">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            `${selected ? "bg-color1 text-white" : "bg-slate-200 dark:bg-gray-900"} flex-shrink-0 whitespace-nowrap border-b-2 px-6 py-4 text-base font-medium`
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                    
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-6"
                      >
                        {category.sections.map((section: any) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="flex items-center text-base font-semibold text"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item: any) => (
                                <li key={item.name} className="flow-root">
                                  <Link
                                    href={item.href}
                                    className="-m-2 block p-2 link"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 border-t border1"></div>
                <div
                  className={`my-4 flex lg:flex-row flex-col items-center gap-3 text-sm font-medium px-4`}
                >
                  <Button className="w-full link duration-300 ease-in my-3">
                    Sign In
                  </Button>
                  <Button className="btnIcon w-full duration-300 ease-in">
                    Register
                  </Button>
                </div>
                <div className="px-4 border-t border1 py-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <nav
        className={`relative border-b py-2 border1 ${
          scrolling ? `navbarFixed` : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo />

            {/* Flyout menus */}
            <Popover.Group className="hidden xl:ml-24 ml-4 lg:block lg:self-stretch ">
              <div className="flex h-full space-x-8 ">
                {navigation.pages.map((page: any) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium link"
                  >
                    {page.name}
                  </Link>
                ))}
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open, close }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={`${open ? "" : "border-transparent link"} relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute z-50 inset-x-0 top-full text-sm">
                            <div
                              className="absolute inset-0 top-1/2 shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white dark:bg-gray-700">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="py-8">
                                  <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section: any) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="flex items-center text-base font-semibold text"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item: any) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <Link
                                                href={item.href}
                                                className="link"
                                                onClick={close}
                                              >
                                                {item.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
              </div>
            </Popover.Group>

            <div className="flex lg:flex-row flex-col items-center gap-3 px-4">
              <div className="flex items-center gap-4">
                <ButtonIcon className="lg:hidden" onClick={() => setOpen(true)}>
                  <FaBars />
                </ButtonIcon>
                <ButtonIcon
                  onClick={() =>
                    setTheme(currentTheme === "dark" ? "light" : "dark")
                  }
                >
                  {currentTheme === "dark" ? <FaMoon /> : <FaSun />}
                </ButtonIcon>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

const navigation = {
  pages: [{ name: "Home", href: "/" }],
  categories: [
    {
      id: "books",
      name: "Books",
      sections: [
        {
          id: "class 9",
          name: "Class 9",
          items: [
            { name: "Class 9 - Biology Books", href: "" },
            { name: "Class 9 - Chemistry Books", href: "#" },
            { name: "Class 9 - Physics Books", href: "#" },
            { name: "Class 9 - Math Books", href: "#" },
            { name: "Class 9 - English Books", href: "#" },
            { name: "Class 9 - Urdu Books", href: "#" }
          ]
        },
        {
          id: "class 10",
          name: "Class 10",
          items: [
            { name: "Class 10 - Biology Books", href: "#" },
            { name: "Class 10 - Chemistry Books", href: "#" },
            { name: "Class 10 - Physics Books", href: "#" },
            { name: "Class 10 - Math Books", href: "#" },
            { name: "Class 10 - English Books", href: "#" },
            { name: "Class 10 - Urdu Books", href: "#" }
          ]
        },
        {
          id: "class 11",
          name: "Class 11",
          items: [
            { name: "Class 11 - Biology Books", href: "#" },
            { name: "Class 11 - Chemistry Books", href: "#" },
            { name: "Class 11 - Physics Books", href: "#" },
            { name: "Class 11 - Math Books", href: "#" },
            { name: "Class 11 - English Books", href: "#" },
            { name: "Class 11 - Urdu Books", href: "#" }
          ]
        },
        {
          id: "class 12",
          name: "Class 12",
          items: [
            { name: "Class 12 - Biology Books", href: "#" },
            { name: "Class 12 - Chemistry Books", href: "#" },
            { name: "Class 12 - Physics Books", href: "#" },
            { name: "Class 12 - Math Books", href: "#" },
            { name: "Class 12 - English Books", href: "#" },
            { name: "Class 12 - Urdu Books", href: "#" }
          ]
        }
      ]
    },
    {
      id: "mcqs",
      name: "Mcqs",
      sections: [
        {
          id: "class 9",
          name: "Class 9",
          items: [
            { name: "Class 9 - Biology Mcqs", href: "#" },
            { name: "Class 9 - Chemistry Mcqs", href: "#" },
            { name: "Class 9 - Physics Mcqs", href: "#" }
          ]
        },
        {
          id: "class 10",
          name: "Class 10",
          items: [
            { name: "Class 10 - Biology Mcqs", href: "#" },
            { name: "Class 10 - Chemistry Mcqs", href: "#" },
            { name: "Class 10 - Physics Mcqs", href: "#" }
          ]
        },
        {
          id: "class 11",
          name: "Class 11",
          items: [
            { name: "Class 11 - Biology Mcqs", href: "#" },
            { name: "Class 11 - Chemistry Mcqs", href: "#" },
            { name: "Class 11 - Physics Mcqs", href: "#" }
          ]
        },
        {
          id: "class 12",
          name: "Class 12",
          items: [
            { name: "Class 12 - Biology Mcqs", href: "#" },
            { name: "Class 12 - Chemistry Mcqs", href: "#" },
            { name: "Class 12 - Physics Mcqs", href: "#" }
          ]
        }
      ]
    },
    {
      id: "onlinetests",
      name: "Online Tests",
      sections: [
        {
          id: "class 9",
          name: "Class 9",
          items: [
            { name: "Class 9 - Biology Online Tests", href: "" },
            { name: "Class 9 - Chemistry Online Tests", href: "#" },
            { name: "Class 9 - Physics Online Tests", href: "#" }
          ]
        },
        {
          id: "class 10",
          name: "Class 10",
          items: [
            { name: "Class 10 - Biology Online Tests", href: "" },
            { name: "Class 10 - Chemistry Online Tests", href: "#" },
            { name: "Class 10 - Physics Online Tests", href: "#" }
          ]
        },
        {
          id: "class 11",
          name: "Class 11",
          items: [
            { name: "Class 11 - Biology Online Tests", href: "" },
            { name: "Class 11 - Chemistry Online Tests", href: "#" },
            { name: "Class 11 - Physics Online Tests", href: "#" }
          ]
        },
        {
          id: "class 12",
          name: "Class 12",
          items: [
            { name: "Class 12 - Biology Online Tests", href: "" },
            { name: "Class 12 - Chemistry Online Tests", href: "#" },
            { name: "Class 12 - Physics Online Tests", href: "#" }
          ]
        }
      ]
    },
    {
      id: "notes",
      name: "Notes",
      sections: [
        {
          id: "class 9",
          name: "Class 9",
          items: [
            { name: "Class 9 - Biology Notes", href: "" },
            { name: "Class 9 - Chemistry Notes", href: "#" },
            { name: "Class 9 - Physics Notes", href: "#" }
          ]
        },
        {
          id: "class 10",
          name: "Class 10",
          items: [
            { name: "Class 10 - Biology Notes", href: "" },
            { name: "Class 10 - Chemistry Notes", href: "#" },
            { name: "Class 10 - Physics Notes", href: "#" }
          ]
        },
        {
          id: "class 11",
          name: "Class 11",
          items: [
            { name: "Class 11 - Biology Notes", href: "" },
            { name: "Class 11 - Chemistry Notes", href: "#" },
            { name: "Class 11 - Physics Notes", href: "#" }
          ]
        },
        {
          id: "class 12",
          name: "Class 12",
          items: [
            { name: "Class 12 - Biology Notes", href: "" },
            { name: "Class 12 - Chemistry Notes", href: "#" },
            { name: "Class 12 - Physics Notes", href: "#" }
          ]
        }
      ]
    },
    {
      id: "pastpaper",
      name: "Past Paper",
      sections: [
        {
          id: "class 9",
          name: "Class 9",
          items: [
            { name: "Class 9 - Faisalabad Board", href: "" },
            { name: "Class 9 - Lahore Board", href: "#" }
          ]
        },
        {
          id: "class 10",
          name: "Class 10",
          items: [
            { name: "Class 10 - Faisalabad Board", href: "" },
            { name: "Class 10 - Lahore Board", href: "#" }
          ]
        },
        {
          id: "class 11",
          name: "Class 11",
          items: [
            { name: "Class 11 - Faisalabad Board", href: "" },
            { name: "Class 11 - Lahore Board", href: "#" }
          ]
        },
        {
          id: "class 12",
          name: "Class 12",
          items: [
            { name: "Class 12 - Faisalabad Board", href: "" },
            { name: "Class 12 - Lahore Board", href: "#" }
          ]
        }
      ]
    }
  ]
}
