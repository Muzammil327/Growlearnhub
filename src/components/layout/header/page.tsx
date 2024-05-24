import Link from 'next/link';
import Container from '@/src/components/element/container';
import HeaderUpper from './upper/page';
import style from './header.module.css';

export default function Header(props: { title: string }) {
  return (
    <section className='bg-white'>
      <Container>
        <div className={`px-6 pt-14 ${style.hero}`}>
          <div className={style.bg1} aria-hidden='true'>
            <div className={style.icon} />
          </div>
          <div className='mx-auto max-w-3xl py-24 sm:py-36'>
            {/* <HeaderUpper /> */}
            <div className='text-center mt-4'>
              <h1 className={style.h1}>{props.title}</h1>
              <p className={style.p}>
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
        </div>
      </Container>
    </section>
  );
}
