import { SmallCardProps } from "@/src/types/CardType";
import "./cardSmall.scss";
import Link from "next/link";

export default function CardSmall(props: SmallCardProps) {
  return (
    <Link href={`/${props.link}/`} className={props.className}>
      <div className="card">
        <span>{props.title}</span>
        <div className="shine"></div>
        <div className="background">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </Link>
  );
}
{
  /* <svg
xmlns="http://w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg> */
}
