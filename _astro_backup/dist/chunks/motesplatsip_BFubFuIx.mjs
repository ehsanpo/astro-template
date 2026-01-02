import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Mötesplats IP","date":"2019-03-28T10:34:13+00:00","status":"publish","permalink":"motesplatsip","author":"Ehsan","excerpt":"","type":"portfolio","id":231,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["UX","Web Development","Wordpress"],"case_link_url":"","body_text":[""],"client":"Landskrona BoIS","tagline":"","background_image":"bois-home-1-1200x0-c-default.jpg","logo":"logo.png","video":"","images":["1.jpg"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/motesplatsip/motesplatsip.md";
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
