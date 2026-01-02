import{s as g,g as l}from"./_astro_assets.BZASrr0d.js";import{c as m,r as h,m as d}from"./instance.AS_mdBWu.js";import{u}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const x={src:"/_astro/1.DMyqjBox.png",width:1080,height:1920,format:"png"},v={src:"/_astro/2.kdYGgAr2.png",width:1080,height:1920,format:"png"},w={src:"/_astro/3.Dy-jJNDT.png",width:1080,height:1920,format:"png"},_={src:"/_astro/8.BPeRyQJk.png",width:1080,height:1920,format:"png"},f=async function(s){const a={};{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./1\\.png[^"]*)"',"g");let t,e=0;for(;(t=r.exec(s))!==null;){const n="./1.png_"+e,i=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=i;a[n]=await l({src:x,...o}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./2\\.png[^"]*)"',"g");let t,e=0;for(;(t=r.exec(s))!==null;){const n="./2.png_"+e,i=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=i;a[n]=await l({src:v,...o}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./3\\.png[^"]*)"',"g");let t,e=0;for(;(t=r.exec(s))!==null;){const n="./3.png_"+e,i=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=i;a[n]=await l({src:w,...o}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./8\\.png[^"]*)"',"g");let t,e=0;for(;(t=r.exec(s))!==null;){const n="./8.png_"+e,i=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=i;a[n]=await l({src:_,...o}),e++}}return a};async function y(s){return f(s).then(a=>s.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(r,t)=>{const e=JSON.parse(t.replace(/&#x22;/g,'"')),n=e.src+"_"+e.index;a[n].srcSet&&a[n].srcSet.values.length>0&&(a[n].attributes.srcset=a[n].srcSet.attribute);const{index:i,...c}=a[n].attributes;return g({src:a[n].src,...c})}))}const p=await y(`<p>After my circle art phase, I wanted something more <em>alive</em>. Enter <a href="https://github.com/DeanIsMe/Wavepaper_Release"><strong>Wavepaper</strong></a> — a tool for creating dreamy, flowing wave patterns. It’s like if math and the ocean had a baby.</p>
<hr>
<h2 id="the-wave-experiments">The Wave Experiments</h2>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./1.png&#x22;,&#x22;alt&#x22;:&#x22;Smooth flowing waves with gradient&#x22;,&#x22;index&#x22;:0}">
<em>Smooth and gradient-y</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./2.png&#x22;,&#x22;alt&#x22;:&#x22;Intersecting wave patterns&#x22;,&#x22;index&#x22;:0}">
<em>Overlapping chaos that somehow works</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./3.png&#x22;,&#x22;alt&#x22;:&#x22;Minimal wave design&#x22;,&#x22;index&#x22;:0}">
<em>Minimal, calm, clean</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./8.png&#x22;,&#x22;alt&#x22;:&#x22;Complex wave interference&#x22;,&#x22;index&#x22;:0}">
<em>When waves argue but make art</em></p>
<hr>
<h2 id="playing-with-wavepaper">Playing With Wavepaper</h2>
<p>Wavepaper made things super easy: no code, just sliders and instant visuals. I messed with:</p>
<ul>
<li><strong>Frequency</strong> (tight vs. loose waves)</li>
<li><strong>Amplitude</strong> (calm vs. dramatic)</li>
<li><strong>Colors</strong> and <strong>layering</strong> for mood</li>
</ul>
<p>The tiniest tweaks changed everything. Some of my best results came from total accidents 😅</p>
<hr>
<h2 id="what-i-learned">What I Learned</h2>
<ul>
<li>Simple settings often look the best</li>
<li>Layering adds depth and movement</li>
<li>Color totally sets the emotion</li>
<li>Happy glitches = bonus art</li>
</ul>
<p>Waves feel connected to generative music — both use math to make something <em>alive</em>.</p>
<hr>
<h2 id="whats-next">What’s Next</h2>
<p>I’m dreaming of:</p>
<ul>
<li><strong>Animated waves</strong></li>
<li><strong>Interactive versions</strong></li>
<li>Maybe combining <strong>circles + waves</strong> for a geometric/organic hybrid</li>
</ul>
<hr>
<p>Working with waves has been oddly meditative — less precision, more flow. It reminds me that coding can be creative, and math can actually <em>feel</em> beautiful.</p>
<p><em>(Got wave art or generative experiments? Drop them — I’d love to see what you’re making!)</em></p>`),b={title:"Generative Waves",description:"Exploring fluid, wave-like patterns in generative art using Wavepaper. A continuation of my journey into algorithmic art creation and mathematical beauty.",date:"2022-06-12",author:"Ehsan Pourhadi",category:["Generative Art","Creative Coding"],tag:["Generative Art","Waves","Mathematical Art","Algorithmic Design"],featured:!1,draft:!1,cover:"./1.png"},A="C:/Users/Ehsan/dev/astro-template/src/content/blog/generative-waves/index.md",I=void 0;function R(){return`
After my circle art phase, I wanted something more _alive_. Enter [**Wavepaper**](https://github.com/DeanIsMe/Wavepaper_Release) — a tool for creating dreamy, flowing wave patterns. It’s like if math and the ocean had a baby.

---

## The Wave Experiments

![Smooth flowing waves with gradient](./1.png)
_Smooth and gradient-y_

![Intersecting wave patterns](./2.png)
_Overlapping chaos that somehow works_

![Minimal wave design](./3.png)
_Minimal, calm, clean_

![Complex wave interference](./8.png)
_When waves argue but make art_

---

## Playing With Wavepaper

Wavepaper made things super easy: no code, just sliders and instant visuals. I messed with:

- **Frequency** (tight vs. loose waves)
- **Amplitude** (calm vs. dramatic)
- **Colors** and **layering** for mood

The tiniest tweaks changed everything. Some of my best results came from total accidents 😅

---

## What I Learned

- Simple settings often look the best
- Layering adds depth and movement
- Color totally sets the emotion
- Happy glitches = bonus art

Waves feel connected to generative music — both use math to make something _alive_.

---

## What’s Next

I’m dreaming of:

- **Animated waves**
- **Interactive versions**
- Maybe combining **circles + waves** for a geometric/organic hybrid

---

Working with waves has been oddly meditative — less precision, more flow. It reminds me that coding can be creative, and math can actually _feel_ beautiful.

_(Got wave art or generative experiments? Drop them — I’d love to see what you’re making!)_
`}function C(){return p}function T(){return[{depth:2,slug:"the-wave-experiments",text:"The Wave Experiments"},{depth:2,slug:"playing-with-wavepaper",text:"Playing With Wavepaper"},{depth:2,slug:"what-i-learned",text:"What I Learned"},{depth:2,slug:"whats-next",text:"What’s Next"}]}const O=m((s,a,r)=>{const{layout:t,...e}=b;return e.file=A,e.url=I,h`${d()}${u(p)}`});export{O as Content,C as compiledContent,O as default,A as file,b as frontmatter,T as getHeadings,R as rawContent,I as url};
