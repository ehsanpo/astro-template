import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Twilfit","date":"2019-03-28T10:30:02+00:00","status":"publish","permalink":"twilfit","author":"Ehsan","excerpt":"","type":"portfolio","id":219,"agency":"Whitespace","category":["Front-end"],"tag":["CSS","Google Maps Api","HTML","Javascript"],"case_link_url":"https://www.twilfit.se","body_text":[""],"client":"Twilfit","tagline":"","background_image":"3.png","logo":"logo.png","video":"","images":["2.png"],"port_date":["2015"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/twilfit/twilfit.md";
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
