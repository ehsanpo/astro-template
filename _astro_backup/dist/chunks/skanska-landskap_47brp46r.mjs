import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Skånska Landskap: Polishing Nature’s Website</h2>\n<h3>Introduction:</h3>\n<p>\n  Skånska Landskap’s website serves as a gateway to exploring the beauty of nature. My role was focused on front-end development to fix bugs and refine the website’s styles, ensuring a smooth and polished user experience that aligns with the organization's goal of making nature accessible to all.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Bug fixes to improve functionality and user interaction.</li>\n  <li>Styling adjustments to enhance the visual appeal of the website.</li>\n  <li>Focused front-end work to maintain a seamless experience for visitors.</li>\n</ul>\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>HTML:</b> For content structure and organization.</li>\n  <li><b>CSS:</b> For styling and layout improvements.</li>\n  <li><b>JavaScript:</b> For enhancing interactivity and resolving front-end bugs.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Skånska Landskap project successfully addressed existing front-end bugs and styling inconsistencies, resulting in a smoother and more appealing user experience. This work highlights the importance of attention to detail and maintaining high standards in front-end development to ensure a flawless digital presence.\n</p>";

				const frontmatter = {"title":"Skånska Landskap","description":"Worked on front-end development for Skånska Landskap's website, focusing on fixing bugs and improving styles for a polished user experience.","date":"2011","status":"publish","permalink":"skanska-landskap","author":"Ehsan","type":"portfolio","agency":"Give Akt","category":["Front-end"],"tag":["CSS","HTML","Javascript"],"background_image":"bg.webp","logo":"logo1.jpg","images":[],"tagline":"Naturen har alltid öppet","case_link_url":"http://www.skanskalandskap.se","client":"Stiftelsen Skånska Landskap"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/skanska-landskap/skanska-landskap.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Skånska Landskap: Polishing Nature’s Website</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Skånska Landskap’s website serves as a gateway to exploring the beauty of nature. My role was focused on front-end development to fix bugs and refine the website’s styles, ensuring a smooth and polished user experience that aligns with the organization's goal of making nature accessible to all.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Bug fixes to improve functionality and user interaction.</li>\n  <li>Styling adjustments to enhance the visual appeal of the website.</li>\n  <li>Focused front-end work to maintain a seamless experience for visitors.</li>\n</ul>\n\n<h3>Technologies Used:</h3>\n<ul>\n  <li><b>HTML:</b> For content structure and organization.</li>\n  <li><b>CSS:</b> For styling and layout improvements.</li>\n  <li><b>JavaScript:</b> For enhancing interactivity and resolving front-end bugs.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Skånska Landskap project successfully addressed existing front-end bugs and styling inconsistencies, resulting in a smoother and more appealing user experience. This work highlights the importance of attention to detail and maintaining high standards in front-end development to ensure a flawless digital presence.\n</p>\n";
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
