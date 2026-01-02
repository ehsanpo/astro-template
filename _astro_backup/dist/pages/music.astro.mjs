/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CiCYOMq9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { $ as $$PageHero } from '../chunks/PageHero_BRL44077.mjs';
export { renderers } from '../renderers.mjs';

function SpotifyEmbed({ playlistId, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-dark/50 rounded-lg p-6 backdrop-blur-lg", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-4 font-basement text-xl", children: title }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: `https://open.spotify.com/embed/album/${playlistId}`,
        width: "100%",
        height: "100%",
        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        loading: "lazy",
        className: "rounded-lg"
      }
    ) })
  ] });
}

const $$Music = createComponent(($$result, $$props, $$slots) => {
  const playlists = [
    {
      playlistId: "5PUExiuXHdh71FCOME9eVA",
      title: "2020 - 2020"
    },
    {
      playlistId: "0AxIzHIcCeyu8z6JqidQtX",
      title: "Future - 2020"
    },
    {
      playlistId: "0e5MIP4vPxL2DtADJFD301",
      title: "Present - 2020"
    },
    {
      playlistId: "1ewlhbOoQAHakrgaEuXWry",
      title: "The Past - 2019"
    },
    {
      playlistId: "5VIhDY0sy0rKd2z68T2yRD",
      title: "The Wind - 2019"
    },
    {
      playlistId: "2nz5ZaS4XeSXO5D9jNP9cD",
      title: "Life Goes On - 2003"
    },
    {
      playlistId: "7oGREogIXr9kBU6cVvTytF",
      title: "Noor - 2022"
    },
    {
      playlistId: "2avKo7p73VQlQZuZ5AhdsX",
      title: "Bellerina - 2022"
    },
    {
      playlistId: "4VzPczlIoeB84Nn1HsuFq6",
      title: "20 - 2022"
    },
    {
      playlistId: "15gO287YrDb4sNHckk5wiJ",
      title: "Divane - 2021"
    },
    {
      playlistId: "1SVNdrRPEto1RXbmX9Oyy9",
      title: "Malm\xF6 Syndrome - 2021"
    },
    {
      playlistId: "04RmkiqoBN6VFU5XQvS0CE",
      title: "Infinity - 2021"
    },
    {
      playlistId: "3i4AVKxg8Znjot9NlO6ie8",
      title: "Spaced out - 2020"
    },
    {
      playlistId: "2nKd39bGTeA5MTq0z21c0I",
      title: "Fallen Angels - 2019"
    },
    {
      playlistId: "5SuRJpmUEks2akEQx9qWAl",
      title: "Getaway - 2019"
    },
    {
      playlistId: "4etfZNUXJ0DljYEvpKIWxy",
      title: "Hope - 2017"
    },
    {
      playlistId: "1aDI4c4U1vQQy9mXbUIiIN",
      title: "The Demo - 2010"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Music - Developer Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Music" })} ${maybeRenderHead()}<div class="container mx-auto px-4 py-20"> <div class="grid gap-4 md:grid-cols-3"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "SpotifyEmbed", SpotifyEmbed, { ...playlist, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Ehsan/dev/astro-template/src/components/SpotifyEmbed", "client:component-export": "default" })}`)} </div> </div> ` })}`;
}, "C:/Users/Ehsan/dev/astro-template/src/pages/music.astro", void 0);

const $$file = "C:/Users/Ehsan/dev/astro-template/src/pages/music.astro";
const $$url = "/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Music,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
