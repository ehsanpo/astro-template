import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Working together with the designer we develop a new website.\nThe website has an Import function so the customer can import an excel file and import the product to the website.\nThere is more functionality for login users to get a price and availability of the item from an API.</p>";

				const frontmatter = {"title":"Cottex","date":"2018","status":"publish","permalink":"cottex","author":"Ehsan","type":"portfolio","id":199,"agency":"Guts & Glory","category":["Front-end","Backend","Sysadmin"],"tag":["CSS","HTML","Javascript","Nodejs","PHP","Solution Architecture","Web Development","Wordpress"],"case_link_url":"http://www.cottex.se/","client":"Cottex","tagline":"En bra lampa ska inte kosta skjortan","background_image":"cottex-bg.jpg","logo":"cottex-logo.png","video":"","images":["cottex-1.jpg","cottex-2.png"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/cottex/cottex.md";
				const url = undefined;
				function rawContent() {
					return "\nWorking together with the designer we develop a new website.\nThe website has an Import function so the customer can import an excel file and import the product to the website.\nThere is more functionality for login users to get a price and availability of the item from an API.\n";
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
