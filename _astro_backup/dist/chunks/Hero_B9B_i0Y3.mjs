import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderSlot } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { H as Heading } from './Heading_BhHgbaaz.mjs';
import Tilt from 'react-parallax-tilt';

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, text, subtitleText, fullHeight = false, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`bg-offwhite dark:bg-neutral-900 ${fullHeight ? "min-h-screen" : "pt-24 pb-8"} flex items-center`, "class")}> <div${addAttribute(`container mx-auto px-4 ${img && "flex flex-col md:flex-row items-center gap-4"}`, "class")}> <div class="mx-auto flex-1 self-center"> ${text && renderTemplate`${renderComponent($$result, "Heading", Heading, { "level": "h6", "className": `mb-1 !pt-0 !text-left !text-xl` }, { "default": ($$result2) => renderTemplate`${text}` })}`} ${renderComponent($$result, "Heading", Heading, { "level": "h1", "shadow": true, "gradient": true, "className": `${fullHeight ? "!text-4xl md:!text-7xl" : "text-4xl md:!text-5xl"} mb-1 !pt-0 !text-left` }, { "default": ($$result2) => renderTemplate`${title}` })} ${subtitle && renderTemplate`<p${addAttribute(`${fullHeight ? "text-xl font-bold md:text-4xl" : "text-xl"} mb-2 text-black dark:text-secondary-500`, "class")}> ${subtitle} </p>`} ${subtitleText && renderTemplate`<p${addAttribute(`mb-6 max-w-sm text-xl text-gray-600 dark:text-gray-400`, "class")}>${subtitleText}</p>`} ${renderSlot($$result, $$slots["default"])} </div> ${img && renderTemplate`<div class="flex-1"> ${renderComponent($$result, "Tilt", Tilt, { "client:load": true, "perspective": 1e3, "className": "portfolio-hero-image-tilt", "glareEnable": true, "glareMaxOpacity": 0.8, "glareColor": "#ffffff", "glarePosition": "bottom", "glareBorderRadius": "20px", "client:component-hydration": "load", "client:component-path": "react-parallax-tilt", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="w-full"> <div> ${" "} <img${addAttribute(img, "src")} class="relative z-20 w-full rounded-lg object-cover shadow-lg"> <div class="absolute inset-0 z-20 rotate-3 transform rounded-lg bg-gradient-to-r from-primary-500/80 to-secondary-500/80 mix-blend-soft-light"></div> </div> </div> ` })} </div>`} </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/hero/Hero.astro", void 0);

export { $$Hero as $ };
