import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"PF System","date":"2019-03-28T14:21:42+00:00","status":"publish","permalink":"pf-system","author":"Ehsan","excerpt":"","type":"portfolio","id":389,"agency":"Freelance","category":["Backend","Design","Front-end"],"tag":["CSS","HTML","Javascript","UX","Web Development","Wordpress"],"case_link_url":"http://pfsystem.se/en/home/","body_text":[""],"client":"PF System","tagline":"System Solutions","background_image":"enviroment.jpg","logo":"pfsystem.png","video":"","images":["Screenshot_2019-04-08-PF-System1.jpg","Screenshot_2019-04-08-Om-oss-–-PF-System1.png"],"port_date":["2018"],"images_0_bild":["1735"],"images_1_bild":["1734"],"side_image":[""]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/pf-system/pf-system.md";
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
