import React from "react"
import Container from "../element/container"
import { FaNoteSticky } from "react-icons/fa6"
import { FaBook, FaEdit } from "react-icons/fa"
import Link from "next/link"
import ImageContainer from "../ui/ImageContainer"

export default function Classes() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
          {Classe.map((data: any) => {
            return (
              <div className="" key={data.id}>
                <div className="image w-full h-auto">
                  <ImageContainer
                    image={data.image}
                    title={data.name}
                    height={720}
                    width={1280}
                    class={""}
                  />
                </div>
                <div className="body px-5 py-3 border">
                  <Link
                    href={data.href}
                    className="text-2xl font-semibold my-0 py-2"
                  >
                    {data.name}
                  </Link>
                  <ul className="grid grid-cols-2 items-center justify-between">
                    {data.child.map((data: any) => {
                      return (
                        <li
                          className="flex gap-4 items-center !text-gray-500"
                          key={data.name}
                        >
                          {data.icon}
                          <span className="!text-gray-500">{data.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const Classe = [
  {
    id: 0,
    name: "Class 9",
    href: "/class-9/",
    image: "/class_9.webp",
    child: [
      {
        name: "Books",
        icon: <FaBook />
      },
      {
        name: "Notes",
        icon: <FaEdit />
      },
      {
        name: "Past Paper",
        icon: <FaNoteSticky />
      },
      {
        name: "Quiz",
        icon: <FaNoteSticky />
      }
    ]
  },
  {
    id: 1,
    name: "Class 10",
    href: "/class-10/",
    image: "/class_10.webp",
    child: [
      {
        name: "Books",
        icon: <FaBook />
      },
      {
        name: "Notes",
        icon: <FaEdit />
      },
      {
        name: "Past Paper",
        icon: <FaNoteSticky />
      },
      {
        name: "Quiz",
        icon: <FaNoteSticky />
      }
    ]
  },
  {
    id: 2,
    name: "Virtual University",
    href: "/vu/",
    image: "/vu.webp",
    child: [
      {
        name: "Books",
        icon: <FaBook />
      }
    ]
  }
]
