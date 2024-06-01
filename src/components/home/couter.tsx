import React from "react";
import Container from "../element/container";
import VideoPlayer from "../element/VideoPlayer";

export default function Counter() {
  return (
    <section
      className="md:py-20 py-10 relative z-0 overflow-hidden bg-cover bg-no-repeat bg-fixed overlay"
      style={{
        backgroundImage: 'url("/bg_3.jpg.webp")',
      }}
    >
      <Container>
        <div className="flex flex-col gap-6">
          <div className="justify-center mb-5 pb-2 grid lg:grid-cols-2 lg:gap-6 md:gap-4">
            <div className="flex">
              <div className="flex items-center w-full">
                <VideoPlayer videoId="Nwx7pH-lFP0?si=CtNbc9h2hL0VrDcq" />
              </div>
            </div>
            <div className="md:mt-0 mt-4">
              <h3 className="mb-4 text-4xl font-bold tw">
                Grow Learn Hub
              </h3>
              <p className="tw">
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p className="tw">
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
                Books
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
              <span className="block text-base text-slate-100">Quiz</span>
            </div>
            {/* <div className="flex flex-col justify-center items-center">
              <strong className="number block font-semibold text-white text-4xl">
                4
              </strong>
              <span className="block text-slate-100 text-base">Awards Won</span>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
