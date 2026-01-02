import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"StadshubbsAlliansen","date":"2019-03-28T13:03:13+00:00","status":"publish","permalink":"stadshubbsalliansen","author":"Ehsan","excerpt":"","type":"portfolio","id":341,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","Javascript","Maintenance","PHP","UX","Web Development","Wordpress"],"case_link_url":"http://stadshubbsalliansen.se","body_text":[""],"client":"Öresundskraft","tagline":"","background_image":"11Smart-city_1920x1080px_utan-text.jpg","logo":"SHA-Rotato-Snapshot.png","images":["Screenshot_2019-04-01-StadshubbsAlliansen1.jpg"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/stadshubbsalliansen/stadshubbsalliansen.md";
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
