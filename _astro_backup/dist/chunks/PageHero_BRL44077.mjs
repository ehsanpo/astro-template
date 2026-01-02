import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { H as Heading } from './Heading_BhHgbaaz.mjs';

const $$Astro = createAstro("https://ehsan-pourhadi.com/");
const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 pb-8 pt-14 dark:bg-neutral-800"> <div class="container mx-auto px-4"> <div class="mx-auto max-w-3xl text-center"> ${renderComponent($$result, "Heading", Heading, { "level": "h1", "gradient": true, "shadow": true, "className": "mb-4 text-4xl md:text-5xl", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/ui/heading", "client:component-export": "Heading" }, { "default": ($$result2) => renderTemplate`${title}` })} ${subtitle && renderTemplate`<p class="text-xl text-gray-600 dark:text-gray-400">${subtitle}</p>`} </div> </div> </section>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/hero/PageHero.astro", void 0);

export { $$PageHero as $ };
