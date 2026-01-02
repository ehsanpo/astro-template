/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { g as gsapWithCSS, S as ScrollTrigger } from '../chunks/ScrollTrigger_BD1l9ONw.mjs';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
export { renderers } from '../renderers.mjs';

gsapWithCSS.registerPlugin(ScrollTrigger);
const ServiceDetails = () => {
  const serviceWrappersRef = useRef([]);
  const { services } = getPortfolioData();
  useEffect(() => {
    const headerHeight = 50;
    serviceWrappersRef.current.forEach((serviceBlock, index) => {
      if (serviceBlock) {
        ScrollTrigger.create({
          trigger: serviceBlock,
          start: `top ${headerHeight}`,
          end: `bottom ${headerHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          toggleClass: "active",
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [serviceWrappersRef]);
  const updateServiceWrappersRef = (el, index) => {
    serviceWrappersRef.current[index] = el;
  };
  return /* @__PURE__ */ jsx(ParallaxProvider, { children: /* @__PURE__ */ jsx("div", { className: "service-details-wrapper", children: services.map((service, index) => /* @__PURE__ */ jsx(
    "div",
    {
      className: `pin-spacer flex w-full bg-offwhite/80 backdrop-blur-md dark:bg-neutral-900/80`,
      ref: (el) => updateServiceWrappersRef(el, index),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `justify-content-center container relative mx-auto flex h-[calc(100vh-99px)] w-full flex-row flex-wrap overflow-hidden p-0 px-4 md:flex-col ${index % 2 === 0 ? "image-right" : "image-left"} ${service.isLast ? "last" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "service-detail-image-hold z-2 relative top-0 h-[40%] overflow-hidden bg-black md:h-full md:w-1/2", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: service.image,
                alt: service.title,
                className: "w-full !object-cover md:h-[120%]"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "flex h-full md:w-1/2 md:items-center", children: /* @__PURE__ */ jsx(Parallax, { speed: 20, children: /* @__PURE__ */ jsx("div", { className: ` ${index % 2 === 0 ? "" : "ml-6"}`, children: /* @__PURE__ */ jsx("div", { className: "service-details-box position-relative d-flex flex-column", children: /* @__PURE__ */ jsxs("div", { className: "service-details-box-body animate-child trigger", children: [
              /* @__PURE__ */ jsx("h2", { className: "gradient-text mb-1 text-9xl font-bold", children: `0${service.id}.` }),
              /* @__PURE__ */ jsx("h3", { className: "mb-2 text-5xl text-secondary-500", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xl", children: service.description }),
              /* @__PURE__ */ jsx("ul", { className: "services-list-ul mt-3", children: service.features.map((item, idx) => /* @__PURE__ */ jsx("li", { children: item }, idx)) })
            ] }) }) }) }) })
          ]
        }
      )
    },
    service.id
  )) }) });
};

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Services", "subtitle": "Comprehensive solutions tailored to your needs" })} ${maybeRenderHead()}<div class="py-20"> ${renderComponent($$result2, "ServiceDetails", ServiceDetails, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/FullScroll", "client:component-export": "default" })} <div class="container mx-auto px-4 py-4"> <div class="gradient-bg mt-[100vh] rounded-lg py-8 text-center"> <h3 class="mb-6 text-4xl text-gray-600 dark:text-gray-100">Ready to start next project?</h3> <a href="/contact" class="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700">
Get in Touch
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/services.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
