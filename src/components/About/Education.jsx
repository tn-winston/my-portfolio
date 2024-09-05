import React from "react";

const Education = () => {
  return (
    <>
      <h2 className="text-base font-semibold uppercase text-neutral-800 dark:text-neutral-100 md:text-lg">
        Education
      </h2>
      <div className="flex flex-col">
        <p className="font-medium">
          Bachelor of Engineering in Software&nbsp;Engineering
        </p>
        <div className="font-light">
          <div>
            <span className="font-medium">Carleton University</span>
            <span> | </span>
            <span>Ottawa,&nbsp;ON,&nbsp;Canada</span>
          </div>
          <div>2018-2022</div>
        </div>
      </div>
    </>
  );
};

export default Education;
