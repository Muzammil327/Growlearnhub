import React from 'react'
import Image from 'next/image'

interface Irops {
  image: string
  title: string
  class: string
  height: number
  width: number
  priority?: boolean
}

export default function ImageContainer(data: Irops) {
  return (
    <div className="w-full h-auto">
      <Image
        src={data.image}
        alt={data.title}
        title={data.title}
        height={data.height}
        width={data.width}
        className={`${data.class}`}
        priority={data.priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
