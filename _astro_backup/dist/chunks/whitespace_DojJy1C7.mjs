import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Whitespace: Comprehensive Development and System Management</h2>\n<h3>Introduction:</h3>\n<p>\n  Whitespace needed a robust web solution that involved both front-end and back-end development, along with system administration tasks to ensure the website's seamless operation. My work encompassed a full-stack approach to deliver an efficient and stable online presence.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Front-end development to create a clean and responsive user interface.</li>\n  <li>Back-end functionality to support dynamic content and seamless performance.</li>\n  <li>System administration to ensure reliable hosting and infrastructure management.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>HTML:</b> For structuring website content.</li>\n  <li><b>CSS:</b> For styling and layout.</li>\n  <li><b>JavaScript:</b> For interactivity and dynamic features.</li>\n  <li><b>PHP:</b> For back-end development and server-side scripting.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Whitespace project successfully combined front-end and back-end development with system administration to deliver a reliable and user-friendly website. This project demonstrates my ability to manage multiple aspects of web development and infrastructure to achieve a seamless digital experience.\n</p>";

				const frontmatter = {"onHome":false,"title":"Whitespace","description":"Worked on both front-end and back-end development for Whitespace's website, as well as managing system administration tasks to ensure smooth operations.","date":"2012","status":"publish","permalink":"whitespace","author":"Ehsan","type":"portfolio","agency":"Whitespace","category":["Backend","Front-end","Sysadmin"],"tag":["HTML","Javascript","PHP","Web Development"],"background_image":"site-small.png","logo":"logo.png","images":["site.png"],"tagline":"Comprehensive web development and system management for Whitespace.","case_link_url":"http://whitespace.se/","client":"Whitespace"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/whitespace/whitespace.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Whitespace: Comprehensive Development and System Management</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Whitespace needed a robust web solution that involved both front-end and back-end development, along with system administration tasks to ensure the website's seamless operation. My work encompassed a full-stack approach to deliver an efficient and stable online presence.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Front-end development to create a clean and responsive user interface.</li>\n  <li>Back-end functionality to support dynamic content and seamless performance.</li>\n  <li>System administration to ensure reliable hosting and infrastructure management.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>HTML:</b> For structuring website content.</li>\n  <li><b>CSS:</b> For styling and layout.</li>\n  <li><b>JavaScript:</b> For interactivity and dynamic features.</li>\n  <li><b>PHP:</b> For back-end development and server-side scripting.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Whitespace project successfully combined front-end and back-end development with system administration to deliver a reliable and user-friendly website. This project demonstrates my ability to manage multiple aspects of web development and infrastructure to achieve a seamless digital experience.\n</p>\n";
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
