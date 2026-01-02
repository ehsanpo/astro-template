import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"onHome":false,"title":"Wilfa Svart","date":"2019-03-28T12:54:27+00:00","status":"publish","permalink":"wilfa","author":"Ehsan","type":"portfolio","id":142,"agency":"Guts & Glory","category":["Backend","Front-end","UX"],"tag":["Wordpress","HTML","Javascript","PHP"],"case_link_url":"","client":"Wilfa","tagline":"","background_image":"bg.jpg","logo":"logo.png","logo2":"wilfa_rgb_blue.png","video":null,"images":["0.jpg","00.jpg","1.png","3.jpg","33.jpg"],"port_date":["2019"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/wilfa/Wilfa.md";
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
