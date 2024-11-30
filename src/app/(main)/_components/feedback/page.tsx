"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FeedbackCard from "../../../../components/card/FeedbackCard/page";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../../../../components/elements/Container";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";

export default function Feedback() {
  return (
    <section className="bt mb-20 pt-10 md:pt-20">
      <Container>
        <div>
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Student&apos;s Feedback
            </h3>
            <MutedPara className="p4 text-center">
              Learning communicate to global world and build a bright future and
              career development, increase your skill with our histudy.
            </MutedPara>
          </div>
          <div className="relative my-10">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {data.map(
                (data: {
                  name: string;
                  description: string;
                  image: string;
                  career: string;
                }) => {
                  return (
                    <SwiperSlide key={data.name}>
                      <FeedbackCard data={data} />
                    </SwiperSlide>
                  );
                },
              )}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

const data = [
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer",
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer",
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer",
  },
  {
    name: "Muzammil Safdar",
    description:
      "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    image:
      "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/client-1-sm-1.webp",
    career: "Developer",
  },
];
