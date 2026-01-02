import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"onHome":false,"title":"Zest","date":"2019","status":"publish","permalink":"zest","author":"Ehsan","type":"portfolio","id":312,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["Wordpress","HTML","Javascript","PHP"],"case_link_url":"https://zesteducation.se/","client":"Zest Bemanning","tagline":"","background_image":"bg.jpg","logo":"logo.png","video":"","images":["1.jpg","2.jpg","3.jpg","33.jpg","wframe.png"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/zest/zest.md";
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
