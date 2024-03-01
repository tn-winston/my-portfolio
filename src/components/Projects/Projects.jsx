import React from "react";
import AnimatedText from "../AnimatedText";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center py-[10vh]"
    >
      <div className="mb-12 mt-6">
        <AnimatedText text="Projects" />
      </div>
      <div className="flex w-full grow flex-col items-center gap-32 px-32">
        {projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard
              banner={project.banner}
              link={project.link}
              type={project.type}
              title={project.title}
              description={project.description}
              hasRepo={project.hasRepo}
              repo={project.repo}
            />{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
