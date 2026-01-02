import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Hållbarhetsredovisning","date":"2019-03-28T10:24:21+00:00","status":"publish","permalink":"hallbarhetsredovisning","author":"Ehsan","type":"portfolio","id":208,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","Javascript","Web Development","Wordpress"],"case_link_url":"http://hallbarhet.oresundskraft.se/","body_text":[""],"client":"Öresundskraft","tagline":"Hållbarhetsredovisning 2016","background_image":"harbarhett-top.jpg","logo":"hallbarhet-logo.png","video":"","images":["hallbarhet-1.jpg"],"port_date":["2017"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/hallbarhetsredovisning/hallbarhetsredovisning.md";
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
