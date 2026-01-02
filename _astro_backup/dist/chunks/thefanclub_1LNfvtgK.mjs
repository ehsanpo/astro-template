import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>The Fan Club: Dynamic Web Development</h2>\n<h3>Introduction:</h3>\n<p>\n  The Fan Club required a dynamic and visually engaging website that leveraged the flexibility of WordPress for content management. I contributed to the project by handling both front-end and back-end development, ensuring a seamless user experience and efficient content management for the client.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom WordPress development for easy content management.</li>\n  <li>Responsive front-end design to enhance user engagement across devices.</li>\n  <li>Back-end functionality to support dynamic content and smooth performance.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Fan Club project successfully combined custom WordPress development with responsive front-end and reliable back-end solutions to deliver a high-quality website. This project showcases my ability to create dynamic and user-friendly web solutions that align with the client’s needs.\n</p>";

				const frontmatter = {"onHome":false,"title":"The Fan Club","description":"Worked on both front-end and back-end development for The Fan Club's website, delivering a robust and dynamic web solution using WordPress.","date":"2012","status":"publish","permalink":"the-fan-club","author":"Ehsan","type":"portfolio","agency":"The Fan Club","category":["Backend","Front-end"],"tag":["CSS","HTML","Javascript","PHP","Web Development","Wordpress"],"background_image":"11.png","logo":"thefanclublogo.jpg","images":["site.png","conv-model.png","a8d4df00100196c9_800x800ar.jpg"],"tagline":"Dynamic web solutions for The Fan Club using WordPress.","client":"The Fan Club"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/thefanclub/thefanclub.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>The Fan Club: Dynamic Web Development</h2>\n\n<h3>Introduction:</h3>\n<p>\n  The Fan Club required a dynamic and visually engaging website that leveraged the flexibility of WordPress for content management. I contributed to the project by handling both front-end and back-end development, ensuring a seamless user experience and efficient content management for the client.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom WordPress development for easy content management.</li>\n  <li>Responsive front-end design to enhance user engagement across devices.</li>\n  <li>Back-end functionality to support dynamic content and smooth performance.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Fan Club project successfully combined custom WordPress development with responsive front-end and reliable back-end solutions to deliver a high-quality website. This project showcases my ability to create dynamic and user-friendly web solutions that align with the client’s needs.\n</p>\n";
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
