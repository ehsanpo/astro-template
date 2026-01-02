import{s as g,g as l}from"./_astro_assets.BZASrr0d.js";import{c as p,r as u,m as d}from"./instance.AS_mdBWu.js";import{u as m}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const y={src:"/_astro/circle-8_10.BgOt-s8P.png",width:2160,height:2160,format:"png"},f={src:"/_astro/circle-1.D73gNAOY.png",width:2160,height:2160,format:"png"},w={src:"/_astro/circle-2.DANNhtbV.png",width:2160,height:2160,format:"png"},x={src:"/_astro/circle-5.BAjr9xOr.png",width:2160,height:2160,format:"png"},_={src:"/_astro/circle-6.B_MrWqUj.png",width:2160,height:2160,format:"png"},v={src:"/_astro/circle-7.Eyh2oL2e.png",width:2160,height:2160,format:"png"},k={src:"/_astro/circle-8.C0TRaCmU.png",width:2160,height:2160,format:"png"},I={src:"/_astro/circle-9.BwcJqjHL.png",width:2160,height:2160,format:"png"},A=async function(o){const r={};{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-8\\+10\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-8+10.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:y,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-1\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-1.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:f,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-2\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-2.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:w,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-5\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-5.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:x,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-6\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-6.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:_,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-7\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-7.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:v,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-8\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-8.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:k,...a}),e++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./circle-9\\.png[^"]*)"',"g");let n,e=0;for(;(n=i.exec(o))!==null;){const t="./circle-9.png_"+e,s=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...a}=s;r[t]=await l({src:I,...a}),e++}}return r};async function b(o){return A(o).then(r=>o.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(i,n)=>{const e=JSON.parse(n.replace(/&#x22;/g,'"')),t=e.src+"_"+e.index;r[t].srcSet&&r[t].srcSet.values.length>0&&(r[t].attributes.srcset=r[t].srcSet.attribute);const{index:s,...c}=r[t].attributes;return g({src:r[t].src,...c})}))}const h=await b(`<p>Okay so, recently I’ve been messing around with <strong>generative music</strong> in Propellerhead Reason (mostly as a form of procrastination, let’s be honest 😅). It started as a “let’s just see what happens” experiment and turned into a surprisingly fun rabbit hole.</p>
<p>You can actually hear one of my chaotic little audio creatures here:</p>
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&#x26;color=%23ff5500&#x26;auto_play=false&#x26;hide_related=true&#x26;show_comments=false&#x26;show_user=true&#x26;show_reposts=false&#x26;show_teaser=false"></iframe>
<p><em>(yes, that’s one of my generative music tests — don’t judge me 😬)</em></p>
<hr>
<h2 id="from-music-to-visuals-️">From Music to Visuals 🎶➡️🎨</h2>
<p>After spending way too many nights tweaking synth patches, I started thinking… what if I did the same thing visually? Like, <strong>generative art</strong> but for my eyeballs instead of my ears.</p>
<p>So I did what any normal person would do: opened ten browser tabs, fell into a GitHub hole, and discovered people making wild generative visuals in <strong>R</strong>, <strong>Go</strong>, and <strong>Python</strong>.</p>
<p>And wow. The stuff people do with just a few lines of code is <em>ridiculous</em>.</p>
<hr>
<h2 id="setting-things-up-aka-the-java-saga">Setting Things Up (a.k.a. The Java Saga)</h2>
<p>Naturally, I decided to try it myself. Installed <strong>R</strong>. Then installed <strong>Processing 3</strong> on my Mac.
And… yeah, that was a disaster. 🙃</p>
<p>Processing 3 and Java apparently have beef, because nothing worked. After a few hours of debugging (and a small existential crisis), I rolled back to <strong>Processing v2</strong> and — hallelujah! — it worked.</p>
<p>Circles appeared! Pretty ones!</p>
<p>Honestly, at that point, I didn’t even care <em>how</em> it worked. I just wanted to make cool visuals and pretend I was an algorithmic artist.</p>
<hr>
<h2 id="the-results-woohoo">The Results (woohoo! 🎉)</h2>
<p>Here’s a few of the patterns I made:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-8+10.png&#x22;,&#x22;alt&#x22;:&#x22;Circular generative art with overlapping patterns&#x22;,&#x22;index&#x22;:0}">
<em>Complex overlapping circles that look like they’re plotting something</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-1.png&#x22;,&#x22;alt&#x22;:&#x22;Simple circular pattern&#x22;,&#x22;index&#x22;:0}">
<em>Minimalist and chill</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-2.png&#x22;,&#x22;alt&#x22;:&#x22;Geometric circular design&#x22;,&#x22;index&#x22;:0}">
<em>Geometric perfection vibes</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-5.png&#x22;,&#x22;alt&#x22;:&#x22;Organic circular pattern&#x22;,&#x22;index&#x22;:0}">
<em>Kinda flowy, kinda alive</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-6.png&#x22;,&#x22;alt&#x22;:&#x22;Dense circular pattern&#x22;,&#x22;index&#x22;:0}">
<em>Dense and slightly overwhelming (like my brain on coffee)</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-7.png&#x22;,&#x22;alt&#x22;:&#x22;Radiating circles&#x22;,&#x22;index&#x22;:0}">
<em>Sunburst-y and dramatic</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-8.png&#x22;,&#x22;alt&#x22;:&#x22;Nested circles&#x22;,&#x22;index&#x22;:0}">
<em>Like circles inside circles inside circles…</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./circle-9.png&#x22;,&#x22;alt&#x22;:&#x22;Dynamic circular composition&#x22;,&#x22;index&#x22;:0}">
<em>Looks like it might start spinning if I stare too long</em></p>
<hr>
<h2 id="what-i-learned-aka-why-circles-are-secretly-deep">What I Learned (aka why circles are secretly deep)</h2>
<h3 id="-the-beauty-of-algorithms">💡 The Beauty of Algorithms</h3>
<p>Even though it was all circles, every image turned out <em>so different</em>.
Like:</p>
<ul>
<li><strong>Precise math</strong> vs. <strong>random chaos</strong></li>
<li><strong>Dense complexity</strong> vs. <strong>clean minimalism</strong></li>
<li><strong>Overlapping madness</strong> vs. <strong>perfect geometry</strong></li>
</ul>
<p>It’s wild how much personality a few lines of code can have.</p>
<hr>
<h3 id="-processing-vs-r">🧠 Processing vs. R</h3>
<p>So I played around with both:</p>
<ul>
<li><strong>Processing</strong> → felt way more natural for visuals. You draw, you tweak, you see results instantly.</li>
<li><strong>R</strong> → more technical but sooo good if you want mathematical control.</li>
<li>Both communities are super active and helpful (thank you, random forum strangers 🙏).</li>
</ul>
<hr>
<h3 id="-creativity-through-constraints">🎨 Creativity Through Constraints</h3>
<p>Here’s the funny thing — when I limited myself to <strong>just circles</strong>, I got <em>way</em> more creative. Like, weirdly so.</p>
<p>By only tweaking stuff like:</p>
<ul>
<li>size</li>
<li>opacity</li>
<li>color gradients</li>
<li>how they overlap or intersect</li>
<li>little position algorithms</li>
</ul>
<p>…I ended up with endless variations. Turns out “less is more” actually works sometimes (who knew?).</p>
<hr>
<h2 id="my-tech-setup-for-the-curious-nerds">My Tech Setup (for the curious nerds 👩‍💻)</h2>
<p><strong>What worked:</strong></p>
<ul>
<li>Processing 2 (don’t ask me about v3 😩)</li>
<li>Basic geometry functions</li>
<li>Simple random() stuff</li>
<li>Layer blending (chef’s kiss)</li>
</ul>
<p><strong>My super scientific process:</strong></p>
<ol>
<li>Draw a circle.</li>
<li>Randomize everything.</li>
<li>Go “hmm, interesting.”</li>
<li>Add color + opacity.</li>
<li>Layer it a bunch until it looks artsy.</li>
<li>Screenshot it before it breaks.</li>
</ol>
<hr>
<h2 id="why-i-love-generative-art">Why I Love Generative Art 💖</h2>
<p>It’s that <strong>element of surprise</strong>. You give the computer rules, and it goes, “cool, but what if I did this instead?”</p>
<p>You’re not <em>making</em> the art — you’re <em>collaborating</em> with the algorithm. It’s half you, half the machine, and 100% unexpected.</p>
<p>Every image feels both planned and chaotic at the same time. Like art with a mind of its own.</p>
<hr>
<p>So yeah — what started as a music experiment turned into me falling in love with algorithmic circles.</p>
<p>Who needs perfection when you have randomness, right? 😉</p>
<p><em>(P.S. If you’ve made generative art, please share! I love seeing what other curious nerds create ❤️)</em></p>`),S={title:"Generative Art - Drawing Circles",description:"My journey into generative art using Processing and R. Creating beautiful circular patterns through code and exploring the intersection of programming and visual art.",date:"2022-01-08",author:"Ehsan Pourhadi",category:["Generative Art","Creative Coding"],tag:["Processing","R Programming","Generative Art","Visual Art","Creative Coding"],featured:!1,draft:!1,cover:"./circle-8+10.png"},R="C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-art-circles/index.md",T=void 0;function M(){return`
Okay so, recently I’ve been messing around with **generative music** in Propellerhead Reason (mostly as a form of procrastination, let’s be honest 😅). It started as a “let’s just see what happens” experiment and turned into a surprisingly fun rabbit hole.

You can actually hear one of my chaotic little audio creatures here:

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172751727&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>

_(yes, that’s one of my generative music tests — don’t judge me 😬)_

---

## From Music to Visuals 🎶➡️🎨

After spending way too many nights tweaking synth patches, I started thinking… what if I did the same thing visually? Like, **generative art** but for my eyeballs instead of my ears.

So I did what any normal person would do: opened ten browser tabs, fell into a GitHub hole, and discovered people making wild generative visuals in **R**, **Go**, and **Python**.

And wow. The stuff people do with just a few lines of code is _ridiculous_.

---

## Setting Things Up (a.k.a. The Java Saga)

Naturally, I decided to try it myself. Installed **R**. Then installed **Processing 3** on my Mac.
And… yeah, that was a disaster. 🙃

Processing 3 and Java apparently have beef, because nothing worked. After a few hours of debugging (and a small existential crisis), I rolled back to **Processing v2** and — hallelujah! — it worked.

Circles appeared! Pretty ones!

Honestly, at that point, I didn’t even care _how_ it worked. I just wanted to make cool visuals and pretend I was an algorithmic artist.

---

## The Results (woohoo! 🎉)

Here’s a few of the patterns I made:

![Circular generative art with overlapping patterns](./circle-8+10.png)
_Complex overlapping circles that look like they’re plotting something_

![Simple circular pattern](./circle-1.png)
_Minimalist and chill_

![Geometric circular design](./circle-2.png)
_Geometric perfection vibes_

![Organic circular pattern](./circle-5.png)
_Kinda flowy, kinda alive_

![Dense circular pattern](./circle-6.png)
_Dense and slightly overwhelming (like my brain on coffee)_

![Radiating circles](./circle-7.png)
_Sunburst-y and dramatic_

![Nested circles](./circle-8.png)
_Like circles inside circles inside circles..._

![Dynamic circular composition](./circle-9.png)
_Looks like it might start spinning if I stare too long_

---

## What I Learned (aka why circles are secretly deep)

### 💡 The Beauty of Algorithms

Even though it was all circles, every image turned out _so different_.
Like:

- **Precise math** vs. **random chaos**
- **Dense complexity** vs. **clean minimalism**
- **Overlapping madness** vs. **perfect geometry**

It’s wild how much personality a few lines of code can have.

---

### 🧠 Processing vs. R

So I played around with both:

- **Processing** → felt way more natural for visuals. You draw, you tweak, you see results instantly.
- **R** → more technical but sooo good if you want mathematical control.
- Both communities are super active and helpful (thank you, random forum strangers 🙏).

---

### 🎨 Creativity Through Constraints

Here’s the funny thing — when I limited myself to **just circles**, I got _way_ more creative. Like, weirdly so.

By only tweaking stuff like:

- size
- opacity
- color gradients
- how they overlap or intersect
- little position algorithms

…I ended up with endless variations. Turns out “less is more” actually works sometimes (who knew?).

---

## My Tech Setup (for the curious nerds 👩‍💻)

**What worked:**

- Processing 2 (don’t ask me about v3 😩)
- Basic geometry functions
- Simple random() stuff
- Layer blending (chef’s kiss)

**My super scientific process:**

1. Draw a circle.
2. Randomize everything.
3. Go “hmm, interesting.”
4. Add color + opacity.
5. Layer it a bunch until it looks artsy.
6. Screenshot it before it breaks.

---

## Why I Love Generative Art 💖

It’s that **element of surprise**. You give the computer rules, and it goes, “cool, but what if I did this instead?”

You’re not _making_ the art — you’re _collaborating_ with the algorithm. It’s half you, half the machine, and 100% unexpected.

Every image feels both planned and chaotic at the same time. Like art with a mind of its own.

---

So yeah — what started as a music experiment turned into me falling in love with algorithmic circles.

Who needs perfection when you have randomness, right? 😉

_(P.S. If you’ve made generative art, please share! I love seeing what other curious nerds create ❤️)_
`}function L(){return h}function j(){return[{depth:2,slug:"from-music-to-visuals-️",text:"From Music to Visuals 🎶➡️🎨"},{depth:2,slug:"setting-things-up-aka-the-java-saga",text:"Setting Things Up (a.k.a. The Java Saga)"},{depth:2,slug:"the-results-woohoo",text:"The Results (woohoo! 🎉)"},{depth:2,slug:"what-i-learned-aka-why-circles-are-secretly-deep",text:"What I Learned (aka why circles are secretly deep)"},{depth:3,slug:"-the-beauty-of-algorithms",text:"💡 The Beauty of Algorithms"},{depth:3,slug:"-processing-vs-r",text:"🧠 Processing vs. R"},{depth:3,slug:"-creativity-through-constraints",text:"🎨 Creativity Through Constraints"},{depth:2,slug:"my-tech-setup-for-the-curious-nerds",text:"My Tech Setup (for the curious nerds 👩‍💻)"},{depth:2,slug:"why-i-love-generative-art",text:"Why I Love Generative Art 💖"}]}const N=p((o,r,i)=>{const{layout:n,...e}=S;return e.file=R,e.url=T,u`${d()}${m(h)}`});export{N as Content,L as compiledContent,N as default,R as file,S as frontmatter,j as getHeadings,M as rawContent,T as url};
