import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Clever","date":"2018","status":"publish","permalink":"clever","author":"Ehsan","type":"portfolio","id":832,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["Wordpress","HTML","Javascript"],"case_link_url":"","client":"Clever","tagline":"","background_image":"2.jpg","logo":"logo.png","video":"","images":["4.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/clever/clever.md";
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
