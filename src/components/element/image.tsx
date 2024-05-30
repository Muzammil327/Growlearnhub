import Image from "next/image";
import React from "react";

interface Irops {
  image: string;
  title: string;
  class: string;
  height: number;
  width: number;
  priority?: boolean;
}

export default function ImageContainer(data: Irops) {
  return (
    <div className="w-full">
      <Image
        src={data.image}
        alt={data.title}
        title={data.title}
        height={data.height}
        width={data.width}
        className={`object-contain w-full relative ${data.class}`}
        priority={data.priority}
      />
    </div>
  );
}
