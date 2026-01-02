import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Skånsk handboll","date":"2019-03-28T12:54:27+00:00","status":"publish","permalink":"skanskahandboll","author":"Ehsan","type":"portfolio","id":142,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["Wordpress","HTML","Javascript","PHP"],"case_link_url":"","client":"Skånsk handboll","tagline":"","background_image":"bg.png","logo":"logo.png","video":null,"images":["1.jpg","2.png"],"port_date":["2019"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/skanskahandboll/skanskahandboll.md";
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
