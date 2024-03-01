import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../AnimatedButton";
import MediaIcon from "../MediaIcon";
import { githubIcon } from "@/assets/MediaIcon";
const ProjectCard = ({
  banner,
  link,
  type,
  title,
  description,
  hasRepo,
  repo,
}) => {
  return (
    <div className="grid h-[450px] w-[1000px] grid-cols-2 rounded-3xl border border-solid border-neutral-700 bg-white">
      <div className="col-span-1 place-self-center overflow-hidden rounded-xl border border-neutral-200">
        <Link href={link} target="_blank" passHref>
          <Image src={banner} alt="Project Snippet" width={450}></Image>
        </Link>
      </div>
      <div className="col-span-1 flex flex-col justify-center gap-2 px-6">
        <h2 className="text-xl font-medium text-[#cd5c84]">{type}</h2>
        <Link href={link}>
          <span className="group relative text-4xl font-semibold">
            {title}
            <span className=" absolute -bottom-[2px] left-0 h-0.5 w-0  bg-neutral-700 transition-all duration-500 ease-in-out group-hover:w-[100%]" />
          </span>
        </Link>
        <p>{description}</p>
        <div className="flex items-end gap-8 pt-2">
          <AnimatedButton href={link} target="_blank">
            <span>Demo</span>
          </AnimatedButton>
          {hasRepo && <MediaIcon href={repo} src={githubIcon} name="Github" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
