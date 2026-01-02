import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration,
  delay = 0
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      style: {
        position: "relative",
        width,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: {
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            },
            initial: "hidden",
            animate: mainControls,
            transition: {
              duration: duration ? duration : 0.5,
              delay: delay + 0.25
            },
            style: { height: "100%" },
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: {
              hidden: { left: 0 },
              visible: { left: "100%" }
            },
            initial: "hidden",
            animate: slideControls,
            transition: {
              duration: duration ? duration : 0.5,
              ease: "easeIn",
              delay
            },
            className: boxColor,
            style: {
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              zIndex: 20
              // background: boxColor ? boxColor : "#5046e6",
            }
          }
        )
      ]
    }
  );
};

export { BoxReveal as B };
