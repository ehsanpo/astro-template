import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, B as Button } from './Layout_CiCYOMq9.mjs';
import { B as BoxReveal } from './box-reveal_BR_jBREC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_uTXWiZm6.mjs';
import { H as Heading } from './Heading_BhHgbaaz.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { S as StackCard } from './StackCard_3u6NB3vs.mjs';

const SkillsInfo = ({ show }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "group relative m-auto inline-block text-left", children: [
    /* @__PURE__ */ jsxs("button", { className: "relative overflow-hidden rounded-xl bg-primary-600/90 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-700/90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl transition-opacity group-hover:opacity-75" }),
      /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", stroke: "currentColor", fill: "none", className: "h-4 w-4", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          strokeWidth: "2",
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "clip invisible absolute bottom-full left-1/2 w-[400px] max-w-[100vw] -translate-x-1/2 translate-y-2 transform opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl border bg-gray-300 bg-gradient-to-br p-4 shadow-[0_0_30px_rgba(79,70,229,0.15)] backdrop-blur-md dark:border-white/10 dark:bg-neutral-800", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-basement text-primary-400", children: "Beginner: " }),
        "I’ve experimented and built something basic for personal use."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-basement text-primary-400", children: "Professional: " }),
        "I’ve worked with it professionally and deployed it to production."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-basement text-primary-400", children: "Advanced: " }),
        "I have several years of experience, regularly working with it in production environments."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-basement text-primary-400", children: "Expert: " }),
        ": I’m highly confident, capable of mentoring others, and comfortable making architectural decisions."
      ] })
    ] }) }) })
  ] }) });
};

const $$Astro$2 = createAstro("https://ehsan-pourhadi.com/");
const $$CertificateCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CertificateCard;
  const { name, image, year, index } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": "bg-primary-400 h-full", "duration": 0.5, "delay": index % 4 * 0.2, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/box-reveal", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overflow-hidden rounded-lg text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": name, "widths": [400, 600, 800], "sizes": "(max-width: 768px) 100vw, 25vw", "format": "webp", "quality": 80, "loading": "lazy", "class": "w-full object-cover" })} <div class="p-4"> <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"> <p class="text-sm text-gray-600 dark:text-gray-400">${year}</p> ${name} </h3> </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/certificates/CertificateCard.astro", void 0);

const cybersecurity = new Proxy({"src":"/_astro/cybersecurity.AkB9VQ9m.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/cybersecurity.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/cybersecurity.png");
							return target[name];
						}
					});

const AWS = new Proxy({"src":"/_astro/AWS.BkclVQpK.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/AWS.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/AWS.png");
							return target[name];
						}
					});

const SFPC = new Proxy({"src":"/_astro/SFPC.BDw9Vr1Z.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/SFPC.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/SFPC.png");
							return target[name];
						}
					});

const RWVCPC = new Proxy({"src":"/_astro/RWVCPC.BcUS-zH9.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/RWVCPC.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/RWVCPC.png");
							return target[name];
						}
					});

const uiBasic = new Proxy({"src":"/_astro/ui-basic.CMjM3FhJ.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/ui-basic.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/ui-basic.png");
							return target[name];
						}
					});

const uiAdv = new Proxy({"src":"/_astro/ui-adv.CMCpcgPH.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/ui-adv.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/ui-adv.png");
							return target[name];
						}
					});

const designComposition = new Proxy({"src":"/_astro/design-composition.B9U4_fI6.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/design-composition.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/design-composition.png");
							return target[name];
						}
					});

const accessibility = new Proxy({"src":"/_astro/accessibility.Ces8Vvo0.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/accessibility.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/accessibility.png");
							return target[name];
						}
					});

const GAA = new Proxy({"src":"/_astro/GAA.MFXuYLWH.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/GAA.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/GAA.png");
							return target[name];
						}
					});

const GTM = new Proxy({"src":"/_astro/GTM.3eHrz307.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/GTM.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/GTM.png");
							return target[name];
						}
					});

const GA = new Proxy({"src":"/_astro/GA.C-qmq44R.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/assets/cert/GA.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/assets/cert/GA.png");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://ehsan-pourhadi.com/");
const $$CertificatesBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CertificatesBlock;
  const { certifications } = await getPortfolioData();
  const imageMap = {
    "/img/cert/cybersecurity.png": cybersecurity,
    "/img/cert/AWS.png": AWS,
    "/img/cert/SFPC.png": SFPC,
    "/img/cert/RWVCPC.png": RWVCPC,
    "/img/cert/ui-basic.png": uiBasic,
    "/img/cert/ui-adv.png": uiAdv,
    "/img/cert/design-composition.png": designComposition,
    "/img/cert/accessibility.png": accessibility,
    "/img/cert/GAA.png": GAA,
    "/img/cert/GTM.png": GTM,
    "/img/cert/GA.png": GA
  };
  const certsWithImages = certifications.map((cert) => ({
    ...cert,
    image: imageMap[cert.img] || cert.img
  }));
  const { showAll = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto w-full overflow-hidden bg-gray-50 py-20 dark:bg-neutral-900"> <div class="container mx-auto px-4"> ${renderComponent($$result, "Heading", Heading, { "level": "h3", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result2) => renderTemplate` Certifications ` })} <div class="grid grid-cols-1 justify-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4"> ${certsWithImages.slice(0, showAll ? certsWithImages.length : 4).map((cert, index) => renderTemplate`${renderComponent($$result, "CertificateCard", $$CertificateCard, { ...cert, "index": index })}`)} </div> ${showAll ? null : renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Link", Button, { "href": "/about/#certifications", "text": "View All Certifications \u2192", "variant": "secondary" })} </div>`} </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/blocks/CertificatesBlock.astro", void 0);

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$TechStackBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechStackBlock;
  const { stacks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="container mx-auto"> <h2 class="text-primary mb-12 text-center font-basement text-4xl"></h2> ${renderComponent($$result, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "className": "pb-12 text-center text-4xl", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result2) => renderTemplate`
Stacks
` })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${stacks.map((stack, index) => renderTemplate`${renderComponent($$result, "StackCard", StackCard, { ...stack, "parentIndex": index, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/StackCard", "client:component-export": "default" })}`)} </div> ${renderComponent($$result, "SkillsInfo", SkillsInfo, {})} <div class="mt-12 text-center"> ${renderComponent($$result, "Link", Button, { "href": "/skills", "text": "View All Stacks \u2192" })} </div> </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/blocks/TechStackBlock.astro", void 0);

export { $$TechStackBlock as $, $$CertificatesBlock as a };
