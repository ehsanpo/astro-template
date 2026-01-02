import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Folk Mat Möten","date":"2018","status":"publish","permalink":"folk-mat-moten","author":"Ehsan","type":"portfolio","id":359,"agency":"Guts & Glory","category":["Backend","Design","Front-end"],"tag":["CSS","HTML","Javascript","Maintenance","SEO","Support","UX","Web Development","Wordpress"],"case_link_url":"https://folkmatmoten.se/","client":"Folk Mat Möten","tagline":"Konferens i Malmö som överträffar dina förväntningar!","background_image":"fmm-bg.jpg","logo":"fmm-logo.png","video":"","images":["fmm-1.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/folk-mat-moten/folk-mat-moten.md";
				const url = undefined;
				function rawContent() {
					return "";
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
