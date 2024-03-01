import React from "react";

const WorkExp = ({ title, company, time }) => {
  return (
    <li className="grid grid-cols-8 grid-rows-3">
      <span className="relative col-span-1 row-span-1 flex h-full w-full items-center justify-center ">
        <span className=" absolute z-20 h-2 w-2 rounded-full bg-neutral-700" />
        <span className=" absolute z-10 h-2 w-2 animate-ping rounded-full bg-neutral-700 opacity-75" />
      </span>
      <p className="col-span-7 col-start-2 row-span-1 font-bold">{title}</p>
      <p className="col-span-7 col-start-2 row-span-1 row-start-2 font-medium">
        {company}
      </p>
      <p className="col-span-7 col-start-2 row-span-1 row-start-3">{time}</p>
    </li>
  );
};

export default WorkExp;
