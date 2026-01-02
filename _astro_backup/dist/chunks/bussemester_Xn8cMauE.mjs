import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bussemester","date":"2018","status":"publish","permalink":"bussemester","author":"Ehsan","type":"portfolio","id":326,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","Javascript","PHP","Web Development","Wordpress"],"case_link_url":"http://bussemester.nu","client":"Maxli Travel Group","tagline":"Kom närmare med bussen","background_image":"bussemester-bg.jpg","logo":"bussemester-logo.png","video":"","images":["bussemester-1.jpg","bussemester-2.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/bussemester/bussemester.md";
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
