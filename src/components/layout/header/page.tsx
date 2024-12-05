import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import Container from "@/src/components/elements/Container";
import Link from "next/link";

export default function Header() {
  return (
    <section className="">
      <Container>
        <div className="grid items-center py-8 md:grid-cols-5 md:justify-between md:gap-4">
          <div className="py-12 md:col-span-3 md:py-24">
            <div className="mt-4 text-center md:text-left">
              <span className="mb-4 inline-block rounded-full border px-5 py-2 font-sans text-sm font-medium uppercase leading-[15px] text-primary">
                👋 Education for Everyone
              </span>
              <h1 className="mb-4 font-sans text-3xl font-semibold uppercase text-black dark:text-white md:text-2xl lg:text-4xl">
                Empowering Future Minds with Growlearnhub Learning
              </h1>
              <p
                className="mb-5 max-w-lg text-primary"
                style={{
                  lineHeight: "2",
                }}
              >
                At <strong> Growlearnhub</strong>, we don&apos;t just teach. But
                we inspire! Let your full potential with interactive quizzes,
                fun books, eye-opening information and build deeper skills for
                your growth.
              </p>
              <div className="flex items-center justify-center gap-6 md:justify-start">
                <Button title="Register" className="rounded-md" asChild>
                  <Link href="/about-us">About Us</Link>
                </Button>
                <Button
                  variant="outline"
                  title="Sign In"
                  className="rounded-md"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:col-span-2">
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
  );
}
