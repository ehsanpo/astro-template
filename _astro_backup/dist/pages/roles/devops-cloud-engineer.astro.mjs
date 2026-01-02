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

const $$DevopsCloudEngineer = createComponent(async ($$result, $$props, $$slots) => {
  const { stacks } = await getPortfolioData();
  const roles = getRoles();
  const currentRole = roles.find((role) => role.slug === "devops-cloud-engineer");
  const devopsStacks = stacks.filter(
    (stack) => ["DevOps", "CI/CD", "Cloud", "Backend"].includes(stack.slug)
  );
  const devopsChart = {
    slug: "DevOps & Cloud",
    labels: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Cloud Architecture",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security & Compliance"
    ],
    data: ["9", "8", "8", "9", "8", "7"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DevOps Cloud Engineer - Ehsan Pourhadi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "fullHeight": true, "title": "DevOps Cloud Engineer", "img": currentRole?.image }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500", "duration": 0.1, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="mb-5 text-2xl dark:text-gray-300"> ${currentRole?.description} </p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="text-xl dark:text-gray-300">
I design and maintain robust cloud infrastructure, automate deployment processes, and
					ensure system reliability at scale. From CI/CD pipelines to monitoring and security, I
					enable development teams to ship faster and safer.
</p> ` })} </div> ` })} <section class="container mx-auto px-4 py-12"> <div class="mx-auto max-w-4xl"> <!-- Self-Definition --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`What I Bring` })} <p class="text-lg text-gray-700 dark:text-gray-300">
I build the infrastructure that enables teams to ship faster and more reliably. With
					expertise in CI/CD pipelines, containerization, and cloud platforms, I create automated
					workflows that reduce manual intervention and increase deployment confidence. I understand
					both the development and operations perspectives.
</p> </div> <!-- Evidence Snippets --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Evidence` })} <div class="space-y-6"> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
AWS Certification & Cloud Experience
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Earned the AWS Certified Solutions Architect certification through rigorous training
							from Linux Academy, demonstrating expertise in architecting scalable and reliable
							cloud solutions."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Portfolio Education - Linux Academy (2018)
</p> </div> <div class="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"> <h3 class="mb-2 text-xl font-semibold text-primary-600 dark:text-primary-400">
Testimonial from Fredrik Madsen (Software Developer)
</h3> <blockquote class="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300">
"Ehsan was always first to jump on problems when our complicated build system acted
							up. When Ehsan was around, we could always be confident that our issues would get
							solved."
</blockquote> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Source: Testimonials - Fredrik Madsen
</p> </div> </div> </div> <!-- Outcome Focus --> <div class="mb-16"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`Impact & Outcomes` })} <div class="grid gap-6 md:grid-cols-2"> <div class="rounded-lg bg-gradient-to-br from-primary-500/10 to-primary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400">
Automated
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
CI/CD Pipelines
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Expertise with GitHub Actions, Jenkins, CircleCI, and GitLab CI
</p> </div> <div class="rounded-lg bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-secondary-600 dark:text-secondary-400">
AWS Certified
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Solutions Architect
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Designed and implemented scalable cloud infrastructure on AWS
</p> </div> <div class="rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
Container Expert
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Docker & Orchestration
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Containerized applications and managed deployment workflows
</p> </div> <div class="rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 p-6"> <div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
Infrastructure
</div> <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Linux & Scripting
</div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
Advanced Linux administration and shell scripting for automation
</p> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`DevOps & Cloud Stacks` })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> ${devopsStacks.map((stack, index) => renderTemplate`${renderComponent($$result2, "StackCard", StackCard, { ...stack, "parentIndex": index, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/StackCard", "client:component-export": "default" })}`)} </div> </div> </section>  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`DevOps & Cloud Skills` })} ${renderComponent($$result2, "SkillChart", SkillChart, { "data": [devopsChart], "chartData": devopsChart, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/SkillChart", "client:component-export": "default" })} </div> </section>  ${renderComponent($$result2, "ToolsList", $$ToolsList, {})}  <section class="py-12"> <div class="container mx-auto"> ${renderComponent($$result2, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result3) => renderTemplate`DevOps Workflow` })} ${renderComponent($$result2, "ProcessFlowDiagram", ProcessFlowDiagram, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/Beams", "client:component-export": "ProcessFlowDiagram" })} </div> </section>  <section class="container mx-auto px-4 py-16"> <div class="gradient-bg rounded-lg py-12 text-center"> <h3 class="mb-6 text-4xl text-gray-600 dark:text-gray-100">
Ready to optimize your deployment pipeline?
</h3> <a href="/contact" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Get in Touch
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </section> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/roles/devops-cloud-engineer.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/roles/devops-cloud-engineer.astro";
const $$url = "/roles/devops-cloud-engineer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DevopsCloudEngineer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
