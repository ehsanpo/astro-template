import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_XooCfOyt.mjs';
import { g as getImage } from './_astro_assets_uTXWiZm6.mjs';
import 'clsx';

const Astro__Z16KEWp = new Proxy({"src":"/_astro/Julianna_Margulies.m9msD4GZ.jpg","width":364,"height":484,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/Julianna_Margulies.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/Julianna_Margulies.jpg");
							return target[name];
						}
					});

const Astro__Z1HUtQw = new Proxy({"src":"/_astro/cardi-b-rolling-stone-interview-cover_.C-BUjWq-.jpg","width":1473,"height":1156,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/cardi-b-rolling-stone-interview-cover_.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/cardi-b-rolling-stone-interview-cover_.jpg");
							return target[name];
						}
					});

const Astro__2lncYG = new Proxy({"src":"/_astro/1111.BZotYZBo.jpg","width":243,"height":269,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/1111.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/1111.jpg");
							return target[name];
						}
					});

const Astro__Z1e3Rli = new Proxy({"src":"/_astro/nicki-minaj.D7WcYjAs.jpg","width":320,"height":541,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/nicki-minaj.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/nicki-minaj.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./Julianna_Margulies\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./Julianna_Margulies.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z16KEWp, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./cardi-b-rolling-stone-interview-cover_\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./cardi-b-rolling-stone-interview-cover_.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1HUtQw, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./1111\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./1111.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__2lncYG, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./nicki-minaj\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./nicki-minaj.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1e3Rli, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>Here’s a <strong>short, casual rewrite</strong> of your AI update post, keeping your playful, self-taught tone <strong>and adding a quick note about ethical use</strong>:</p>\n<hr>\n<h1 id=\"-ai-update-more-data-more-categories\">🤖 AI Update: More Data, More Categories</h1>\n<p>I’ve trained my AI with a bit more data and added some new categories! Now it can give a little more info:</p>\n<ul>\n<li>Hot</li>\n<li>Ugly</li>\n<li>Fat</li>\n<li>Asian</li>\n<li>Badgirl</li>\n</ul>\n<p>Let’s try some new pics! 🙂</p>\n<hr>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./Julianna_Margulies.jpg&#x22;,&#x22;alt&#x22;:&#x22;Julianna Margulies&#x22;,&#x22;index&#x22;:0}\">\n<strong>Julianna Margulies</strong>\nHot: 0.29 | Ugly: 0.26 | Asian: 0.19 | Fat: 0.18 | Badgirl: 0.07</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./cardi-b-rolling-stone-interview-cover_.jpg&#x22;,&#x22;alt&#x22;:&#x22;Cardi B&#x22;,&#x22;index&#x22;:0}\">\n<strong>Cardi B</strong>\nHot: 0.63 | Fat: 0.17 | Ugly: 0.12 | Badgirl: 0.07 | Asian: 0.003</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./1111.jpg&#x22;,&#x22;alt&#x22;:&#x22;I-Hua&#x22;,&#x22;index&#x22;:0}\">\n<strong>I-Hua</strong>\nHot: 0.85 | Asian: 0.13 | Badgirl: 0.003 | Fat: 0.003 | Ugly: 0.001</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./nicki-minaj.jpg&#x22;,&#x22;alt&#x22;:&#x22;Nicki Minaj&#x22;,&#x22;index&#x22;:0}\">\n<strong>Nicki Minaj</strong>\nHot: 0.98 | Fat: 0.007 | Ugly: 0.002 | Badgirl: 0.002 | Asian: 0.0003</p>\n<hr>\n<p>⚠️ <strong>Quick note on ethics:</strong> This AI is just a silly experiment. Please remember that using AI to judge people’s appearance can be harmful or offensive — it’s fun to play with data, but always respect others and use AI responsibly! ❤️</p>");
	

				const frontmatter = {"title":"Machine Learning Lessons Learned - The Hard Way","description":"Reflections on my early machine learning experiments - the mistakes, challenges, and important lessons about bias, ethics, and responsible AI development that every beginner should know.","date":"2019-04-15","author":"Ehsan Pourhadi","category":["Machine Learning","Ethics"],"tag":["AI Ethics","ML","Learning","Responsible AI","Bias","Data Science"],"featured":false,"draft":false,"cover":"./ml-lessons-cover.jpg"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/blog/machine-learning-lessons-learned/index.md";
				const url = undefined;
				function rawContent() {
					return "\nHere’s a **short, casual rewrite** of your AI update post, keeping your playful, self-taught tone **and adding a quick note about ethical use**:\n\n---\n\n# 🤖 AI Update: More Data, More Categories\n\nI’ve trained my AI with a bit more data and added some new categories! Now it can give a little more info:\n\n- Hot\n- Ugly\n- Fat\n- Asian\n- Badgirl\n\nLet’s try some new pics! 🙂\n\n---\n\n![Julianna Margulies](./Julianna_Margulies.jpg)\n**Julianna Margulies**\nHot: 0.29 | Ugly: 0.26 | Asian: 0.19 | Fat: 0.18 | Badgirl: 0.07\n\n![Cardi B](./cardi-b-rolling-stone-interview-cover_.jpg)\n**Cardi B**\nHot: 0.63 | Fat: 0.17 | Ugly: 0.12 | Badgirl: 0.07 | Asian: 0.003\n\n![I-Hua](./1111.jpg)\n**I-Hua**\nHot: 0.85 | Asian: 0.13 | Badgirl: 0.003 | Fat: 0.003 | Ugly: 0.001\n\n![Nicki Minaj](./nicki-minaj.jpg)\n**Nicki Minaj**\nHot: 0.98 | Fat: 0.007 | Ugly: 0.002 | Badgirl: 0.002 | Asian: 0.0003\n\n---\n\n⚠️ **Quick note on ethics:** This AI is just a silly experiment. Please remember that using AI to judge people’s appearance can be harmful or offensive — it’s fun to play with data, but always respect others and use AI responsibly! ❤️\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"-ai-update-more-data-more-categories","text":"🤖 AI Update: More Data, More Categories"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
