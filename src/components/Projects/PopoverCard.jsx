import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BackIcon } from "../IconFactory";
import { useState } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectCard from "./ProjectCard";

const PopoverCard = ({
  banner,
  link,
  type,
  title,
  description,
  hasRepo,
  repo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="h-full w-full cursor-pointer"
      >
        <ProjectThumbnail banner={banner} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <DialogBackdrop
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-theme/25 dark:bg-light-theme/25"
            />
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-1/2 top-1/2 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-[40%]  lg:h-[50vh] lg:w-[80vw] lg:-translate-y-1/2"
            >
              <div className="h-full w-full overflow-hidden rounded-md border border-neutral-300 shadow-md shadow-neutral-300/50 dark:border-neutral-600 dark:shadow-neutral-600/50 ">
                <ProjectCard
                  banner={banner}
                  link={link}
                  type={type}
                  title={title}
                  description={description}
                  hasRepo={hasRepo}
                  repo={repo}
                />
              </div>

              <button
                className="absolute left-0 top-0 flex h-8 w-8 -translate-y-full items-center justify-center rounded-lg text-xl hover:bg-[#CCD0D9] hover:transition-all hover:ease-in-out lg:text-3xl"
                onClick={() => setIsOpen(false)}
              >
                <BackIcon />
              </button>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopoverCard;
