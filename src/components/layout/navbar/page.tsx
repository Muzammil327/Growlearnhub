// "use client";
// import { Fragment, useState } from "react";
// import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Container from "../../element/container";
// import ImageContainer from "../../element/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex pb-2 px-4 absolute top-4 right-0">
//                   <button
//                     type="button"
//                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Close menu</span>
//                     <FaTimes />
//                   </button>
//                 </div>

//                 <div className="space-y-6 px-4 mt-8 py-6">
//                   {navigation.pages.map((page: any) => (
//                     <div key={page.name} className="flow-root">
//                       <Link
//                         href={page.href}
//                         className="-m-2 block p-2 border-b border-gray-200 font-medium text-gray-900"
//                         onClick={() => setOpen(false)}
//                       >
//                         {page.name}
//                       </Link>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="px-4 border-t border-gray-200 py-6">
//                   {/* <SubHeaderSocial /> */}
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white border-b border-gray-200">
//         {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p> */}

//         <Container>
//           <div className="relative">
//             <div className="flex items-center">
//               <button
//                 type="button"
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>
//                 <FaBars />
//               </button>
//               <Link href="/" className="-m-1.5 p-1.5 max-w-full relative">
//                 <ImageContainer
//                   image="/growlearnhub.png"
//                   title="GrowLearnHub"
//                   class=""
//                   width={300}
//                   height={80}
//                   priority={true}
//                 />
//               </Link>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.pages.map((page: any) => (
//                     <Link
//                       key={page.name}
//                       href={page.href}
//                       onClick={() => setOpen(false)}
//                       className="flex items-center text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </Link>
//                   ))}
//                 </div>
//               </Popover.Group>
//             </div>
//           </div>
//         </Container>
//       </header>
//     </div>
//   );
// }

// const navigation = {

// };
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-700 pb-12 shadow-xl">
                <div className="flex pb-2 px-4 absolute top-4 right-0">
                  <Button
                    className={`
                    btnIcon relative -m-2 inline-flex items-center justify-center rounded-md border-2 border-solid duration-300 ease-in`}
                    onClick={() => setOpen(false)}
                  >
                    <FaTimes size={16} />
                  </Button>
                </div>

                <Tab.Group as="div" className="mt-24">
                  {/* <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'bg-slate-100 dark:bg-gray-900'
                                : 'link',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
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
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item: any) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div>
                                <Image
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                  height={500}
                                  width={500}
                                />
                              </div>
                              <Link
                                href={item.href}
                                className="mt-6 block font-medium"
                                onClick={() => setOpen(false)}
                              >
                                <span
                                  className="absolute inset-0 z-10 link"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
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
                  </Tab.Panels> */}
                </Tab.Group>

                <div className="space-y-6 border-t border1 px-4 py-6">
                  {navigation.pages.map((page: any) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="flex items-center text-sm font-medium link"
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
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
            <Popover.Group className="hidden xl:ml-24 ml-4 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                <Link
                  href="/"
                  className="flex items-center text-sm font-medium link"
                >
                  Home
                </Link>
                {/*   {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open, close }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open ? '' : 'border-transparent link',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
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
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item: Featured) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-cover object-center"
                                            height={300}
                                            width={300}
                                          />
                                        </div>
                                        <Link
                                          href={item.href}
                                          className="mt-6 block font-medium"
                                          onClick={close}
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </Link>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map(
                                      (section: Sections) => (
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
                                            {section.items.map(
                                              (item: Items) => (
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
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )
                                    )}
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
*/}
                {navigation.pages.map((page: any) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium link"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className="flex lg:flex-row flex-col items-center gap-3 text-sm font-medium text-gray-700 px-4">
              {/* <div className="lg:flex hidden items-center lg:gap-6">
                <Button className="link duration-300 ease-in">Sign In</Button>
                <Button className="btnIcon duration-300 ease-in">
                  Register
                </Button>
              </div> */}

              <div className="flex items-center gap-4">
                <Button
                  className="btnIcon block lg:hidden border-2 border-solid duration-300 ease-in"
                  onClick={() => setOpen(true)}
                >
                  <FaBars size={16} />
                </Button>
                <Button
                  className="py-3 !px-3"
                  onClick={() =>
                    setTheme(currentTheme === "dark" ? "light" : "dark")
                  }
                >
                  {currentTheme === "dark" ? (
                    <FaMoon size={16} />
                  ) : (
                    <FaSun size={16} />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

const navigation = {
  categories: [
    {
      id: "components",
      name: "Components",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone."
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
        }
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" }
          ]
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            {
              name: "Watches",
              href: "/catgeory/watches?category=women&subcategory=accessories"
            },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" }
          ]
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" }
          ]
        }
      ]
    }
  ],
  pages: [
    { name: "Books", href: "/book-point/" },
    { name: "Mcqs", href: "/mcqs-point/" },
    { name: "Online Tests", href: "/online-test-point/" }
  ]
}
