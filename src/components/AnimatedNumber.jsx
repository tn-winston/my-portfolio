import React, { useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useInView,
} from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const countRef = useRef(null);
  const mValue = useMotionValue(0);
  const sValue = useSpring(mValue, { stiffness: 100, damping: 30 });

  const isInView = useInView(countRef);

  useEffect(() => {
    if (isInView) {
      mValue.set(value);
      // console.log(isInView);
    }
  }, [isInView, mValue, value]);

  useMotionValueEvent(sValue, "change", (latestValue) => {
    if (countRef.current && latestValue.toFixed() <= value) {
      countRef.current.textContent = latestValue.toFixed();
    }
  });

  return <span ref={countRef} />;
};

export default AnimatedNumber;
