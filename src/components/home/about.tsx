import React from "react"
import Container from "../element/container"
import Button from "../ui/Button"

export default function AboutUs() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="w-full mb-4">
              <h2 className="border-[1px] border-solid border-color1 text-color1 rounded-full inline-block uppercase px-5 py-2 text-sm font-medium mb-4 leading-[15px] font-sans">
                About Grow Learn Hub.
              </h2>
              <h2 className="mb-4 text-4xl font-semibold text-black">
                What is Growlearnhub For You?.
              </h2>
              <p className="text-color2">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="text-color2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <Button variant="outline">About Us</Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex self-stretch">
              <div className="media-body">
                <h3 className="heading mb-2 text-lg font-semibold text-black">
                  World Class Quiz
                </h3>
                <p className="text-slate-500">
                  A small river named Duden flows by their place and supplies
                </p>
              </div>
            </div>
            <div className="flex self-stretch">
              <div className="media-body">
                <h3 className="heading mb-2 text-lg font-semibold text-black">
                  Notes
                </h3>
                <p className="text-slate-500">
                  A small river named Duden flows by their place and supplies
                </p>
              </div>
            </div>
            <div className="flex self-stretch">
              <div className="media-body">
                <h3 className="heading mb-2 text-lg font-semibold text-black">
                  Past Paper
                </h3>
                <p className="text-slate-500">
                  A small river named Duden flows by their place and supplies
                </p>
              </div>
            </div>
            <div className="flex self-stretch">
              <div className="media-body">
                <h3 className="heading mb-2 text-lg font-semibold text-black">
                  Books
                </h3>
                <p className="text-slate-500">
                  A small river named Duden flows by their place and supplies
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
