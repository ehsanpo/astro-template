/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { u as useGameStore, g as getPortfolioData, B as Button, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$Hero } from '../chunks/Hero_B9B_i0Y3.mjs';
import { B as BoxReveal } from '../chunks/box-reveal_BR_jBREC.mjs';
import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { T as TimelineSection } from '../chunks/TimelineSection_ChaakzoI.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const TimelineLife = ({ lifeData }) => {
  return /* @__PURE__ */ jsx(ParallaxProvider, { children: lifeData.map((item, index) => /* @__PURE__ */ jsx(
    TimelineSection,
    {
      year: item.year,
      title: item.title,
      company: item.org,
      description: item.description,
      image: item.image,
      technologies: item.tags,
      project: item.project || null,
      awards: item.awards || null,
      team: item.team || null,
      reverse: index % 2 === 0
    },
    index
  )) });
};

function LifeGuard() {
  useEffect(() => {
    const mode = useGameStore.getState().mode;
    const unlocked = useGameStore.getState().unlocks["/life"];
    if (mode !== "active" || !unlocked) {
      window.location.href = "/";
    }
  }, []);
  return null;
}

const $$Life = createComponent(async ($$result, $$props, $$slots) => {
  const { life } = await getPortfolioData();
  const lifeHighlight = life.filter((item) => item.highlighted === true);
  const sortedLife = lifeHighlight.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  return renderTemplate`${renderComponent($$result, "LifeGuard", LifeGuard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/game/LifeGuard", "client:component-export": "default", "data-astro-cid-raedakud": true })} ${renderComponent($$result, "Layout", $$Layout, { "title": "Life Journey", "description": "Personal milestones and life timeline of Ehsan Pourhadi", "data-astro-cid-raedakud": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "fullHeight": true, "title": "Life Journey", "img": "/img/life/ep.jpg", "data-astro-cid-raedakud": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-raedakud> ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500", "duration": 0.1, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default", "data-astro-cid-raedakud": true }, { "default": ($$result4) => renderTemplate` <p class="mb-5 text-2xl dark:text-gray-300" data-astro-cid-raedakud>
From Tehran to Malmö - A journey of growth, learning, and memorable moments.
</p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default", "data-astro-cid-raedakud": true }, { "default": ($$result4) => renderTemplate` <p class="text-xl dark:text-gray-300" data-astro-cid-raedakud>
Every milestone tells a story. Here's a glimpse into the personal moments that shaped who
					I am today.
</p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.6, "delay": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default", "data-astro-cid-raedakud": true }, { "default": ($$result4) => renderTemplate` <div data-astro-cid-raedakud> ${renderComponent($$result4, "Link", Button, { "href": "/about", "className": "mt-3", "text": "Professional Journey", "data-astro-cid-raedakud": true })} ${renderComponent($$result4, "Link", Button, { "href": "/contact", "className": "mt-3", "text": "Get in Touch", "data-astro-cid-raedakud": true })} </div> ` })} </div> ` })} <section class="container mx-auto px-4 py-20" data-astro-cid-raedakud> <div class="mb-16 text-center" data-astro-cid-raedakud> <h2 class="mb-4 text-4xl font-bold md:text-5xl" data-astro-cid-raedakud>Timeline of My Life</h2> <p class="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400" data-astro-cid-raedakud>
Personal milestones, achievements, and memorable moments that defined my journey
</p> </div> </section> ${renderComponent($$result2, "TimelineLife", TimelineLife, { "lifeData": sortedLife, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/timeline/TimelineLife", "client:component-export": "default", "data-astro-cid-raedakud": true })} <section class="bg-opium py-20 dark:bg-neutral-800" data-astro-cid-raedakud> <div class="container mx-auto px-4 text-center" data-astro-cid-raedakud> <h2 class="mb-6 text-3xl font-bold md:text-4xl" data-astro-cid-raedakud>Want to Know More?</h2> <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400" data-astro-cid-raedakud>
Check out my professional journey and the work I've done over the years.
</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-raedakud> ${renderComponent($$result2, "Link", Button, { "href": "/about", "text": "About Me", "className": "rounded-lg bg-primary-600 px-8 py-4 text-white transition-colors hover:bg-primary-700", "data-astro-cid-raedakud": true })} ${renderComponent($$result2, "Link", Button, { "href": "/portfolio", "text": "View My Work", "className": "rounded-lg border border-primary-600 px-8 py-4 text-primary-600 transition-colors hover:bg-primary-600 hover:text-white", "data-astro-cid-raedakud": true })} </div> </div> </section> ` })} `;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/life.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/life.astro";
const $$url = "/life";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Life,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
