import React from "react";
import Newsletter from "@/src/components/layout/footer/newsletter";
import FooterMenu from "@/src/components/layout/footer/menu";
import Container from "../../element/container";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h4 className="font-bold tracking-tight text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl">
              Subscribe to our newsletter.
            </h4>
            <p className="mt-4 md:text-lg sm:text-base text-sm md:leading-8 leading-6 text-gray-300">
              Stay in the loop with the latest news, and tips straight to your
              inbox! Don&apos;t miss out on valuable insights and exciting
              updates from us.
            </p>
            <Newsletter />
          </div>
          <div className="grid grid-cols-2 gap-x-8 md:gap-y-6 gap-y-10 lg:pt-2">
            <FooterMenu />
          </div>
        </div>
      </Container>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </footer>
  );
}
