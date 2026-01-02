const id = "waverider/waverider.md";
						const collection = "products";
						const slug = "waverider/waverider";
						const body = "\n<h2>The Origin Story:</h2>\n\nAt 2 AM, hunched over a MacBook like a possessed gremlin, tilting it left and right to play _Tunnel_ by Uri. No keyboard. No mouse. Just pure physical movement and one devastating realization: **What if I could play this inside my own music?**\n\nThe idea wouldn't leave. Weeks of thinking. Studio sessions layering kicks, sculpting reverb tails. A producer's life is built on digital signal processing—FFT analysis, spectral bands, RMS curves, transient detection. These tools shape sound. What if they shaped _geometry_ instead?\n\nWhat if the music _was_ the level itself?\n\n<h2>The Concept:</h2>\n\nWaveRider is a hybrid experience at the intersection of music production and game design. It's not a game with a soundtrack. It's not a visualizer with gameplay. It's a **portal into the sonic worlds created through music**.\n\nEvery track is analyzed to extract:\n\n- Frequency bands (bass, mids, treble)\n- Amplitude envelopes\n- BPM and beat timestamps\n- Over 4,000 analysis points per song\n\nThese sonic details become tunnel geometry:\n\n- 🥁 **Beats** make the tunnel pulse and narrow\n- 🔊 **Bass** creates massive left-right movements\n- ✨ **Treble** adds micro-wiggles and twitchy details\n- 🌫 **Quiet moments** let the world open up and breathe\n\n<br />\n\n<h2>Technical Architecture:</h2>\n\n<ul>\n  <li>\n    <h3>Audio Analysis Pipeline:</h3>\n    Custom signal processing extracts frequency bands, amplitude envelopes, and beat timestamps from unreleased tracks. Pre-analysis generates 4,000+ analysis points per song, creating rich geometric data.\n  </li>\n  <li>\n    <h3>Game Engine:</h3>\n    Built with <strong>React Native</strong> and <strong>Expo</strong> for cross-platform mobile deployment. Custom SVG-based tunnel renderer runs at 60 FPS with real-time collision detection and accelerometer-based steering.\n  </li>\n  <li>\n    <h3>Backend Infrastructure:</h3>\n    <strong>Supabase</strong> serves as the backbone: Auth for player accounts, Storage for music uploads, Database for levels, scores, and pre-generated geometry. Pre-analysis prevents runtime generation overhead—everything is instant on every device.\n  </li>\n  <li>\n    <h3>Game Systems:</h3>\n    Real collision detection, accelerometer-based steering, unlockable ships, power-ups and enemies, endless looping gameplay, and live online leaderboards. The tunnel scrolls smoothly at 60 FPS with zero loading delays.\n  </li>\n  <li>\n    <h3>Development Optimization:</h3>\n    Pre-analyzed geometry is uploaded once to Supabase and instantly playable across all devices. No runtime generation. No battery drain. Pure responsiveness.\n  </li>\n</ul>\n\n<br />\n\n<h2>The Experience:</h2>\n\nYou're holding your phone. Tilt slightly left. The neon tunnel curves with you—smooth, responsive, _alive_. A kick drum hits. The tunnel _contracts_ around you like a heartbeat. Tilt right to dodge the narrowing walls. A bass drop throws you sideways. You're fighting to stay centered.\n\nTreble kicks in—tiny, flickering movements, micro-adjustments you feel in your fingertips. You're not listening to music anymore.\n\n**You're inside it.**\n\nThe tunnel isn't random. It's the producer's sound. Every twist, every pulse, every moment of space or chaos—a direct reflection of the music created. You're not playing a game with a soundtrack. You're falling into a wormhole made of sound.\n\n<br />\n\n<iframe width=\"100%\" height=\"600\" style=\"border-radius: 8px; margin: 2rem 0;\" src=\"https://www.youtube.com/embed/laWv14Y59hg\" title=\"WaveRider Gameplay\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowFullScreen></iframe>\n\n<br />\n\n<h2>Why This Matters:</h2>\n\nFor years, people said the music felt \"dimensional\" or \"cinematic.\" They said it sounds like another place. So the challenge became simple: stop describing that place and build it.\n\nWaveRider is the bridge between two worlds that shouldn't have been separate:\n\n- **Music Producer** (signal processing, sound design, artistic vision)\n- **Software Developer** (architecture, systems design, technical execution)\n\nThe result is something that can only exist at that intersection—a game designed entirely from the language of sound itself.\n\n<br />\n\n<h2>Outcome:</h2>\n\nWaveRider successfully transforms abstract audio data into playable, engaging geometry. Players aren't just experiencing another playlist or game. They're riding inside the sonic architecture of unreleased tracks, tasting the producer's creative decisions through gameplay. Every kick drum, bass drop, and harmonic shimmer becomes tactile.\n\nWhen someone tilts their phone, dodging neon walls sculpted from unreleased music, riding the bass drops and feeling the kick drums contract space around them—they're experiencing the same magic felt that night tilting a MacBook in the dark.\n\nExcept now, they're not just playing a game.\n\n**They're riding inside the sound.**\n\n🚀🎶🌌\n";
						const data = {title:"WaveRider",tagline:"Play inside the sound of your music",date:"2025-12-08",permalink:"waverider",client:"Self",agency:"Freelance",category:["Game"],tag:["React Native","Expo","TypeScript","Audio Analysis","Game Design","Supabase","Signal Processing"],background_image:
						new Proxy({"src":"/_astro/Mockups_iPhone_15_Pro2.0gV_RuFd.jpg","width":1200,"height":900,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg");
							return target[name];
						}
					})
					,logo:
						new Proxy({"src":"/_astro/cover2.Dt76Iihj.jpg","width":1440,"height":1080,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg");
							return target[name];
						}
					})
					,logo2:
						new Proxy({"src":"/_astro/icon.3A9KaHNR.png","width":2048,"height":2048,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png");
							return target[name];
						}
					})
					,images:[
						new Proxy({"src":"/_astro/iPhone_14_Pro_Max_14.J9wqQnEO.jpg","width":1200,"height":900,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/cover2.Dt76Iihj.jpg","width":1440,"height":1080,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/Mockups_iPhone_15_Pro2.0gV_RuFd.jpg","width":1200,"height":900,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/gameover.BzHBpICa.png","width":414,"height":896,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/gameplay.B15tk6eP.png","width":414,"height":896,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/leaderboard.BSaP6dNk.png","width":414,"height":896,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/levels.BH7jMucP.png","width":414,"height":896,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/settings.C7ex9owb.png","width":414,"height":896,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png");
							return target[name];
						}
					})
					,
						new Proxy({"src":"/_astro/ship-insop.DLicD345.png","width":1024,"height":1024,"format":"png","fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png");
							return target[name];
						}
					})
					],onHome:false,type:"product"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/waverider.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
