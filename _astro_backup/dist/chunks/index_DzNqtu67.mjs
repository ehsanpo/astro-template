import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_XooCfOyt.mjs';
import { g as getImage } from './_astro_assets_uTXWiZm6.mjs';
import 'clsx';

const Astro__ZQRNU7 = new Proxy({"src":"/_astro/1.DMyqjBox.png","width":1080,"height":1920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/1.png");
							return target[name];
						}
					});

const Astro__ZQNJIq = new Proxy({"src":"/_astro/2.kdYGgAr2.png","width":1080,"height":1920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/2.png");
							return target[name];
						}
					});

const Astro__ZQJFwJ = new Proxy({"src":"/_astro/3.Dy-jJNDT.png","width":1080,"height":1920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/3.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/3.png");
							return target[name];
						}
					});

const Astro__ZQpkzi = new Proxy({"src":"/_astro/8.BPeRyQJk.png","width":1080,"height":1920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/8.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/8.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZQRNU7, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZQNJIq, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./3\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./3.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZQJFwJ, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./8\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./8.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZQpkzi, ...props});
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
			const html = await updateImageReferences("<p>After my circle art phase, I wanted something more <em>alive</em>. Enter <a href=\"https://github.com/DeanIsMe/Wavepaper_Release\"><strong>Wavepaper</strong></a> — a tool for creating dreamy, flowing wave patterns. It’s like if math and the ocean had a baby.</p>\n<hr>\n<h2 id=\"the-wave-experiments\">The Wave Experiments</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./1.png&#x22;,&#x22;alt&#x22;:&#x22;Smooth flowing waves with gradient&#x22;,&#x22;index&#x22;:0}\">\n<em>Smooth and gradient-y</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./2.png&#x22;,&#x22;alt&#x22;:&#x22;Intersecting wave patterns&#x22;,&#x22;index&#x22;:0}\">\n<em>Overlapping chaos that somehow works</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./3.png&#x22;,&#x22;alt&#x22;:&#x22;Minimal wave design&#x22;,&#x22;index&#x22;:0}\">\n<em>Minimal, calm, clean</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./8.png&#x22;,&#x22;alt&#x22;:&#x22;Complex wave interference&#x22;,&#x22;index&#x22;:0}\">\n<em>When waves argue but make art</em></p>\n<hr>\n<h2 id=\"playing-with-wavepaper\">Playing With Wavepaper</h2>\n<p>Wavepaper made things super easy: no code, just sliders and instant visuals. I messed with:</p>\n<ul>\n<li><strong>Frequency</strong> (tight vs. loose waves)</li>\n<li><strong>Amplitude</strong> (calm vs. dramatic)</li>\n<li><strong>Colors</strong> and <strong>layering</strong> for mood</li>\n</ul>\n<p>The tiniest tweaks changed everything. Some of my best results came from total accidents 😅</p>\n<hr>\n<h2 id=\"what-i-learned\">What I Learned</h2>\n<ul>\n<li>Simple settings often look the best</li>\n<li>Layering adds depth and movement</li>\n<li>Color totally sets the emotion</li>\n<li>Happy glitches = bonus art</li>\n</ul>\n<p>Waves feel connected to generative music — both use math to make something <em>alive</em>.</p>\n<hr>\n<h2 id=\"whats-next\">What’s Next</h2>\n<p>I’m dreaming of:</p>\n<ul>\n<li><strong>Animated waves</strong></li>\n<li><strong>Interactive versions</strong></li>\n<li>Maybe combining <strong>circles + waves</strong> for a geometric/organic hybrid</li>\n</ul>\n<hr>\n<p>Working with waves has been oddly meditative — less precision, more flow. It reminds me that coding can be creative, and math can actually <em>feel</em> beautiful.</p>\n<p><em>(Got wave art or generative experiments? Drop them — I’d love to see what you’re making!)</em></p>");
	

				const frontmatter = {"title":"Generative Waves","description":"Exploring fluid, wave-like patterns in generative art using Wavepaper. A continuation of my journey into algorithmic art creation and mathematical beauty.","date":"2022-06-12","author":"Ehsan Pourhadi","category":["Generative Art","Creative Coding"],"tag":["Generative Art","Waves","Mathematical Art","Algorithmic Design"],"featured":false,"draft":false,"cover":"./1.png"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/index.md";
				const url = undefined;
				function rawContent() {
					return "\nAfter my circle art phase, I wanted something more _alive_. Enter [**Wavepaper**](https://github.com/DeanIsMe/Wavepaper_Release) — a tool for creating dreamy, flowing wave patterns. It’s like if math and the ocean had a baby.\n\n---\n\n## The Wave Experiments\n\n![Smooth flowing waves with gradient](./1.png)\n_Smooth and gradient-y_\n\n![Intersecting wave patterns](./2.png)\n_Overlapping chaos that somehow works_\n\n![Minimal wave design](./3.png)\n_Minimal, calm, clean_\n\n![Complex wave interference](./8.png)\n_When waves argue but make art_\n\n---\n\n## Playing With Wavepaper\n\nWavepaper made things super easy: no code, just sliders and instant visuals. I messed with:\n\n- **Frequency** (tight vs. loose waves)\n- **Amplitude** (calm vs. dramatic)\n- **Colors** and **layering** for mood\n\nThe tiniest tweaks changed everything. Some of my best results came from total accidents 😅\n\n---\n\n## What I Learned\n\n- Simple settings often look the best\n- Layering adds depth and movement\n- Color totally sets the emotion\n- Happy glitches = bonus art\n\nWaves feel connected to generative music — both use math to make something _alive_.\n\n---\n\n## What’s Next\n\nI’m dreaming of:\n\n- **Animated waves**\n- **Interactive versions**\n- Maybe combining **circles + waves** for a geometric/organic hybrid\n\n---\n\nWorking with waves has been oddly meditative — less precision, more flow. It reminds me that coding can be creative, and math can actually _feel_ beautiful.\n\n_(Got wave art or generative experiments? Drop them — I’d love to see what you’re making!)_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-wave-experiments","text":"The Wave Experiments"},{"depth":2,"slug":"playing-with-wavepaper","text":"Playing With Wavepaper"},{"depth":2,"slug":"what-i-learned","text":"What I Learned"},{"depth":2,"slug":"whats-next","text":"What’s Next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
