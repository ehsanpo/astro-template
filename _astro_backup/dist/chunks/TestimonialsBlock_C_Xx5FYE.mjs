import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, B as Button } from './Layout_CiCYOMq9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { motion } from 'framer-motion';
import { H as Heading } from './Heading_BhHgbaaz.mjs';

function TestimonialCard({ name, title, img, short, desc }) {
  const [isExpanded, setIsExpanded] = React__default.useState(false);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "clip cursor-pointer rounded-lg bg-secondary-900/80 px-6 pb-6 pt-10 backdrop-blur-lg dark:bg-secondary-900",
      whileHover: { scale: 1.02 },
      onClick: () => setIsExpanded(!isExpanded),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: img, alt: name, className: "h-16 w-16 rounded-full object-cover" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-basement text-xl text-secondary-400", children: name }),
            /* @__PURE__ */ jsx("p", { className: "text-secondary-500", children: title })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: false,
            animate: { height: isExpanded ? "auto" : "100px" },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsx("p", { className: "whitespace-pre-line text-secondary-200", children: isExpanded ? desc : short })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "mt-4 text-secondary-500 transition-colors hover:text-white",
            onClick: (e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            },
            children: isExpanded ? "Show less" : "Read more"
          }
        )
      ]
    }
  );
}

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$TestimonialsBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsBlock;
  const { testimonials } = await getPortfolioData();
  const { showAll = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="clip5 bg-white py-20 dark:bg-neutral-800" id="testimonials"> <div class="container mx-auto px-4"> ${renderComponent($$result, "Heading", Heading, { "level": "h2", "gradient": true, "floating": true, "backplate": true, "client:idle": true, "subtitle": "Testimonials from clients and colleagues", "client:component-hydration": "idle", "client:component-path": "@/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result2) => renderTemplate`
What People Say
` })} <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> ${(showAll ? testimonials : testimonials.sort((a, b) => b.id - a.id).slice(0, 6)).map(
    (testimonial) => renderTemplate`${renderComponent($$result, "TestimonialCard", TestimonialCard, { ...testimonial, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/TestimonialCard", "client:component-export": "default" })}`
  )} </div> ${showAll ? null : renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Link", Button, { "href": "/about/#testimonials", "text": "View All Testimonials \u2192", "variant": "secondary" })} </div>`} </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/blocks/TestimonialsBlock.astro", void 0);

export { $$TestimonialsBlock as $ };
