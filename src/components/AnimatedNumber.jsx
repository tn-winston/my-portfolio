import React, { useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useInView,
} from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const mValue = useMotionValue(0);
  const sValue = useSpring(mValue, { stiffness: 100, damping: 30 });

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      mValue.set(value);
      // console.log(isInView);
    }
  }, [isInView, mValue, value]);

  useMotionValueEvent(sValue, "change", (latestValue) => {
    if (ref.current && latestValue.toFixed() <= value) {
      ref.current.textContent = latestValue.toFixed();
    }
  });

  return <span ref={ref}> </span>;
};

export default AnimatedNumber;
