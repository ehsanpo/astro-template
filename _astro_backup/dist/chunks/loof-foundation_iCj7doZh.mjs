import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Lööf Foundation: A Responsive Web Solution</h2>\n<h3>Introduction:</h3>\n<p>\n  The Lööf Foundation needed a responsive and user-friendly website to communicate their mission and projects effectively. My role involved designing and developing the front-end, leveraging Bootstrap 3 for responsiveness and ensuring a seamless experience across all devices.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Responsive design using Bootstrap 3 for compatibility across various devices.</li>\n  <li>Clean and intuitive layout for easy navigation and content consumption.</li>\n  <li>Dynamic elements to enhance user engagement and interactivity.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>Bootstrap 3:</b> For responsive grid-based design.</li>\n  <li><b>HTML:</b> For structuring the content.</li>\n  <li><b>CSS:</b> For styling and creating a visually appealing interface.</li>\n  <li><b>JavaScript:</b> For adding interactivity and functionality.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Lööf Foundation project resulted in a modern and responsive website that effectively showcased their mission and projects. This project highlights my expertise in front-end development and responsive design, ensuring a high-quality user experience.\n</p>";

				const frontmatter = {"onHome":false,"title":"Lööf Foundation","description":"Designed and developed the front-end for the Lööf Foundation’s website, focusing on responsive design and user-friendly navigation.","date":"2013","status":"publish","permalink":"loof-foundation","author":"Ehsan","type":"portfolio","agency":"Whitespace","category":["Design","Front-end"],"tag":["Bootstrap 3","CSS","HTML","Javascript","Web Development"],"background_image":"site.png","logo":"looflogo.jpg","images":["site.png"],"tagline":"A clean and responsive website for the Lööf Foundation.","case_link_url":"http://looffoundation.org","client":"Lööf Foundation"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/loof-foundation/loof-foundation.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Lööf Foundation: A Responsive Web Solution</h2>\n\n<h3>Introduction:</h3>\n<p>\n  The Lööf Foundation needed a responsive and user-friendly website to communicate their mission and projects effectively. My role involved designing and developing the front-end, leveraging Bootstrap 3 for responsiveness and ensuring a seamless experience across all devices.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Responsive design using Bootstrap 3 for compatibility across various devices.</li>\n  <li>Clean and intuitive layout for easy navigation and content consumption.</li>\n  <li>Dynamic elements to enhance user engagement and interactivity.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>Bootstrap 3:</b> For responsive grid-based design.</li>\n  <li><b>HTML:</b> For structuring the content.</li>\n  <li><b>CSS:</b> For styling and creating a visually appealing interface.</li>\n  <li><b>JavaScript:</b> For adding interactivity and functionality.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Lööf Foundation project resulted in a modern and responsive website that effectively showcased their mission and projects. This project highlights my expertise in front-end development and responsive design, ensuring a high-quality user experience.\n</p>\n";
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
