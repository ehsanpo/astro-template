import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, c as cn } from './Layout_CiCYOMq9.mjs';
import { H as Heading } from './Heading_BhHgbaaz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useState, useEffect, forwardRef, useRef } from 'react';
import { motion } from 'motion/react';
import { FileText, Figma, BookOpen, Bug, ShieldCheck, ClipboardList, Code2, CheckCircle, Terminal, FileEdit, Share2, Wrench } from 'lucide-react';
import 'react-scroll-parallax';

const $$ToolsList = createComponent(async ($$result, $$props, $$slots) => {
  const { tools } = await getPortfolioData();
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto py-20"> ${renderComponent($$result, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result2) => renderTemplate`Development Tools` })} <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${tools.map((tool) => renderTemplate`<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <div class="mb-4 flex items-center"> <img${addAttribute(tool.icon, "src")}${addAttribute(tool.name, "alt")} class="mr-3 h-8 w-8"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${tool.name}</h3> </div> <p class="mb-4 text-gray-600 dark:text-gray-400">${tool.description}</p> <div class="flex items-center"> <div class="flex-1"> <div class="h-2 w-full rounded-full bg-gray-200 dark:bg-neutral-700"> <div class="h-2 rounded-full bg-primary-600"${addAttribute(`width: ${tool.proficiency * 10}%`, "style")}></div> </div> </div> </div> </div>`)} </div> </div>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/skills/ToolsList.astro", void 0);

const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const gradientCoordinates = reverse ? {
    x1: ["90%", "-10%"],
    x2: ["100%", "0%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  } : {
    x1: ["10%", "110%"],
    x2: ["0%", "100%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  };
  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        updatePath();
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      width: svgDimensions.width,
      height: svgDimensions.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className),
      viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathD,
            stroke: pathColor,
            strokeWidth: pathWidth,
            strokeOpacity: pathOpacity,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathD,
            strokeWidth: pathWidth,
            stroke: `url(#${id})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          motion.linearGradient,
          {
            className: "transform-gpu",
            id,
            gradientUnits: "userSpaceOnUse",
            initial: {
              x1: "0%",
              x2: "0%",
              y1: "0%",
              y2: "0%"
            },
            animate: {
              x1: gradientCoordinates.x1,
              x2: gradientCoordinates.x2,
              y1: gradientCoordinates.y1,
              y2: gradientCoordinates.y2
            },
            transition: {
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1],
              // https://easings.net/#easeOutExpo
              repeat: Infinity,
              repeatDelay: 0
            },
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
              /* @__PURE__ */ jsx("stop", { stopColor: gradientStartColor }),
              /* @__PURE__ */ jsx("stop", { offset: "32.5%", stopColor: gradientStopColor }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: gradientStopColor, stopOpacity: "0" })
            ]
          }
        ) })
      ]
    }
  );
};

const Circle = forwardRef(
  ({ className, children }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "relative z-10 flex size-12 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        ),
        children
      }
    );
  }
);
Circle.displayName = "Circle";
function ProcessFlowDiagram() {
  const containerRef = useRef(null);
  const jiraRef = useRef(null);
  const figmaRef = useRef(null);
  const apiRef = useRef(null);
  const feedbackRef = useRef(null);
  const bugReportsRef = useRef(null);
  const competitorRef = useRef(null);
  const complianceRef = useRef(null);
  const planRef = useRef(null);
  const codeDebugRef = useRef(null);
  const testRef = useRef(null);
  const codeImplRef = useRef(null);
  const docsRef = useRef(null);
  const interfacesRef = useRef(null);
  const bugFixesRef = useRef(null);
  const CircleWithTooltip = (circleRef, IconComponent, tooltipText) => /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsx(Circle, { ref: circleRef, children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 stroke-secondary-500" }) }),
    /* @__PURE__ */ jsx("div", { className: "clip4 pointer-events-none w-max rounded bg-gray-800 px-2 py-1 pb-2 text-sm text-white shadow-md transition-opacity", children: tooltipText })
  ] });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "max bg-background relative m-auto flex w-full max-w-4xl items-center justify-between overflow-hidden rounded-lg p-10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
          CircleWithTooltip(jiraRef, FileText, "Jira Tasks"),
          CircleWithTooltip(figmaRef, Figma, "Designs"),
          CircleWithTooltip(apiRef, BookOpen, "API Docs"),
          CircleWithTooltip(bugReportsRef, Bug, "Bug Reports"),
          CircleWithTooltip(complianceRef, ShieldCheck, "Compliance")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-8", children: [
          CircleWithTooltip(planRef, ClipboardList, "Plan"),
          CircleWithTooltip(codeDebugRef, Code2, "Code & Debug"),
          CircleWithTooltip(testRef, CheckCircle, "Test")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
          CircleWithTooltip(codeImplRef, Terminal, "Code"),
          CircleWithTooltip(docsRef, FileEdit, "Documentation"),
          CircleWithTooltip(interfacesRef, Share2, "Functional Interfaces"),
          CircleWithTooltip(bugFixesRef, Wrench, "Bug Fixes")
        ] }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: jiraRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: figmaRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: apiRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: feedbackRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: bugReportsRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: competitorRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: complianceRef, toRef: planRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: planRef, toRef: codeDebugRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: codeDebugRef, toRef: testRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: testRef, toRef: codeImplRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: testRef, toRef: docsRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: testRef, toRef: interfacesRef }),
        /* @__PURE__ */ jsx(AnimatedBeam, { containerRef, fromRef: testRef, toRef: bugFixesRef })
      ]
    }
  );
}

export { $$ToolsList as $, ProcessFlowDiagram as P };
