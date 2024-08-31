import React from "react";

const WorkExp = ({ title, company, time }) => {
  return (
    <li className="grid grid-cols-8 ">
      <span className="relative col-span-1 flex h-full w-full items-center justify-center ">
        <span className=" absolute z-20 h-2 w-2 rounded-full bg-neutral-700 dark:bg-neutral-200" />
        <span className=" absolute z-10 h-2 w-2 animate-ping rounded-full bg-neutral-700 opacity-75 dark:bg-neutral-200" />
      </span>
      <p className="col-span-7 col-start-2 font-semibold">{title}</p>
      <p className="col-span-7 col-start-2 font-medium">{company}</p>
      <p className="col-span-7 col-start-2 font-light">{time}</p>
    </li>
  );
};

export default WorkExp;
