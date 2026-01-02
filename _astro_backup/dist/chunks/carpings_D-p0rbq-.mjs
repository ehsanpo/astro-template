import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Carpings","date":"2019","status":"publish","permalink":"carpings","author":"Ehsan","type":"portfolio","id":381,"agency":"Guts & Glory","category":["Backend","Front-end","UX"],"tag":["CSS","HTML","Javascript","Maintenance","PHP","Web Development","Wordpress"],"case_link_url":"http://carpings.se","client":"Carpings","tagline":"Gör VVS enklare för dig!","background_image":"carpings-bg.jpg","logo":"carpings-logo.png","video":"","images":["carpings-1.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/carpings/carpings.md";
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
