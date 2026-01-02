import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Alex Köll","date":"2019-03-28T13:29:56+00:00","status":"publish","permalink":"alex-koll","author":"Ehsan","type":"portfolio","id":365,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Web Development","Wordpress"],"case_link_url":"https://www.teamalexkoell.com/","client":"Alex Köll","tagline":"My life as a Downhiller","background_image":"alex-koll-top.png","logo":"alex-koll-logo.png","video":"","images":["alex-koll-1.jpg"],"port_date":["2019"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/alex-koll/alex-koll.md";
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
