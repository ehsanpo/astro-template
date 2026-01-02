import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Cecilia Björk: A One-Page WordPress Website</h2>\n<h3>Introduction:</h3>\n<p>\n  Cecilia Björk, an Intuitive Messenger, Transformational Healer, and Artist, needed a minimalist and elegant one-page website to showcase her work and events. I developed a WordPress site that allowed her to highlight her services and easily manage and display upcoming events.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>One-page design for a clean and intuitive user experience.</li>\n  <li>Event management functionality to add and display upcoming events.</li>\n  <li>Responsive design to ensure the site looks great on all devices.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Cecilia Björk project resulted in a visually appealing and functional one-page WordPress site that effectively highlights her unique talents and services. The event management feature adds dynamic value, allowing her to keep her audience updated on upcoming events with ease.\n</p>";

				const frontmatter = {"title":"Cecilia Björk","description":"Developed a one-page WordPress website for Cecilia Björk, showcasing her work as an Intuitive Messenger, Transformational Healer, and Artist, with the ability to manage and display events.","date":"2019","status":"publish","permalink":"cecilia-bjork","author":"Ehsan","type":"portfolio","agency":"Guts & Glory","category":["Front-end","Backend"],"tag":["WordPress","CSS","HTML","PHP"],"background_image":"CB_Image_2.jpg","logo":"logo.png","images":["site.png"],"tagline":"A simple and elegant one-page website for Cecilia Björk.","case_link_url":"http://ceciliabjork.se","client":"Cecilia Björk"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/cecilia-bjork/cecilia-bjork.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Cecilia Björk: A One-Page WordPress Website</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Cecilia Björk, an Intuitive Messenger, Transformational Healer, and Artist, needed a minimalist and elegant one-page website to showcase her work and events. I developed a WordPress site that allowed her to highlight her services and easily manage and display upcoming events.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>One-page design for a clean and intuitive user experience.</li>\n  <li>Event management functionality to add and display upcoming events.</li>\n  <li>Responsive design to ensure the site looks great on all devices.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Cecilia Björk project resulted in a visually appealing and functional one-page WordPress site that effectively highlights her unique talents and services. The event management feature adds dynamic value, allowing her to keep her audience updated on upcoming events with ease.\n</p>\n";
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
