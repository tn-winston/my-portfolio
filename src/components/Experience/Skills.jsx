import React from "react";
import TechIcon from "./TechIcon";
import { techIcon } from "@/constants";

const Skills = () => {
  return (
    <>
      {techIcon.map((item) => (
        <TechIcon key={item.id} src={item.icon} name={item.name} />
      ))}
    </>
  );
};

export default Skills;
