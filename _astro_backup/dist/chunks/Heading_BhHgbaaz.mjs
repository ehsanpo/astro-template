import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function getHeadingClass({ gradient, shadow, floating }) {
  const baseClasses = ["font-bold", "text-gray-900", "text-white", "transition-all"];
  if (gradient) {
    baseClasses.push("!text-primary-500");
  }
  if (floating) {
    baseClasses.push("hover:-translate-y-1", "hover:drop-shadow-xl", "duration-300");
  }
  return baseClasses.join(" ");
}

const Heading = ({
  level = "h2",
  subtitle,
  gradient = false,
  shadow = false,
  floating = false,
  className = "",
  children,
  backplate,
  style
}) => {
  const Tag = level;
  const headingClass = getHeadingClass({
    gradient,
    shadow,
    floating
  });
  return /* @__PURE__ */ jsx(ParallaxProvider, { children: /* @__PURE__ */ jsxs(
    Tag,
    {
      className: `relative pt-12 text-center text-3xl lg:text-7xl ${className} ${backplate ? "pb-12" : ""}`,
      style,
      children: [
        backplate && /* @__PURE__ */ jsx(
          Parallax,
          {
            speed: 5,
            className: "absolute left-0 top-[-10%] z-10 w-full text-4xl font-bold opacity-10 blur-sm lg:text-9xl",
            children: /* @__PURE__ */ jsx("div", { children })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: `${headingClass} text-center1 relative z-20`, children }),
        subtitle && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("div", { className: "my-3 text-lg", children: subtitle })
        ] })
      ]
    }
  ) });
};

export { Heading as H };
