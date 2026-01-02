/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { d as getProductItems, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { P as PortfolioFilter, a as ProjectCard } from '../chunks/ProjectCard_CTB4e1hn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const productItems = await getProductItems();
  const parseDateValue = (dateStr) => {
    const normalized = /^\d{4}-\d{2}$/.test(dateStr) ? `${dateStr}-01` : dateStr;
    return new Date(normalized).getTime();
  };
  const sortedItems = productItems.sort((a, b) => {
    return parseDateValue(b.date) - parseDateValue(a.date);
  });
  const allCategories = [...new Set(productItems.flatMap((entry) => entry.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products - Work", "description": "A showcase of my products and digital creations", "image": "/img/og-default.jpg", "imageAlt": "Ehsan's Products - Digital Creations and Tools" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Products", "subtitle": "A showcase of my products and digital creations" })} ${maybeRenderHead()}<div class="py-20"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "PortfolioFilter", PortfolioFilter, { "categories": allCategories, "category": "all", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PortfolioFilter", "client:component-export": "default" })} <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${sortedItems.map((item) => renderTemplate`${renderComponent($$result2, "ProjectCard", ProjectCard, { "item": item, "client:load": true, "className": "portfolio-card", "client:component-hydration": "load", "client:component-path": "@/components/portfolio/ProjectCard", "client:component-export": "ProjectCard" })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
