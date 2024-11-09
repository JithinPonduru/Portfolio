import React, { useEffect } from "react";

function Welcome(props) {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const box = document.querySelector(".box");
        if (box) box.classList.add("active");
      }, 2500);
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-black min-h-screen text-white">
      <section className="showAnimation relative">
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="stylecontainer space-y-5 md:space-y-10">
              <h1
                className="font-semibold text-7xl md:text-[130px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                WELCOME
              </h1>
              <h1
                className="font-semibold text-7xl md:text-[130px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                TO MY
              </h1>
              <h1
                className="font-semibold text-7xl md:text-[130px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                PORTFOLIO<div className="container"></div>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
