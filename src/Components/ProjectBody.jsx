// ProjectBody.js
import React, { useEffect } from "react";
import ProjectData from "./Data";
import { Link } from "react-router-dom";

import "./temp.css";

function ProjectBody({ index }) {
  const {
    title,
    description,
    image,
    detailedDescription,
    projectLink,
    usedTechnologies,
    TimeLine,
    PaperLink,
  } = ProjectData[index];

  const ATscrollProgress = () => {
    const scrollProgress = document.getElementById("ATprogressbar");
    const progressValue = document.getElementById("progressValue");
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollvalue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = `conic-gradient(#fff ${scrollvalue}%, #000 ${scrollvalue}%)`;
    progressValue.textContent = `${scrollvalue}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", ATscrollProgress);
    ATscrollProgress(); // Run once on component mount

    return () => {
      window.removeEventListener("scroll", ATscrollProgress);
    };
  }, []);

  return (
    <div>
      <div className="mt-10 flex flex-col md:flex-row justify-between py-8 px-6 rounded-lg shadow-lg">
        <div>
          <Link to={projectLink}>
            <h2 className="text-3xl font-semibold border-r-2 p-4 hoverable">
              {title}
            </h2>
          </Link>
          <hr className="border-t-2 w-[7vw] md:w-[12vw] mx-auto" />
          <p className="text-lg leading-relaxed border-r-2 p-4">
            {description}
          </p>
        </div>

        <div className="flex flex-col justify-start items-center mt-6 md:mt-0 p-5 md:items-start gap-5">
          <div>
            <h1>Project Overview:</h1>
            <p className="text-left py-5">{detailedDescription}</p>
          </div>
          <h1>Technologies Used:</h1>
          <ul className="flex justify-between p-5 w-full">
            {usedTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <hr className="border-white w-full" />

          <h1 className="p-5">Timeline:</h1>

          <div
            className="page timeline-5-2"
            data-uia-timeline-skin="5"
            data-uia-timeline-adapter-skin-5="uia-card"
          >
            <div className="uia-timeline">
              <div className="uia-timeline__container">
                <div className="uia-timeline__line"></div>
                <div className="uia-timeline__groups">
                  {TimeLine.map((entry, index) => (
                    <section
                      key={index}
                      className="uia-timeline__group"
                      aria-labelledby={`timeline-demo-heading-${index}`}
                    >
                      <div className="uia-timeline__dot"></div>
                      <div className="uia-timeline__point uia-card">
                        <div className="uia-card__container">
                          <div className="uia-card__intro">
                            <h3
                              id={`timeline-demo-heading-${index}`}
                              className="page__job-name uia-heading ra-heading"
                            >
                              {entry.Period}: {entry.Description}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}

                  {PaperLink && (
                    <section
                      className="uia-timeline__group"
                      aria-labelledby="timeline-paper-link"
                    >
                      <div className="uia-timeline__dot"></div>
                      <div className="uia-timeline__point uia-card">
                        <div className="uia-card__container">
                          <a href={PaperLink} className="hoverable">
                            <div className="uia-card__intro">
                              <h3
                                id="timeline-paper-link"
                                className="page__job-name uia-heading ra-heading"
                              >
                                {`${title} (Paper link)`}
                              </h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>

            <div
              id="ATprogressbar"
              onClick={() => window.scrollTo(0, 0)}
              style={{ cursor: "pointer" }}
            >
              <span id="progressValue"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;
