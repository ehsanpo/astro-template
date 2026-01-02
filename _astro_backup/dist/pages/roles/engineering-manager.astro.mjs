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

const $$EngineeringManager = createComponent(async ($$result, $$props, $$slots) => {
  const { stacks, charts } = await getPortfolioData();
  const roles = getRoles();
  const currentRole = roles.find((role) => role.slug === "engineering-manager");
  const managementStacks = stacks.filter(
    (stack) => ["Front-end", "Backend", "DevOps", "CI/CD"].includes(stack.slug)
  );
  const managementChart = {
    slug: "Engineering Leadership",
    labels: [
      "Technical Leadership",
      "Team Management",
      "Project Delivery",
      "Process Improvement",
      "Mentoring",
      "Architecture"
    ],
    data: ["10", "9", "10", "9", "10", "9"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Engineering Manager - Ehsan Pourhadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "fullHeight": true, "title": "Engineering Manager", "img": currentRole?.image }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500", "duration": 0.1, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="mb-5 text-2xl dark:text-gray-300"> ${currentRole?.description} </p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="text-xl dark:text-gray-300">
I combine technical expertise with people leadership, fostering growth, removing blockers,
					and ensuring teams deliver high-quality software while maintaining work-life balance and
					professional development.
</p> ` })} </div> ` })} <section class="container mx-auto px-4 pb-12"> <div class="mx-auto max-w-4xl"> <!-- Self-Definition --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`What I Bring` })} <p class="text-lg text-gray-700 dark:text-gray-300">
I bridge the gap between technical execution and people leadership. With 12+ years of
					hands-on development experience, I lead teams by doing, not just directing. I create
					environments where engineers thrive, ship quality code, and continuously improve both
					their craft and our processes.
</p> </div> <!-- Evidence Snippets --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Evidence` })} <div class="space-y-6"> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
From Experience at Bredband2
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Managed the project and team. Streamlined development processes to enhance team
							productivity and efficiency. Mentored junior developers and conducted code reviews."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Portfolio Experience - Bredband2 (2020-2023)
</p> </div> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
Testimonial from Lenny Erlesand (Engineering Manager at Telavox)
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Ehsan is deeply engaged in improving how we work together as a team. He takes
							initiative in refining our processes, ensuring that we collaborate more effectively
							and work more sustainably. He provides thoughtful feedback, asks challenging
							questions, and contributes to discussions with both openness and courage."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Testimonials - Lenny Erlesand
</p> </div> </div> </div> <!-- Outcome Focus --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Impact & Outcomes` })} <div class="grid gap-6 md:grid-cols-2"> <div class="rounded-lg bg-gradient-to-br from-primary-500/10 to-primary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
100,000+
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Active Users Served
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Led customer service portal redesign at Bredband2, delivering real-time service
							monitoring
</p> </div> <div class="rounded-lg bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-secondary-600 dark:text-secondary-400">
3-Year
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Team Leadership
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Successfully managed cross-functional teams through major technical transitions
</p> </div> <div class="rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
Award-Winning
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Project Delivery
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Svenska Design Gold & Cannes Lions recognition for technical excellence
</p> </div> <div class="rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
Scaled Velocity
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Through Coaching
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Mentored developers and streamlined processes to boost team productivity
</p> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Technical Stacks` })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> ${managementStacks.map((stack, index) => renderTemplate`${renderComponent($$result2, "StackCard", StackCard, { ...stack, "parentIndex": index, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/StackCard", "client:component-export": "default" })}`)} </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Leadership Skills` })} ${renderComponent($$result2, "SkillChart", SkillChart, { "data": [managementChart], "chartData": managementChart, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/SkillChart", "client:component-export": "default" })} </div> </section>  ${renderComponent($$result2, "ToolsList", $$ToolsList, {})}  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Development Process` })} ${renderComponent($$result2, "ProcessFlowDiagram", ProcessFlowDiagram, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/Beams", "client:component-export": "ProcessFlowDiagram" })} </div> </section>  <section class="container mx-auto px-4 py-16"> <div class="gradient-bg rounded-lg py-12 text-center"> <h3 class="mb-6 text-4xl text-gray-600 dark:text-gray-100">
Ready to build great software together?
</h3> <a href="/contact" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Get in Touch
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </section> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/roles/engineering-manager.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/roles/engineering-manager.astro";
const $$url = "/roles/engineering-manager";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EngineeringManager,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
