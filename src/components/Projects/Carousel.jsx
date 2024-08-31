import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import PopoverCard from "./PopoverCard";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { projects } from "@/constants";

const verticalOptions = { loop: true, axis: "y" };
const horizontalOptions = { loop: true, axis: "x" };

const Carousel = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel(verticalOptions, [
    AutoScroll({
      playOnInit: false,
      speed: 1,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);
  const inViewRef1 = useRef(null);
  const isInView1 = useInView(inViewRef1);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(horizontalOptions, [
    AutoScroll({
      playOnInit: false,
      speed: 1,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);
  const inViewRef2 = useRef(null);
  const isInView2 = useInView(inViewRef2);

  useEffect(() => {
    // console.log("isInView1:", isInView1);
    // console.log("emblaApi1:", emblaApi1);
    const verticalAutoScroll = emblaApi1?.plugins()?.autoScroll;
    if (!verticalAutoScroll) return;
    if (isInView1) {
      // console.log("play1");
      verticalAutoScroll.play();
    } else {
      // console.log("stop1");
      verticalAutoScroll.stop();
    }
  }, [isInView1, emblaApi1]);

  useEffect(() => {
    // console.log("isInView2:", isInView2);
    // console.log("emblaApi2:", emblaApi2);
    const horizontalAutoScroll = emblaApi2?.plugins()?.autoScroll;
    if (!horizontalAutoScroll) return;
    if (isInView2) {
      // console.log("play2");
      horizontalAutoScroll.play();
    } else {
      // console.log("stop2");
      horizontalAutoScroll.stop();
    }
  }, [isInView2, emblaApi2]);

  return (
    <>
      <div ref={inViewRef1} className="block h-[60vh] md:hidden">
        <div ref={emblaRef1} className="h-full overflow-hidden">
          <div className="flex h-full w-[50vw] flex-col">
            {/* {[...Array(15).keys()].map((x, idx) => ( */}
            {projects.map((project, idx) => (
              <div
                key={`${idx}-1`}
                className="my-3 h-1/3 w-full shrink-0 overflow-hidden rounded-md border border-neutral-300 shadow-md shadow-neutral-300/50 dark:border-neutral-600 dark:shadow-neutral-600/50"
              >
                <PopoverCard
                  banner={project.banner}
                  link={project.link}
                  type={project.type}
                  title={project.title}
                  description={project.description}
                  hasRepo={project.hasRepo}
                  repo={project.repo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={inViewRef2} className="hidden md:block md:h-[40vh]">
        <div ref={emblaRef2} className="h-full overflow-hidden">
          <div className="flex h-full w-[75vw] ">
            {projects.map((project, idx) => (
              <div
                key={`${idx}-2`}
                className="mx-6 h-full w-2/3 shrink-0 overflow-hidden rounded-md border border-neutral-300 shadow-md shadow-neutral-300/50 dark:border-neutral-600 dark:shadow-neutral-600/50 lg:w-3/5 xl:w-1/2 2xl:w-[45%] "
              >
                <PopoverCard
                  banner={project.banner}
                  link={project.link}
                  type={project.type}
                  title={project.title}
                  description={project.description}
                  hasRepo={project.hasRepo}
                  repo={project.repo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
