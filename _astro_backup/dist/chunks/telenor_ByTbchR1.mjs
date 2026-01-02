import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>CampaignFlow</h2>\n<p>This project involved the development of an internal tool for Telenor, designed to streamline campaign management and communication with resellers. The application allows administrators to efficiently create, monitor, and manage various campaigns tailored to individual resellers.</p>\n<p>Key features include tracking the distribution of advertising materials sent to stores, providing a seamless way for resellers to report missing items, and generating comprehensive campaign reports. The tool also supports exporting campaign details to Excel for enhanced data analysis and reporting, offering a user-friendly solution for operational efficiency.</p>";

				const frontmatter = {"onHome":false,"title":"Telenor","date":"2019-03-19T09:44:30+00:00","status":"publish","permalink":"telenor","author":"Ehsan","type":"portfolio","id":1337,"agency":"Freelance","category":["Backend","Front-end","Design","UX"],"tag":["CSS","HTML","Javascript","PHP","React","Adobe XD","Mongo DB"],"background_image":"11.png","logo":"logo.png","video":"","images":["4t.png","11.png","5t.png","6t.png","databse.png"],"tagline":"CampaignFlow - Simplifying campaign tracking and reporting for resellers.","case_link_url":"","port_date":["2019"],"client":"Telenor"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/telenor/telenor.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>CampaignFlow</h2>\n\nThis project involved the development of an internal tool for Telenor, designed to streamline campaign management and communication with resellers. The application allows administrators to efficiently create, monitor, and manage various campaigns tailored to individual resellers.\n\nKey features include tracking the distribution of advertising materials sent to stores, providing a seamless way for resellers to report missing items, and generating comprehensive campaign reports. The tool also supports exporting campaign details to Excel for enhanced data analysis and reporting, offering a user-friendly solution for operational efficiency.\n";
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
