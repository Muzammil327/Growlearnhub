import React from "react"
import styles from "./Feedback.module.scss"
import Container from "../../ui/Container"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Feedback() {
  var settings = {
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
              {data.map((data: any) => {
                return (
                  <div
                    key={data.name}
                    className={`dark:bg-gray-700 ${styles.card}`}
                  >
                    <div className="flex items-center md:flex-row flex-col gap-2">
                      <div className={`dark:bg-gray-800 ${styles.thumb}`}>
                        <img
                          src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp"
                          alt=""
                          className="rounded-full h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:text-left text-center">
                        <h5 className="text-base font-semibold text-black dark:text-white">
                          {data.name}
                        </h5>
                        <span className="text-color2 text-sm">
                          {data.career}
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 text-color2">
                      <p className="mb-0">{data.description}</p>
                    </div>
                  </div>
                )
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
