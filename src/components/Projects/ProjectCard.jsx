import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../AnimatedButton";
import MediaIcon from "../MediaIcon";
import { githubIcon, darkGithubIcon } from "@/assets/MediaIcon";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ProjectCard = ({
  banner,
  link,
  type,
  title,
  description,
  hasRepo,
  repo,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc = () => {
    if (!mounted) {
      return;
      ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    }
    switch (theme) {
      case "light":
        return githubIcon;
        break;
      case "dark":
        return darkGithubIcon;
        break;
    }
  };
  return (
    <div className="grid h-[450px] w-[1000px] grid-cols-2 rounded-3xl border border-solid border-neutral-400 bg-[#FFFAFA] dark:border-neutral-500  dark:bg-[#424242]">
      <div className="col-span-1 place-self-center overflow-hidden rounded-xl border border-neutral-200">
        <Link href={link} target="_blank" passHref>
          <Image src={banner} alt="Project Snippet" width={450} height="auto" />
        </Link>
      </div>
      <div className="col-span-1 flex flex-col justify-center gap-2 px-6">
        <h2 className="text-xl font-medium text-[#cd5c84]">{type}</h2>
        <Link href={link}>
          <span className="group relative text-4xl font-semibold">
            {title}
            <span className=" absolute -bottom-[2px] left-0 h-0.5 w-0  bg-neutral-700 transition-all duration-500 ease-in-out group-hover:w-[100%] dark:bg-neutral-200" />
          </span>
        </Link>
        <p>{description}</p>
        <div className="flex items-end gap-8 pt-2">
          <AnimatedButton href={link} target="_blank">
            <span>Demo</span>
          </AnimatedButton>
          {hasRepo && <MediaIcon href={repo} src={iconSrc()} name="Github" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
