import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bra Energi","date":"2017","status":"publish","permalink":"bra-energi","author":"Ehsan","type":"portfolio","id":205,"agency":"Guts & Glory","category":["Backend"],"tag":["CSS","HTML","PHP","Wordpress"],"case_link_url":"http://braenergi.oresundskraft.se","client":"Öresundskraft","tagline":"Alltid bra Energi","background_image":"oresundskraft.jpg","logo":"braenergi-logo.png","video":"","images":["braenergi-1.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/bra-energi/bra-energi.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
