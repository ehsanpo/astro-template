import{c as t,r as i,m as s}from"./instance.AS_mdBWu.js";import{u as o}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const n=`<p>I’ve been experimenting with <strong>music visualization</strong> using Three.js and one of my unreleased tracks. It’s basically my love for music + web dev mashed together — creating visuals that <strong>dance to the beat in real-time</strong>.</p>
<hr>
<h2 id="-live-demo">🔗 Live Demo</h2>
<iframe width="100%" height="500px" src="https://stirring-bienenstitch-82cd5b.netlify.app/" style="border: none; border-radius: 8px; margin: 20px 0;" title="Music Visualization Demo">
</iframe>
<p><em>The visuals respond to the audio frequency — move your mouse, change the song, enjoy the chaos!</em></p>
<hr>
<h2 id="-tech-stack">🛠 Tech Stack</h2>
<ul>
<li><strong>Three.js</strong> → 3D graphics &#x26; WebGL</li>
<li><strong>Web Audio API</strong> → real-time audio analysis</li>
<li><strong>Vanilla JS</strong> → keeping it simple</li>
</ul>
<p>Key features:</p>
<ul>
<li>Particle systems reacting to bass, mids, highs</li>
<li>Color palettes that shift with music energy</li>
<li>Smooth animations synchronized to beats</li>
</ul>
<hr>
<h2 id="-how-i-built-it">💡 How I Built It</h2>
<ol>
<li><strong>Audio Analysis</strong> → grab frequency data with Web Audio API</li>
<li><strong>3D Scene</strong> → particles in Three.js respond to frequencies</li>
<li><strong>Animation Loop</strong> → update visuals every frame to match audio</li>
</ol>
<hr>
<h2 id="-creative-decisions">🎨 Creative Decisions</h2>
<ul>
<li>Cool colors for calm sections, warm colors for intense parts</li>
<li>Momentum-based particle motion for natural flow</li>
<li>Less = more — simple effects often look better than over-the-top chaos</li>
</ul>
<hr>
<h2 id="-challenges">⚡ Challenges</h2>
<ul>
<li><strong>Performance</strong> → solved with instanced particles, optimized shaders, adaptive quality</li>
<li><strong>Audio sync</strong> → low-latency audio + multiple frequency bands</li>
<li><strong>Cross-browser issues</strong> → feature detection &#x26; fallbacks</li>
</ul>
<hr>
<h2 id="-what-i-learned">✨ What I Learned</h2>
<ul>
<li>Smooth visuals > flashy but laggy</li>
<li>Frequency analysis reveals hidden patterns in music</li>
<li>Colors and motion dramatically affect mood</li>
<li>Interactive elements make people feel connected</li>
</ul>
<hr>
<h2 id="-future-fun">🔮 Future Fun</h2>
<ul>
<li>VR/AR support for full immersion</li>
<li>Multi-track visualization for complex songs</li>
<li>User-customizable colors &#x26; effects</li>
<li>Export features &#x26; social sharing</li>
</ul>
<hr>
<p>This project is my playground where <strong>code meets creativity</strong>. Music visualization isn’t just pretty lights — it’s about <strong>translating audio into emotion</strong>, finding patterns, and creating interactive experiences.</p>
<p><em>Code is on GitHub — tweak it, remix it, make your own musical visual world.</em></p>`,a={title:"Music Visualization with Three.js",description:"Experimenting with WebGL-based music visualization using Three.js. Creating immersive 3D visual experiences that react to audio in real-time.",date:"2022-06-12",author:"Ehsan Pourhadi",category:["Web Development","Creative Coding"],tag:["Three.js","WebGL","Music Visualization","JavaScript","Audio"],featured:!1,draft:!1,cover:"cover.png"},r="C:/Users/Ehsan/dev/astro-template/src/content/blog/music-visualization-threejs/index.md",l=void 0;function y(){return`
I’ve been experimenting with **music visualization** using Three.js and one of my unreleased tracks. It’s basically my love for music + web dev mashed together — creating visuals that **dance to the beat in real-time**.

---

## 🔗 Live Demo

<iframe
  width="100%"
  height="500px"
  src="https://stirring-bienenstitch-82cd5b.netlify.app/"
  style="border: none; border-radius: 8px; margin: 20px 0;"
  title="Music Visualization Demo">
</iframe>

_The visuals respond to the audio frequency — move your mouse, change the song, enjoy the chaos!_

---

## 🛠 Tech Stack

- **Three.js** → 3D graphics & WebGL
- **Web Audio API** → real-time audio analysis
- **Vanilla JS** → keeping it simple

Key features:

- Particle systems reacting to bass, mids, highs
- Color palettes that shift with music energy
- Smooth animations synchronized to beats

---

## 💡 How I Built It

1. **Audio Analysis** → grab frequency data with Web Audio API
2. **3D Scene** → particles in Three.js respond to frequencies
3. **Animation Loop** → update visuals every frame to match audio

---

## 🎨 Creative Decisions

- Cool colors for calm sections, warm colors for intense parts
- Momentum-based particle motion for natural flow
- Less = more — simple effects often look better than over-the-top chaos

---

## ⚡ Challenges

- **Performance** → solved with instanced particles, optimized shaders, adaptive quality
- **Audio sync** → low-latency audio + multiple frequency bands
- **Cross-browser issues** → feature detection & fallbacks

---

## ✨ What I Learned

- Smooth visuals > flashy but laggy
- Frequency analysis reveals hidden patterns in music
- Colors and motion dramatically affect mood
- Interactive elements make people feel connected

---

## 🔮 Future Fun

- VR/AR support for full immersion
- Multi-track visualization for complex songs
- User-customizable colors & effects
- Export features & social sharing

---

This project is my playground where **code meets creativity**. Music visualization isn’t just pretty lights — it’s about **translating audio into emotion**, finding patterns, and creating interactive experiences.

_Code is on GitHub — tweak it, remix it, make your own musical visual world._
`}function v(){return n}function b(){return[{depth:2,slug:"-live-demo",text:"🔗 Live Demo"},{depth:2,slug:"-tech-stack",text:"🛠 Tech Stack"},{depth:2,slug:"-how-i-built-it",text:"💡 How I Built It"},{depth:2,slug:"-creative-decisions",text:"🎨 Creative Decisions"},{depth:2,slug:"-challenges",text:"⚡ Challenges"},{depth:2,slug:"-what-i-learned",text:"✨ What I Learned"},{depth:2,slug:"-future-fun",text:"🔮 Future Fun"}]}const w=t((u,c,h)=>{const{layout:d,...e}=a;return e.file=r,e.url=l,i`${s()}${o(n)}`});export{w as Content,v as compiledContent,w as default,r as file,a as frontmatter,b as getHeadings,y as rawContent,l as url};
