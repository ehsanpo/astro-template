import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"NGD","date":"2011","status":"publish","permalink":"ngd","author":"Ehsan","type":"portfolio","id":208,"agency":"Next Generation Design","category":["Front-end","Backend","Design"],"tag":["Design","CSS","HTML","Javascript","PHP","Web Development","Wordpress"],"case_link_url":"","body_text":[""],"client":"Founder","tagline":"","background_image":"bg.jpg","logo":"logo.jpg","video":null,"images":["bild1.jpg","l2.jpg","ngd1.jpg","ngd2.jpg","ngd3.jpg","p3.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/ngd/ngd.md";
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
