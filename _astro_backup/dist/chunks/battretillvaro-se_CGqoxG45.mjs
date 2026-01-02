import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bättretillvaro.se","date":"2019-03-28T13:09:28+00:00","status":"publish","permalink":"battretillvaro","author":"Ehsan","type":"portfolio","id":347,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","Nodejs","PHP","React"],"case_link_url":"https://bättretillvaro.se/","client":"Zest","tagline":"Så här mår svenska sjuksköterskor just nu.","background_image":"btv-bg.png","logo":"btv-logo.png","video":"","images":["btv-1.png"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/battretillvaro/battretillvaro-se.md";
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
