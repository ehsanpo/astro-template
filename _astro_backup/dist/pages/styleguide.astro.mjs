/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { H as Heading } from '../chunks/Heading_BhHgbaaz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import 'clsx';
export { renderers } from '../renderers.mjs';

function Card({
  title,
  subtitle,
  icon,
  action,
  children,
  className = "",
  hover = true
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      whileHover: hover ? { y: -5, transition: { duration: 0.2 } } : void 0,
      className: `rounded-lg bg-white p-6 shadow-sm dark:bg-neutral-800 ${className}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            icon && /* @__PURE__ */ jsx("div", { className: "text-4xl", children: icon }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: title }),
              subtitle && /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: subtitle })
            ] })
          ] }),
          action && /* @__PURE__ */ jsx("div", { children: action })
        ] }),
        children && /* @__PURE__ */ jsx("div", { className: "text-gray-600 dark:text-gray-400", children })
      ]
    }
  );
}

const $$Astro$1 = createAstro("https://ehsan-pourhadi.com/");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, icon, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-neutral-800"> <div class="mb-4 text-4xl">${icon}</div> <h3 class="font-poppins mb-3 text-xl font-semibold text-gray-900 dark:text-white"> ${title} </h3> <p class="mb-4 text-gray-600 dark:text-gray-400">${description}</p> ${features && features.length > 0 && renderTemplate`<ul class="space-y-2"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600 dark:text-gray-400"> <span class="mr-2 text-primary-600">•</span> ${feature} </li>`)} </ul>`} </div>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/services/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-12 text-center"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white">${title}</h2> ${subtitle && renderTemplate`<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">${subtitle}</p>`} </div>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/ui/SectionTitle.astro", void 0);

const $$Styleguide = createComponent(($$result, $$props, $$slots) => {
  const colors = [
    {
      name: "primary",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    },
    {
      name: "secondary",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    },
    {
      name: "neutral",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    }
  ];
  const singleColors = [
    {
      name: "white",
      value: "#F9F4EA"
    },
    {
      name: "offwhite",
      value: "#DAD3CA"
    },
    {
      name: "opium",
      value: "#8A7F7D"
    }
  ];
  const typography = [
    { tag: "h1", text: "Heading 1", class: "text-4xl font-basement" },
    { tag: "h2", text: "Heading 2", class: "text-3xl  font-basement" },
    { tag: "h3", text: "Heading 3", class: "text-2xl font-basement" },
    { tag: "p", text: "Body text", class: "text-base" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Styleguide" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Styleguide", "subtitle": "Design system and component library" })} <!-- Colors --> <section class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "className": "mb-8" }, { "default": ($$result3) => renderTemplate`Colors` })} <div class="space-y-8"> ${colors.map((color) => renderTemplate`<div> <h3 class="mb-4 text-lg font-semibold">${color.name}</h3> <div class="grid grid-cols-11 gap-4"> ${color.shades.map((shade) => renderTemplate`<div> <div${addAttribute(`h-20 rounded-lg bg-${color.name}-${shade}`, "class")}></div> <p class="mt-2 text-sm">${shade}</p> </div>`)} </div> </div>`)}  <div> <h3 class="mb-4 text-lg font-semibold">Custom Colors</h3> <div class="grid grid-cols-3 gap-4"> ${singleColors.map((color) => renderTemplate`<div> <div class="h-20 rounded-lg border border-gray-200"${addAttribute(`background-color: ${color.value}`, "style")}></div> <p class="mt-2 text-sm font-medium">${color.name}</p> <p class="text-xs text-gray-500">${color.value}</p> </div>`)} </div> </div> </div> </section> <!-- Typography --> <section class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "className": "mb-8" }, { "default": ($$result3) => renderTemplate`Typography` })} <div class="space-y-8"> ${typography.map((item) => renderTemplate`<div> <div${addAttribute(item.class, "class")}>${item.text}</div> <p class="mt-2 text-sm text-gray-500">${item.class}</p> </div>`)} </div> </section> <!-- Components --> <section class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "className": "mb-8" }, { "default": ($$result3) => renderTemplate`Components` })} <!-- Cards --> <div class="mb-8 grid grid-cols-2 gap-8"> ${renderComponent($$result2, "Card", Card, { "title": "Basic Card", "subtitle": "Card component example" }, { "default": ($$result3) => renderTemplate`
This is a basic card component with a title and content.
` })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Service Card", "description": "Example service description", "icon": "\u{1F4A1}", "features": ["Feature 1", "Feature 2"] })} </div> <!-- Buttons --> <div class="space-x-4"> <button class="rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Primary Button
</button> <button class="rounded-lg border border-primary-600 px-6 py-3 text-primary-600 transition-colors hover:bg-primary-600 hover:text-white">
Secondary Button
</button> </div> </section> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/styleguide.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/styleguide.astro";
const $$url = "/styleguide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Styleguide,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
