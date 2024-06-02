import Image from "next/image";
import style from "./card2Component.module.css";
import Link from "next/link";

export default function Card2(props: {
  title: string;
  link: string;
  para?: string;
  image?: string | undefined;
}) {
  return (
    <>
      <Link href={`${props.link}`} aria-label={props.link}>
        <div className={style.card}>
          <Image
            src={`${props.image}`}
            alt={props.title}
            title={props.title}
            height={720}
            width={1280}
            className="rounded-tl-md rounded-tr-md"
          />
          <div className="px-4">
            <h3>{props.title}</h3>
            <p>{props.para}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
