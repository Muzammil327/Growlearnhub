import React from "react";
import dynamic from "next/dynamic";
import styles from "./Footer.module.scss";
import Newsletter from "./newsletter";
import Container from "@/components/elements/Container";
import SocialLinks from "@/src/app/dashboard/_components/Sidebar/socialLinks";
import TypographyLink from "@/components/ui/typography/Links/page";
import StrongPara from "@/components/ui/typography/StrongPara/page";
import MutedPara from "@/components/ui/typography/MutedPara/page";
import Heading4 from "@/components/ui/typography/Heading4/page";

const Logo = dynamic(() => import("@/src/components/elements/Logo"));

const UserSupport = [
  { name: "Suggest a Quiz", link: "/dashboard/question/add/" },
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
  { name: "Request a Feature", link: "/request-feature/" },
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
  { name: "Report a Bug", link: "/report-a-bug/" },
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
  { name: "User Experience", link: "/user-experience/" },
  { name: "FAQs", link: "/faqs/" },
];

const UsefulLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us/",
  },
  {
    name: "Contact Us",
    link: "/contact-us/",
  },
  { name: "Blogs", link: "/blogs/" },
];

const Privacy = [
  { name: "Cookies Policy", link: "/cookies-policy/" },
  { name: "Privacy Policy", link: "/privacy-policy/" },
  { name: "Terms & Condition", link: "/terms-and-conditions/" },
  { name: "Disclaimer", link: "/disclaimer/" },
];

const Classes = [
  { name: "Class 9", link: "/class-9/" },
  { name: "Class 10", link: "/class-10/" },
  { name: "Class 11", link: "/class-11/" },
  { name: "Class 12", link: "/class-12/" },
  { name: "Virtual University", link: "/vu/" },
];

const StudyMaterials = [
  { name: "Books", link: "/book-point/" },
  { name: "Mcqs", link: "/mcqs-point/" },
  { name: "Online Test", link: "/online-test-point/" },
  { name: "Result", link: "/result/" },
  { name: "Past Paper", link: "/past-paper/" },
  { name: "Pairing Scheme", link: "/pairing-scheme/" },
  { name: "Notes", link: "/notes/" },
  { name: "Date Sheet", link: "/date-sheet/" },
];

const QuickLink = [
  {
    name: "Jobs Opportunities",
    link: "/jobs-opportunities/",
  },
  {
    name: "Explore Topics",
    link: "/explore-topics/",
  },
  {
    name: "Study Groups",
    link: "/study-group/",
  },
  {
    name: "Success Stories",
    link: "/success-stories/",
  },
];

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="relative isolate overflow-hidden border-t">
        <section className="bt">
          <Container>
            <div className="grid gap-8 py-8 sm:grid-cols-2 md:grid-cols-4 md:pt-24 lg:grid-cols-6">
              <div className="col-span-2">
                <div className="my-5">
                  <Logo />
                </div>
                <MutedPara>
                  Stay in the loop with the latest news, and tips straight to
                  your inbox! Don&apos;t miss out on valuable insights and
                  exciting updates from us.
                </MutedPara>

                <SocialLinks />
              </div>
              <div className="col-span-2">
                <Heading4 className={styles.h4}>Study Materials</Heading4>
                <ul className="grid grid-cols-2 gap-1">
                  {StudyMaterials.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <Heading4 className={styles.h4}>User Support</Heading4>
                <ul>
                  {UserSupport.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <Heading4 className={styles.h4}>Classes</Heading4>
                <ul>
                  {Classes.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <Heading4 className={styles.h4}>Privacy</Heading4>
                <ul>
                  {Privacy.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <Heading4 className={styles.h4}>Quick Links</Heading4>
                <ul>
                  {QuickLink.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <Heading4 className={styles.h4}>Useful Links</Heading4>
                <ul>
                  {UsefulLink.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <TypographyLink slug={item.link} title={item.link}>
                        {item.name}
                      </TypographyLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <Heading4 className={styles.h4}>Get Contact</Heading4>
                <ul>
                  <li className="mb-3 flex gap-1 text-sm text-primary">
                    <StrongPara>Phone:</StrongPara>
                    <span>+923144878266</span>
                  </li>
                  <li className="mb-3 flex gap-1 text-sm text-primary">
                    <StrongPara>Email:</StrongPara>
                    <span>mmuzammiloff327@gmail.com</span>
                  </li>
                  <li className="mb-3 flex gap-1 text-sm text-primary">
                    <StrongPara>Location:</StrongPara>
                    <span>Lahore, Punjab, Pakistan</span>
                  </li>
                </ul>
                <Newsletter />
              </div>
            </div>
          </Container>
        </section>
        <section className="border-t py-3 text-center">
          <Container>
            <MutedPara>
              ©2024 GrowLearnHub. All Rights Reserved bg{" "}
              <TypographyLink
                slug="https://mmuzammil-portfolio.vercel.app/"
                className="pl-1"
                title="Muzammil Safdar"
              >
                Muzammil Safdar.
              </TypographyLink>
            </MutedPara>
          </Container>
        </section>
      </footer>
    </React.Fragment>
  );
}
