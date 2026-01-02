import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Unilever Food Solutions","date":"2019-03-28T12:58:42+00:00","status":"publish","permalink":"unilever-food-solutions","author":"Ehsan","type":"portfolio","id":335,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["CSS","HTML","Javascript","Maintenance","PHP","Support","Web Development","Wordpress"],"case_link_url":"https://www.unileverfoodsolutions.se/inspiration-for-kockar/verktyg.html","body_text":[""],"client":"Unilever Food Solutions","tagline":"Professionell Kökslösning","background_image":"1.png","logo":"logo.png","images":["1.png","2.png","3.png"],"port_date":["2016"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/unilever-food-solutions/unilever-food-solutions.md";
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
