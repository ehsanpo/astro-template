import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Redfellas: A Cozy Online Presence</h2>\n<h3>Introduction:</h3>\n<p>\n  Redfellas, known for its warm ambiance, delicious salads, fresh juices, smoothies, and great coffee, wanted a website that reflected their inviting atmosphere and commitment to quality. I was tasked with creating a brand-new site to showcase their offerings and enhance their online presence.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom-designed website built with WordPress for easy content management.</li>\n  <li>Responsive and user-friendly interface to ensure a seamless experience across all devices.</li>\n  <li>Attractive visuals to highlight their menu items and services.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>WordPress:</b> For content management and backend functionality.</li>\n  <li><b>PHP:</b> For custom development and integration.</li>\n  <li><b>HTML &#x26; CSS:</b> For front-end design and styling.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The new website for Redfellas provided a digital space that matched their warm and welcoming physical locations. With a focus on user experience and appealing design, the site effectively showcased their menu and services, contributing to their brand identity and customer engagement.\n</p>";

				const frontmatter = {"onHome":false,"title":"Redfellas","date":"2013","status":"publish","permalink":"redfellas","author":"Ehsan","type":"portfolio","agency":"The Fan Club","category":["Backend","Front-end"],"tag":["CSS","HTML","PHP","Wordpress"],"background_image":"redfellaslogo.jpg","logo":"redfellaslogo.jpg","images":["redfellassite.jpg"],"tagline":"A delightful website for Redfellas – where good food meets great service.","case_link_url":"https://www.redfellas.com","client":"Redfellas"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/redfellas/redfellas.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Redfellas: A Cozy Online Presence</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Redfellas, known for its warm ambiance, delicious salads, fresh juices, smoothies, and great coffee, wanted a website that reflected their inviting atmosphere and commitment to quality. I was tasked with creating a brand-new site to showcase their offerings and enhance their online presence.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Custom-designed website built with WordPress for easy content management.</li>\n  <li>Responsive and user-friendly interface to ensure a seamless experience across all devices.</li>\n  <li>Attractive visuals to highlight their menu items and services.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>WordPress:</b> For content management and backend functionality.</li>\n  <li><b>PHP:</b> For custom development and integration.</li>\n  <li><b>HTML & CSS:</b> For front-end design and styling.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The new website for Redfellas provided a digital space that matched their warm and welcoming physical locations. With a focus on user experience and appealing design, the site effectively showcased their menu and services, contributing to their brand identity and customer engagement.\n</p>\n";
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
