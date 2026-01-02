import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect } from 'react';
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import { c as cn, f as findTimelineMatch } from './Layout_CiCYOMq9.mjs';

function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.3
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY]
  );
  const handleMouseOut = useCallback(
    (e) => {
      if (!e.relatedTarget) {
        document.removeEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }
    },
    [handleMouseMove, mouseX, gradientSize, mouseY]
  );
  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);
  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);
  return /* @__PURE__ */ jsxs("div", { ref: cardRef, className: cn("group relative flex size-full overflow-hidden", className), children: [
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full", children }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        style: {
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor} , transparent 100%)
          `,
          opacity: gradientOpacity
        }
      }
    )
  ] });
}

function getExpertiseColor(level) {
  if (level >= 7) return "bg-green-500";
  if (level >= 4) return "bg-blue-500";
  if (level >= 1) return "bg-yellow-500";
  return "bg-gray-400";
}
function StackCard({ slug, labels, icon, data, parentIndex }) {
  const colors = [
    "from-primary-500/50 to-primary-500",
    "from-primary-500/50 to-primary-500",
    "from-primary-500/50 to-primary-500",
    "from-blue-500/50 to-blue-500 ",
    "from-blue-500/50 to-blue-500",
    "from-blue-500/50 to-blue-500 ",
    "from-blue-500/50 to-secondary-500 ",
    "from-blue-500/50 to-secondary-500 ",
    "from-blue-500/50 to-secondary-500 "
  ];
  const getExpertiseLevel = (level) => {
    if (level === 10) return "Expert";
    if (level >= 7 && level <= 9) return "Advanced";
    if (level >= 4 && level <= 6) return "Professional";
    if (level >= 1 && level <= 3) return "Beginner";
    return "No Experience";
  };
  return /* @__PURE__ */ jsx(motion.div, { className: `rounded-lg`, whileHover: { scale: 1.02 }, children: /* @__PURE__ */ jsxs(
    MagicCard,
    {
      className: "clip justify-center1 cursor-pointer flex-col items-center whitespace-nowrap rounded-2xl bg-gray-300/50 px-6 pb-6 pt-10 shadow-2xl backdrop-blur-lg dark:bg-neutral-800/50",
      gradientColor: "#000000",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: icon, alt: slug, className: "h-12 w-12" }),
          /* @__PURE__ */ jsx("h3", { className: "font-basement text-xl text-gray-600 dark:text-gray-300", children: slug })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: labels.map((label, index) => {
          const timelineMatch = findTimelineMatch(label);
          const yearsOfExperience = timelineMatch?.yearsOfExperience;
          return /* @__PURE__ */ jsx("div", { className: "group/stat relative", children: /* @__PURE__ */ jsxs("div", { className: "clip2 rounded bg-neutral-800 px-2 py-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `mr-1 inline-block h-3 w-3 rounded-full ${getExpertiseColor(
                      timelineMatch?.stillActive
                    )}`
                  }
                ),
                " ",
                label
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("span", { className: "text-primary-500 opacity-0 transition-all duration-300 ease-in-out group-hover/stat:opacity-100", children: getExpertiseLevel(parseInt(data[index])) }) })
            ] }),
            yearsOfExperience && /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              yearsOfExperience,
              " years"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-dark/50 inset-0 mt-1 h-2 overflow-hidden rounded-full opacity-40", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: `h-full bg-gradient-to-r ${colors[parentIndex]}`,
                initial: { width: 0 },
                whileInView: { width: `${Number(data[index]) * 10}%` }
              }
            ) })
          ] }) }, label);
        }) })
      ]
    }
  ) });
}

export { StackCard as S };
