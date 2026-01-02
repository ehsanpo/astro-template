import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I work as a Fullstack developer in the team to make a new website for a government organization. The development was focused on accessibility for the frontend and a lot of security restrictions and the external APIs for the backend. Mostly focused to make js accessibility to help front end developers and making the APIs for the backend.</p>";

				const frontmatter = {"title":"Kockens kamrater","date":"2019-03-28T10:16:58+00:00","status":"publish","permalink":"kockenskamrater","author":"Ehsan","type":"portfolio","id":199,"agency":"Guts & Glory","case_link_url":"","category":["Front-end","UX","Design"],"tag":["CSS","HTML","Javascript","Drupal"],"client":"Cottex","tagline":"Felix Köttbullar","background_image":"felix.png","logo":"logo.png","video":"","images":["1.png"],"port_date":["2018"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/kockenskamrater/kockenskamrater.md";
				const url = undefined;
				function rawContent() {
					return "\nI work as a Fullstack developer in the team to make a new website for a government organization. The development was focused on accessibility for the frontend and a lot of security restrictions and the external APIs for the backend. Mostly focused to make js accessibility to help front end developers and making the APIs for the backend.\n";
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
