import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import ToggleMenuButton from "./ToggleMenuButton";
import MenuNavLink from "./MenuNavLink";
import { menuNavLink } from "@/constants";

const PopoverMenu = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton className="focus:outline-none">
            <ToggleMenuButton isOpened={open} />
          </PopoverButton>
          <PopoverBackdrop className="fixed inset-0 bg-dark-theme/25 dark:bg-light-theme/25" />
          <PopoverPanel
            className="fixed left-1/2 top-1/2 z-50 flex w-[80vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8 rounded-lg bg-dark-theme/90 py-20 
                                backdrop-blur-lg dark:bg-light-theme/90 md:w-[60vw] lg:w-[50vw]"
          >
            {menuNavLink.map((item) => (
              <MenuNavLink key={item.id} href={item.href} title={item.title} />
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};

export default PopoverMenu;
