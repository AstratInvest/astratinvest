"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { PrimaryLogo } from "@/components/ui/PrimaryLogo";

import SplitType from "split-type";
import OurWork from "@/components/OurWork";
import Tagline from "@/components/Tagline";
import HomePageStats from "@/components/HomePageStats";
import Spline from "@splinetool/react-spline";
import SplineScene from "@/components/SplineScene";
import JimSimons from "@/components/JimSimons";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import KnowAboutYourStocks from "@/components/KnowAboutYourStocks";
import { Testimonials } from "@/components/Testimonials";
import Blogs from "@/components/Blogs";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      //* Loader Start GSAP Timeline
      const loaderTimeline = gsap.timeline({
        onComplete: () => {
          // * INSTANCE FOR SMOOTH SCROLLING WITH LOCOMOTIVE SCROLL v5@beta
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
              .default;
            const locomotiveScroll = new LocomotiveScroll({
              smooth: true,
              smartphone: {
                smooth: true,
              },
            });
          })();
        },
      });

      loaderTimeline
        .fromTo(
          [".logo-loader", ".progress-bg", ".progress", ".logo-container"],
          {
            opacity: 0,
          },
          { opacity: 1, ease: "power2.in", duration: 1, display: "flex" },
        )
        .fromTo(".logo-word", { opacity: 0 }, { opacity: 1, stagger: 0.08 });

      //* Loader Progress Bar GSAP Timeline
      const loaderTimeline2 = gsap
        .timeline({
          delay: 1,
        })
        .fromTo(
          ".progress",
          {
            width: 0,
          },
          {
            width: "30%",
            ease: "none",
            duration: 1,
          },
        )
        .to(".progress", {
          width: "50%",
          ease: "none",
        })
        .to(".progress", {
          width: "70%",
          ease: "none",
        })
        .to(".progress", {
          width: "100%",
          ease: "power1",
        })
        .to([".logo-loader", ".logo-word", ".progress", ".progress-bg"], {
          opacity: 0,
        });

      //* Home Reveal GSAP Timeline
      const HomeRevealTimeline = gsap.timeline({
        delay: 4,
        onComplete: () => {
          // ! DO NOT REMOVE THE BELOW GSAP TWEEN LINES AS THEY ARE REQUIRED FOR INSERTING A PIN SPACER WHICH WILL IN-TURN HELP IN RENDERING OF OTHER GSAP ANIMATION TIMELINES ON THE PAGE
          // const horDiv = gsap.utils.toArray(".hor-div");
          ScrollTrigger.update();
          gsap.to(".spline-scene", {
            scrollTrigger: {
              start: "5% 20%",
              end: "bottom center",
              trigger: ".spline-scene",
              pin: true,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
          // const container = document.querySelector(".hor-container");
          // const horDivContent = document.querySelector(".hor-div");

          // const text = new SplitType(".anim-work");
          // function getScroll() {
          //   console.log(window.innerWidth);
          //   if (window.innerWidth >= 1010) return -100 * (horDiv.length - 0.4);
          //   return -100 * (horDiv.length + 0.2);
          // }
          // const horScrollTween = gsap.to(horDiv, {
          //   opacity: 1,
          //   ease: "none",
          //   scrollTrigger: {
          //     trigger: ".hor-container-wrap",
          //     start: "5% 20%",
          //     // end: () => `+=${container?.scrollWidth!}`,
          //     end: "bottom center",
          //     // pin: true,
          //     scrub: 1,
          //     // snap: 1 / horDiv.length,
          //     markers: true,
          //     invalidateOnRefresh: true,
          //   },
          //   delay: 0.8,
          // });
          // const tl = gsap.timeline();
          // tl.from(text.chars, {
          //   y: "100%",
          //   opacity: 0,
          //   kerning: 2,
          //   stagger: { each: 0.06 },
          //   duration: 0.5,
          //   transformOrigin: "left top",
          //   rotationZ: 8,
          //   scrollTrigger: {
          //     trigger: ".hor-div-work",
          //     start: "top 95%",
          //     end: "bottom center",
          //     scrub: 1,
          //     // markers: true,
          //     // snap: 1,
          //   },
          // }).fromTo(
          //   ".anim-work",
          //   {
          //     fontSize: "min(17vh,17vw)",
          //   },
          //   {
          //     fontSize: "min(15vh,15vw)",
          //     ease: "power1.inOut",
          //     duration: 0.5,
          //     scrollTrigger: {
          //       trigger: ".hor-div-work",
          //       // start: "300% 20%",
          //       // end: "500% 20%",
          //       start: "center center",
          //       end: "200% center",
          //       // markers: true,
          //       scrub: 1,
          //       // snap: 1 / (horDiv.length - 1),
          //       // markers: true,
          //       invalidateOnRefresh: true,
          //     },
          //   }
          // );
          // horDiv.forEach((section: any) => {
          //   let text = section.querySelector(".anim");
          //   gsap.from(text, {
          //     y: -130,
          //     opacity: 0,
          //     duration: 3,
          //     ease: "elastic",
          //     scrollTrigger: {
          //       trigger: section,
          //       containerAnimation: horScrollTween,
          //       start: "left center",
          //       // end: "center center",
          //       // markers: true,
          //     },
          //   });
          // });
        },
      });

      HomeRevealTimeline.fromTo(
        ".loader-div",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          display: "none",
        },
      ).fromTo(
        ".scroll-content",
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: 1,
          display: "flex",
        },
      );
    },
    { scope: mainContainer },
  );

  return (
    <div ref={mainContainer}>
      {/* Loader Container */}
      <div className="loader-div flex h-screen w-screen items-center justify-center">
        <div
          className="logo-container flex h-full w-full flex-col items-center justify-center gap-14"
          style={{ opacity: 0, display: "none" }}
        >
          <div>
            <PrimaryLogo />
          </div>
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute left-[50%] flex translate-x-[-50%] items-center justify-start phone:w-[50%] smTablet:w-[30%] smLaptop:w-[20%]">
              <div className="progress-bg relative h-2 w-full rounded-xl bg-white/10"></div>
              <div className="progress absolute h-2 w-full rounded-xl bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Container */}
      <div
        className="scroll-content relative flex h-fit flex-col items-center justify-center"
        style={{ display: "none" }}
      >
        <NavBar />
        <Hero />
        <Tagline />
        <HomePageStats />
        <SplineScene />
        <JimSimons />
        <Testimonials />
        {/* <OurWork /> */}
        {/* <PreFooter /> */}
        <Blogs />
        <KnowAboutYourStocks />
        <Footer />
      </div>
    </div>
  );
}
