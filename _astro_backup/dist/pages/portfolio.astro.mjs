/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { b as getPortfolioItems, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { P as PortfolioFilter, a as ProjectCard } from '../chunks/ProjectCard_CTB4e1hn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const portfolioItems = await getPortfolioItems();
  const sortedItems = portfolioItems.sort((a, b) => {
    if (a.onHome !== b.onHome) return b.onHome ? 1 : -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const allCategories = [...new Set(portfolioItems.flatMap((entry) => entry.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - Work", "description": "A showcase of my selected works and projects", "image": "/img/og-default.jpg", "imageAlt": "Ehsan's Portfolio - Selected Works and Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Portfolio", "subtitle": "A showcase of my selected works and projects" })} ${maybeRenderHead()}<div class="py-20"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "PortfolioFilter", PortfolioFilter, { "categories": allCategories, "category": "all", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PortfolioFilter", "client:component-export": "default" })} <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${sortedItems.map((item) => renderTemplate`${renderComponent($$result2, "ProjectCard", ProjectCard, { "item": item, "client:load": true, "className": "portfolio-card", "client:component-hydration": "load", "client:component-path": "@/components/portfolio/ProjectCard", "client:component-export": "ProjectCard" })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/portfolio/index.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
