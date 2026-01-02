/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { g as getPortfolioData, c as cn, $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Drawer as Drawer$1 } from 'vaul';
export { renderers } from '../renderers.mjs';

const $$ContactInfo = createComponent(async ($$result, $$props, $$slots) => {
  const { contact } = await getPortfolioData();
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4"> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white">Location</h3> <p class="mt-2 text-gray-600 dark:text-gray-400">${contact.location}</p> </div> <div> <h3 class="text-lg font-medium text-gray-900 dark:text-white">Connect</h3> <div class="mt-2 flex gap-4"> ${Object.entries(contact.socialLinks).map(([platform, url]) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary-600 dark:text-gray-400"> <span class="capitalize">${platform}</span> </a>`)} </div> </div> </div>`;
}, "C:/Users/Ehsan/dev/astro-template/src/components/contact/ContactInfo.astro", void 0);

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-100 dark:bg-neutral-800" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;

function DrawerDemo() {
  React.useState(350);
  return /* @__PURE__ */ jsxs(Drawer, { children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: "flex cursor-pointer items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-teal-100 transition-all duration-200 ease-in hover:bg-teal-700", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-6", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z",
          fill: "#ffffff"
        }
      ) }),
      "Send messager"
    ] }) }),
    /* @__PURE__ */ jsx(DrawerContent, { children: /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-sm", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSdh7FqtOF_cNTUyyOQ-_l4adOyRO_QPg4Ax0cf_e0XLj4W_6A/viewform?embedde",
        height: "700",
        className: "w-full",
        scrolling: "no",
        children: "Loading…"
      }
    ) }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Get in Touch", "subtitle": "Have a project in mind? Let's discuss how we can work together." })} ${maybeRenderHead()}<div class="py-20"> <div class="container mx-auto px-4"> <div class="mx-auto max-w-4xl"> <div class="grid gap-12 md:grid-cols-2"> <div class="flex flex-col gap-4"> <div>${renderComponent($$result2, "DrawerDemo", DrawerDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/drawer", "client:component-export": "DrawerDemo" })}</div> <div> <button onclick="window.open('https://discord.com/users/ehsanpo', '_blank',)" class="flex cursor-pointer items-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2 text-sm font-medium text-zinc-200 transition-all duration-200 ease-in hover:bg-[#3b4aed]"> <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"> <path d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z" class="fill-zinc-200"></path> </svg>
Contact me on Discord
</button> </div> <div> <button onclick="window.open('https://www.linkedin.com/in/ehsanp/', '_blank',)" class="flex cursor-pointer items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-sky-100 transition-all duration-200 ease-in hover:bg-sky-700"> <svg class="h-6 w-6 fill-neutral-50" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0"> <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path> </svg>
Contact me on Linkedin
</button> </div> </div> <div> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
