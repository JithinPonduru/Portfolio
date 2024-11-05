import "./App.css";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import Aboutme from "./Components/AboutMe";
import CustomCursor from "./Components/CustomCursor";
import Skills from "./Components/Skills";
import LandingPage from "./Components/LandingPage";
import Project from "./Components/Project"; 
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { useState, useEffect } from "react";

function App() {
  const [navBgColor, setNavBgColor] = useState("transparent");

  // Define animations
  const ZoomInScrollOut = batch(StickyIn(), FadeIn());
  const FadeUpAnimation = batch(Fade(), Move(), Sticky());

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
          <LandingPage />
        </ScrollPage>


        <ScrollPage>
          <Animator className="w-[100vw]" animation={ZoomInScrollOut}>
            <Welcome />
          </Animator>
        </ScrollPage>



        <Aboutme />
        <Skills />

        <Project />

      </ScrollContainer>

      <CustomCursor />
    </>
  );
}

export default App;
