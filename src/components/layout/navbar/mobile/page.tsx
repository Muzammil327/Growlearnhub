import { Fragment } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { FaTimes } from "@/components/elements/Icon";

import TypographyLink from "@/components/ui/typography/Links/page";
import { Button } from "@/src/components/ui/Button";
import Logo from "@/components/elements/Logo";
import { navigation } from "@/components/layout/navbar/data";
import MobileNavButtonGroup from "./MobileNavButtonGroup";

export default function MobileNavbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="mobile" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="overlay" />
        </Transition.Child>

        <div className="content">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="panel">
              <div className="cross">
                <Button
                  size={"icon"}
                  variant={"destructive"}
                  className="button"
                  onClick={() => setOpen(false)}
                >
                  <FaTimes />
                </Button>
              </div>

              <div className="fcc p-4">
                <Logo />
              </div>

              <div className="menu">
                {navigation.pages.map((page: any) => (
                  <div key={page.name} className="flow-root">
                    <TypographyLink
                      slug={page.href}
                      className="link"
                      onClick={() => setOpen(false)}
                    >
                      {page.name}
                    </TypographyLink>
                  </div>
                ))}
              </div>

              <Tab.Group as="div" className="tab">
                <Tab.List className="head">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        `tabhead ${selected ? "bg-destructive text-white" : "bg-slate-100 dark:bg-gray-900"}`
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="panel">
                      {category.sections.map((section: any) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`}>
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          >
                            {section.items.map((item: any) => (
                              <li key={item.name} className="flow-root">
                                <TypographyLink
                                  slug={item.href}
                                  className="link -m-2 block p-2"
                                  onClick={() => setOpen(false)}
                                  title={item.name}
                                >
                                  {item.name}
                                </TypographyLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t px-4"></div>
              <MobileNavButtonGroup />
              <div className="border-t px-4 py-6"></div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
