import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Kompis Klubben","date":"2017","status":"publish","permalink":"kompisklubben","author":"Ehsan","type":"portfolio","id":205,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Wordpress"],"case_link_url":"http://kompisklubben.oresundskraft.se","body_text":[""],"client":"Öresundskraft","tagline":"Alltid bra Energi","background_image":"wsi-imageoptim-1_Oresundskraft-2048x1280.jpg","logo":"1.png","video":[""],"images":["wsi-imageoptim-1_Oresundskraft-2048x1280.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/KompisKlubben/KompisKlubben.md";
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
