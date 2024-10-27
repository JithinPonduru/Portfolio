import React, { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    const { SplitType } = window;
    const { gsap, ScrollTrigger } = window;

    // Split the text into characters
    const splitText = new SplitType('.BTT', { types: 'chars' });
    const listofChars = document.querySelectorAll('.char');

    // Initially set the characters off-screen
    listofChars.forEach((char) => {
      char.classList.add('translate-y-full');
    });

    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set up the animation to trigger when .BTT comes into view
    gsap.to('.BTT .char', {
      y: 0,
      stagger: 0.1,  // Increase stagger for a cascading effect
      delay: 0.2,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.BTT',  // Element that triggers the animation
        start: 'top 80%',  // Start the animation when the top of .BTT is 80% from the top of the viewport
        toggleActions: 'play none none reverse',  // Play the animation when in view, and reverse when out of view
      },
    });

  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const box = document.querySelector('.box');
        if (box) box.classList.add('active');
      }, 2500);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      <section className="sec1 showAnimation">
        <div className="absolute top-0 -z-10 h-full w-full bg-neutral-100">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="flex justify-end p-10">
          <div className="text-right">
            <div className="stylecontainer space-y-5 md:space-y-10">
              <h1 className="font-Orbitron text-7xl md:text-[130px] my-5 md:my-10 Welcome" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                WELCOME
              </h1>
              <h1 className="font-Orbitron text-7xl md:text-[130px] my-5 md:my-10 Welcome" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                MY TO
              </h1>
              <h1 className="font-Orbitron text-7xl md:text-[130px] my-5 md:my-10 Welcome" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                PORTFOLIO
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="box">
        <span className="downArrow"></span>
      </div>

      <section className="sec2">
        <h1 className="font-Orbitron text-5xl md:text-[80px] p-10 mt-5 md:mt-10 BTT">
          I am Jithin Ponduru
        </h1>
      </section>
    </div>
  );
}

export default Welcome;
