import React from "react";
import WorkExp from "./WorkExp";
import { workExp } from "@/constants";

const WorkSum = () => {
  return (
    <>
      {workExp.map((exp, index) => (
        <WorkExp
          key={index}
          title={exp.title}
          company={exp.company}
          time={exp.time}
        />
      ))}
    </>
  );
};

export default WorkSum;
