// import React from "react";
// import Image from "next/image";
// import Container from "../../../components/elements/Container";
// import { Button } from "../../../components/ui/button";
// import Link from "next/link";
// import MutedPara from "@/src/components/ui/typography/MutedPara/page";

// export default function AboutUs() {
//   return (
//     <section className="py-20">
//       <Container>
//         <div className="grid gap-8 lg:grid-cols-2">
//           <div className="flex items-center">
//             <div className="mb-4 w-full">
//               <span className="border-primary mb-4 inline-block rounded-full border-[1px] border-solid px-5 py-2 font-sans text-sm font-medium uppercase leading-[15px] text-primary">
//                 About Grow Learn Hub.
//               </span>
//               <h2 className="mb-4 text-4xl font-semibold text-black dark:text-white">
//                 What is Growlearnhub For You?.
//               </h2>
//               <MutedPara>
//                 Welcome to <em>Growlearnhub</em>, which is a complete platform
//                 for learning, designed to help and support in your education.
//                 Each resource has been freshly selected to make learning
//                 engaging and effective.
//               </MutedPara>
//               <MutedPara>
//                 Moreover, our learning materials will also offer you well-done
//                 Notes, and a large collection of Past Papers to reinforce your
//                 understanding and build your confidence. With Growlearnhub, you
//                 have acces to everything you need to do well in your studies,
//                 all in one place. Begin Your Journey To Success Here!
//               </MutedPara>
//               <Button
//                 asChild
//                 variant="outline"
//                 className="inline-block w-full rounded-md md:w-40"
//               >
//                 <Link href="/about-us">About Us</Link>
//               </Button>
//             </div>
//           </div>
//           <div className="">
//             <Image
//               src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/about-06.webp"
//               alt="Growlearnhub About Us"
//               title="Growlearnhub About Us"
//               className="h-full w-full"
//               height={500}
//               width={500}
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { GraduationCap, MonitorPlay, Users, UserCheck } from 'lucide-react'
import { Card } from "@/components/ui/card"


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/about-06.webp",
    title: "Learn at Your Own Pace",
    description: "Access quality education from anywhere, anytime. Our flexible learning platform adapts to your schedule."
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Expert-Led Courses",
    description: "Learn from industry professionals and experienced educators in your field of interest."
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Interactive Learning",
    description: "Engage with dynamic content and collaborate with peers worldwide."
  }
]


export default function Component() {
  return (
    <>
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Reviews and Image - 2 columns */}
            <div className="md:w-2/12 flex flex-col space-y-6">
              <Card className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">2.4k</h3>
                  <p className="text-sm text-muted-foreground">Positive Reviews</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt="Student learning"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg mt-4"
                />
              </Card>
            </div>

            {/* Video Section - 4 columns */}
            <div className="md:w-4/12 flex">
              <Card className="w-full p-4 flex flex-col justify-center">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/about-06.webp"
                    alt="Educational video placeholder"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="lg" className="rounded-full">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content Section - 6 columns */}
            <div className="md:w-6/12 flex">
              <Card className="w-full p-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      About Study Hub
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Know StudyHub Empowering Learners Worldwide
                  </h1>
                  <p className="text-muted-foreground">
                    We are passionate about education and dedicated to providing high-quality learning resources for learners of all backgrounds.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Learn with Expert</h3>
                          <p className="text-sm text-muted-foreground">We are passionate about education.</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Expert Instructors</h3>
                          <p className="text-sm text-muted-foreground">Learn from industry experts.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="William James"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <h4 className="font-semibold">William James</h4>
                      <p className="text-sm text-muted-foreground">CEO, StudyHub Online Education</p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/about">About Us</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>



      <div className="relative w-full bg-background">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          className="w-full aspect-[21/9]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/20">
                  <div className="container h-full">
                    <div className="flex flex-col justify-center h-full max-w-lg gap-4 px-4 md:px-6">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="text-muted-foreground md:text-lg">
                        {slide.description}
                      </p>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg">Get Started</Button>
                        <Button variant="outline" size="lg">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-prev absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-next absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>



      <section className="py-16 bg-slate-50/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Why Choose Histudy
            </h2>
            <p className="text-slate-500">Language Academic?</p>
          </div>

          <div className="relative mt-20">
            {/* Base line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-100" />

            {/* Animated line */}
            <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 animate-[shimmer_2s_linear_infinite]"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                }}
              />
            </div>

            {/* Timeline nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { icon: GraduationCap, number: "+500h", text: "Learners & counting" },
                { icon: MonitorPlay, number: "+800h", text: "Courses & Video" },
                { icon: Users, number: "+1,000h", text: "Certified Students" },
                { icon: UserCheck, number: "+100h", text: "Registered Enrolls" },
              ].map((item, index) => (
                <div key={index} className="pt-8 relative group">
                  {/* Timeline dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-400 transition-colors group-hover:border-blue-500" />

                  {/* Card */}
                  <Card className="p-6 text-center bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <item.icon className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{item.number}</h3>
                    <p className="text-slate-500 text-sm">{item.text}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  )
}