/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, e as getRoles, $ as $$Layout } from '../../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$Hero } from '../../chunks/Hero_B9B_i0Y3.mjs';
import { S as StackCard } from '../../chunks/StackCard_3u6NB3vs.mjs';
import { S as SkillChart } from '../../chunks/SkillChart_C7GroY3-.mjs';
import { $ as $$ToolsList, P as ProcessFlowDiagram } from '../../chunks/Beams_1SK19uLn.mjs';
import { H as Heading } from '../../chunks/Heading_BhHgbaaz.mjs';
import { B as BoxReveal } from '../../chunks/box-reveal_BR_jBREC.mjs';
export { renderers } from '../../renderers.mjs';

const $$ProductEngineer = createComponent(async ($$result, $$props, $$slots) => {
  const { stacks } = await getPortfolioData();
  const roles = getRoles();
  const currentRole = roles.find((role) => role.slug === "product-engineer");
  const productStacks = stacks.filter(
    (stack) => ["Front-end", "Backend", "Design", "Database"].includes(stack.slug)
  );
  const productChart = {
    slug: "Product Engineering",
    labels: [
      "Product Thinking",
      "User Research",
      "Technical Execution",
      "Iteration Speed",
      "Business Impact",
      "End-to-End Ownership"
    ],
    data: ["9", "8", "10", "9", "9", "10"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Product Engineer - Ehsan Pourhadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "fullHeight": true, "title": "Product Engineer", "img": currentRole?.image }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500", "duration": 0.1, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="mb-5 text-2xl dark:text-gray-300"> ${currentRole?.description} </p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="text-xl dark:text-gray-300">
I bridge the gap between technical possibilities and user needs, ensuring that every line
					of code serves a purpose and every feature solves real problems. I think in products, not
					just features.
</p> ` })} </div> ` })} <section class="container mx-auto px-4 py-12"> <div class="mx-auto max-w-4xl"> <!-- Self-Definition --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`What I Bring` })} <p class="text-lg text-gray-700 dark:text-gray-300">
I don't just write code—I solve user problems. With a deep understanding of both technical
					implementation and product strategy, I bridge the gap between what users need and what
					engineering can deliver. I own features end-to-end, from ideation through deployment and
					iteration.
</p> </div> <!-- Evidence Snippets --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Evidence` })} <div class="space-y-6"> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
From Experience at Bredband2
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Spearheaded the complete redesign and development of the customer service portal,
							serving over 100,000 active users. Implemented real-time service monitoring and
							automated troubleshooting. Worked closely with UX to optimize UI/UX for improved user
							engagement."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Portfolio Experience - Bredband2 (2020-2023)
</p> </div> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
Testimonial from Rebecca Löfgren (Senior UX Designer)
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Ehsan possesses the ability to see the whole picture, which enables him to produce
							quality products — even if the brief is a bit fuzzy. He has a keen eye for design,
							which has made my job as a designer so much easier."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Testimonials - Rebecca Löfgren
</p> </div> </div> </div> <!-- Outcome Focus --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Impact & Outcomes` })} <div class="grid gap-6 md:grid-cols-2"> <div class="rounded-lg bg-gradient-to-br from-primary-500/10 to-primary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
100,000+
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">Users Impacted</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Redesigned customer portal serving six-figure user base with improved engagement
</p> </div> <div class="rounded-lg bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-secondary-600 dark:text-secondary-400">
End-to-End
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Product Ownership
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
From user research to deployment, owning complete product features
</p> </div> <div class="rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">UX-Driven</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Design Collaboration
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Working closely with designers to optimize user experience and engagement
</p> </div> <div class="rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">Real-Time</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Monitoring Solutions
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Implemented automated troubleshooting and real-time service monitoring
</p> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Technical Stacks` })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> ${productStacks.map((stack, index) => renderTemplate`${renderComponent($$result2, "StackCard", StackCard, { ...stack, "parentIndex": index, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/StackCard", "client:component-export": "default" })}`)} </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Product Engineering Skills` })} ${renderComponent($$result2, "SkillChart", SkillChart, { "data": [productChart], "chartData": productChart, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/SkillChart", "client:component-export": "default" })} </div> </section>  ${renderComponent($$result2, "ToolsList", $$ToolsList, {})}  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Development Process` })} ${renderComponent($$result2, "ProcessFlowDiagram", ProcessFlowDiagram, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/Beams", "client:component-export": "ProcessFlowDiagram" })} </div> </section>  <section class="container mx-auto px-4 py-16"> <div class="gradient-bg rounded-lg py-12 text-center"> <h3 class="mb-6 text-4xl text-gray-600 dark:text-gray-100">
Ready to build products users love?
</h3> <a href="/contact" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Get in Touch
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </section> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/roles/product-engineer.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/roles/product-engineer.astro";
const $$url = "/roles/product-engineer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ProductEngineer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
