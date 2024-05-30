import Image from "next/image";
import style from "./card2Component.module.css";
import Link from "next/link";

export default function Card2(props: { title: string; link: string }) {
  return (
    <>
      <Link href={`${props.link}`}>
        <div className={style.card}>
          <Image
            src="/9th/book/biology/Download-Punjab-Board-Biology-Book.webp"
            alt="{data.title}"
            title="{data.title}"
            height={720}
            width={1280}
            className="rounded-tl-md rounded-tr-md"
          />
          <div className="px-4">
            <h3 className={style.h4}>{props.title}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              minus vero ad eveniet expedita? Minus.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
