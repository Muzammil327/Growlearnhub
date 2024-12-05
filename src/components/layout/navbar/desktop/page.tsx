import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import TypographyLink from "@/components/ui/typography/Links/page";
import Container from "@/components/elements/Container";
import Logo from "@/components/elements/Logo";
import { navigation } from "@/components/layout/navbar/data";
import DesktopNavButtonGroup from "./DesktopNavButtonGroup";
import { cn } from "@/src/lib/utils";

export default function DesktopNavbar({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
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
    <nav className={cn("desktop", scrolling ? "navbarFixed" : "")}>
      <Container>
        <div className="fcb">
          <Logo />

          {/* Flyout menus */}
          <Popover.Group className="menu">
            {navigation.pages.map((page: any) => (
              <TypographyLink
                key={page.name}
                slug={page.href}
                className="menulink link1"
              >
                {page.name}
              </TypographyLink>
            ))}
            {navigation.categories.map((category) => (
              <Popover
                key={category.name}
                className="flyover"
                onBlur={() => {}} // Ensuring the popover closes on blur
                as="div"
              >
                {({ open, close }) => (
                  <React.Fragment>
                    <div className="relative flex">
                      <Popover.Button
                        className={cn(
                          "flyoverhead link1",
                          open ? "border-destructive" : "border-transparent",
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
                      <Popover.Panel
                        className="panel"
                        onClick={(e) => e.stopPropagation()} // Prevents clicking inside the panel from closing the popover
                      >
                        <div
                          className="overlay"
                          aria-hidden="true"
                          onClick={close} // Close popover when overlay is clicked
                        />

                        <div className="panelcontent">
                          {category.sections.map((section: any) => (
                            <div key={section.name} className="panelsection">
                              <p id={`${section.name}-heading`}>
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${section.name}-heading`}
                              >
                                {section.items.map((item: any) => (
                                  <li key={item.name}>
                                    <TypographyLink
                                      slug={item.href}
                                      className="link1"
                                      onClick={close}
                                    >
                                      {item.name}
                                    </TypographyLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </React.Fragment>
                )}
              </Popover>
            ))}
          </Popover.Group>

          <DesktopNavButtonGroup setOpen={setOpen} />
        </div>
      </Container>
    </nav>
  );
}
