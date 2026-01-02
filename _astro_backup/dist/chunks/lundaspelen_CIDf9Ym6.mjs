import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Lundaspelen","date":"2019-03-28T10:23:01+00:00","status":"publish","permalink":"lundaspelen","author":"Ehsan","type":"portfolio","id":205,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Wordpress"],"case_link_url":"https://www.lundaspelen.com","body_text":[""],"client":"Lundaspelen","tagline":"Memories for life!","background_image":"1.jpg","logo":"logo.png","video":"","images":["2.png"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/lundaspelen/lundaspelen.md";
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
