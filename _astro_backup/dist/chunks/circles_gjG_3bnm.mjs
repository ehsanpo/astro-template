import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_XooCfOyt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Recently, I’ve been playing around with some generative music using Propellerhead Reason, mostly for fun, you can find some of it on my Soundcloud:</p>\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&#x26;color=%23ff5500&#x26;auto_play=false&#x26;hide_related=true&#x26;show_comments=false&#x26;show_user=true&#x26;show_reposts=false&#x26;show_teaser=false\"></iframe>\n<p>This got me to start thinking about some generative art; after some Googling I got to check out some R programming for drawing things, and after some lurking around Github I found some good examples written in go and python too. Got to install R and Processing 3 on my Mac. After trying to get the process working for a few hours, I was not lucky, and after some digging up I saw a lot of problems with the processor 3 and java versions. But v2 worked and i got my first images.\nAt this point I just want to make some pretty art and not do too much into learning the generative algorithms that are already in place.</p>";

				const frontmatter = {"title":"Generative Circles","date":"2019-03-28T13:39:40+00:00","status":"publish","permalink":"generative-circles","author":"Ehsan","type":"portfolio","id":381,"agency":"FreeLance","category":["Lab"],"tag":["CSS","HTML","Javascript","Maintenance","PHP","Web Development","Wordpress"],"case_link_url":"https://github.com/ehsanpo/Many-Circles","client":"Carpings","tagline":"Generative Art!","background_image":"circle-8+10.png","logo":"circle-7.png","video":"","images":["circle-1.png","circle-2.png","circle-5.png","circle-6.png","circle-7.png","circle-8+10.png","circle-9.png","circle-10.png","circle-16.png","circle-17.png"],"port_date":["2020"]};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/portfolio/generative-circles/circles.md";
				const url = undefined;
				function rawContent() {
					return "\nRecently, I've been playing around with some generative music using Propellerhead Reason, mostly for fun, you can find some of it on my Soundcloud:\n\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false\"></iframe>\n\nThis got me to start thinking about some generative art; after some Googling I got to check out some R programming for drawing things, and after some lurking around Github I found some good examples written in go and python too. Got to install R and Processing 3 on my Mac. After trying to get the process working for a few hours, I was not lucky, and after some digging up I saw a lot of problems with the processor 3 and java versions. But v2 worked and i got my first images.\nAt this point I just want to make some pretty art and not do too much into learning the generative algorithms that are already in place.\n";
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
