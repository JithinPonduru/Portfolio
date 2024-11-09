// LandingPage.jsx
import React from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Aboutme from "./AboutMe";
import CustomCursor from "./CustomCursor";
import HelloPage from "./HelloPage";
import Skills from "./Skills";
import Project from "./Project";
import { useState, useEffect } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Footer from "./Footer";

function LandingPage() {
  let ATscrollProgress = () => {
    let scrollProgress = document.getElementById("ATprogressbar");
    let progressValue = document.getElementById("progressValue");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = ` conic-gradient(#fff ${scrollvalue}%, #000 ${scrollvalue}%)`;
    progressValue.textContent = `${scrollvalue}%`;
  };


  
  window.onscroll = ATscrollProgress;
  window.onload = ATscrollProgress;

  const [navBgColor, setNavBgColor] = useState("transparent");

  // Define animations
  const ZoomInScrollOut = batch(StickyIn(), FadeIn());
  const FadeUpAnimation = batch(Fade(), Move(), Sticky());

  const slideOffAnimation = batch(FadeOut(), MoveOut(0, -200)); // Adjust -200 to control slide-off distance

  // Handle scroll for navbar background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition >= windowHeight) {
        setNavBgColor("black");
      } else {
        setNavBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar bgColor={navBgColor} />
      <ScrollContainer>
        <ScrollPage>
          <HelloPage />
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUpAnimation}>
            <Welcome />
          </Animator>
        </ScrollPage>

        <Aboutme />
        <Skills />

        <ScrollPage>
          <Animator>
            <h1 className="text-white text-[130px] mb-2 underline underline-offset-8 decoration-2 flex justify-center items-center h-screen">
              Projects
            </h1>
          </Animator>
        </ScrollPage>
        <Project />
        <Footer />
      </ScrollContainer>

      <CustomCursor />
      <div id="ATprogressbar" onclick="window.scrollTo(0,0)">
        <span id="progressValue"></span>
      </div>
    </>
  );
}

export default LandingPage;
