import React from "react";
import NavLink from "./NavLink";
import { navLink, mediaIcon } from "@/constants";
import Logo from "./Logo";
import MediaIcon from "../MediaIcon";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 flex h-[10vh] w-full items-center justify-between bg-light-theme px-32">
      <nav className="flex gap-8 text-xl">
        {navLink.map((item) => (
          <NavLink key={item.id} href={item.href} title={item.title} />
        ))}
      </nav>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
      <nav className="flex gap-8">
        {mediaIcon.map((item) => (
          <MediaIcon
            key={item.id}
            href={item.href}
            src={item.icon}
            name={item.name}
          />
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
