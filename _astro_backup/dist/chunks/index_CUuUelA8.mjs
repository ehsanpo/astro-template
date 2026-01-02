const id = "my-first-machine-learning-project/index.md";
						const collection = "blog";
						const slug = "my-first-machine-learning-project";
						const body = "\nLately, I’ve been diving into AI and ML. Big companies like Google and Microsoft are everywhere with it, and I’ve played with Google Vision for fun. But making my own ML stuff? That felt scary.\n\nI work as a **full-stack developer** at [Guts & Glory](http://gutsglory.se/) in Sweden — mostly building WordPress sites from designs. I’m not a hardcore programmer, but I love GitHub. If there’s a repo with a solid README, I can usually clone it, run it, and tweak things until it works.\n\n---\n\n## The Crazy Idea 💡\n\nEveryone talks about AI taking over jobs… so I thought: _maybe I can build the AI that takes over mine!_\n\nStep 1: AI looks at a design → slices it into sections → detects elements (text, images, colors, spacing) → uses pre-written HTML/CSS to build a WordPress site.\n\nStep 2: Realize that’s waaaay too ambitious for a first ML project 😅\n\nSo I needed a side project to **train on something simpler**. Inspiration hit while watching _Silicon Valley_ — the “hotdog or not” AI. My brain immediately went:\n\n> “I’ll build an AI that rates how hot faces are! Don’t judge me!”\n\n---\n\n## Finding the Code 🐍\n\nI found some Python/TensorFlow/OpenCV repos:\n\n- [Hotdog Classification](https://github.com/hayzamjs/Hotdog-Classification)\n- [Guide on TensorFlow Hotdogs](https://aboveintelligent.com/using-tensorflow-to-classify-hotdogs-8494fb85d875)\n\nProblem: I don’t know Python 😅. Spent ~2 hours fixing versions and missing models. Finally got it running!\n\n---\n\n## Gathering Data 🖼️\n\nFirst attempt: Google image search for “pretty girls” vs. “ugly girls” and download with **Fatkun Batch**.\n\nProblem: I only want **faces**, not the whole picture.\n\nSolution: Use a face-cropping script:\n\n- [Face Cropping GitHub](https://github.com/icchi-h/face-cropping)\n\nAfter cleaning up wrong detections, I had ~1,000 “pretty” and ~400 “ugly” faces.\n\n---\n\n## Training & Testing 🏋️\n\nAfter training, I tested:\n\n- **Kate Upton** → hot 0.96 ✅\n- **Rihanna** → hot 0.99 ✅\n- **Miley Cyrus** → hot 0.72 🤷‍♂️\n- **Hillary Clinton** → hot 0.40 😅\n- **My own face** → hot 0.52 😎\n\nNot perfect, but honestly, I’m kinda impressed for a first try.\n\n---\n\n## Lessons Learned 💡\n\n1. GitHub + good READMEs = life saver\n2. Python + TensorFlow + OpenCV version hell is real\n3. Data quality matters — garbage in, garbage out\n4. Start small, test a lot, embrace happy accidents\n\n---\n\n## Next Steps\n\nI’d love feedback from other devs and eventually try my **dream project**: AI that turns a wireframe/design into a WordPress site automatically.\n\n---\n\n## Just Do It! 🚀\n\nIf you want to learn AI or coding: you can. Copy code, run it, tweak it, break it, learn. Patience is everything. If I can do it, you can too.\n\n_P.S. This is my first article ever, so sorry for my English 😅 — writing it helps me learn!_\n";
						const data = {title:"My First Machine Learning Project",description:"A beginner's journey into machine learning and computer vision. Learning about image classification, data preparation, and the challenges of training your first AI model from scratch.",date:"2019-04-12",author:"Ehsan Pourhadi",category:["Machine Learning","AI"],tag:["AI","ML","Python","Computer Vision","TensorFlow","Learning"],cover:
						new Proxy({"src":"/_astro/ml-cover.BYJsm0_N.jpg","width":1382,"height":922,"format":"jpg","orientation":1,"fsPath":"C:/Users/Ehsan/dev/astro-template/src/content/blog/my-first-machine-learning-project/ml-cover.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ehsan/dev/astro-template/src/content/blog/my-first-machine-learning-project/ml-cover.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/blog/my-first-machine-learning-project/ml-cover.jpg");
							return target[name];
						}
					})
					,featured:false,draft:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Ehsan/dev/astro-template/src/content/blog/my-first-machine-learning-project/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
