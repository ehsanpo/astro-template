/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderSlot, d as addAttribute } from '../../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { $ as $$Layout, d as getProductItems } from '../../chunks/Layout_CiCYOMq9.mjs';
import { P as PortfolioHeader, $ as $$Gallery } from '../../chunks/Gallery_Bko9QcPs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
async function getStaticPaths() {
  const productItems = await getProductItems();
  return productItems.map((item) => ({
    params: { slug: item.permalink },
    props: { item }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { item } = Astro2.props;
  const { Content } = await item.content.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${item.title} - Products`, "description": item.description || item.tagline || `${item.title} - ${item.client}`, "image": item.background_image?.src || item.logo?.src || "/img/og-default.jpg", "imageAlt": `${item.title} - ${item.client}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="relative min-h-screen bg-white pt-4 dark:bg-neutral-900"> ${renderComponent($$result2, "PortfolioHeader", PortfolioHeader, { "item": item, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/portfolio/PortfolioHeader", "client:component-export": "default" })} <div class="relative z-10 mx-auto max-w-6xl px-4 pt-10"> <div class="prose mx-auto mb-20 max-w-3xl dark:prose-invert"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Content", Content, {})} </div> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": item.bilder, "alt": item.title })} ${item.case_link_url && renderTemplate`<div class="pb-20 text-center"> <a${addAttribute(item.case_link_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Visit Project
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div>`} </div> </article> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/products/[slug].astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
