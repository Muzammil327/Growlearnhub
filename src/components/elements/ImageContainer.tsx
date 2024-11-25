"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Irops {
  image: string;
  title: string;
  class?: string;
  height: number;
  width: number;
  priority?: boolean;
}

export default function ImageContainer(data: Irops) {
  return (
    <div className="h-auto w-full">
      <Image
        src={data.image}
        alt={data.title}
        height={data.height}
        width={data.width}
        className={`${data.class}`}
        priority={data.priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export function ImageContainerLoading(data: Irops) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-auto w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Loading Spinner */}
          <div className="loader h-8 w-8 animate-spin rounded-full border-t-4 border-blue-500"></div>
        </div>
      )}
      <Image
        src={data.image}
        alt={data.title}
        height={data.height}
        width={data.width}
        className={`${data.class} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        priority={data.priority}
        onLoadingComplete={() => setLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
