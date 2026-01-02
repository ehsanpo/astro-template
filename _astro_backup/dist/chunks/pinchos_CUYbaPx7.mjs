import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Pinchos: Food Ordering Made Easy</h2>\n<h3>Introduction:</h3>\n<p>\n  Pinchos, a restaurant chain known for its unique dining experience, needed a mobile app to streamline the food ordering process for their customers. The goal was to create an HTML-based app where users could browse the menu and place orders directly to their table. As part of the development team, I focused on creating an intuitive and efficient interface to enhance the overall dining experience.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Mobile-friendly HTML app built with Angular and Phonegap.</li>\n  <li>Seamless menu browsing and food ordering functionality.</li>\n  <li>Integration with backend services using SOAP for real-time order processing.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>Angular:</b> For building a dynamic and responsive user interface.</li>\n  <li><b>Phonegap:</b> To package the HTML app into a mobile application.</li>\n  <li><b>CSS &#x26; HTML:</b> For front-end design and layout.</li>\n  <li><b>SOAP:</b> For backend communication and order integration.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Pinchos app transformed the dining experience by allowing customers to conveniently place orders directly from their mobile devices. With its sleek design and smooth functionality, the app successfully met user needs and aligned with the restaurant’s innovative brand identity.\n</p>";

				const frontmatter = {"onHome":false,"title":"Pinchos","description":"Developed a mobile app for Pinchos, allowing users to conveniently order food directly to their table using a seamless and intuitive interface.","date":"2013","status":"publish","permalink":"pinchos","author":"Ehsan","type":"portfolio","agency":"Whitespace","category":["Front-end","Mobile"],"tag":["Angular","CSS","HTML","Phonegap","SOAP"],"background_image":"logo.jpg","logo":"Drinks.png","images":["Drinks.png","Bill.png","Choose-Restaurant.png","Drinks-No-Photos.png","Food.png","Welcome.png"],"tagline":"Revolutionizing dining with an app that brings food ordering to your fingertips.","case_link_url":"#","client":"Pinchos"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/pinchis/pinchos.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Pinchos: Food Ordering Made Easy</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Pinchos, a restaurant chain known for its unique dining experience, needed a mobile app to streamline the food ordering process for their customers. The goal was to create an HTML-based app where users could browse the menu and place orders directly to their table. As part of the development team, I focused on creating an intuitive and efficient interface to enhance the overall dining experience.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Mobile-friendly HTML app built with Angular and Phonegap.</li>\n  <li>Seamless menu browsing and food ordering functionality.</li>\n  <li>Integration with backend services using SOAP for real-time order processing.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>Angular:</b> For building a dynamic and responsive user interface.</li>\n  <li><b>Phonegap:</b> To package the HTML app into a mobile application.</li>\n  <li><b>CSS & HTML:</b> For front-end design and layout.</li>\n  <li><b>SOAP:</b> For backend communication and order integration.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Pinchos app transformed the dining experience by allowing customers to conveniently place orders directly from their mobile devices. With its sleek design and smooth functionality, the app successfully met user needs and aligned with the restaurant’s innovative brand identity.\n</p>\n";
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
