import style from "./card3Component.module.css";
import Link from "next/link";

export default function Card3(props: { title: string; link: string }) {
  return (
    <>
      <Link href={`${props.link}`}>
        <div className={style.card}>
          <h4 className={style.h4}>{props.title}</h4>
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