import{s as h,g as m}from"./_astro_assets.BZASrr0d.js";import{c as d,r as c,m as u}from"./instance.AS_mdBWu.js";import{u as g}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const y={src:"/_astro/pxworld.CrUCpH6s.png",width:1368,height:309,format:"png"},f=async function(a){const e={};{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./pxworld\\.png[^"]*)"',"g");let o,n=0;for(;(o=s.exec(a))!==null;){const t="./pxworld.png_"+n,i=JSON.parse(o[1].replace(/&#x22;/g,'"')),{src:r,...l}=i;e[t]=await m({src:y,...l}),n++}}return e};async function w(a){return f(a).then(e=>a.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(s,o)=>{const n=JSON.parse(o.replace(/&#x22;/g,'"')),t=n.src+"_"+n.index;e[t].srcSet&&e[t].srcSet.values.length>0&&(e[t].attributes.srcset=e[t].srcSet.attribute);const{index:i,...r}=e[t].attributes;return h({src:e[t].src,...r})}))}const p=await w(`<h2 id="the-day-i-ate-my-words-and-loved-every-bite">The Day I Ate My Words (and loved every bite) 🤤</h2>
<p>So there I was, scrolling through my usual tech feeds when I stumbled upon this article about how <a href="https://wails.io/">Wails.io</a> is supposedly the “next Electron” - faster, smaller, better, yada yada yada…</p>
<p>My immediate reaction? 🙄 “Yeah sure, another framework claiming to be better than Electron lol”</p>
<p>I mean, come on! How many times have we heard this story? “Oh, we’re gonna revolutionize desktop apps!” - meanwhile it’s just another wrapper around a browser engine with fancy marketing.</p>
<p>My defense walls went UP immediately. In my head I was like: “No way they can do better than an embedded browser” and “This is probably just hype from some Go fanboys.”</p>
<p><strong>And then I tried it…</strong></p>
<p><strong>*F****</strong> HELL! IT WAS FAST! 🚀</p>
<p>Like, REALLY fast. Not “oh it’s slightly better” fast - I’m talking about “holy crap why is this smoother than running in Firefox?!” fast.</p>
<p>I don’t even care about the backend part at this point (spoiler: I barely use it lol). This was just an incredibly fast way to pack ANY web application into a native one!</p>
<p>Easy install ✅<br>
Good boilerplate for React + TypeScript ✅<br>
Actually works as advertised ✅</p>
<h2 id="the-frontend-rabbit-hole-️">The Frontend Rabbit Hole 🕳️</h2>
<p>Recently I’ve been playing A LOT with animations on the web - not with a game engine, but mostly with pure JS and CSS. I saw some tutorials on how to make a top-down game using ONLY JavaScript and CSS, and honestly? I’ve been obsessed.</p>
<p>I even made a tiny easter egg on my website - added some pixel world thingy using spritesheet I found from itch.io. It’s probably way too hidden but hey, that’s what makes it fun! 😄</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./pxworld.png&#x22;,&#x22;alt&#x22;:&#x22;Pixel World Easter Egg&#x22;,&#x22;index&#x22;:0}">
<em>My little pixel world easter egg - try finding it on my site!</em></p>
<p>But here’s where it gets interesting… I found out you can make sprite sheets with AI now! 🤖</p>
<p>BOOM! I tried a bunch of different prompts to get good working results, experimenting with Gemini and other AI tools. But here’s the thing - I wanted to SEE the animations, not just imagine how they’d look.</p>
<p>And that’s how this app was born! 💡</p>
<h2 id="the-idea-an-app-that-actually-makes-sense">The Idea: An App That Actually Makes Sense</h2>
<p>I wanted something simple: an app where you can generate HTML &#x26; CSS and GIFs from a sprite sheet.</p>
<p>The workflow I imagined:</p>
<ol>
<li>Select an image (your sprite sheet)</li>
<li>Configure your grid settings</li>
<li>Preview different animations from the same file</li>
<li>Export them into different CSS classes</li>
<li>Profit! (well, satisfaction at least 😅)</li>
</ol>
<p>I added some other features while I was testing the AI-generated images from Gemini and figuring out the export process.</p>
<h2 id="the-build-surprisingly-smooth">The Build: Surprisingly Smooth!</h2>
<p>Here’s the crazy part - I literally copied the frontend React components from one of my other projects, dropped them into the Wails frontend, and BOOM!</p>
<p>Just needed to do some cleanup and figure out how to build it on GitHub Actions. That’s it!</p>
<p><strong>Timeline breakdown:</strong></p>
<ul>
<li>Frontend: ~1 day</li>
<li>Backend: ~0.5 day (and I’m not even using it much! 😂)</li>
</ul>
<p>The app has some pretty neat features:</p>
<h3 id="core-features-i-built">Core Features I Built:</h3>
<ul>
<li><strong>Image upload &#x26; grid detection</strong> - automatically figures out dimensions</li>
<li><strong>Advanced animation config</strong> - adjustable columns/rows, margins, manual positioning</li>
<li><strong>Multi-animation support</strong> - handle multiple animations in one sprite sheet</li>
<li><strong>Real-time preview</strong> - see your animations as you configure them</li>
<li><strong>Export madness</strong> - CSS, HTML, ZIP files, even high-quality GIFs!</li>
<li><strong>Project management</strong> - auto-save, import/export settings</li>
</ul>
<p><img src="https://github.com/ehsanpo/Animator/raw/master/demo/1.png" alt="Animator Interface">
<em>The main interface - clean and functional</em></p>
<p><img src="https://github.com/ehsanpo/Animator/raw/master/demo/2.png" alt="Animation Preview"><br>
<em>Real-time preview window with export options</em></p>
<p><img src="https://github.com/ehsanpo/Animator/raw/master/demo/3.png" alt="Code Export">
<em>Generated CSS and HTML - ready to copy-paste!</em></p>
<h2 id="the-surprise-better-than-browser-performance">The Surprise: Better Than Browser Performance! 😱</h2>
<p>And here’s the kicker - to my surprise, it actually runs BETTER in Wails than in Firefox!</p>
<p>Less memory usage = faster and snappier app. I was NOT expecting that. Like, at all.</p>
<p>The whole thing just felt more responsive, more native. It’s like having a web app that doesn’t feel like a web app, you know?</p>
<p>I don’t use the backend functions at all right now (everything happens in the frontend), but maybe I’ll move the ZIP creation and GIF generation to the Go backend later to make it even faster and more stable. But honestly? This works SO good already.</p>
<h2 id="whats-next-spoiler-ai-integration">What’s Next? (Spoiler: AI Integration!) 🤖</h2>
<p>Take the app to the next stage? Maybe!</p>
<p>What’s next on my mind: integrate the image generation API directly into the app so you can generate AND animate in the same place. One-stop-shop for sprite creation and animation.</p>
<p>But right now I don’t really want to set up payment systems for a side project (this is just for fun!), and those API calls are NOT cheap! 😅</p>
<p>For now, I’m super happy using this app to generate sprite sheets with CSS. Here are some examples I’ve been playing with:</p>
<h3 id="-fire-animation---perfect-for-game-ui-elements">🔥 <strong>Fire Animation</strong> - Perfect for game UI elements</h3>
<p>Check out this fire animation I generated with the tool! This is exactly the kind of stuff that gets me excited about sprite animations:</p>
<div style="background: #111; padding: 2rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
  <div class="fire-demo" style="
    width: 192px; 
    height: 172px; 
    background-image: url(&#x27;/img/px/fire/fire_spritesheet.png&#x27;);
    background-repeat: no-repeat;
    display: inline-block;
    animation: fire-animation 0.70s steps(7) infinite;
  "></div>
  <p style="color: #888; font-size: 0.75rem; margin-top: 1rem;">Live fire animation - smooth CSS keyframes!</p>
</div>
<style>
@keyframes fire-animation {
  from { background-position: 0px 0px; }
  to { background-position: -1344px 0px; }
}
</style>
<p><em>Generated with Animator - perfect loop, clean code!</em></p>
<p>The CSS generated is super clean too:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="css"><code><span class="line"><span style="color:#B392F0">.sprite-row-1</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">	width</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">192</span><span style="color:#F97583">px</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">	height</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">172</span><span style="color:#F97583">px</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#79B8FF">	animation</span><span style="color:#E1E4E8">: play-row-1 </span><span style="color:#79B8FF">0.7</span><span style="color:#F97583">s</span><span style="color:#79B8FF"> steps</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">7</span><span style="color:#E1E4E8">) </span><span style="color:#79B8FF">infinite</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">@keyframes</span><span style="color:#FFAB70"> play-row-1</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">	from</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">		background-position</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">0</span><span style="color:#F97583">px</span><span style="color:#79B8FF"> 0</span><span style="color:#F97583">px</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">	}</span></span>
<span class="line"><span style="color:#B392F0">	to</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">		background-position</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">-1344</span><span style="color:#F97583">px</span><span style="color:#79B8FF"> 0</span><span style="color:#F97583">px</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">	}</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>
<p>🏃 <strong>Character Walking</strong> - Classic 8-bit style movement<br>
⚔️ <strong>Attack Sequences</strong> - Combat animations for indie games</p>
<p><em>(More examples coming soon! I’m having too much fun with this tool! 😂)</em></p>
<h2 id="tech-stack--lessons-learned">Tech Stack &#x26; Lessons Learned</h2>
<p><strong>Frontend:</strong></p>
<ul>
<li>React 18 + TypeScript (because 2025 and we’re not animals)</li>
<li>Vite for blazing fast development</li>
<li>Tailwind CSS (my beloved ❤️)</li>
<li>Lucide React for icons</li>
<li>gif.js, jszip, file-saver for the heavy lifting</li>
</ul>
<p><strong>Backend:</strong></p>
<ul>
<li>Go with Wails framework</li>
<li>Cross-platform builds (Windows, macOS, Linux)</li>
</ul>
<p><strong>Key takeaways:</strong></p>
<ol>
<li><strong>Don’t judge a framework by its hype</strong> - sometimes the hype is actually justified</li>
<li><strong>Wails is genuinely fast</strong> - faster than I expected, faster than browser</li>
<li><strong>Go + React is a killer combo</strong> - simple backend, powerful frontend</li>
<li><strong>Small bundle sizes matter</strong> - no Electron bloat here</li>
<li><strong>Native integration is smooth</strong> - access to OS features without the pain</li>
</ol>
<h2 id="wrapping-up-from-skeptic-to-fan">Wrapping Up: From Skeptic to Fan</h2>
<p>Look, I was wrong. Really wrong.</p>
<p>Wails isn’t just “another Electron alternative” - it’s actually a legitimate solution for building fast, native desktop apps with web technologies.</p>
<p>The development experience was smooth, the performance is impressive, and the result feels genuinely native. Plus, the community and documentation are solid.</p>
<p>If you’re building a desktop app and considering Electron, do yourself a favor and at least TRY Wails first. You might be as pleasantly surprised as I was.</p>
<p>And hey, if you want to check out the Animator app, it’s open source! Feel free to poke around the code, suggest improvements, or just use it to make some cool animations.</p>
<p><strong>GitHub Repo:</strong> <a href="https://github.com/ehsanpo/Animator">ehsanpo/Animator</a></p>
<p>Now if you’ll excuse me, I have some more AI-generated sprite sheets to animate… 🎮</p>`),b={title:"From Skeptic to Believer: Building Animator with Wails (and why I was SO wrong about it!)",description:"I thought Wails was just another Electron wannabe... turns out it's actually FASTER than running in a browser! Here's how I built a sprite animation tool in just 1.5 days.",date:"2025-12-25",author:"Ehsan Pourhadi",category:["Game Development","Desktop Apps"],tag:["Wails","React","Go","Sprite Animation","CSS","TypeScript"],featured:!1,draft:!1},I="C:/Users/Ehsan/dev/astro-template/src/content/blog/building-animator-sprite-animation-tool/index.md",k=void 0;function T(){return`
## The Day I Ate My Words (and loved every bite) 🤤

So there I was, scrolling through my usual tech feeds when I stumbled upon this article about how [Wails.io](https://wails.io/) is supposedly the "next Electron" - faster, smaller, better, yada yada yada...

My immediate reaction? 🙄 "Yeah sure, another framework claiming to be better than Electron lol"

I mean, come on! How many times have we heard this story? "Oh, we're gonna revolutionize desktop apps!" - meanwhile it's just another wrapper around a browser engine with fancy marketing.

My defense walls went UP immediately. In my head I was like: "No way they can do better than an embedded browser" and "This is probably just hype from some Go fanboys."

**And then I tried it...**

**\\*F\\*\\*\\*\\*** HELL! IT WAS FAST! 🚀

Like, REALLY fast. Not "oh it's slightly better" fast - I'm talking about "holy crap why is this smoother than running in Firefox?!" fast.

I don't even care about the backend part at this point (spoiler: I barely use it lol). This was just an incredibly fast way to pack ANY web application into a native one!

Easy install ✅  
Good boilerplate for React + TypeScript ✅  
Actually works as advertised ✅

## The Frontend Rabbit Hole 🕳️

Recently I've been playing A LOT with animations on the web - not with a game engine, but mostly with pure JS and CSS. I saw some tutorials on how to make a top-down game using ONLY JavaScript and CSS, and honestly? I've been obsessed.

I even made a tiny easter egg on my website - added some pixel world thingy using spritesheet I found from itch.io. It's probably way too hidden but hey, that's what makes it fun! 😄

![Pixel World Easter Egg](./pxworld.png)
_My little pixel world easter egg - try finding it on my site!_

But here's where it gets interesting... I found out you can make sprite sheets with AI now! 🤖

BOOM! I tried a bunch of different prompts to get good working results, experimenting with Gemini and other AI tools. But here's the thing - I wanted to SEE the animations, not just imagine how they'd look.

And that's how this app was born! 💡

## The Idea: An App That Actually Makes Sense

I wanted something simple: an app where you can generate HTML & CSS and GIFs from a sprite sheet.

The workflow I imagined:

1. Select an image (your sprite sheet)
2. Configure your grid settings
3. Preview different animations from the same file
4. Export them into different CSS classes
5. Profit! (well, satisfaction at least 😅)

I added some other features while I was testing the AI-generated images from Gemini and figuring out the export process.

## The Build: Surprisingly Smooth!

Here's the crazy part - I literally copied the frontend React components from one of my other projects, dropped them into the Wails frontend, and BOOM!

Just needed to do some cleanup and figure out how to build it on GitHub Actions. That's it!

**Timeline breakdown:**

- Frontend: ~1 day
- Backend: ~0.5 day (and I'm not even using it much! 😂)

The app has some pretty neat features:

### Core Features I Built:

- **Image upload & grid detection** - automatically figures out dimensions
- **Advanced animation config** - adjustable columns/rows, margins, manual positioning
- **Multi-animation support** - handle multiple animations in one sprite sheet
- **Real-time preview** - see your animations as you configure them
- **Export madness** - CSS, HTML, ZIP files, even high-quality GIFs!
- **Project management** - auto-save, import/export settings

![Animator Interface](https://github.com/ehsanpo/Animator/raw/master/demo/1.png)
_The main interface - clean and functional_

![Animation Preview](https://github.com/ehsanpo/Animator/raw/master/demo/2.png)  
_Real-time preview window with export options_

![Code Export](https://github.com/ehsanpo/Animator/raw/master/demo/3.png)
_Generated CSS and HTML - ready to copy-paste!_

## The Surprise: Better Than Browser Performance! 😱

And here's the kicker - to my surprise, it actually runs BETTER in Wails than in Firefox!

Less memory usage = faster and snappier app. I was NOT expecting that. Like, at all.

The whole thing just felt more responsive, more native. It's like having a web app that doesn't feel like a web app, you know?

I don't use the backend functions at all right now (everything happens in the frontend), but maybe I'll move the ZIP creation and GIF generation to the Go backend later to make it even faster and more stable. But honestly? This works SO good already.

## What's Next? (Spoiler: AI Integration!) 🤖

Take the app to the next stage? Maybe!

What's next on my mind: integrate the image generation API directly into the app so you can generate AND animate in the same place. One-stop-shop for sprite creation and animation.

But right now I don't really want to set up payment systems for a side project (this is just for fun!), and those API calls are NOT cheap! 😅

For now, I'm super happy using this app to generate sprite sheets with CSS. Here are some examples I've been playing with:

### 🔥 **Fire Animation** - Perfect for game UI elements

Check out this fire animation I generated with the tool! This is exactly the kind of stuff that gets me excited about sprite animations:

<div style="background: #111; padding: 2rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
  <div class="fire-demo" style="
    width: 192px; 
    height: 172px; 
    background-image: url('/img/px/fire/fire_spritesheet.png');
    background-repeat: no-repeat;
    display: inline-block;
    animation: fire-animation 0.70s steps(7) infinite;
  "></div>
  <p style="color: #888; font-size: 0.75rem; margin-top: 1rem;">Live fire animation - smooth CSS keyframes!</p>
</div>

<style>
@keyframes fire-animation {
  from { background-position: 0px 0px; }
  to { background-position: -1344px 0px; }
}
</style>

_Generated with Animator - perfect loop, clean code!_

The CSS generated is super clean too:

\`\`\`css
.sprite-row-1 {
	width: 192px;
	height: 172px;
	animation: play-row-1 0.7s steps(7) infinite;
}

@keyframes play-row-1 {
	from {
		background-position: 0px 0px;
	}
	to {
		background-position: -1344px 0px;
	}
}
\`\`\`

🏃 **Character Walking** - Classic 8-bit style movement  
⚔️ **Attack Sequences** - Combat animations for indie games

_(More examples coming soon! I'm having too much fun with this tool! 😂)_

## Tech Stack & Lessons Learned

**Frontend:**

- React 18 + TypeScript (because 2025 and we're not animals)
- Vite for blazing fast development
- Tailwind CSS (my beloved ❤️)
- Lucide React for icons
- gif.js, jszip, file-saver for the heavy lifting

**Backend:**

- Go with Wails framework
- Cross-platform builds (Windows, macOS, Linux)

**Key takeaways:**

1. **Don't judge a framework by its hype** - sometimes the hype is actually justified
2. **Wails is genuinely fast** - faster than I expected, faster than browser
3. **Go + React is a killer combo** - simple backend, powerful frontend
4. **Small bundle sizes matter** - no Electron bloat here
5. **Native integration is smooth** - access to OS features without the pain

## Wrapping Up: From Skeptic to Fan

Look, I was wrong. Really wrong.

Wails isn't just "another Electron alternative" - it's actually a legitimate solution for building fast, native desktop apps with web technologies.

The development experience was smooth, the performance is impressive, and the result feels genuinely native. Plus, the community and documentation are solid.

If you're building a desktop app and considering Electron, do yourself a favor and at least TRY Wails first. You might be as pleasantly surprised as I was.

And hey, if you want to check out the Animator app, it's open source! Feel free to poke around the code, suggest improvements, or just use it to make some cool animations.

**GitHub Repo:** [ehsanpo/Animator](https://github.com/ehsanpo/Animator)

Now if you'll excuse me, I have some more AI-generated sprite sheets to animate... 🎮
`}function F(){return p}function B(){return[{depth:2,slug:"the-day-i-ate-my-words-and-loved-every-bite",text:"The Day I Ate My Words (and loved every bite) 🤤"},{depth:2,slug:"the-frontend-rabbit-hole-️",text:"The Frontend Rabbit Hole 🕳️"},{depth:2,slug:"the-idea-an-app-that-actually-makes-sense",text:"The Idea: An App That Actually Makes Sense"},{depth:2,slug:"the-build-surprisingly-smooth",text:"The Build: Surprisingly Smooth!"},{depth:3,slug:"core-features-i-built",text:"Core Features I Built:"},{depth:2,slug:"the-surprise-better-than-browser-performance",text:"The Surprise: Better Than Browser Performance! 😱"},{depth:2,slug:"whats-next-spoiler-ai-integration",text:"What’s Next? (Spoiler: AI Integration!) 🤖"},{depth:3,slug:"-fire-animation---perfect-for-game-ui-elements",text:"🔥 Fire Animation - Perfect for game UI elements"},{depth:2,slug:"tech-stack--lessons-learned",text:"Tech Stack & Lessons Learned"},{depth:2,slug:"wrapping-up-from-skeptic-to-fan",text:"Wrapping Up: From Skeptic to Fan"}]}const C=d((a,e,s)=>{const{layout:o,...n}=b;return n.file=I,n.url=k,c`${u()}${g(p)}`});export{C as Content,F as compiledContent,C as default,I as file,b as frontmatter,B as getHeadings,T as rawContent,k as url};
