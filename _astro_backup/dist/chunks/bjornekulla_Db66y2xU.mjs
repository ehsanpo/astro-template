import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Björnekulla: Interactive 3D Product Visualization</h2>\n<h3>Introduction:</h3>\n<p>\n  For Björnekulla, I developed a front-end solution to create an interactive 3D, rotatable product image. This solution allowed users to view products from all angles by rotating them directly on the website, enhancing user engagement and showcasing the product in a dynamic way.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>3D interactive product visualization built with jQuery and JavaScript.</li>\n  <li>Seamless user interaction with smooth rotation functionality.</li>\n  <li>Lightweight, front-end-only implementation without the need for additional plugins or frameworks.</li>\n</ul>";

				const frontmatter = {"onHome":false,"title":"Björnekulla","description":"Developed a 3D interactive, rotatable product image solution using only jQuery and JavaScript for Björnekulla.","date":"2012","status":"publish","permalink":"bjornekulla","author":"Ehsan","type":"portfolio","agency":"The Fan Club","category":["Front-end"],"tag":["CSS","HTML","JavaScript","jQuery"],"background_image":"logo.jpg","logo":"logo.jpg","images":[],"tagline":"Interactive 3D product visualization for Björnekulla.","case_link_url":"http://www.bjornekulla.se","client":"Björnekulla"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/bjornekulla/bjornekulla.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Björnekulla: Interactive 3D Product Visualization</h2>\n\n<h3>Introduction:</h3>\n<p>\n  For Björnekulla, I developed a front-end solution to create an interactive 3D, rotatable product image. This solution allowed users to view products from all angles by rotating them directly on the website, enhancing user engagement and showcasing the product in a dynamic way.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>3D interactive product visualization built with jQuery and JavaScript.</li>\n  <li>Seamless user interaction with smooth rotation functionality.</li>\n  <li>Lightweight, front-end-only implementation without the need for additional plugins or frameworks.</li>\n</ul>\n";
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
