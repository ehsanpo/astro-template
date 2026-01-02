import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Miss Mary","date":"2019-03-28T10:23:01+00:00","status":"publish","permalink":"missmary","author":"Ehsan","type":"portfolio","id":205,"agency":"Whitespace","category":["Front-end"],"tag":["CSS","HTML","Javascript"],"case_link_url":"https://www.missmary.se/se/","body_text":[""],"client":"Miss Mary","tagline":"","background_image":"mockup-1.jpg","logo":"mlogo.png","video":null,"images":["11.png","1.png","mockup-4.jpg"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/missmary/missmary.md";
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
