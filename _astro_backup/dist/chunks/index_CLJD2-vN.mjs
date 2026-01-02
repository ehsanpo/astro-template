import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_XooCfOyt.mjs';
import { g as getImage } from './_astro_assets_uTXWiZm6.mjs';
import 'clsx';

const Astro__Z1A1lmC = new Proxy({"src":"/_astro/circle-8_10.BgOt-s8P.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-8+10.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-8+10.png");
							return target[name];
						}
					});

const Astro__Z2izoqH = new Proxy({"src":"/_astro/circle-1.D73gNAOY.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-1.png");
							return target[name];
						}
					});

const Astro__Z2ivkf1 = new Proxy({"src":"/_astro/circle-2.DANNhtbV.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-2.png");
							return target[name];
						}
					});

const Astro__Z2ij7EW = new Proxy({"src":"/_astro/circle-5.BAjr9xOr.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-5.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-5.png");
							return target[name];
						}
					});

const Astro__Z2if3tg = new Proxy({"src":"/_astro/circle-6.B_MrWqUj.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-6.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-6.png");
							return target[name];
						}
					});

const Astro__Z2iaYhz = new Proxy({"src":"/_astro/circle-7.Eyh2oL2e.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-7.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-7.png");
							return target[name];
						}
					});

const Astro__Z2i6U5S = new Proxy({"src":"/_astro/circle-8.C0TRaCmU.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-8.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-8.png");
							return target[name];
						}
					});

const Astro__Z2i2PTc = new Proxy({"src":"/_astro/circle-9.BwcJqjHL.png","width":2160,"height":2160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-9.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/circle-9.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-8\\+10\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-8+10.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1A1lmC, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2izoqH, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2ivkf1, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-5\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-5.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2ij7EW, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-6\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-6.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2if3tg, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-7\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-7.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2iaYhz, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-8\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-8.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2i6U5S, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./circle-9\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./circle-9.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2i2PTc, ...props});
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
			const html = await updateImageReferences("<p>Okay so, recently I’ve been messing around with <strong>generative music</strong> in Propellerhead Reason (mostly as a form of procrastination, let’s be honest 😅). It started as a “let’s just see what happens” experiment and turned into a surprisingly fun rabbit hole.</p>\n<p>You can actually hear one of my chaotic little audio creatures here:</p>\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&#x26;color=%23ff5500&#x26;auto_play=false&#x26;hide_related=true&#x26;show_comments=false&#x26;show_user=true&#x26;show_reposts=false&#x26;show_teaser=false\"></iframe>\n<p><em>(yes, that’s one of my generative music tests — don’t judge me 😬)</em></p>\n<hr>\n<h2 id=\"from-music-to-visuals-️\">From Music to Visuals 🎶➡️🎨</h2>\n<p>After spending way too many nights tweaking synth patches, I started thinking… what if I did the same thing visually? Like, <strong>generative art</strong> but for my eyeballs instead of my ears.</p>\n<p>So I did what any normal person would do: opened ten browser tabs, fell into a GitHub hole, and discovered people making wild generative visuals in <strong>R</strong>, <strong>Go</strong>, and <strong>Python</strong>.</p>\n<p>And wow. The stuff people do with just a few lines of code is <em>ridiculous</em>.</p>\n<hr>\n<h2 id=\"setting-things-up-aka-the-java-saga\">Setting Things Up (a.k.a. The Java Saga)</h2>\n<p>Naturally, I decided to try it myself. Installed <strong>R</strong>. Then installed <strong>Processing 3</strong> on my Mac.\nAnd… yeah, that was a disaster. 🙃</p>\n<p>Processing 3 and Java apparently have beef, because nothing worked. After a few hours of debugging (and a small existential crisis), I rolled back to <strong>Processing v2</strong> and — hallelujah! — it worked.</p>\n<p>Circles appeared! Pretty ones!</p>\n<p>Honestly, at that point, I didn’t even care <em>how</em> it worked. I just wanted to make cool visuals and pretend I was an algorithmic artist.</p>\n<hr>\n<h2 id=\"the-results-woohoo\">The Results (woohoo! 🎉)</h2>\n<p>Here’s a few of the patterns I made:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-8+10.png&#x22;,&#x22;alt&#x22;:&#x22;Circular generative art with overlapping patterns&#x22;,&#x22;index&#x22;:0}\">\n<em>Complex overlapping circles that look like they’re plotting something</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-1.png&#x22;,&#x22;alt&#x22;:&#x22;Simple circular pattern&#x22;,&#x22;index&#x22;:0}\">\n<em>Minimalist and chill</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-2.png&#x22;,&#x22;alt&#x22;:&#x22;Geometric circular design&#x22;,&#x22;index&#x22;:0}\">\n<em>Geometric perfection vibes</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-5.png&#x22;,&#x22;alt&#x22;:&#x22;Organic circular pattern&#x22;,&#x22;index&#x22;:0}\">\n<em>Kinda flowy, kinda alive</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-6.png&#x22;,&#x22;alt&#x22;:&#x22;Dense circular pattern&#x22;,&#x22;index&#x22;:0}\">\n<em>Dense and slightly overwhelming (like my brain on coffee)</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-7.png&#x22;,&#x22;alt&#x22;:&#x22;Radiating circles&#x22;,&#x22;index&#x22;:0}\">\n<em>Sunburst-y and dramatic</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-8.png&#x22;,&#x22;alt&#x22;:&#x22;Nested circles&#x22;,&#x22;index&#x22;:0}\">\n<em>Like circles inside circles inside circles…</em></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./circle-9.png&#x22;,&#x22;alt&#x22;:&#x22;Dynamic circular composition&#x22;,&#x22;index&#x22;:0}\">\n<em>Looks like it might start spinning if I stare too long</em></p>\n<hr>\n<h2 id=\"what-i-learned-aka-why-circles-are-secretly-deep\">What I Learned (aka why circles are secretly deep)</h2>\n<h3 id=\"-the-beauty-of-algorithms\">💡 The Beauty of Algorithms</h3>\n<p>Even though it was all circles, every image turned out <em>so different</em>.\nLike:</p>\n<ul>\n<li><strong>Precise math</strong> vs. <strong>random chaos</strong></li>\n<li><strong>Dense complexity</strong> vs. <strong>clean minimalism</strong></li>\n<li><strong>Overlapping madness</strong> vs. <strong>perfect geometry</strong></li>\n</ul>\n<p>It’s wild how much personality a few lines of code can have.</p>\n<hr>\n<h3 id=\"-processing-vs-r\">🧠 Processing vs. R</h3>\n<p>So I played around with both:</p>\n<ul>\n<li><strong>Processing</strong> → felt way more natural for visuals. You draw, you tweak, you see results instantly.</li>\n<li><strong>R</strong> → more technical but sooo good if you want mathematical control.</li>\n<li>Both communities are super active and helpful (thank you, random forum strangers 🙏).</li>\n</ul>\n<hr>\n<h3 id=\"-creativity-through-constraints\">🎨 Creativity Through Constraints</h3>\n<p>Here’s the funny thing — when I limited myself to <strong>just circles</strong>, I got <em>way</em> more creative. Like, weirdly so.</p>\n<p>By only tweaking stuff like:</p>\n<ul>\n<li>size</li>\n<li>opacity</li>\n<li>color gradients</li>\n<li>how they overlap or intersect</li>\n<li>little position algorithms</li>\n</ul>\n<p>…I ended up with endless variations. Turns out “less is more” actually works sometimes (who knew?).</p>\n<hr>\n<h2 id=\"my-tech-setup-for-the-curious-nerds\">My Tech Setup (for the curious nerds 👩‍💻)</h2>\n<p><strong>What worked:</strong></p>\n<ul>\n<li>Processing 2 (don’t ask me about v3 😩)</li>\n<li>Basic geometry functions</li>\n<li>Simple random() stuff</li>\n<li>Layer blending (chef’s kiss)</li>\n</ul>\n<p><strong>My super scientific process:</strong></p>\n<ol>\n<li>Draw a circle.</li>\n<li>Randomize everything.</li>\n<li>Go “hmm, interesting.”</li>\n<li>Add color + opacity.</li>\n<li>Layer it a bunch until it looks artsy.</li>\n<li>Screenshot it before it breaks.</li>\n</ol>\n<hr>\n<h2 id=\"why-i-love-generative-art\">Why I Love Generative Art 💖</h2>\n<p>It’s that <strong>element of surprise</strong>. You give the computer rules, and it goes, “cool, but what if I did this instead?”</p>\n<p>You’re not <em>making</em> the art — you’re <em>collaborating</em> with the algorithm. It’s half you, half the machine, and 100% unexpected.</p>\n<p>Every image feels both planned and chaotic at the same time. Like art with a mind of its own.</p>\n<hr>\n<p>So yeah — what started as a music experiment turned into me falling in love with algorithmic circles.</p>\n<p>Who needs perfection when you have randomness, right? 😉</p>\n<p><em>(P.S. If you’ve made generative art, please share! I love seeing what other curious nerds create ❤️)</em></p>");
	

				const frontmatter = {"title":"Generative Art - Drawing Circles","description":"My journey into generative art using Processing and R. Creating beautiful circular patterns through code and exploring the intersection of programming and visual art.","date":"2022-01-08","author":"Ehsan Pourhadi","category":["Generative Art","Creative Coding"],"tag":["Processing","R Programming","Generative Art","Visual Art","Creative Coding"],"featured":false,"draft":false,"cover":"./circle-8+10.png"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/index.md";
				const url = undefined;
				function rawContent() {
					return "\nOkay so, recently I’ve been messing around with **generative music** in Propellerhead Reason (mostly as a form of procrastination, let’s be honest 😅). It started as a “let’s just see what happens” experiment and turned into a surprisingly fun rabbit hole.\n\nYou can actually hear one of my chaotic little audio creatures here:\n\n<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false\"></iframe>\n\n_(yes, that’s one of my generative music tests — don’t judge me 😬)_\n\n---\n\n## From Music to Visuals 🎶➡️🎨\n\nAfter spending way too many nights tweaking synth patches, I started thinking… what if I did the same thing visually? Like, **generative art** but for my eyeballs instead of my ears.\n\nSo I did what any normal person would do: opened ten browser tabs, fell into a GitHub hole, and discovered people making wild generative visuals in **R**, **Go**, and **Python**.\n\nAnd wow. The stuff people do with just a few lines of code is _ridiculous_.\n\n---\n\n## Setting Things Up (a.k.a. The Java Saga)\n\nNaturally, I decided to try it myself. Installed **R**. Then installed **Processing 3** on my Mac.\nAnd… yeah, that was a disaster. 🙃\n\nProcessing 3 and Java apparently have beef, because nothing worked. After a few hours of debugging (and a small existential crisis), I rolled back to **Processing v2** and — hallelujah! — it worked.\n\nCircles appeared! Pretty ones!\n\nHonestly, at that point, I didn’t even care _how_ it worked. I just wanted to make cool visuals and pretend I was an algorithmic artist.\n\n---\n\n## The Results (woohoo! 🎉)\n\nHere’s a few of the patterns I made:\n\n![Circular generative art with overlapping patterns](./circle-8+10.png)\n_Complex overlapping circles that look like they’re plotting something_\n\n![Simple circular pattern](./circle-1.png)\n_Minimalist and chill_\n\n![Geometric circular design](./circle-2.png)\n_Geometric perfection vibes_\n\n![Organic circular pattern](./circle-5.png)\n_Kinda flowy, kinda alive_\n\n![Dense circular pattern](./circle-6.png)\n_Dense and slightly overwhelming (like my brain on coffee)_\n\n![Radiating circles](./circle-7.png)\n_Sunburst-y and dramatic_\n\n![Nested circles](./circle-8.png)\n_Like circles inside circles inside circles..._\n\n![Dynamic circular composition](./circle-9.png)\n_Looks like it might start spinning if I stare too long_\n\n---\n\n## What I Learned (aka why circles are secretly deep)\n\n### 💡 The Beauty of Algorithms\n\nEven though it was all circles, every image turned out _so different_.\nLike:\n\n- **Precise math** vs. **random chaos**\n- **Dense complexity** vs. **clean minimalism**\n- **Overlapping madness** vs. **perfect geometry**\n\nIt’s wild how much personality a few lines of code can have.\n\n---\n\n### 🧠 Processing vs. R\n\nSo I played around with both:\n\n- **Processing** → felt way more natural for visuals. You draw, you tweak, you see results instantly.\n- **R** → more technical but sooo good if you want mathematical control.\n- Both communities are super active and helpful (thank you, random forum strangers 🙏).\n\n---\n\n### 🎨 Creativity Through Constraints\n\nHere’s the funny thing — when I limited myself to **just circles**, I got _way_ more creative. Like, weirdly so.\n\nBy only tweaking stuff like:\n\n- size\n- opacity\n- color gradients\n- how they overlap or intersect\n- little position algorithms\n\n…I ended up with endless variations. Turns out “less is more” actually works sometimes (who knew?).\n\n---\n\n## My Tech Setup (for the curious nerds 👩‍💻)\n\n**What worked:**\n\n- Processing 2 (don’t ask me about v3 😩)\n- Basic geometry functions\n- Simple random() stuff\n- Layer blending (chef’s kiss)\n\n**My super scientific process:**\n\n1. Draw a circle.\n2. Randomize everything.\n3. Go “hmm, interesting.”\n4. Add color + opacity.\n5. Layer it a bunch until it looks artsy.\n6. Screenshot it before it breaks.\n\n---\n\n## Why I Love Generative Art 💖\n\nIt’s that **element of surprise**. You give the computer rules, and it goes, “cool, but what if I did this instead?”\n\nYou’re not _making_ the art — you’re _collaborating_ with the algorithm. It’s half you, half the machine, and 100% unexpected.\n\nEvery image feels both planned and chaotic at the same time. Like art with a mind of its own.\n\n---\n\nSo yeah — what started as a music experiment turned into me falling in love with algorithmic circles.\n\nWho needs perfection when you have randomness, right? 😉\n\n_(P.S. If you’ve made generative art, please share! I love seeing what other curious nerds create ❤️)_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"from-music-to-visuals-️","text":"From Music to Visuals 🎶➡️🎨"},{"depth":2,"slug":"setting-things-up-aka-the-java-saga","text":"Setting Things Up (a.k.a. The Java Saga)"},{"depth":2,"slug":"the-results-woohoo","text":"The Results (woohoo! 🎉)"},{"depth":2,"slug":"what-i-learned-aka-why-circles-are-secretly-deep","text":"What I Learned (aka why circles are secretly deep)"},{"depth":3,"slug":"-the-beauty-of-algorithms","text":"💡 The Beauty of Algorithms"},{"depth":3,"slug":"-processing-vs-r","text":"🧠 Processing vs. R"},{"depth":3,"slug":"-creativity-through-constraints","text":"🎨 Creativity Through Constraints"},{"depth":2,"slug":"my-tech-setup-for-the-curious-nerds","text":"My Tech Setup (for the curious nerds 👩‍💻)"},{"depth":2,"slug":"why-i-love-generative-art","text":"Why I Love Generative Art 💖"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
