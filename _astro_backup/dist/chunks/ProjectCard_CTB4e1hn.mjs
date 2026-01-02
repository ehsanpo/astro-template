import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Star, ExternalLink, Eye, Calendar, Users, MoreHorizontal } from 'lucide-react';
import { c as cn } from './Layout_CiCYOMq9.mjs';

function PortfolioFilter({
  categories,
  category: initialCategory,
  onCategoryChange
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const filterPortfolio = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    const portfolioCards = document.querySelectorAll("[data-categories]");
    portfolioCards.forEach((card) => {
      const categories2 = JSON.parse(card.getAttribute("data-categories") || "[]");
      if (category === "all" || categories2.includes(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap gap-4", children: [
    /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => filterPortfolio("all"),
        className: clsx(
          "clip2 rounded px-4 py-2 transition-colors",
          selectedCategory === "all" ? "bg-primary-500 text-black" : "text-light bg-neutral-800/50"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        "aria-label": "Show all categories",
        children: "All"
      }
    ),
    categories.map((category) => /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => filterPortfolio(category),
        className: clsx(
          "clip2 rounded px-4 py-2 transition-colors",
          selectedCategory === category ? "bg-primary-500 text-black" : "text-light bg-neutral-800/50"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        "aria-label": `Filter by ${category}`,
        children: category
      },
      category
    ))
  ] });
}

function ProjectCard({ item, className, showShare = true }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const delay = ["", "delay-75", "delay-100", "delay-150", "delay-200", "delay-300"];
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: cn(
        "clip group relative block min-h-96 overflow-hidden rounded-lg bg-neutral-800",
        className
      ),
      whileHover: { scale: 1.02 },
      "data-categories": JSON.stringify(item.category),
      children: [
        item.onHome && /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-4 z-30", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-xs text-primary-900", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-3 w-3" }),
          "Featured"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 bg-gradient-to-t from-slate-800 to-transparent" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.background_image?.src || `/img/${item.background_image}`,
            alt: item.title,
            className: "absolute -top-1 z-10 m-auto h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-75 group-hover:filter",
            style: {
              viewTransitionName: `portfolio-image-${item.permalink || item.slug}`
            }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "z-25 absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          item.case_link_url && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.open(item.case_link_url, "_blank"),
              className: "rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30",
              children: /* @__PURE__ */ jsx(ExternalLink, { size: 16 })
            }
          ),
          item.video && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.open(item.video, "_blank"),
              className: "rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30",
              children: /* @__PURE__ */ jsx(Eye, { size: 16 })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 z-20 p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center gap-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `/${item.type === "product" ? "products" : "portfolio"}/${item.permalink || item.slug}`,
              children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "font-basement text-xl text-white transition-colors group-hover:text-primary-500",
                    style: {
                      viewTransitionName: `portfolio-title-${item.permalink || item.slug}`
                    },
                    children: /* @__PURE__ */ jsx("div", { className: "hover:text-primary-400", children: item.title })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "font-kabel mb-1 leading-tight text-primary-500",
                    style: {
                      viewTransitionName: `portfolio-tagline-${item.permalink || item.slug}`
                    },
                    children: item.tagline || ""
                  }
                ),
                item.title2 && /* @__PURE__ */ jsx("p", { className: "font-kabel text-sm text-gray-300", children: item.title2 })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center justify-between text-xs text-gray-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            item.date && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: item.date })
            ] }),
            item.client && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: item.client })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 overflow-hidden group-hover:mt-4", children: item.category?.slice(0, 3).map((cat, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `clip2 invisible h-0 overflow-hidden bg-primary-500/80 px-3 text-sm text-primary-900 transition-all ease-in-out group-hover:visible group-hover:h-7 group-hover:py-1 ${delay[index]}`,
              style: {
                viewTransitionName: `portfolio-category-${item.permalink || item.slug}-${cat}`
              },
              children: cat
            },
            cat
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 overflow-hidden group-hover:mt-4", children: item.tag?.slice(0, 3).map((tag, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `${index > 2 ? "hidden" : ""} clip2 invisible h-0 overflow-hidden border-l-2 border-purple-500/30 bg-purple-500/80 px-3 text-sm text-purple-100 transition-all hover:border-purple-500 group-hover:visible group-hover:h-7 group-hover:py-1 ${delay[index]}`,
              children: tag
            },
            tag
          )) })
        ] }),
        showShare && /* @__PURE__ */ jsxs("div", { className: "absolute right-4 top-4 z-30", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowShareMenu(!showShareMenu);
              },
              className: "rounded-full bg-black/20 p-2 text-white opacity-0 backdrop-blur-sm transition-colors hover:bg-black/40 group-hover:opacity-100",
              children: /* @__PURE__ */ jsx(MoreHorizontal, { size: 16 })
            }
          ),
          showShareMenu && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full mt-2", children: /* @__PURE__ */ jsx("div", { className: "min-w-[150px] rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-white", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigator.clipboard.writeText(
                    window.location.origin + `/portfolio/${item.permalink || item.slug}`
                  );
                },
                className: "block w-full text-left hover:text-primary-400",
                children: "Copy Link"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(item.title || "Check out this project")}&url=${encodeURIComponent(window.location.origin + "/portfolio/" + (item.permalink || item.slug))}`;
                  window.open(tweetUrl);
                },
                className: "block w-full text-left hover:text-primary-400",
                children: "Share on X"
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" })
      ]
    }
  );
}

export { PortfolioFilter as P, ProjectCard as a };
