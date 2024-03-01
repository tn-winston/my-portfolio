import React, { useEffect, useRef } from "react";
import { useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const cValue = useRef();
  const mValue = useMotionValue(0);
  const sValue = useSpring(mValue, { stiffness: 100, damping: 30 });

  useEffect(() => {
    mValue.set(value);
  }, [mValue, value]);

  useMotionValueEvent(sValue, "change", (latestValue) => {
    if (cValue.current && latestValue.toFixed() <= value) {
      cValue.current.textContent = latestValue.toFixed();
    }
  });

  return <span ref={cValue}></span>;
};

export default AnimatedNumber;
