import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { H as Heading } from './Heading_BhHgbaaz.mjs';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
/* empty css                          */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_uTXWiZm6.mjs';

const PortfolioHeader = ({ item }) => {
  const {
    title,
    tagline,
    client,
    agency,
    tag,
    logo,
    logo2,
    background_image,
    images,
    category,
    permalink,
    date
  } = item;
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-100 dark:bg-neutral-800", children: /* @__PURE__ */ jsx("header", { className: "mx-auto max-w-6xl overflow-hidden px-4 py-12", children: /* @__PURE__ */ jsx(ParallaxProvider, { children: /* @__PURE__ */ jsx("div", { className: "container relative", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "self-center", children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          className: "mb-4 !text-left",
          level: "h1",
          gradient: true,
          style: {
            viewTransitionName: `portfolio-title-${item.permalink}`
          },
          children: title
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mb-4 text-xl",
          style: {
            viewTransitionName: `portfolio-tagline-${item.permalink}`
          },
          children: tagline
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-20 font-medium uppercase text-secondary-500", children: "Client" }),
          /* @__PURE__ */ jsx("p", { className: "font-basement text-secondary-500", children: client })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-20 font-medium uppercase text-secondary-500", children: "Year" }),
          /* @__PURE__ */ jsx("p", { className: "font-basement text-secondary-500", children: date })
        ] }),
        agency && /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-20 font-medium uppercase text-yellow-500", children: "Agency" }),
          /* @__PURE__ */ jsx("p", { className: "font-basement text-yellow-500", children: agency })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-20 font-medium uppercase text-primary-400", children: "Role" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.map((categoryTag, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "clip2 hover:border-primary border-l-2 border-primary-500/30 bg-primary-500/20 px-3 py-1 text-sm text-primary-400 transition-all",
              style: {
                viewTransitionName: `portfolio-category-${item.permalink}-${categoryTag}`
              },
              children: categoryTag
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "min-w-20 font-medium uppercase text-gray-500 dark:text-purple-400", children: "Tech" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tag.map((techTag, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "clip2 border-l-2 border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm text-purple-400 transition-all hover:border-purple-500",
              children: techTag
            },
            index
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative mt-10 flex-1", children: /* @__PURE__ */ jsxs(Tilt, { perspective: 1e3, className: "portfolio-hero-image-tilt relative", children: [
      /* @__PURE__ */ jsx("div", { className: "portfolio-hero-image", children: /* @__PURE__ */ jsx(Parallax, { speed: -10, children: /* @__PURE__ */ jsx(
        "img",
        {
          height: logo.height,
          width: logo.width,
          src: logo.src,
          alt: "Portfolio Image",
          className: "portfolio-hero-box porfolio-hero-large mr-4 rounded-lg object-cover"
        }
      ) }) }),
      images && images[0] && /* @__PURE__ */ jsx("div", { className: "portfolio-hero-image absolute left-0 top-[100%] w-full", children: /* @__PURE__ */ jsx(Parallax, { speed: 10, children: /* @__PURE__ */ jsx(
        "img",
        {
          height: images[0].height,
          width: images[0].width,
          src: images[0].src,
          alt: "Portfolio Image",
          className: "portfolio-hero-box porfolio-hero-medium -mr-4 max-h-[20vh] rounded-lg object-cover"
        }
      ) }) }),
      logo2 && /* @__PURE__ */ jsx("div", { className: "portfolio-hero-image absolute left-0 top-[100%] w-full", children: /* @__PURE__ */ jsx(Parallax, { speed: 5, className: "portfolio-hero-box porfolio-hero-small", children: /* @__PURE__ */ jsx(
        "img",
        {
          height: logo2?.height,
          width: logo2?.width,
          src: logo2?.src,
          alt: "Portfolio Image",
          className: "rounded-lg"
        }
      ) }) }),
      background_image && /* @__PURE__ */ jsx("div", { className: "portfolio-hero-image absolute top-[30%] w-full", children: /* @__PURE__ */ jsx(
        Parallax,
        {
          speed: 5,
          className: "portfolio-hero-box porfolio-hero-small--right absolute left-0 top-[10%] w-full",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              height: background_image.height,
              width: background_image.width,
              src: background_image.src,
              alt: "Portfolio Image",
              className: "rounded-lg",
              style: {
                viewTransitionName: `portfolio-image-${item.permalink}`
              }
            }
          )
        }
      ) })
    ] }) })
  ] }) }) }) }) });
};

const $$Astro$1 = createAstro("https://ehsan-pourhadi.com/");
const $$OptimizedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OptimizedImage;
  const {
    src,
    alt,
    title,
    class: className,
    loading = "lazy",
    decoding = "async",
    sizes = "(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 75vw, 60vw",
    widths = [480, 768, 1024, 1200, 1536],
    format = "webp",
    quality = 80
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "title": title, "class": className, "loading": loading, "decoding": decoding, "sizes": sizes, "widths": widths, "format": format, "quality": quality })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/ui/OptimizedImage.astro", void 0);

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-8 grid grid-cols-1 gap-4 md:grid-cols-2"> ${images?.map((image, index) => renderTemplate`<a${addAttribute(image.src, "href")}${addAttribute(image.width, "data-pswp-width")}${addAttribute(image.height, "data-pswp-height")} class="gallery-item cursor-pointer"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": image, "alt": `${alt} - Image ${index + 1}`, "class": "h-64 w-full rounded-lg object-cover transition-transform hover:scale-105", "sizes": "(max-width: 768px) 100vw, 50vw", "widths": [480, 768, 1024, 1200, 1536], "loading": "lazy" })} </a>`)} </div> `;
}, "C:/Users/Ehsan/dev/astro-template/src/components/portfolio/Gallery.astro", void 0);

export { $$Gallery as $, PortfolioHeader as P };
