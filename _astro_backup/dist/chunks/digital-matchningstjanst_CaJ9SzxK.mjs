import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Digital Matchningstjänst: Simplifying Job Advertisements</h2>\n<h3>Introduction:</h3>\n<p>\n  Digital Matchningstjänst is a job advertisement platform designed to bridge the gap between employers and candidates. Companies can easily post small job ads, manage applications, and handle payments and invoicing, while candidates can sign up, create profiles, and apply for job opportunities. The platform was built to simplify the recruitment process for both employers and job seekers.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Job posting functionality for companies, including ad management tools.</li>\n  <li>Candidate profile creation and application submission system.</li>\n  <li>Integrated payment and invoicing functionality for seamless financial transactions.</li>\n  <li>Administrative tools for companies to review applications and select candidates.</li>\n</ul>\n<h3>Note:</h3>\n<p>\n  Unfortunately, no images or visuals of this project can be shared due to a Non-Disclosure Agreement (NDA).\n</p>\n<h3>Conclusion:</h3>\n<p>\n  The Digital Matchningstjänst platform provided a streamlined solution for connecting companies and candidates. By integrating robust features like payment processing and application management, the platform enhanced efficiency for both parties, enabling quick and effective hiring decisions. This project exemplifies how technology can transform traditional recruitment processes into a smooth, digital experience.\n</p>";

				const frontmatter = {"onHome":false,"title":"Digital Matchningstjänst","description":"Built a job advertisement platform enabling companies to post job ads, manage applications, and handle payments and invoicing seamlessly, while users can create profiles and apply for jobs.","date":"2012","status":"publish","agency":"Whitespace","permalink":"digital-matchningstjanst","author":"Ehsan","type":"portfolio","category":["Backend","Front-end"],"tag":["CSS","Drupal","HTML","Javascript","PHP","Web Development"],"background_image":"0_2.png","logo":"0_2.png","images":["0_2.png"],"tagline":"Connecting employers and candidates through a seamless digital platform.","client":"Digital Matchningstjänst"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/digital-matchningstjanst/digital-matchningstjanst.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Digital Matchningstjänst: Simplifying Job Advertisements</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Digital Matchningstjänst is a job advertisement platform designed to bridge the gap between employers and candidates. Companies can easily post small job ads, manage applications, and handle payments and invoicing, while candidates can sign up, create profiles, and apply for job opportunities. The platform was built to simplify the recruitment process for both employers and job seekers.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Job posting functionality for companies, including ad management tools.</li>\n  <li>Candidate profile creation and application submission system.</li>\n  <li>Integrated payment and invoicing functionality for seamless financial transactions.</li>\n  <li>Administrative tools for companies to review applications and select candidates.</li>\n</ul>\n\n<h3>Note:</h3>\n<p>\n  Unfortunately, no images or visuals of this project can be shared due to a Non-Disclosure Agreement (NDA).\n</p>\n\n<h3>Conclusion:</h3>\n<p>\n  The Digital Matchningstjänst platform provided a streamlined solution for connecting companies and candidates. By integrating robust features like payment processing and application management, the platform enhanced efficiency for both parties, enabling quick and effective hiring decisions. This project exemplifies how technology can transform traditional recruitment processes into a smooth, digital experience.\n</p>\n";
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
