import{c as e,r as o,m as i}from"./instance.AS_mdBWu.js";import{u as a}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const n=`<p>Lately, I’ve been diving into AI and ML. Big companies like Google and Microsoft are everywhere with it, and I’ve played with Google Vision for fun. But making my own ML stuff? That felt scary.</p>
<p>I work as a <strong>full-stack developer</strong> at <a href="http://gutsglory.se/">Guts &#x26; Glory</a> in Sweden — mostly building WordPress sites from designs. I’m not a hardcore programmer, but I love GitHub. If there’s a repo with a solid README, I can usually clone it, run it, and tweak things until it works.</p>
<hr>
<h2 id="the-crazy-idea">The Crazy Idea 💡</h2>
<p>Everyone talks about AI taking over jobs… so I thought: <em>maybe I can build the AI that takes over mine!</em></p>
<p>Step 1: AI looks at a design → slices it into sections → detects elements (text, images, colors, spacing) → uses pre-written HTML/CSS to build a WordPress site.</p>
<p>Step 2: Realize that’s waaaay too ambitious for a first ML project 😅</p>
<p>So I needed a side project to <strong>train on something simpler</strong>. Inspiration hit while watching <em>Silicon Valley</em> — the “hotdog or not” AI. My brain immediately went:</p>
<blockquote>
<p>“I’ll build an AI that rates how hot faces are! Don’t judge me!”</p>
</blockquote>
<hr>
<h2 id="finding-the-code">Finding the Code 🐍</h2>
<p>I found some Python/TensorFlow/OpenCV repos:</p>
<ul>
<li><a href="https://github.com/hayzamjs/Hotdog-Classification">Hotdog Classification</a></li>
<li><a href="https://aboveintelligent.com/using-tensorflow-to-classify-hotdogs-8494fb85d875">Guide on TensorFlow Hotdogs</a></li>
</ul>
<p>Problem: I don’t know Python 😅. Spent ~2 hours fixing versions and missing models. Finally got it running!</p>
<hr>
<h2 id="gathering-data-️">Gathering Data 🖼️</h2>
<p>First attempt: Google image search for “pretty girls” vs. “ugly girls” and download with <strong>Fatkun Batch</strong>.</p>
<p>Problem: I only want <strong>faces</strong>, not the whole picture.</p>
<p>Solution: Use a face-cropping script:</p>
<ul>
<li><a href="https://github.com/icchi-h/face-cropping">Face Cropping GitHub</a></li>
</ul>
<p>After cleaning up wrong detections, I had ~1,000 “pretty” and ~400 “ugly” faces.</p>
<hr>
<h2 id="training--testing-️">Training &#x26; Testing 🏋️</h2>
<p>After training, I tested:</p>
<ul>
<li><strong>Kate Upton</strong> → hot 0.96 ✅</li>
<li><strong>Rihanna</strong> → hot 0.99 ✅</li>
<li><strong>Miley Cyrus</strong> → hot 0.72 🤷‍♂️</li>
<li><strong>Hillary Clinton</strong> → hot 0.40 😅</li>
<li><strong>My own face</strong> → hot 0.52 😎</li>
</ul>
<p>Not perfect, but honestly, I’m kinda impressed for a first try.</p>
<hr>
<h2 id="lessons-learned">Lessons Learned 💡</h2>
<ol>
<li>GitHub + good READMEs = life saver</li>
<li>Python + TensorFlow + OpenCV version hell is real</li>
<li>Data quality matters — garbage in, garbage out</li>
<li>Start small, test a lot, embrace happy accidents</li>
</ol>
<hr>
<h2 id="next-steps">Next Steps</h2>
<p>I’d love feedback from other devs and eventually try my <strong>dream project</strong>: AI that turns a wireframe/design into a WordPress site automatically.</p>
<hr>
<h2 id="just-do-it">Just Do It! 🚀</h2>
<p>If you want to learn AI or coding: you can. Copy code, run it, tweak it, break it, learn. Patience is everything. If I can do it, you can too.</p>
<p><em>P.S. This is my first article ever, so sorry for my English 😅 — writing it helps me learn!</em></p>`,s={title:"My First Machine Learning Project",description:"A beginner's journey into machine learning and computer vision. Learning about image classification, data preparation, and the challenges of training your first AI model from scratch.",date:"2019-04-12",author:"Ehsan Pourhadi",category:["Machine Learning","AI"],tag:["AI","ML","Python","Computer Vision","TensorFlow","Learning"],featured:!1,draft:!1,cover:"./ml-cover.jpg"},r="C:/Users/Ehsan/dev/astro-template/src/content/blog/my-first-machine-learning-project/index.md",l=void 0;function f(){return`
Lately, I’ve been diving into AI and ML. Big companies like Google and Microsoft are everywhere with it, and I’ve played with Google Vision for fun. But making my own ML stuff? That felt scary.

I work as a **full-stack developer** at [Guts & Glory](http://gutsglory.se/) in Sweden — mostly building WordPress sites from designs. I’m not a hardcore programmer, but I love GitHub. If there’s a repo with a solid README, I can usually clone it, run it, and tweak things until it works.

---

## The Crazy Idea 💡

Everyone talks about AI taking over jobs… so I thought: _maybe I can build the AI that takes over mine!_

Step 1: AI looks at a design → slices it into sections → detects elements (text, images, colors, spacing) → uses pre-written HTML/CSS to build a WordPress site.

Step 2: Realize that’s waaaay too ambitious for a first ML project 😅

So I needed a side project to **train on something simpler**. Inspiration hit while watching _Silicon Valley_ — the “hotdog or not” AI. My brain immediately went:

> “I’ll build an AI that rates how hot faces are! Don’t judge me!”

---

## Finding the Code 🐍

I found some Python/TensorFlow/OpenCV repos:

- [Hotdog Classification](https://github.com/hayzamjs/Hotdog-Classification)
- [Guide on TensorFlow Hotdogs](https://aboveintelligent.com/using-tensorflow-to-classify-hotdogs-8494fb85d875)

Problem: I don’t know Python 😅. Spent ~2 hours fixing versions and missing models. Finally got it running!

---

## Gathering Data 🖼️

First attempt: Google image search for “pretty girls” vs. “ugly girls” and download with **Fatkun Batch**.

Problem: I only want **faces**, not the whole picture.

Solution: Use a face-cropping script:

- [Face Cropping GitHub](https://github.com/icchi-h/face-cropping)

After cleaning up wrong detections, I had ~1,000 “pretty” and ~400 “ugly” faces.

---

## Training & Testing 🏋️

After training, I tested:

- **Kate Upton** → hot 0.96 ✅
- **Rihanna** → hot 0.99 ✅
- **Miley Cyrus** → hot 0.72 🤷‍♂️
- **Hillary Clinton** → hot 0.40 😅
- **My own face** → hot 0.52 😎

Not perfect, but honestly, I’m kinda impressed for a first try.

---

## Lessons Learned 💡

1. GitHub + good READMEs = life saver
2. Python + TensorFlow + OpenCV version hell is real
3. Data quality matters — garbage in, garbage out
4. Start small, test a lot, embrace happy accidents

---

## Next Steps

I’d love feedback from other devs and eventually try my **dream project**: AI that turns a wireframe/design into a WordPress site automatically.

---

## Just Do It! 🚀

If you want to learn AI or coding: you can. Copy code, run it, tweak it, break it, learn. Patience is everything. If I can do it, you can too.

_P.S. This is my first article ever, so sorry for my English 😅 — writing it helps me learn!_
`}function I(){return n}function w(){return[{depth:2,slug:"the-crazy-idea",text:"The Crazy Idea 💡"},{depth:2,slug:"finding-the-code",text:"Finding the Code 🐍"},{depth:2,slug:"gathering-data-️",text:"Gathering Data 🖼️"},{depth:2,slug:"training--testing-️",text:"Training & Testing 🏋️"},{depth:2,slug:"lessons-learned",text:"Lessons Learned 💡"},{depth:2,slug:"next-steps",text:"Next Steps"},{depth:2,slug:"just-do-it",text:"Just Do It! 🚀"}]}const b=e((h,g,d)=>{const{layout:p,...t}=s;return t.file=r,t.url=l,o`${i()}${a(n)}`});export{b as Content,I as compiledContent,b as default,r as file,s as frontmatter,w as getHeadings,f as rawContent,l as url};
