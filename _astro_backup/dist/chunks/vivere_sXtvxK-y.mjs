import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Vivere: Local Discovery Simplified</h2>\n<h3>Introduction:</h3>\n<p>\n  In 2018, Vivere sought to expand their website with a new page dedicated to showcasing local venues. My role involved primarily front-end work, adding an interactive Google Maps feature and ensuring the new page aligned with the site's existing design and functionality.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Integration of Google Maps to display local venues.</li>\n  <li>User-friendly interface to navigate and explore venues.</li>\n  <li>Responsive design for seamless usability across devices.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The new page for Vivere successfully expanded the website's functionality, providing users with an engaging and intuitive way to explore local venues. This project demonstrates the effectiveness of focused front-end development and seamless integration of Google Maps to enhance user experience.\n</p>";

				const frontmatter = {"onHome":false,"title":"Vivere","description":"Added a new page showcasing local venues with Google Maps integration, focusing primarily on front-end development.","date":"2018","status":"publish","permalink":"vivere","author":"Whitespace","type":"portfolio","agency":"Whitespace","category":["Front-end","Backend"],"tag":["Wordpress","PHP","HTML","CSS","Javascript"],"background_image":"vivere.jpg","logo":"vivere.jpg","images":["vivere.jpg","sitevv.png"],"tagline":"Simplifying local discovery with a user-friendly page addition.","case_link_url":"https://www.vivere.se","client":"Vivere"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/vivere/vivere.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Vivere: Local Discovery Simplified</h2>\n\n<h3>Introduction:</h3>\n<p>\n  In 2018, Vivere sought to expand their website with a new page dedicated to showcasing local venues. My role involved primarily front-end work, adding an interactive Google Maps feature and ensuring the new page aligned with the site's existing design and functionality.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Integration of Google Maps to display local venues.</li>\n  <li>User-friendly interface to navigate and explore venues.</li>\n  <li>Responsive design for seamless usability across devices.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The new page for Vivere successfully expanded the website's functionality, providing users with an engaging and intuitive way to explore local venues. This project demonstrates the effectiveness of focused front-end development and seamless integration of Google Maps to enhance user experience.\n</p>\n";
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
