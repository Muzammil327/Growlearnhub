import React from "react"
import dynamic from "next/dynamic"
import styles from "./Footer.module.scss"

const LinkComponents = dynamic(
  () => import("@/src/components/ui/typography/Links/page")
)
const SocialLinks = dynamic(
  () => import("@/src/components/ui/social/SocialLinks")
)
const Container = dynamic(() => import("@/src/components/ui/Container"))
const Logo = dynamic(() => import("@/src/components/ui/Logo"))
const Newsletter = dynamic(
  () => import("@/src/components/layout/newsletter/page")
)

const UserSupport = [
  { name: "Suggest a Quiz", link: "/" },
  //   Quiz Wizard
  // Quiz Idea Box
  // Your Quiz Suggestions
  // Create a Challenge!
  // Quiz Proposals
  // Design a Quiz
  // Quiz Master Ideas
  // Brain Teaser Suggestion
  // What’s Your Quiz Idea?
  // Challenge Us! Suggest a Quiz
  { name: "Suggest a Feature", link: "/" },
  // Dream It, We’ll Build It
  // Your Ideas Matter
  // Suggest a Feature
  // Dream It, We’ll Build It
  // Inspire Us!
  // Innovation Station
  // Feature Request Hub
  // Your Suggestions, Our Solutions
  // Help Shape Our Future
  // Idea Exchange
  // Wish List
  { name: "Help Us Improve", link: "/" },
  //   Your Voice Matters
  // Tell Us What You Think
  // Share Your Experience
  // We Value Your Insights
  // Feedback Corner
  // Voice of the Learner
  // Your Thoughts, Our Improvement
  // Experience Feedback Hub
  // Help Us Improve
  // Let’s Hear from You
  { name: "Report a Bug", link: "/" },
  //   Bug Buster
  // Spot a Bug? Let Us Know!
  // Help Us Debug
  // Bug Report Hub
  // Glitch Alert
  // Report an Oops!
  // Found a Bug? Help Us Fix It!
  // Trouble Tracker
  // Issue Reporting Station
  // Notify Us of Bugs
  { name: "User Assistance", link: "/" },
  { name: "FAQs", link: "/" }
]

const UsefulLink = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About Us",
    link: "/about-us"
  },
  {
    name: "Contact Us",
    link: "/contact-us/"
  },
  { name: "Blogs", link: "/blog" }
]

const Privacy = [
  { name: "Cookie Policy", link: "/" },
  { name: "Privacy Policy", link: "/" },
  { name: "Terms of Use", link: "/" },
  { name: "Disclaimer", link: "/" }
]

const Classes = [
  { name: "Class 9", link: "/" },
  { name: "Class 10", link: "/" },
  { name: "Class 11", link: "/" },
  { name: "Class 12", link: "/" },
  { name: "Virtual University", link: "/" }
]

const QuickLink = [
  {
    name: "Jobs Opportunities",
    link: "/"
  },
  {
    name: "Explore Topics",
    link: "/"
  },
  {
    name: "Study Groups",
    link: "/"
  },
  {
    name: "Success Stories",
    link: "/"
  }
]

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="relative isolate overflow-hidden">
        <Newsletter />
        <section className="bt">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-8 md:pt-24">
              <div className="col-span-2">
                <Logo />
                <p className="md:p4 p3">
                  Stay in the loop with the latest news, and tips straight to
                  your inbox! Don&apos;t miss out on valuable insights and
                  exciting updates from us.
                </p>

                <SocialLinks />
              </div>
              <div className="col-span-2">
                <h5 className={styles.h5}>User Support</h5>
                <ul>
                  {UserSupport.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <LinkComponents slug={item.link}>
                        {item.name}
                      </LinkComponents>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 col-span-1">
                <h5 className={styles.h5}>Classes</h5>
                <ul>
                  {Classes.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <LinkComponents slug={item.link}>
                        {item.name}
                      </LinkComponents>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 col-span-1">
                <h5 className={styles.h5}>Privacy</h5>
                <ul>
                  {Privacy.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <LinkComponents slug={item.link}>
                        {item.name}
                      </LinkComponents>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className={styles.h5}>Quick Links</h5>
                <ul>
                  {QuickLink.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <LinkComponents slug={item.link}>
                        {item.name}
                      </LinkComponents>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className={styles.h5}>Useful Links</h5>
                <ul>
                  {UsefulLink.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <LinkComponents slug={item.link}>
                        {item.name}
                      </LinkComponents>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <h5 className={styles.h5}>Get Contact</h5>
                <ul>
                  <li className="flex gap-1 text-sm text-color2 mb-3">
                    <span className="font-bold text-color1">Phone:</span>
                    <span>+923144878266</span>
                  </li>
                  <li className="flex gap-1 text-sm text-color2 mb-3">
                    <span className="font-bold text-color1">Email:</span>
                    <span>mmuzammiloff327@gmail.com</span>
                  </li>
                  <li className="flex gap-1 text-sm text-color2 mb-3">
                    <span className="font-bold text-color1">Location:</span>
                    <span>Lahore, Punjab, Pakistan</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="py-3 bt text-center">
          <Container>
            <span className="text-color2 text-sm">
              ©2024 GrowLearnHub. All Rights Reserved bg{" "}
              <LinkComponents
                slug="https://mmuzammil-portfolio.vercel.app/"
                className="pl-1"
              >
                Muzammil Safdar.
              </LinkComponents>
            </span>
          </Container>
        </section>
        <section
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </section>
      </footer>
    </React.Fragment>
  )
}
