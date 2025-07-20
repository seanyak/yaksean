"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data"; 
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("PROJECTS", 0.1);

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="scroll-mt-40 mb-28 max-w-[53rem] text-justify sm:mb-40">
      <SectionHeading>Recent Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}