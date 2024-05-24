import React from "react";
import Container from "../element/container";
import VideoPlayer from "../element/VideoPlayer";

export default function Counter() {
  return (
    <section
      className="py-20 relative z-0 overflow-hidden bg-cover bg-no-repeat bg-fixed overlay"
      style={{
        backgroundImage: 'url("/bg_3.jpg.webp")',
      }}
      data-stellar-background-ratio="0.5"
    >
      <Container>
        <div className="flex flex-col gap-6">
          <div className="justify-center mb-5 pb-2 grid lg:grid-cols-2 lg:gap-6 md:gap-4">
            <div className="flex">
              <div className="flex items-center w-full"></div>
            </div>
            <div className="">
              <h3 className="mb-4 text-4xl font-bold py-3 text-white">
                Grow Learn Hub
              </h3>
              <p className="text-white">
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p className="text-white">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 items-center justify-between">
            <div className="flex flex-col justify-center items-center">
              <strong className="number block font-semibold text-white text-4xl">
                18
              </strong>
              <span className="block text-base text-slate-100">
                Certified Teachers
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <strong className="number block font-semibold text-white text-4xl">
                18
              </strong>
              <span className="block text-base text-slate-100">Students</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <strong className="number block font-semibold text-white text-4xl">
                4
              </strong>
              <span className="block text-base text-slate-100">Courses</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <strong className="number block font-semibold text-white text-4xl">
                4
              </strong>
              <span className="block text-slate-100 text-base">Awards Won</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
