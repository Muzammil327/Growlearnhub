import Link from "next/link";
import Container from "@/src/components/element/container";
import HeaderUpper from "./upper/page";
import style from "./header.module.css";
import Image from "next/image";

export default function Header(props: { title: string }) {
  return (
    <section className="bg-white mb-10">
      <Container>
        <div className="grid md:grid-cols-5 md:gap-4 py-8 justify-between items-center">
          <div className="md:py-24 py-5 md:col-span-3">
            <div className="mt-4 md:text-left text-center">
              <h1 className="text-black">{props.title}</h1>
              <p className="py-1 md:max-w-lg">
                Join us at Codebloglab to supercharge your learning! Dive into
                fun quizzes, enlightening books, and empowering knowledge.
                Let&apos;s explore together for lifelong enrichment!
              </p>
              {/* <div className={style.btnGroup}>
                <Link href="#" className={style.btn1}>
                  Register
                </Link>
                <Link href="#" className={style.btn2}>
                  Login <span aria-hidden="true">→</span>
                </Link>
              </div> */}
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
        {/* <div className={`px-6 pt-14 ${style.hero}`}>
         <div className={style.bg1} aria-hidden='true'>
            <div className={style.icon} />
          </div> 
          <div className='mx-auto max-w-3xl py-24 sm:py-36'>
            <div className='text-center mt-4'>
              <h1 className='text-black'>{props.title}</h1>
              <p>
                Join us at Codebloglab to supercharge your learning! Dive into
                fun quizzes, enlightening books, and empowering knowledge.
                Let&apos;s explore together for lifelong enrichment!
              </p>
              <div className={style.btnGroup}>
                <Link href='#' className={style.btn1}>
                  Register
                </Link>
                <Link href='#' className={style.btn2}>
                  Login <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
