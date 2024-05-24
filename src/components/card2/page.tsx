import style from './card2Component.module.css';
import Link from 'next/link';

export default function Card2(props: { title: string; link: string }) {
  return (
    <>
      <Link href={`${props.link}`}>
        <div className={style.card}>
          <h2 className={style.h4}>{props.title}</h2>
          <div className={style.shine}></div>
          <div className={style.background}>
            <div className={`${style.line} ${style.line1}`}></div>
            <div className={`${style.line} ${style.line2}`}></div>
            <div className={`${style.line} ${style.line3}`}></div>
          </div>
        </div>
      </Link>
    </>
  );
}
