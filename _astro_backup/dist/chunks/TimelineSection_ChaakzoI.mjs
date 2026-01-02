import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { ExternalLink, Linkedin, Users, ChevronUp, ChevronDown, Award } from 'lucide-react';
import { T as TechTags } from './TechTags_DRupaY-4.mjs';

const ProjectLink = ({ href, title }) => {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-2 text-amber-400 transition-colors hover:text-amber-300",
      children: [
        /* @__PURE__ */ jsx(ExternalLink, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "underline", children: title })
      ]
    }
  );
};

const Project = ({
  title,
  description,
  image,
  link,
  github,
  technologies
}) => {
  return /* @__PURE__ */ jsx(Parallax, { translateY: [-2, 4], children: /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-lg border border-white/10 bg-white/5 p-4", children: [
    /* @__PURE__ */ jsx("h4", { className: "mb-2 text-lg font-semibold text-amber-400", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-white/70", children: description }),
    image && /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "mb-4 h-32 w-full rounded-md object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: technologies.map((tech, index) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs text-white/70",
        children: tech
      },
      index
    )) }),
    link && /* @__PURE__ */ jsx("div", { className: "mb-3 flex gap-4", children: /* @__PURE__ */ jsx(ProjectLink, { ...link }) })
  ] }) });
};

function TeamMemberCard({ name, role, linkedin, img }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 text-lg font-semibold text-white", children: img ? /* @__PURE__ */ jsx("img", { src: img, alt: name, className: "h-full w-full object-cover" }) : initials }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("h4", { className: "truncate text-sm font-semibold text-gray-900 dark:text-white", children: name }),
      /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-gray-600 dark:text-gray-400", children: role })
    ] }),
    linkedin && /* @__PURE__ */ jsx(
      "a",
      {
        href: linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex-shrink-0 p-2 text-gray-400 transition-colors hover:text-primary-500 dark:hover:text-primary-400",
        "aria-label": `${name}'s LinkedIn profile`,
        children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
      }
    )
  ] });
}

function TeamSection({ team }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!team || team.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-white/20 pt-4", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "group flex w-full items-center justify-between text-left transition-colors hover:text-primary-400",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [
            /* @__PURE__ */ jsx(Users, { size: 20 }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "Team Members (",
              team.length,
              ")"
            ] })
          ] }),
          isExpanded ? /* @__PURE__ */ jsx(ChevronUp, { size: 20, className: "text-white/70 group-hover:text-primary-400" }) : /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: "text-white/70 group-hover:text-primary-400" })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-3 duration-300 animate-in fade-in slide-in-from-top-4 sm:grid-cols-2", children: team.map((member, index) => /* @__PURE__ */ jsx(
      TeamMemberCard,
      {
        name: member.name,
        role: member.role,
        linkedin: member.linkedin,
        img: member.img
      },
      index
    )) })
  ] });
}

const TimelineSection = ({
  year,
  title,
  company,
  description,
  image,
  technologies,
  project,
  awards,
  team,
  reverse = false
}) => {
  return /* @__PURE__ */ jsx("section", { className: `relative ${reverse ? "clip -my-2" : ""}`, children: /* @__PURE__ */ jsx(
    ParallaxBanner,
    {
      layers: [
        {
          image,
          speed: -20,
          opacity: [0.8, 1]
        }
      ],
      className: "relative",
      children: /* @__PURE__ */ jsxs("div", { className: "inset-0 bg-black/50 py-16", children: [
        /* @__PURE__ */ jsx(Parallax, { speed: -25, children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `container absolute left-[5%] right-[5%] font-basement text-8xl text-secondary-500 ${reverse ? "text-left" : "text-right"}`,
            children: year
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `container mx-auto flex h-full items-center ${reverse ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `max-w-xl ${reverse ? "ml-auto" : "mr-auto"} rounded-lg border border-white/10 bg-black/40 p-8 text-white backdrop-blur-md`,
                children: [
                  /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold text-primary-500 md:text-4xl", children: company }),
                  /* @__PURE__ */ jsx("h3", { className: "mb-2 text-base text-secondary-500/90 md:text-2xl", children: title }),
                  /* @__PURE__ */ jsx("p", { className: "mb-4 leading-relaxed text-white/80", children: description }),
                  /* @__PURE__ */ jsx(TechTags, { technologies }),
                  project && Object.keys(project).length > 0 && /* @__PURE__ */ jsx(Project, { ...project }),
                  awards && awards.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4 space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-amber-400", children: [
                      /* @__PURE__ */ jsx(Award, { size: 20 }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Awards" })
                    ] }),
                    awards.map((award, index) => /* @__PURE__ */ jsx("div", { className: "ml-7 text-sm text-white/70", children: award }, index))
                  ] }),
                  team && team.length > 0 && /* @__PURE__ */ jsx(TeamSection, { team })
                ]
              }
            )
          }
        )
      ] })
    }
  ) });
};

export { TimelineSection as T };
