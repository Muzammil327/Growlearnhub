"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Bars3Icon from "./Bars3Icon";
import XMarkIcon from "./XMarkIcon";
import Container from "@/src/components/element/container";
import style from "./navbar.module.css";
import { NavbarIpropsSlug } from "./type";

const navigation: NavbarIpropsSlug[] = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books/" },
  { name: "Quiz", href: "/study-material/" },
  { name: "Notes", href: "/study-material/" },
  { name: "Online Test", href: "/study-material/" },
  { name: "Pairing Scheme", href: "/study-material/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`header ${scrolling ? `${style.headerScrolled}` : ""}`}>
      <div
        className={`${style.navbar} ${scrolling ? `${style.navbarFixed}` : ""}`}
      >
        <Container>
          <nav aria-label="Global">
            <div className={`${style.nav}`}>
              <div className="flex">
                <Link href="/" className="-m-1.5 p-1.5 max-w-full relative">
                  <Image
                    src="/growlearnhub.png"
                    alt="Logo"
                    width={300}
                    height={80}
                    priority
                    className="md:w-[300px] w-[250px] "
                  />
                </Link>
              </div>
              <div className={style.menubutton}>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className={style.button}
                  aria-label="Open Mobile Menu"
                >
                  <Bars3Icon />
                </button>
              </div>
              <div className={style.menu}>
                {navigation.map((item: NavbarIpropsSlug) => (
                  <Link key={item.name} href={item.href} className={style.a}>
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Search Icon */}
              <Link href="/search" className="lg:block hidden" aria-label="Search query page">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="m11.25 11.25 3 3" />
                  <circle cx="7.5" cy="7.5" r="4.75" />
                </svg>
              </Link>
            </div>
          </nav>
        </Container>
        {/* Mobile Menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 overflow-x-hidden right-0 z-50 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 max-w-full">
                <span className="sr-only">Muzammil</span>
                <Image
                  src="/growlearnhub.png"
                  alt="Logo"
                  width={300}
                  height={80}
                  className="md:w-[300px] w-[250px] "
                />
              </Link>
              <button
                type="button"
                className={`${style.button} mr-5`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-5 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
}
