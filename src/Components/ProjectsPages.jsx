// ProjectsPages.js
import React from "react";
import NavBar from "./NavBar";
import CustomCursor from "./CustomCursor";
import { ScrollContainer } from "react-scroll-motion";
import ProjectBody from "./ProjectBody";

function ProjectsPages({ index }) {
  return (
    <ScrollContainer>
      <NavBar bgColor="black" />
      <div className="text-white p-10">
        <ProjectBody index={index} />
      </div>
      <CustomCursor />
    </ScrollContainer>
  );
}

export default ProjectsPages;
