import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_XooCfOyt.mjs';
import { g as getImage } from './_astro_assets_uTXWiZm6.mjs';
import 'clsx';

const Astro__1IicGU = new Proxy({"src":"/_astro/pigpen-cipher-key.D6gOT3l0.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/pigpen-cipher-key.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/pigpen-cipher-key.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./pigpen-cipher-key\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./pigpen-cipher-key.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1IicGU, ...props});
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
			const html = await updateImageReferences("<p>I’ve been using React for years, but somehow never touched <strong>React Native</strong>. No reason — just never had a project idea.\nThen one day I saw a random Reddit post about the <strong>Pigpen cipher</strong> (yep, that funky symbol-based code thing 🕵️‍♂️), and suddenly I was like:</p>\n<blockquote>\n<p>“Wait… what if I turned this into an app so I can send secret messages to friends?”</p>\n</blockquote>\n<p>And that’s how the chaos began.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./pigpen-cipher-key.png&#x22;,&#x22;alt&#x22;:&#x22;Pigpen cipher key diagram&#x22;,&#x22;index&#x22;:0}\">\n<em>The classic Pigpen cipher key — letters turned into secret symbols</em></p>\n<hr>\n<h2 id=\"discovering-expo\">Discovering Expo 🚀</h2>\n<p>After a quick Google dive, I found <a href=\"https://expo.io/\"><strong>Expo</strong></a> — basically React Native’s best friend. It sets up everything for you, zero config.</p>\n<p>I ran:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#79B8FF\"> -g</span><span style=\"color:#9ECBFF\"> expo-cli</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">expo</span><span style=\"color:#9ECBFF\"> init</span><span style=\"color:#9ECBFF\"> Pigpen-cipher</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">expo</span><span style=\"color:#9ECBFF\"> start</span><span style=\"color:#79B8FF\"> --web</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Boom. Instant app with working tabs. One for <strong>encrypting</strong>, one for <strong>decrypting</strong>. I could even preview it in my browser — felt like magic.</p>\n<hr>\n<h2 id=\"the-svg-meltdown\">The SVG Meltdown 🎨💀</h2>\n<p>Then I tested it on iOS and… my SVG symbols were <em>gone</em>. Poof.\nHours of Googling later, I tried different libraries, converted all my SVGs into React components, and still — nothing.\nTurns out, I just <strong>forgot to set width and height</strong> on each SVG. 😭</p>\n<iframe allowfullscreen class=\"giphy-embed\" frameborder=\"0\" height=\"300\" src=\"https://giphy.com/embed/6xcqPF9MTwChq\" width=\"300\" style=\"margin: 20px auto; display: block;\"></iframe>\n_That “ohhhh” moment when the bug finally makes sense 😅_\n<hr>\n<h2 id=\"success\">Success! 🎉</h2>\n<p>Once I fixed that, everything worked perfectly. You could tap the symbols to <strong>decrypt messages</strong> or type and <strong>encrypt text</strong> back into Pigpen symbols.</p>\n<p>Next on the list: let users <strong>save</strong> their secret message as an image to share.</p>\n<hr>\n<h2 id=\"whats-next\">What’s Next</h2>\n<p>Pushed everything to GitHub (because of course 😎):\n👉 <a href=\"https://github.com/ehsanpo/Pigpen-cipher\"><strong>Pigpen Cipher App on GitHub</strong></a></p>\n<p>My plan:</p>\n<ul>\n<li>Use <code>react-native-view-shot</code> to convert the screen to an image</li>\n<li>Use <code>react-native-cameraroll</code> to save it locally</li>\n</ul>\n<p>Basically, turning secret code into shareable art.</p>\n<hr>\n<h2 id=\"key-takeaways\">Key Takeaways 💡</h2>\n<ol>\n<li><strong>Expo is amazing</strong> — zero setup, instant app.</li>\n<li><strong>SVGs need explicit width &#x26; height</strong> (learned that the hard way).</li>\n<li><strong>Test on real devices</strong>, not just web.</li>\n<li>Sometimes the “bug” is just… you. 😅</li>\n</ol>\n<p>If you’re new to React Native — start with Expo, mess around, break stuff, fix it, and repeat. You’ll learn <em>so fast</em>.</p>\n<hr>\n<p><em>Wanna try decoding your own messages? Check out the <a href=\"https://github.com/ehsanpo/Pigpen-cipher\">GitHub repo</a> and send me your secret notes 🕶️</em></p>");
	

				const frontmatter = {"title":"Getting Started with React Native","description":"My journey into React Native development, building a Pigpen cipher app from idea to implementation. Learn about the challenges and solutions when working with SVGs in React Native.","date":"2020-01-14","author":"Ehsan Pourhadi","category":["Mobile Development","React Native"],"tag":["React Native","Expo","Mobile","JavaScript","SVG"],"featured":false,"draft":false,"cover":"./pigpen-cover.png"};
				const file = "C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/index.md";
				const url = undefined;
				function rawContent() {
					return "\nI’ve been using React for years, but somehow never touched **React Native**. No reason — just never had a project idea.\nThen one day I saw a random Reddit post about the **Pigpen cipher** (yep, that funky symbol-based code thing 🕵️‍♂️), and suddenly I was like:\n\n> “Wait… what if I turned this into an app so I can send secret messages to friends?”\n\nAnd that’s how the chaos began.\n\n![Pigpen cipher key diagram](./pigpen-cipher-key.png)\n_The classic Pigpen cipher key — letters turned into secret symbols_\n\n---\n\n## Discovering Expo 🚀\n\nAfter a quick Google dive, I found [**Expo**](https://expo.io/) — basically React Native’s best friend. It sets up everything for you, zero config.\n\nI ran:\n\n```bash\nnpm install -g expo-cli\nexpo init Pigpen-cipher\nexpo start --web\n```\n\nBoom. Instant app with working tabs. One for **encrypting**, one for **decrypting**. I could even preview it in my browser — felt like magic.\n\n---\n\n## The SVG Meltdown 🎨💀\n\nThen I tested it on iOS and… my SVG symbols were _gone_. Poof.\nHours of Googling later, I tried different libraries, converted all my SVGs into React components, and still — nothing.\nTurns out, I just **forgot to set width and height** on each SVG. 😭\n\n<iframe allowfullscreen=\"\" class=\"giphy-embed\" frameborder=\"0\" height=\"300\" src=\"https://giphy.com/embed/6xcqPF9MTwChq\" width=\"300\" style=\"margin: 20px auto; display: block;\"></iframe>\n_That “ohhhh” moment when the bug finally makes sense 😅_\n\n---\n\n## Success! 🎉\n\nOnce I fixed that, everything worked perfectly. You could tap the symbols to **decrypt messages** or type and **encrypt text** back into Pigpen symbols.\n\nNext on the list: let users **save** their secret message as an image to share.\n\n---\n\n## What’s Next\n\nPushed everything to GitHub (because of course 😎):\n👉 [**Pigpen Cipher App on GitHub**](https://github.com/ehsanpo/Pigpen-cipher)\n\nMy plan:\n\n- Use `react-native-view-shot` to convert the screen to an image\n- Use `react-native-cameraroll` to save it locally\n\nBasically, turning secret code into shareable art.\n\n---\n\n## Key Takeaways 💡\n\n1. **Expo is amazing** — zero setup, instant app.\n2. **SVGs need explicit width & height** (learned that the hard way).\n3. **Test on real devices**, not just web.\n4. Sometimes the “bug” is just… you. 😅\n\nIf you’re new to React Native — start with Expo, mess around, break stuff, fix it, and repeat. You’ll learn _so fast_.\n\n---\n\n_Wanna try decoding your own messages? Check out the [GitHub repo](https://github.com/ehsanpo/Pigpen-cipher) and send me your secret notes 🕶️_\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"discovering-expo","text":"Discovering Expo 🚀"},{"depth":2,"slug":"the-svg-meltdown","text":"The SVG Meltdown 🎨💀"},{"depth":2,"slug":"success","text":"Success! 🎉"},{"depth":2,"slug":"whats-next","text":"What’s Next"},{"depth":2,"slug":"key-takeaways","text":"Key Takeaways 💡"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
