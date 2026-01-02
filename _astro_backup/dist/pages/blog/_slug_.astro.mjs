/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as getBlogPosts } from '../../chunks/Layout_CiCYOMq9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
async function getStaticPaths() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.content.render();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - Blog`, "description": post.description || `Read ${post.title} on Ehsan's Blog`, "image": post.cover?.src || "/img/og-default.jpg", "imageAlt": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-h-screen bg-white pt-4 dark:bg-neutral-900"> <div class="mx-auto max-w-3xl px-4 py-16"> ${post.cover && renderTemplate`<div class="mb-8 overflow-hidden rounded-lg"> <img${addAttribute(post.cover.src, "src")}${addAttribute(post.title, "alt")} class="h-64 w-full object-cover md:h-96"> </div>`} <header class="mb-12 text-center"> <h1 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"> ${post.title} </h1> ${post.description && renderTemplate`<p class="mx-auto mb-6 max-w-3xl text-xl text-gray-600 dark:text-gray-400"> ${post.description} </p>`} <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"> <time${addAttribute(post.date, "datetime")}> ${formatDate(post.date)} </time> ${post.author && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span>•</span> <span>By ${post.author}</span> ` })}`} ${post.category && post.category.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span>•</span> <div class="flex flex-wrap gap-2"> ${post.category.map((cat) => renderTemplate`<span class="rounded-md bg-primary-100 px-2 py-1 text-xs text-primary-800 dark:bg-primary-900 dark:text-primary-200"> ${cat} </span>`)} </div> ` })}`} </div> </header> <div class="prose prose-base max-w-none dark:prose-invert"> ${renderComponent($$result2, "Content", Content, {})} </div> ${post.tag && post.tag.length > 0 && renderTemplate`<footer class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700"> <div class="flex flex-wrap gap-2"> <span class="mr-2 text-sm text-gray-500 dark:text-gray-400">Tags:</span> ${post.tag.map((tag) => renderTemplate`<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
#${tag} </span>`)} </div> </footer>`} <div class="mt-16 text-center"> <a href="/blog" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Back to Blog
</a> </div> </div> </article> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
