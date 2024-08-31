import React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { HiMenu, HiX, HiArrowCircleLeft } from "react-icons/hi";

export const DarkModeIcon = () => (
  <MdOutlineDarkMode className="fill-neutral-700" />
);

export const LightModeIcon = () => (
  <MdOutlineLightMode className="fill-neutral-200" />
);

export const MenuIcon = () => (
  <HiMenu className="fill-neutral-700 dark:fill-neutral-200" />
);

export const CloseIcon = () => (
  <HiX className="fill-neutral-700 dark:fill-neutral-200" />
);

export const BackIcon = () => (
  <HiArrowCircleLeft className="fill-neutral-700 dark:fill-neutral-200" />
);
