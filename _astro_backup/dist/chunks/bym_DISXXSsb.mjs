import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Be you Music","date":"2009","status":"publish","permalink":"bym","author":"Ehsan","type":"portfolio","id":311,"agency":"Freelance","category":["Backend","Design","Front-end"],"tag":["CSS","HTML","Javascript","Web Development","Wordpress","Youtube API"],"case_link_url":"","client":"BeyouMusic","tagline":"You cant be more true, Then being you","background_image":"bym-bg.png","logo":"bym-logo.png","video":"","images":["bym-2.jpg","bym-1.jpg"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/bym/bym.md";
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
