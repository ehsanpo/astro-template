import { jsx } from 'react/jsx-runtime';
import 'react';

const TechTags = ({ technologies }) => {
  return /* @__PURE__ */ jsx("div", { className: "my-4 flex flex-wrap gap-2", children: technologies.map((tech, index) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs text-white/70",
      children: tech
    },
    index
  )) });
};

export { TechTags as T };
