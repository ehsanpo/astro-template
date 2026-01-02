import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Våra Gårdar: Interactive Map for Venues and Activities</h2>\n<h3>Introduction:</h3>\n<p>\n  Våra Gårdar needed a user-friendly way for visitors to discover and filter local venues and activities across various regions. To address this, I developed an interactive map solution utilizing the Google Maps API. This tool empowers users to explore and filter venues by type and activities, making their search seamless and intuitive.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Interactive map powered by Google Maps API.</li>\n  <li>Advanced filters to sort venues and activities by categories and types.</li>\n  <li>Seamless integration with WordPress for easy content management.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The interactive map solution for Våra Gårdar elevated the user experience by providing an engaging and practical tool for exploring venues and activities. With a focus on usability and functionality, this project highlights the power of combining modern web technologies with user-centric design principles.\n</p>";

				const frontmatter = {"onHome":false,"title":"Våra Gårdar","description":"Developed an interactive map with filters for Våra Gårdar to help users easily find local venues and activities.","date":"2018","status":"publish","permalink":"varagardar","author":"Your Name","type":"portfolio","agency":"Whitespace","category":["Front-end"],"tag":["Wordpress","PHP","HTML","CSS","Javascript","Google Maps API"],"background_image":"vgardar.jpg","logo":"VG_logotyp_vit-300x300.png","images":["vgardar.jpg"],"tagline":"An innovative interactive map for discovering venues and activities.","case_link_url":"https://www.varagardar.se/lokaler","client":"Våra Gårdar"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/varagardar/varagardar.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Våra Gårdar: Interactive Map for Venues and Activities</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Våra Gårdar needed a user-friendly way for visitors to discover and filter local venues and activities across various regions. To address this, I developed an interactive map solution utilizing the Google Maps API. This tool empowers users to explore and filter venues by type and activities, making their search seamless and intuitive.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Interactive map powered by Google Maps API.</li>\n  <li>Advanced filters to sort venues and activities by categories and types.</li>\n  <li>Seamless integration with WordPress for easy content management.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The interactive map solution for Våra Gårdar elevated the user experience by providing an engaging and practical tool for exploring venues and activities. With a focus on usability and functionality, this project highlights the power of combining modern web technologies with user-centric design principles.\n</p>\n";
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
