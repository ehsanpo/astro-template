/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { a as getBlogPosts, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { B as BlogCard } from '../chunks/BlogCard_ioHxF028.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getBlogPosts();
  const featuredPosts = blogPosts.filter((post) => post.featured === true);
  const regularPosts = blogPosts.filter((post) => post.featured !== true);
  [...new Set(blogPosts.flatMap((post) => post.category || []))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Thoughts and Insights", "description": "Thoughts, insights, and stories from my journey as a developer", "image": "/img/og-default.jpg", "imageAlt": "Ehsan's Blog - Developer Insights and Stories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Blog", "subtitle": "Thoughts, insights, and stories from my journey as a developer" })} ${maybeRenderHead()}<div class="py-20"> <div class="container mx-auto px-4"> ${featuredPosts.length > 0 && renderTemplate`<div class="mb-16"> <h2 class="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Featured Posts</h2> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", BlogCard, { "post": post, "featured": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/blog/BlogCard", "client:component-export": "BlogCard" })}`)} </div> </div>`} <div class="mb-8"> <h2 class="mb-8 text-3xl font-bold text-gray-900 dark:text-white"> ${featuredPosts.length > 0 ? "All Posts" : "Latest Posts"} </h2> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${regularPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", BlogCard, { "post": post, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/blog/BlogCard", "client:component-export": "BlogCard" })}`)} </div> ${blogPosts.length === 0 && renderTemplate`<div class="py-16 text-center"> <h3 class="mb-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
No blog posts yet
</h3> <p class="text-gray-500 dark:text-gray-500">
Stay tuned for upcoming articles and insights!
</p> </div>`} </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
