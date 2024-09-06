import React from "react";
import PopoverMenu from "./PopoverMenu";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ToggleThemeButton from "./ToggleThemeButton";
import { navLink } from "@/constants";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 h-[10vh] w-full bg-light-theme dark:bg-dark-theme xl:snap-start">
      <div className="flex h-full w-full items-center justify-between px-10 md:px-12 lg:px-14 xl:hidden">
        <div className="absolute left-1/2 -translate-x-1/2 ">
          <Logo />
        </div>
        <PopoverMenu />
        <ToggleThemeButton />
      </div>

      <div className="hidden xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:px-16 2xl:px-24">
        <Logo />
        <nav className="flex gap-8">
          {navLink.map((item) => (
            <NavLink key={item.id} href={item.href} title={item.title} />
          ))}
          <span className="w-px bg-slate-300 dark:bg-slate-600 " />
          <ToggleThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
