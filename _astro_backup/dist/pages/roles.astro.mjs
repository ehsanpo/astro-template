/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { e as getRoles, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { H as Heading } from '../chunks/Heading_BhHgbaaz.mjs';
import { T as TechTags } from '../chunks/TechTags_DRupaY-4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const roles = getRoles();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Professional Roles - Ehsan Pourhadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Professional Roles", "subtitle": "Exploring different facets of my expertise across engineering, product, and creative domains." })} ${maybeRenderHead()}<section class="container mx-auto px-4 py-12"> <div class="mx-auto max-w-6xl"> <!-- Introduction --> <div class="mb-16 text-center"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate` Versatile Expertise ` })} <p class="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
Throughout my career, I've worn many hats and adapted to various roles. Each position has
					shaped my understanding of technology, product development, and team dynamics. Explore the
					different roles where I can add value to your organization.
</p> </div> <!-- Roles Grid --> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${roles.map((role) => renderTemplate`<div class="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-neutral-800"> <!-- Role Image Header --> <div class="relative h-48 overflow-hidden"> <img${addAttribute(role.image, "src")}${addAttribute(role.title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> <div class="absolute bottom-4 left-4 right-4"> <div class="flex items-center gap-3"> <div class="text-2xl">${role.icon}</div> <h3 class="font-basement text-lg font-semibold text-white"> ${role.title} </h3> </div> </div> </div> <!-- Content --> <div class="relative z-10 p-6"> <p class="mb-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"> ${role.description} </p> ${renderComponent($$result2, "TechTags", TechTags, { "technologies": role.tags, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/timeline/TechTags", "client:component-export": "TechTags" })} <a${addAttribute(`/roles/${role.slug}`, "href")} class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-4">
Learn more
<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div>`)} </div> <!-- Call to action --> <div class="mt-16 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-center text-white"> <h3 class="mb-4 text-2xl font-bold">Ready to Work Together?</h3> <p class="mb-6 text-lg opacity-90">
Whether you need technical expertise, strategic leadership, or creative solutions, I'm
					here to help bring your vision to life.
</p> <a href="/contact" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg">
Get in Touch
<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-8 0l4 4m-4-4l4-4"></path> </svg> </a> </div> </div> </section> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/roles/index.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/roles/index.astro";
const $$url = "/roles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
