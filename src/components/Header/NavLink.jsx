import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href} className="group relative">
      <div
        className={`${
          isActive
            ? "text-neutral-800 dark:text-neutral-100"
            : "text-neutral-500 dark:text-neutral-400"
        } font-medium transition-colors ease-in-out group-hover:text-neutral-800 dark:group-hover:text-neutral-100`}
      >
        {title}
      </div>
      <span className=" absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-neutral-700 transition-all duration-500 ease-in-out group-hover:w-[100%] dark:bg-neutral-200" />
    </Link>
  );
};

export default NavLink;
