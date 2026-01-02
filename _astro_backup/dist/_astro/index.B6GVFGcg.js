import{c as n,r as o,m as a}from"./instance.AS_mdBWu.js";import{u as i}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const t=`<p>Ok so… I might have gotten a little carried away 😅</p>
<p>What started as “let me build one simple audio thing” turned into <strong>THREE completely different audio visualization tools</strong>. And honestly? I’m not even mad about it. Sometimes you just gotta follow the hyperfocus where it takes you!</p>
<p>Let me tell you about my latest obsession: <strong>Audio Tools</strong> - a collection that’s part trippy art project, part professional audio engineering, part physics demonstration. Because why pick one vibe when you can have ALL the vibes?</p>
<hr>
<h2 id="-the-shader-playground-aka-pretty-colors-go-brrrr">🌈 The Shader Playground (aka “Pretty Colors Go Brrrr”)</h2>
<p>First up: <strong>Custom Audio Reactive Shaders</strong>. This one’s pure eye candy and I’m not ashamed to admit it!</p>
<p>Picture this: 19 different shader effects that literally dance to your music. We’re talking plasma waves, fractals, particle galaxies - stuff that makes your brain go “ooooh shiny” while your ears are having a good time.</p>
<p>The coolest part? Each shader reacts differently to frequency ranges. Bass hits make some effects pulse like a heartbeat, while treble creates these tiny sparkly details that are just <em>chef’s kiss</em> perfect.</p>
<p><strong>What I learned building this:</strong></p>
<ul>
<li>WebGL shaders are intimidating until they’re not</li>
<li>There’s something magical about seeing math become art in real-time</li>
<li>Auto-cycling through effects every 25 seconds = instant screensaver vibes</li>
<li>My neighbors probably think I’ve lost it from all the “testing” at 2 AM 😂</li>
</ul>
<p>Tech stack: React + Three.js + a LOT of fragment shaders that I definitely didn’t understand at first but somehow work beautifully.</p>
<hr>
<h2 id="-the-professional-tool-getting-serious-for-a-sec">📊 The Professional Tool (Getting Serious For A Sec)</h2>
<p>Then I thought… “what if I made something actually useful for audio people?” Enter the <strong>Audio Goniometer</strong>.</p>
<p>This one’s for the audio engineers, podcasters, and anyone who’s ever wondered “wait, what’s actually happening between my left and right channels???”</p>
<p>It visualizes stereo width, phase correlation, and all those technical things that make good mixes sound… well, good! Plus it has these gorgeous Lissajous patterns that are both functional AND mesmerizing.</p>
<p><strong>Real talk moment:</strong> I spent WAY too much time making the visualization smooth because I got obsessed with 60fps updates. Was it necessary? Probably not. Did it feel amazing? Absolutely.</p>
<p>The phase correlation meter alone taught me more about stereo imaging than years of just mixing by ear. Sometimes you need to SEE the problem to really understand it, you know?</p>
<p>Tech highlights: Web Audio API doing heavy lifting + Canvas 2D for that butter-smooth rendering.</p>
<hr>
<h2 id="-the-mind-melting-physics-demo-science-is-cool">🌀 The Mind-Melting Physics Demo (Science Is Cool!)</h2>
<p>Last but definitely not least: <strong>Real-Time Sound-Reactive 3D Cymatics</strong>. This one broke my brain in the best way possible.</p>
<p>Ever heard of cymatics? It’s this wild physics phenomenon where sound frequencies create geometric patterns in sand or particles. Like, certain frequencies make perfect circles, others create complex interference patterns. It’s literally the visual language of sound!</p>
<p>So naturally I had to recreate this in 3D with up to 20,000 particles dancing in real-time. Because why not turn your browser into a physics laboratory? 🧪</p>
<p><strong>The rabbit holes I fell into:</strong></p>
<ul>
<li>Learning about Ernst Chladni (the OG sound visualization guy from the 1700s!)</li>
<li>Implementing particle systems that don’t melt your GPU</li>
<li>Color schemes that feel both scientific AND beautiful</li>
<li>Preset saving because once you find the perfect config, you NEED to keep it</li>
</ul>
<p>The Chladni plate mode is my favorite - watching geometric patterns emerge from chaos feels like witnessing some secret mathematical truth about the universe.</p>
<hr>
<h2 id="-why-three-apps-though">🤔 Why Three Apps Though?</h2>
<p>Honestly? I couldn’t decide what I wanted to build!</p>
<p>Each tool scratches a different itch:</p>
<ul>
<li><strong>Shaders</strong> = pure creative expression</li>
<li><strong>Goniometer</strong> = professional utility</li>
<li><strong>Cymatics</strong> = educational wonder</li>
</ul>
<p>Plus they each taught me different things about audio processing, visual programming, and finding that sweet spot between “functional” and “beautiful.”</p>
<p>Also… I may have ADHD and this is how I roll. Start with one idea, end up with three apps. Classic me! 🤷‍♂️</p>
<hr>
<h2 id="-the-technical-journey">🛠 The Technical Journey</h2>
<p>Building all three really pushed my understanding of:</p>
<p><strong>Web Audio API</strong>: FFT analysis, frequency binning, real-time processing. This API is SO powerful once you get the hang of it.</p>
<p><strong>Three.js</strong>: Shader programming, particle systems, performance optimization. Going from “what’s a vertex shader?” to building complex visual effects was quite the journey.</p>
<p><strong>TypeScript</strong>: Type safety saved my butt SO many times when passing audio data between components.</p>
<p><strong>Performance</strong>: 60fps with thousands of particles? Yeah, that required some creativity and a lot of profiling.</p>
<hr>
<h2 id="-whats-next">🎯 What’s Next?</h2>
<p>These tools are fully open source (because knowledge should be shared!), and I’m already getting ideas for v2:</p>
<ul>
<li>VR support for the cymatics tool (imagine being INSIDE the sound patterns!)</li>
<li>More shader effects (I found this cool paper on quantum visualization…)</li>
<li>MIDI control integration</li>
<li>Maybe a fourth tool? (Someone stop me please 😅)</li>
</ul>
<hr>
<h2 id="-try-them-yourself">🎵 Try Them Yourself!</h2>
<p>Each tool runs directly in your browser - no installation, no setup, just pure audio-visual magic. Whether you’re a music producer, a developer curious about audio programming, or just someone who likes pretty things that respond to sound, there’s something here for you.</p>
<p>The code’s all on GitHub if you want to peek under the hood or build something even cooler. And if you do, please share it! I love seeing what people create with this stuff.</p>
<p>Now excuse me while I go “test” the shader effects with my entire music library for the 47th time today… you know, for quality assurance 😉</p>
<p>Peace! ✨🎧</p>`,s={title:"Building Audio Tools: Three Apps, One Passion",description:"OMG so I went totally overboard and built THREE audio visualization tools! From trippy shaders to professional goniometers to 3D cymatics - here's my wild journey into making sound visible.",date:"2025-12-25",author:"Ehsan Pourhadi",category:["Web Development","Creative Coding","Audio"],tag:["Three.js","React","WebGL","Audio Visualization","TypeScript","Web Audio API"],featured:!0,draft:!1},r="C:/Users/Ehsan/dev/astro-template/src/content/blog/building-audio-tools-three-apps-one-passion/index.md",h=void 0;function f(){return`
Ok so... I might have gotten a little carried away 😅

What started as "let me build one simple audio thing" turned into **THREE completely different audio visualization tools**. And honestly? I'm not even mad about it. Sometimes you just gotta follow the hyperfocus where it takes you!

Let me tell you about my latest obsession: **Audio Tools** - a collection that's part trippy art project, part professional audio engineering, part physics demonstration. Because why pick one vibe when you can have ALL the vibes?

---

## 🌈 The Shader Playground (aka "Pretty Colors Go Brrrr")

First up: **Custom Audio Reactive Shaders**. This one's pure eye candy and I'm not ashamed to admit it!

Picture this: 19 different shader effects that literally dance to your music. We're talking plasma waves, fractals, particle galaxies - stuff that makes your brain go "ooooh shiny" while your ears are having a good time.

The coolest part? Each shader reacts differently to frequency ranges. Bass hits make some effects pulse like a heartbeat, while treble creates these tiny sparkly details that are just _chef's kiss_ perfect.

**What I learned building this:**

- WebGL shaders are intimidating until they're not
- There's something magical about seeing math become art in real-time
- Auto-cycling through effects every 25 seconds = instant screensaver vibes
- My neighbors probably think I've lost it from all the "testing" at 2 AM 😂

Tech stack: React + Three.js + a LOT of fragment shaders that I definitely didn't understand at first but somehow work beautifully.

---

## 📊 The Professional Tool (Getting Serious For A Sec)

Then I thought... "what if I made something actually useful for audio people?" Enter the **Audio Goniometer**.

This one's for the audio engineers, podcasters, and anyone who's ever wondered "wait, what's actually happening between my left and right channels???"

It visualizes stereo width, phase correlation, and all those technical things that make good mixes sound... well, good! Plus it has these gorgeous Lissajous patterns that are both functional AND mesmerizing.

**Real talk moment:** I spent WAY too much time making the visualization smooth because I got obsessed with 60fps updates. Was it necessary? Probably not. Did it feel amazing? Absolutely.

The phase correlation meter alone taught me more about stereo imaging than years of just mixing by ear. Sometimes you need to SEE the problem to really understand it, you know?

Tech highlights: Web Audio API doing heavy lifting + Canvas 2D for that butter-smooth rendering.

---

## 🌀 The Mind-Melting Physics Demo (Science Is Cool!)

Last but definitely not least: **Real-Time Sound-Reactive 3D Cymatics**. This one broke my brain in the best way possible.

Ever heard of cymatics? It's this wild physics phenomenon where sound frequencies create geometric patterns in sand or particles. Like, certain frequencies make perfect circles, others create complex interference patterns. It's literally the visual language of sound!

So naturally I had to recreate this in 3D with up to 20,000 particles dancing in real-time. Because why not turn your browser into a physics laboratory? 🧪

**The rabbit holes I fell into:**

- Learning about Ernst Chladni (the OG sound visualization guy from the 1700s!)
- Implementing particle systems that don't melt your GPU
- Color schemes that feel both scientific AND beautiful
- Preset saving because once you find the perfect config, you NEED to keep it

The Chladni plate mode is my favorite - watching geometric patterns emerge from chaos feels like witnessing some secret mathematical truth about the universe.

---

## 🤔 Why Three Apps Though?

Honestly? I couldn't decide what I wanted to build!

Each tool scratches a different itch:

- **Shaders** = pure creative expression
- **Goniometer** = professional utility
- **Cymatics** = educational wonder

Plus they each taught me different things about audio processing, visual programming, and finding that sweet spot between "functional" and "beautiful."

Also... I may have ADHD and this is how I roll. Start with one idea, end up with three apps. Classic me! 🤷‍♂️

---

## 🛠 The Technical Journey

Building all three really pushed my understanding of:

**Web Audio API**: FFT analysis, frequency binning, real-time processing. This API is SO powerful once you get the hang of it.

**Three.js**: Shader programming, particle systems, performance optimization. Going from "what's a vertex shader?" to building complex visual effects was quite the journey.

**TypeScript**: Type safety saved my butt SO many times when passing audio data between components.

**Performance**: 60fps with thousands of particles? Yeah, that required some creativity and a lot of profiling.

---

## 🎯 What's Next?

These tools are fully open source (because knowledge should be shared!), and I'm already getting ideas for v2:

- VR support for the cymatics tool (imagine being INSIDE the sound patterns!)
- More shader effects (I found this cool paper on quantum visualization...)
- MIDI control integration
- Maybe a fourth tool? (Someone stop me please 😅)

---

## 🎵 Try Them Yourself!

Each tool runs directly in your browser - no installation, no setup, just pure audio-visual magic. Whether you're a music producer, a developer curious about audio programming, or just someone who likes pretty things that respond to sound, there's something here for you.

The code's all on GitHub if you want to peek under the hood or build something even cooler. And if you do, please share it! I love seeing what people create with this stuff.

Now excuse me while I go "test" the shader effects with my entire music library for the 47th time today... you know, for quality assurance 😉

Peace! ✨🎧
`}function b(){return t}function w(){return[{depth:2,slug:"-the-shader-playground-aka-pretty-colors-go-brrrr",text:"🌈 The Shader Playground (aka “Pretty Colors Go Brrrr”)"},{depth:2,slug:"-the-professional-tool-getting-serious-for-a-sec",text:"📊 The Professional Tool (Getting Serious For A Sec)"},{depth:2,slug:"-the-mind-melting-physics-demo-science-is-cool",text:"🌀 The Mind-Melting Physics Demo (Science Is Cool!)"},{depth:2,slug:"-why-three-apps-though",text:"🤔 Why Three Apps Though?"},{depth:2,slug:"-the-technical-journey",text:"🛠 The Technical Journey"},{depth:2,slug:"-whats-next",text:"🎯 What’s Next?"},{depth:2,slug:"-try-them-yourself",text:"🎵 Try Them Yourself!"}]}const T=n((l,u,d)=>{const{layout:c,...e}=s;return e.file=r,e.url=h,o`${a()}${i(t)}`});export{T as Content,b as compiledContent,T as default,r as file,s as frontmatter,w as getHeadings,f as rawContent,h as url};
