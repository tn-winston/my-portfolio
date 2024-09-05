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
              className="fixed inset-0 bg-dark-theme/90 dark:bg-light-theme/90"
            />
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed left-1/2 top-1/2 h-[500px] w-[80vw] -translate-x-1/2 -translate-y-1/2 md:h-[450px] lg:w-[80vw]"
            >
              <button
                className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg text-xl hover:bg-[#CCD0D9] hover:transition-all hover:ease-in-out lg:left-4 lg:top-4 lg:text-3xl"
                onClick={() => setIsOpen(false)}
              >
                <BackIcon />
              </button>
              <div className="h-full w-full overflow-hidden rounded-md border border-neutral-300 shadow-md shadow-neutral-300/50 dark:border-neutral-600 dark:shadow-neutral-600/50">
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
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopoverCard;
