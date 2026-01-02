const id = "getting-started-with-react-native/index.md";
						const collection = "blog";
						const slug = "getting-started-with-react-native";
						const body = "\nI’ve been using React for years, but somehow never touched **React Native**. No reason — just never had a project idea.\nThen one day I saw a random Reddit post about the **Pigpen cipher** (yep, that funky symbol-based code thing 🕵️‍♂️), and suddenly I was like:\n\n> “Wait… what if I turned this into an app so I can send secret messages to friends?”\n\nAnd that’s how the chaos began.\n\n![Pigpen cipher key diagram](./pigpen-cipher-key.png)\n_The classic Pigpen cipher key — letters turned into secret symbols_\n\n---\n\n## Discovering Expo 🚀\n\nAfter a quick Google dive, I found [**Expo**](https://expo.io/) — basically React Native’s best friend. It sets up everything for you, zero config.\n\nI ran:\n\n```bash\nnpm install -g expo-cli\nexpo init Pigpen-cipher\nexpo start --web\n```\n\nBoom. Instant app with working tabs. One for **encrypting**, one for **decrypting**. I could even preview it in my browser — felt like magic.\n\n---\n\n## The SVG Meltdown 🎨💀\n\nThen I tested it on iOS and… my SVG symbols were _gone_. Poof.\nHours of Googling later, I tried different libraries, converted all my SVGs into React components, and still — nothing.\nTurns out, I just **forgot to set width and height** on each SVG. 😭\n\n<iframe allowfullscreen=\"\" class=\"giphy-embed\" frameborder=\"0\" height=\"300\" src=\"https://giphy.com/embed/6xcqPF9MTwChq\" width=\"300\" style=\"margin: 20px auto; display: block;\"></iframe>\n_That “ohhhh” moment when the bug finally makes sense 😅_\n\n---\n\n## Success! 🎉\n\nOnce I fixed that, everything worked perfectly. You could tap the symbols to **decrypt messages** or type and **encrypt text** back into Pigpen symbols.\n\nNext on the list: let users **save** their secret message as an image to share.\n\n---\n\n## What’s Next\n\nPushed everything to GitHub (because of course 😎):\n👉 [**Pigpen Cipher App on GitHub**](https://github.com/ehsanpo/Pigpen-cipher)\n\nMy plan:\n\n- Use `react-native-view-shot` to convert the screen to an image\n- Use `react-native-cameraroll` to save it locally\n\nBasically, turning secret code into shareable art.\n\n---\n\n## Key Takeaways 💡\n\n1. **Expo is amazing** — zero setup, instant app.\n2. **SVGs need explicit width & height** (learned that the hard way).\n3. **Test on real devices**, not just web.\n4. Sometimes the “bug” is just… you. 😅\n\nIf you’re new to React Native — start with Expo, mess around, break stuff, fix it, and repeat. You’ll learn _so fast_.\n\n---\n\n_Wanna try decoding your own messages? Check out the [GitHub repo](https://github.com/ehsanpo/Pigpen-cipher) and send me your secret notes 🕶️_\n";
						const data = {title:"Getting Started with React Native",description:"My journey into React Native development, building a Pigpen cipher app from idea to implementation. Learn about the challenges and solutions when working with SVGs in React Native.",date:"2020-01-14",author:"Ehsan Pourhadi",category:["Mobile Development","React Native"],tag:["React Native","Expo","Mobile","JavaScript","SVG"],cover:
						new Proxy({"src":"/_astro/pigpen-cover.CSf9dB5G.png","width":1024,"height":1024,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/pigpen-cover.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/pigpen-cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/pigpen-cover.png");
							return target[name];
						}
					})
					,featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
