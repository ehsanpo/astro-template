import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Library Event Display: Enhancing Visitor Experience</h2>\n<h3>Introduction:</h3>\n<p>\n  Stockholm's City Library in Kista required a modern solution to display upcoming events on TVs located throughout the library. As a full-stack developer, I collaborated closely with a team of backend developers, focusing primarily on the front-end development and API integration with their Drupal backend system. This project aimed to provide a visually appealing and functional way to keep visitors informed about the library's activities.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Dynamic event display system powered by API integration with Drupal.</li>\n  <li>Visually engaging front-end design tailored for TV screens.</li>\n  <li>Responsive and easy-to-read layout optimized for various screen sizes.</li>\n</ul>\n<h3>Collaboration and Teamwork:</h3>\n<p>\n  This project was a collaborative effort involving a team of backend developers and myself. I worked on-site to ensure seamless communication and coordination with the team, which was crucial for the successful implementation of the project. My primary responsibilities included designing the front-end interface and handling API calls to fetch event data from the Drupal backend.\n</p>\n<h3>Conclusion:</h3>\n<p>\n  The Library Event Display system provided an elegant and efficient solution for keeping library visitors informed about upcoming events. By leveraging a combination of front-end technologies and backend API integration, the system delivered a dynamic and engaging user experience. This project highlights the importance of collaboration and the role of modern web development techniques in creating impactful digital solutions.\n</p>";

				const frontmatter = {"onHome":false,"title":"Library Event Display","description":"Developed a TV display system for Stockholm's City Library, showcasing events with a focus on front-end and API integration with a Drupal backend.","date":"2018","status":"publish","permalink":"library-event-display","type":"portfolio","agency":"Whitespace","category":["Backend","Design","Front-end"],"tag":["CSS","Drupal","HTML","Javascript","PHP"],"background_image":"16952304466_b91c4170f5_h.jpg","logo":"16952304466_b91c4170f5_h.jpg","images":["16952304466_b91c4170f5_h.jpg"],"tagline":"Seamlessly displaying library events on TV screens with API-powered integration.","case_link_url":"#","client":"Stockholms stadsbibliotek"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/library-event-display/library-event-display.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Library Event Display: Enhancing Visitor Experience</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Stockholm's City Library in Kista required a modern solution to display upcoming events on TVs located throughout the library. As a full-stack developer, I collaborated closely with a team of backend developers, focusing primarily on the front-end development and API integration with their Drupal backend system. This project aimed to provide a visually appealing and functional way to keep visitors informed about the library's activities.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Dynamic event display system powered by API integration with Drupal.</li>\n  <li>Visually engaging front-end design tailored for TV screens.</li>\n  <li>Responsive and easy-to-read layout optimized for various screen sizes.</li>\n</ul>\n\n<h3>Collaboration and Teamwork:</h3>\n<p>\n  This project was a collaborative effort involving a team of backend developers and myself. I worked on-site to ensure seamless communication and coordination with the team, which was crucial for the successful implementation of the project. My primary responsibilities included designing the front-end interface and handling API calls to fetch event data from the Drupal backend.\n</p>\n\n<h3>Conclusion:</h3>\n<p>\n  The Library Event Display system provided an elegant and efficient solution for keeping library visitors informed about upcoming events. By leveraging a combination of front-end technologies and backend API integration, the system delivered a dynamic and engaging user experience. This project highlights the importance of collaboration and the role of modern web development techniques in creating impactful digital solutions.\n</p>\n";
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
