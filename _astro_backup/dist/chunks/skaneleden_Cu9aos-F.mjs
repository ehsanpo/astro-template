import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2>Skåneleden: Showcasing Nature Trails</h2>\n<h3>Introduction:</h3>\n<p>\n  Skåneleden is a well-known trail system offering 130 miles of breathtaking nature for hikers. I contributed to the project by developing a front-end solution to enhance the website, making it visually appealing and user-friendly while showcasing the natural beauty of the trails.\n</p>\n<h3>Key Features:</h3>\n<ul>\n  <li>Responsive and intuitive front-end design to cater to hikers on all devices.</li>\n  <li>Clear and engaging presentation of trail information, encouraging exploration.</li>\n  <li>Optimized for performance to provide a seamless user experience.</li>\n</ul>\n<h3>Conclusion:</h3>\n<p>\n  The Skåneleden project successfully delivered a user-friendly front-end solution that captured the essence of the trails and inspired users to explore the beauty of Skåne's nature. This project highlights the importance of combining aesthetics with functionality to create an engaging user experience.\n</p>";

				const frontmatter = {"onHome":false,"title":"Skåneleden","description":"Developed a front-end solution for Skåneleden's website to promote and showcase 130 miles of stunning nature trails.","date":"2011","status":"publish","permalink":"skaneleden","author":"Ehsan","type":"portfolio","agency":"Give Akt","category":["Front-end"],"tag":["CSS","HTML","Javascript","Umbraco"],"background_image":"original.jpg","logo":"logo.jpg","images":[],"tagline":"130 mil underbar natur väntar på dig!","case_link_url":"http://www.skaneleden.se","client":"Skåneleden"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/skaneleden/skaneleden.md";
				const url = undefined;
				function rawContent() {
					return "\n<h2>Skåneleden: Showcasing Nature Trails</h2>\n\n<h3>Introduction:</h3>\n<p>\n  Skåneleden is a well-known trail system offering 130 miles of breathtaking nature for hikers. I contributed to the project by developing a front-end solution to enhance the website, making it visually appealing and user-friendly while showcasing the natural beauty of the trails.\n</p>\n\n<h3>Key Features:</h3>\n<ul>\n  <li>Responsive and intuitive front-end design to cater to hikers on all devices.</li>\n  <li>Clear and engaging presentation of trail information, encouraging exploration.</li>\n  <li>Optimized for performance to provide a seamless user experience.</li>\n</ul>\n\n<h3>Conclusion:</h3>\n<p>\n  The Skåneleden project successfully delivered a user-friendly front-end solution that captured the essence of the trails and inspired users to explore the beauty of Skåne's nature. This project highlights the importance of combining aesthetics with functionality to create an engaging user experience.\n</p>\n";
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
