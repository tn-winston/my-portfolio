import React from "react";
import { techIcon, workExp } from "@/constants";
import TechIcon from "./TechIcon";
import WorkExp from "./WorkExp";
import AnimatedText from "../AnimatedText";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex h-screen w-full flex-col items-center pt-[10vh]"
    >
      <div className="mb-12 mt-6">
        <AnimatedText text="Experience" />
      </div>
      <div className="grid w-full grow grid-cols-2 gap-20 px-36">
        <div className="col-span-1 grid grid-cols-4 justify-center gap-4">
          {techIcon.map((item) => (
            <TechIcon key={item.id} src={item.icon} name={item.name} />
          ))}
        </div>
        <div className="col-span-1 h-1/2 w-full">
          <ul className="flex h-full flex-col justify-between">
            {workExp.map((exp, index) => (
              <WorkExp
                key={index}
                title={exp.title}
                company={exp.company}
                time={exp.time}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
