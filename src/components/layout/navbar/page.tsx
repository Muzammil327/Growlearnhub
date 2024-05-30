"use client";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../../element/container";
import ImageContainer from "../../element/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex pb-2 px-4 absolute top-4 right-0">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <FaTimes />
                  </button>
                </div>

                <div className="space-y-6 px-4 mt-8 py-6">
                  {navigation.pages.map((page: any) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2 border-b border-gray-200 font-medium text-gray-900"
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="px-4 border-t border-gray-200 py-6">
                  {/* <SubHeaderSocial /> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white border-b border-gray-200">
        {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p> */}

        <Container>
          <div className="relative">
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <FaBars />
              </button>
              <Link href="/" className="-m-1.5 p-1.5 max-w-full relative">
                <ImageContainer
                  image="/growlearnhub.png"
                  title="GrowLearnHub"
                  class=""
                  width={300}
                  height={80}
                  priority={true}
                />
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page: any) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

const navigation = {
  pages: [
    { name: "Books", href: "/books/" },
    { name: "Quiz", href: "/quiz/" },
    { name: "Notes", href: "/notes/" },
    { name: "Online Tests", href: "/notes/" },
    { name: "Past Papers", href: "/past-papers/" },
    { name: "Pairing Schemes", href: "/pairing-schemes/" },
  ],
};
