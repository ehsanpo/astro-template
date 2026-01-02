import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I worked in a team as a full-stack developer, My main task was Javascript, Maps, and making backend for my tasks. also to support the front-end developer with backend related questions.</p>";

				const frontmatter = {"title":"Triwa","date":"2019-03-28T10:28:00+00:00","status":"publish","permalink":"triwa","author":"Ehsan","excerpt":"","type":"portfolio","id":216,"agency":"Whitespacae","category":["Backend","Front-end"],"tag":["CSS","Drupal","E-commerce","Google Maps Api","Javascript","Laravel","PHP"],"case_link_url":"http://www.triwa.com/","body_text":[""],"client":"Triwa","tagline":"","background_image":"map.png","logo":"triwa.png","video":"","images":["home.jpg"],"port_date":["2017"],"side_image":[""]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/triwa/triwa.md";
				const url = undefined;
				function rawContent() {
					return "\nI worked in a team as a full-stack developer, My main task was Javascript, Maps, and making backend for my tasks. also to support the front-end developer with backend related questions.\n";
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
