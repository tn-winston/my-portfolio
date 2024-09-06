import React from "react";
import WorkExp from "./WorkExp";
import { workExp } from "@/constants";

const WorkSum = () => {
  return (
    <div className="flex flex-col gap-6 ">
      {workExp.map((exp, index) => (
        <WorkExp
          key={index}
          title={exp.title}
          company={exp.company}
          time={exp.time}
        />
      ))}
    </div>
  );
};

export default WorkSum;
