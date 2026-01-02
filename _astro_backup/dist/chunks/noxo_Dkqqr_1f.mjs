import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Noxo","date":"2019-03-28T10:14:02+00:00","status":"publish","permalink":"noxo","author":"Ehsan","excerpt":"","type":"portfolio","id":190,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Wordpress"],"body_text":[""],"client":"Noxo","tagline":"","background_image":"noxo.png","logo":"noxo.png","video":"","images":["noxo.jpg"],"case_link_url":"http://www.noxo.se/","port_date":["2017"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/noxo/noxo.md";
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
