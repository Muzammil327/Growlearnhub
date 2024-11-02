'use client'
import React from "react"
import Container from "../../ui/Container"
import Slider from "react-slick"
import FeedbackCard from "../../card/FeedbackCard/page"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Feedback() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className="mb-20 pt-10 md:pt-20 bt">
      <Container>
        <div>
          <div className="max-w-xl flex items-center flex-col mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              Student&apos;s Feedback
            </h3>
            <p className="p4 text-center">
              Learning communicate to global world and build a bright future and
              career development, increase your skill with our histudy.
            </p>
          </div>
          <div className="my-10 relative">
            <Slider {...settings}>
              {data.map((data: {
                name: string
                description: string
                image: string
                career: string
              }) => {
                return <FeedbackCard key={data.name} data={data} />
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}

const data = [
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer"
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer"
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer"
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer"
  }
]
