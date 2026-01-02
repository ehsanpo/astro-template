/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, B as Button, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$Hero } from '../chunks/Hero_B9B_i0Y3.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { T as TimelineSection } from '../chunks/TimelineSection_ChaakzoI.mjs';
import { B as BoxReveal } from '../chunks/box-reveal_BR_jBREC.mjs';
import { $ as $$TestimonialsBlock } from '../chunks/TestimonialsBlock_C_Xx5FYE.mjs';
export { renderers } from '../renderers.mjs';

const { experience } = await getPortfolioData();
const experienceHighlight = experience.filter((item) => item.highlighted === true);
const sortetExperience = experienceHighlight.sort((a, b) => parseInt(a.year) - parseInt(b.year));
const TimelineAbout = () => {
  return /* @__PURE__ */ jsx(ParallaxProvider, { children: sortetExperience.map((item, index) => /* @__PURE__ */ jsx(
    TimelineSection,
    {
      year: item.year,
      title: item.title,
      company: item.org,
      description: item.description,
      image: item.image,
      technologies: item.tags,
      project: item.project,
      awards: item.awards,
      team: item.team,
      reverse: index % 2 === 0
    },
    index
  )) });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "fullHeight": true, "title": "About Me", "img": "/img/200925148-0.jpg" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500", "duration": 0.1, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="mb-5 text-2xl dark:text-gray-300">
I'm a passionate full-stack developer with a keen eye for design and a drive for creating
					exceptional digital experiences.
</p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "delay": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <p class="text-xl dark:text-gray-300">
With years of experience in web development and design, I combine technical expertise with
					creative problem-solving to deliver innovative solutions.
</p> ` })} ${renderComponent($$result3, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.6, "delay": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <div> ${renderComponent($$result4, "Link", Button, { "href": "https://www.linkedin.com/in/ehsanp/", "target": "_blank", "className": "mt-3", "text": "Reach me on LinkedIn." })} ${renderComponent($$result4, "Link", Button, { "href": "/cv", "className": "mt-3", "text": "Resume" })} </div> ` })} </div> ` })} ${renderComponent($$result2, "TimelineAbout", TimelineAbout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/timeline/TimelineAbout", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", $$TestimonialsBlock, { "showAll": true })} <section class="py-10 md:py-20"> <div class="container mx-auto flex flex-col items-center md:flex-row"> <h2 class="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl"> ${renderComponent($$result2, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` Background ` })} </h2> <div class="md:w-1/2">
My journey as a self-taught professional has equipped me with a profound understanding of
				software development, design, and multimedia. With a relentless drive for excellence, I have
				honed my expertise in delivering robust software architectures, seamless user experiences,
				and visually captivating designs. With a diverse skill set, I excel in various web
				development stacks, anchored by a robust command of WordPress and Laravel for backend
				excellence.
<br> <br>
My proficiency extends seamlessly to front-end mastery with Javascript and HTML/CSS. Beyond web
				development, I possess a profound comprehension of user interface design, intricacies of logo
				and identity creation, and the intricacies of search engine optimization.
<br> <br>
My extensive expertise also spans multimedia and mobile development, as I consistently seek novel
				ideas and methodologies to elevate my skills and enrich the user experience.
</div> </div> </section> <section class="bg-color-1 clip bg-offwhite py-10 dark:bg-neutral-800 md:py-20"> <div class="container mx-auto flex flex-col items-center md:flex-row"> <div class="md:w-1/2"> <div> <ul class="text-base leading-relaxed"> <li class="pb-1"> <p> <strong class="text-secondary-500">Iterative Excellence:</strong> Code and art thrive
								through iterative processes. I embrace trial, error, and rapid iteration to create solutions
								that transcend boundaries.
</p> </li> <li class="pb-1"> <p> <strong class="text-secondary-500">Architects of Inclusivity:</strong> Developers shape
								a virtual landscape where inclusivity and user-centric design prevail. My goal is to create
								online spaces where every user feels a sense of belonging.
</p> </li> <li class="pb-1"> <p> <strong class="text-secondary-500">Humility in Design:</strong> Ego has no place in design.
								I approach work humbly, embracing failure to pave the way for rapid success.
</p> </li> <li class="pb-1"> <p> <strong class="text-secondary-500">Problem Definition:</strong> Effective design starts
								with clear problem definition. Understanding challenges leads to purposeful solutions.
</p> </li> <li class="pb-1"> <p> <strong class="text-secondary-500">Diverse Solutions:</strong> No single solution fits
								all. I explore creative possibilities to address unique contexts and demands.
</p> </li> <li> <p> <strong class="text-secondary-500">User-Centric Empathy:</strong> Guided by empathy, I
								design from a user-centric perspective, ensuring solutions resonate and provide value.
</p> </li> <li> <p> <strong class="text-secondary-500">Ethics and Impact:</strong> I prioritize privacy, security,
								and ethics, contributing to a digital landscape of integrity.
</p> </li> </ul> </div> </div> <h2 class="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl"> ${renderComponent($$result2, "BoxReveal", BoxReveal, { "boxColor": "bg-secondary-500 leading-12 w-full", "duration": 0.5, "client:idle": true, "width": "100%", "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`<div class="w-full text-right">Philosophy</div> ` })} </h2> </div> </section> <section class="bg-color-10 py-10 md:py-20"> <div class="container mx-auto flex flex-col items-center md:flex-row"> <h2 class="mb-6 font-basement text-2xl md:mb-0 md:w-1/2 md:text-3xl lg:text-6xl"> ${renderComponent($$result2, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`Motivators ` })} </h2> <div class="text-base leading-relaxed md:w-1/2"> <div> <ul> <li class="pb-1"> <p>
Tackling <strong class="text-primary-500">complex</strong> problems.
</p> </li> <li class="pb-1"> <p>
Empowering colleagues to contribute
<strong class="text-secondary-500"> meaningful</strong> insights.
</p> </li> <li class="pb-1"> <p>
Constructing cohesive and <strong class="text-purple-500">scalable software
</strong>
architectures.
</p> </li> <li class="pb-1"> <p>
Optimizing workflows. <strong class="text-[#d74f08]">Sharing expertise</strong>.
</p> </li> <li class="pb-1"> <p>
Establishing <strong class="text-teal-500">credibility</strong> and reliability.
</p> </li> <li> <p>
Code is not just functional; it molds
<strong class="text-lime-500">digital environments</strong>, driving innovation.
</p> </li> </ul> </div> </div> </div> </section> <section class="bg-color-1 py-10 md:py-20"> <div class="container mx-auto items-center"> <div class="flex flex-col items-center text-base leading-relaxed"> <img src="/img/tea.png" alt="Time for Tea" class="clip"> <h2 class="my-6 font-basement text-2xl md:text-3xl lg:text-6xl"> ${renderComponent($$result2, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-500", "duration": 0.5, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`It's Always Time for Tea
` })} </h2> <div class="text-center md:w-1/2">
It's always time for tea" reflects the value of creating space for connection and
					thoughtful collaboration. In tech, it serves as a reminder to pause, reflect, and engage
					with others meaningfully. This mindset fosters creativity, inclusivity, and innovative
					problem-solving, demonstrating that the best ideas emerge when teams feel supported and
					empowered to share their perspectives.
</div> </div> </div> </section> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/about.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
