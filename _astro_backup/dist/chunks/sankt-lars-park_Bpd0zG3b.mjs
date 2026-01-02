import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Sankt Lars Park","date":"2019-03-28T12:54:27+00:00","status":"publish","permalink":"sankt-lars-park","author":"Ehsan","type":"portfolio","id":116,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["Wordpress","HTML","Javascript","PHP"],"case_link_url":"","client":"Sankt Lars Park","tagline":"","background_image":"bg.jpg","logo":"logo.png","video":null,"images":["1.jpg"],"port_date":["2019"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/sankt-lars-park/sankt-lars-park.md";
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
