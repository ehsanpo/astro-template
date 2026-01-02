import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Lugi Handboll","date":"2019-03-28T10:23:01+00:00","status":"publish","permalink":"lugi","author":"Ehsan","type":"portfolio","id":205,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Wordpress"],"case_link_url":"https://www.lugihandboll.se/","body_text":[""],"client":"Lugi Handboll","tagline":"","background_image":"bg.png","logo":"lugi.png","video":"","images":["2.jpg","1.png"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/lugi/lugi.md";
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
