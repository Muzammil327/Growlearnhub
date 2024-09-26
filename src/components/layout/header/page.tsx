import Container from '@/src/components/element/container'
import Image from 'next/image'
import Button from '../../ui/Button'

export default function Header(props: { title: string }) {
  return (
    <section className="">
      <Container>
        <div className="grid md:grid-cols-5 md:gap-4 py-8 md:justify-between items-center">
          <div className="md:py-24 py-12 md:col-span-3">
            <div className="mt-4 md:text-left text-center">
              <span className="py-2 px-3 rounded-full border-2 border1 text">
                👋 EDUCATION FOR EVERYONE
              </span>
              <h1 className="mt-5 mb-4 lg:text-4xl md:text-2xl text-3xl uppercase font-semibold text-color2">
                {props.title}
              </h1>
              <p className="max-w-lg text md:m-0 mx-auto">
                Join us at Codebloglab to supercharge your learning! Dive into
                fun quizzes, enlightening books, and empowering knowledge.
                Let&apos;s explore together for lifelong enrichment!
              </p>
              <Button className="btnIcon px-12 md:mx-0 mx-auto mt-4 duration-300 ease-in rounded-full flex gap-2 items-center">
                Learn More About Us
              </Button>
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
