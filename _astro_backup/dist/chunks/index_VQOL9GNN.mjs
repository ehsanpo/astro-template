const id = "music-visualization-threejs/index.md";
						const collection = "blog";
						const slug = "music-visualization-threejs";
						const body = "\nI’ve been experimenting with **music visualization** using Three.js and one of my unreleased tracks. It’s basically my love for music + web dev mashed together — creating visuals that **dance to the beat in real-time**.\n\n---\n\n## 🔗 Live Demo\n\n<iframe\n  width=\"100%\"\n  height=\"500px\"\n  src=\"https://stirring-bienenstitch-82cd5b.netlify.app/\"\n  style=\"border: none; border-radius: 8px; margin: 20px 0;\"\n  title=\"Music Visualization Demo\">\n</iframe>\n\n_The visuals respond to the audio frequency — move your mouse, change the song, enjoy the chaos!_\n\n---\n\n## 🛠 Tech Stack\n\n- **Three.js** → 3D graphics & WebGL\n- **Web Audio API** → real-time audio analysis\n- **Vanilla JS** → keeping it simple\n\nKey features:\n\n- Particle systems reacting to bass, mids, highs\n- Color palettes that shift with music energy\n- Smooth animations synchronized to beats\n\n---\n\n## 💡 How I Built It\n\n1. **Audio Analysis** → grab frequency data with Web Audio API\n2. **3D Scene** → particles in Three.js respond to frequencies\n3. **Animation Loop** → update visuals every frame to match audio\n\n---\n\n## 🎨 Creative Decisions\n\n- Cool colors for calm sections, warm colors for intense parts\n- Momentum-based particle motion for natural flow\n- Less = more — simple effects often look better than over-the-top chaos\n\n---\n\n## ⚡ Challenges\n\n- **Performance** → solved with instanced particles, optimized shaders, adaptive quality\n- **Audio sync** → low-latency audio + multiple frequency bands\n- **Cross-browser issues** → feature detection & fallbacks\n\n---\n\n## ✨ What I Learned\n\n- Smooth visuals > flashy but laggy\n- Frequency analysis reveals hidden patterns in music\n- Colors and motion dramatically affect mood\n- Interactive elements make people feel connected\n\n---\n\n## 🔮 Future Fun\n\n- VR/AR support for full immersion\n- Multi-track visualization for complex songs\n- User-customizable colors & effects\n- Export features & social sharing\n\n---\n\nThis project is my playground where **code meets creativity**. Music visualization isn’t just pretty lights — it’s about **translating audio into emotion**, finding patterns, and creating interactive experiences.\n\n_Code is on GitHub — tweak it, remix it, make your own musical visual world._\n";
						const data = {title:"Music Visualization with Three.js",description:"Experimenting with WebGL-based music visualization using Three.js. Creating immersive 3D visual experiences that react to audio in real-time.",date:"2022-06-12",author:"Ehsan Pourhadi",category:["Web Development","Creative Coding"],tag:["Three.js","WebGL","Music Visualization","JavaScript","Audio"],cover:
						new Proxy({"src":"/_astro/cover.0WKCGBNH.png","width":2816,"height":1536,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/blog/music-visualization-threejs/cover.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/music-visualization-threejs/cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/music-visualization-threejs/cover.png");
							return target[name];
						}
					})
					,featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Ehsan/dev/astro-template/src/content/blog/music-visualization-threejs/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
