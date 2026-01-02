import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>NOAAB: A Simple WordPress Website for Precision Machining</h2>\n<h3>Introduction:</h3>\n<p>\n  NOAAB is a specialized mechanical workshop offering cutting-edge machining services, including turning, milling, 3D milling, and simultaneous 5-axis milling with high precision and surface finish. They required a straightforward website to showcase their services and facilitate customer inquiries. I developed a simple WordPress website tailored to their needs, using Blockpress as the templating system and implementing a contact form.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom WordPress website built with Blockpress for a clean and lightweight design.</li>\n  <li>Contact form to enable seamless communication with potential clients.</li>\n  <li>Responsive and minimalist design to highlight NOAAB's expertise and services.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>WordPress:</b> For content management and website functionality.</li>\n  <li><b>Blockpress:</b> Custom templating system for streamlined design and development.</li>\n  <li><b>HTML &#x26; CSS:</b> For styling and layout.</li>\n  <li><b>PHP:</b> For dynamic functionality and WordPress integration.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The NOAAB project delivered a simple yet effective WordPress website that reflected the company's precision machining expertise. By leveraging Blockpress for templating, the website was optimized for performance and usability, helping NOAAB maintain a strong online presence.\n</p>";

				const frontmatter = {"onHome":false,"title":"NOAAB","description":"Built a simple WordPress website for NOAAB using Blockpress, featuring a contact form and tailored to their precision machining services.","date":"2019","status":"publish","permalink":"noaab","author":"Ehsan","type":"portfolio","agency":"Guts & Glory","category":["Front-end","Backend"],"tag":["WordPress","Blockpress","CSS","HTML","PHP"],"background_image":"bg.jpg","logo":"noalogo.jpg","images":["site.png"],"tagline":"A simple and effective website for NOAAB's machining services.","case_link_url":"http://noaab.se","client":"NOAAB"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/noaab/noaab.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>NOAAB: A Simple WordPress Website for Precision Machining</h2>\n\n<h3>Introduction:</h3>\n<p>\n  NOAAB is a specialized mechanical workshop offering cutting-edge machining services, including turning, milling, 3D milling, and simultaneous 5-axis milling with high precision and surface finish. They required a straightforward website to showcase their services and facilitate customer inquiries. I developed a simple WordPress website tailored to their needs, using Blockpress as the templating system and implementing a contact form.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom WordPress website built with Blockpress for a clean and lightweight design.</li>\n  <li>Contact form to enable seamless communication with potential clients.</li>\n  <li>Responsive and minimalist design to highlight NOAAB's expertise and services.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>WordPress:</b> For content management and website functionality.</li>\n  <li><b>Blockpress:</b> Custom templating system for streamlined design and development.</li>\n  <li><b>HTML & CSS:</b> For styling and layout.</li>\n  <li><b>PHP:</b> For dynamic functionality and WordPress integration.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The NOAAB project delivered a simple yet effective WordPress website that reflected the company's precision machining expertise. By leveraging Blockpress for templating, the website was optimized for performance and usability, helping NOAAB maintain a strong online presence.\n</p>\n";
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
