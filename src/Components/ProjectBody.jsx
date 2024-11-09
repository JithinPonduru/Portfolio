// ProjectBody.js
import React from "react";
import ProjectData from "./Data";
import { Link } from "react-router-dom";

function ProjectBody({ index }) {
  const {
    title,
    description,
    image,
    detailedDescription,
    projectLink,
    usedTechnologies,
  } = ProjectData[index];

  let ATscrollProgress = () => {
    let scrollProgress = document.getElementById("ATprogressbar");
    let progressValue = document.getElementById("progressValue");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = `conic-gradient(#fff ${scrollvalue}%, #000 ${scrollvalue}%)`;
    progressValue.textContent = `${scrollvalue}%`;
  };

  window.onscroll = ATscrollProgress;
  window.onload = ATscrollProgress;

  return (
    <div>
      <div className="mt-10 flex flex-col md:flex-row justify-between py-8 px-6 rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col gap-6 md:pr-8 justify-center">
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
            <h1>Project Overview: </h1>
            <p className="text-left py-5">{detailedDescription}</p>
          </div>
          <h1>Technologies Used:</h1>
          <ul className="flex justify-between p-5 w-full">
            {usedTechnologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <hr className="border-white w-full" />
        </div>
        <div id="ATprogressbar" onclick="window.scrollTo(0,0)">
          <span id="progressValue"></span>
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;
