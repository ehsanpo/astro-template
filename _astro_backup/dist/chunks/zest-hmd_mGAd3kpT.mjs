import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>After building a site for Zest Care recruiting agency, They needed a simple quiz that they will push to social media to ask nurses how they feel at work to make some lead by offering a simple “Send us your CV”. The quiz in build with react with a PHP, Mysql backend to save and view the incoming data.</p>";

				const frontmatter = {"onHome":false,"title":"Zest - Hur mår du?","date":"2019-03-28T12:54:27+00:00","status":"publish","permalink":"zest-hmd","author":"Ehsan","type":"portfolio","id":312,"agency":"Guts & Glory","category":["Backend","Front-end"],"tag":["Wordpress","HTML","Javascript","PHP"],"case_link_url":"https://bättretillvaro.se/","client":"Zest Bemanning","tagline":"","background_image":"fb2.png","logo":"1-3.png","video":null,"images":["1-1.png","fb2.png"],"port_date":["2019"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/zest-hmd/zest-hmd.md";
				const url = undefined;
				function rawContent() {
					return "\nAfter building a site for Zest Care recruiting agency, They needed a simple quiz that they will push to social media to ask nurses how they feel at work to make some lead by offering a simple \"Send us your CV\". The quiz in build with react with a PHP, Mysql backend to save and view the incoming data.\n";
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
