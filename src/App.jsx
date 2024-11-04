import "./App.css";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import AfterName from "./Components/AboutMe";
import CustomCursor from "./Components/CustomCursor";
import SkillsAndProjectPage from "./Components/SkilsAndProjectPage";
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
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "80px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>
                Nice to meet you 🙋🏻
              </Animator>
              - I'm Jithin Ponduru -
              <Animator animation={MoveOut(1000, 0)}>Scroll Down</Animator>
              <Animator animation={MoveOut(-1000, 0)}>the Page</Animator>
            </span>

            <div class="field">
              <div class="mouse"></div>
            </div>
          </div>
        </ScrollPage>

        {/* Including Welcome, AfterName, and CustomCursor components */}
        <ScrollPage>
          <Animator className="w-[100vw]" animation={ZoomInScrollOut}>
            <Welcome />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator className="w-[100vw]" animation={ZoomInScrollOut}>
            <AfterName />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator className="w-[100vw]" animation={FadeUpAnimation}>
            <SkillsAndProjectPage />
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <CustomCursor />
    </>
  );
}

export default App;
