import{s as p,g as d}from"./_astro_assets.BZASrr0d.js";import{c as u,r as c,m as g}from"./instance.AS_mdBWu.js";import{u as y}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const m={src:"/_astro/developer-type-calm-senior.Ddzt7wmE.png",width:1924,height:3968,format:"png"},f=async function(s){const e={};{const o=new RegExp('__ASTRO_IMAGE_="([^"]*\\./developer-type-calm-senior\\.png[^"]*)"',"g");let a,n=0;for(;(a=o.exec(s))!==null;){const t="./developer-type-calm-senior.png_"+n,r=JSON.parse(a[1].replace(/&#x22;/g,'"')),{src:i,...h}=r;e[t]=await d({src:m,...h}),n++}}return e};async function b(s){return f(s).then(e=>s.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(o,a)=>{const n=JSON.parse(a.replace(/&#x22;/g,'"')),t=n.src+"_"+n.index;e[t].srcSet&&e[t].srcSet.values.length>0&&(e[t].attributes.srcset=e[t].srcSet.attribute);const{index:r,...i}=e[t].attributes;return p({src:e[t].src,...i})}))}const l=await b(`<p>So… I built a thing.
It’s called <strong>Developer Type Assessment</strong> and it tells you <em>what kind of developer brain you have</em> 🧠💻</p>
<p>Not “are you good at algorithms” (pls no), but more like:</p>
<ul>
<li>do you <strong>ship fast</strong> or <strong>overthink everything</strong></li>
<li>do you love <strong>clean code</strong> or just want it to <em>work</em></li>
<li>do you debug like a detective or YOLO your way through bugs</li>
</ul>
<p>👉 You can try it here:
<a href="https://ehsanpo.github.io/developertype/">https://ehsanpo.github.io/developertype/</a></p>
<p>I honestly started this as a “fun weekend project” and then suddenly I was deep into psychology, scoring algorithms, and arguing with myself about color contrast at midnight. Classic.</p>
<hr>
<h2 id="the-idea-aka-what-was-i-thinking">The Idea (aka: what was I thinking?)</h2>
<p>I didn’t want a skills test.
No quizzes like <em>“what does this JavaScript output?”</em> (trauma 😭).</p>
<p>I wanted something more <strong>psychological</strong>.
Something that feels like real dev life.</p>
<p>Every question forces a trade-off:</p>
<ul>
<li>ship fast vs build it right</li>
<li>explore vs maintain</li>
<li>solo grinding vs team collaboration</li>
</ul>
<p>Your answers slowly pull you toward one of <strong>12 developer archetypes</strong> like:</p>
<ul>
<li><strong>The Ship It</strong> 🚀</li>
<li><strong>The Detective</strong> 🕵️</li>
<li><strong>The Craftsman</strong> 🛠️</li>
<li>(yes, Architecture Astronaut is there too 👀)</li>
</ul>
<p>No “right” answers. Just vibes.</p>
<h2 id="-inspiration">💡 Inspiration</h2>
<p>This assessment was inspired by the article <a href="https://dev.to/notadevbuthere/the-12-developer-mindsets-ive-seen-in-my-career-and-what-they-teach-us-about-building-software-42de">The 12 Developer Mindsets I’ve Seen in My Career</a> by <a href="https://dev.to/notadevbuthere">@notadevbuthere</a>. The archetypes and core concepts are based on real developer behaviors and patterns observed in software teams.</p>
<hr>
<h2 id="the-stack-kept-it-simple-promise">The Stack (kept it simple, promise)</h2>
<p>I didn’t want backend drama. No auth. No DB. No servers.
Just frontend fun.</p>
<ul>
<li><strong>React + Vite</strong> – fast, clean, no pain</li>
<li><strong>React Router</strong> – with <code>HashRouter</code> because GitHub Pages 😅</li>
<li><strong>Pure CSS</strong> – no Tailwind, no frameworks, just vibes and CSS variables</li>
<li><strong>html2canvas</strong> – for downloading results as images (this was surprisingly fun)</li>
</ul>
<p>That’s it. No magic. No enterprise nonsense.</p>
<hr>
<h2 id="cool-stuff-im-proud-of">Cool Stuff I’m Proud Of ✨</h2>
<h3 id="-smart-ish-scoring">🧠 Smart-ish Scoring</h3>
<p>Each answer gives <strong>weighted points</strong> to multiple archetypes.</p>
<p>So you’re not just “one thing”.
The algorithm can notice stuff like:</p>
<blockquote>
<p>“huh, this person scores high in <em>Ship It</em> AND <em>Craftsman</em>… interesting tension 👀”</p>
</blockquote>
<p>It actually felt like teaching the app to understand personalities. Kinda creepy. Kinda cool.</p>
<hr>
<h3 id="-shareable-results--download">🔗 Shareable Results &#x26; Download</h3>
<p>Results are encoded into the URL using base64.
No backend needed – just pure frontend magic ✨</p>
<p>Which means:</p>
<ul>
<li>share the link and anyone can see your result</li>
<li>no retaking the test</li>
<li>no database, no servers, my wallet is happy</li>
<li>download your result as a PNG</li>
<li>share directly to LinkedIn (yes, devs love this stuff)</li>
</ul>
<p>Encoding state into the URL turned out to be insanely powerful. Sharing just works™ and I wanted it to feel like an <strong>achievement unlock</strong> 🎖️, not just text on a screen.</p>
<hr>
<h2 id="the-questions-harder-than-coding-tbh">The Questions (harder than coding tbh)</h2>
<p>20 questions.
4 answers each.</p>
<p>This part took the longest.</p>
<p>Each answer had to:</p>
<ul>
<li>feel <em>real</em></li>
<li>map clearly to personality traits</li>
<li>not scream “THIS IS THE CORRECT ANSWER” 🙃</li>
</ul>
<p>Example question:</p>
<blockquote>
<p><strong>You find a messy file that somehow works. What do you do?</strong></p>
</blockquote>
<ul>
<li>Rewrite it from scratch (perfectionist)</li>
<li>Ship features and move on (pragmatic)</li>
<li>Understand why it works first (detective)</li>
<li>Refactor slowly over time (balanced dev)</li>
</ul>
<p>If you read that and felt <em>personally attacked</em>… good 😈</p>
<hr>
<h2 id="things-i-learned-aka-bugs-taught-me-stuff">Things I Learned (aka: bugs taught me stuff)</h2>
<h3 id="-react-keys-really-matter">🔑 React keys REALLY matter</h3>
<p>I had a weird bug where answers from one question leaked into another.</p>
<p>Turns out:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#E1E4E8">key</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{answer.id}</span></span>
<span class="line"></span></code></pre>
<p>was NOT enough.</p>
<p>Fix:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#E1E4E8">key</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{</span><span style="color:#9ECBFF">\`\${</span><span style="color:#E1E4E8">question</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">id</span><span style="color:#9ECBFF">}-\${</span><span style="color:#E1E4E8">answer</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">id</span><span style="color:#9ECBFF">}\`</span><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>
<p>React stopped gaslighting me immediately.</p>
<hr>
<h3 id="️-tiny-delays--better-ux">⏱️ Tiny delays = better UX</h3>
<p>That 300ms pause after clicking an answer?</p>
<p>Remove it and the app feels broken.
Add it and suddenly everything feels intentional.</p>
<p>UX is wild.</p>
<hr>
<h2 id="stats-because-devs-love-numbers">Stats (because devs love numbers)</h2>
<ul>
<li>20 questions</li>
<li>12 archetypes</li>
<li>~5 minutes</li>
<li>0 backend servers</li>
<li>Hosted on GitHub Pages</li>
<li>Built in 2 hours</li>
</ul>
<hr>
<h2 id="try-it">Try It 👇</h2>
<p>👉 <strong>Take the test:</strong>
<a href="https://ehsanpo.github.io/developertype/">https://ehsanpo.github.io/developertype/</a></p>
<p>👉 <strong>Open source on GitHub:</strong>
<a href="https://github.com/ehsanpo/developertype">https://github.com/ehsanpo/developertype</a></p>
<p>If you try it, tell me what type you got 👀
And if you read this far… wow. You’re definitely not “The Ship It” 😅</p>
<p>Built for fun. Learned a ton.
Highly recommend building weird little projects like this.</p>
<p>Now excuse me while I add <em>one more feature</em> that I definitely don’t need. 🚀</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./developer-type-calm-senior.png&#x22;,&#x22;alt&#x22;:&#x22;Developer Type Assessment Screenshot&#x22;,&#x22;index&#x22;:0}"></p>`),w={title:"I Built a Developer Personality Test (because why not)",description:"Built a fun psychological assessment that tells you what kind of developer brain you have - not your skills, but your actual personality and work style.",date:"2025-12-16",author:"Ehsan Pourhadi",category:["Projects","Frontend"],tag:["React","Vite","UX","Side Projects"],featured:!1,draft:!1,cover:"cover.png"},v="C:/Users/Ehsan/dev/astro-template/src/content/blog/developer-personality-test/index.md",k=void 0;function R(){return`
So… I built a thing.
It's called **Developer Type Assessment** and it tells you _what kind of developer brain you have_ 🧠💻

Not "are you good at algorithms" (pls no), but more like:

- do you **ship fast** or **overthink everything**
- do you love **clean code** or just want it to _work_
- do you debug like a detective or YOLO your way through bugs

👉 You can try it here:
[https://ehsanpo.github.io/developertype/](https://ehsanpo.github.io/developertype/)

I honestly started this as a "fun weekend project" and then suddenly I was deep into psychology, scoring algorithms, and arguing with myself about color contrast at midnight. Classic.

---

## The Idea (aka: what was I thinking?)

I didn't want a skills test.
No quizzes like _"what does this JavaScript output?"_ (trauma 😭).

I wanted something more **psychological**.
Something that feels like real dev life.

Every question forces a trade-off:

- ship fast vs build it right
- explore vs maintain
- solo grinding vs team collaboration

Your answers slowly pull you toward one of **12 developer archetypes** like:

- **The Ship It** 🚀
- **The Detective** 🕵️
- **The Craftsman** 🛠️
- (yes, Architecture Astronaut is there too 👀)

No "right" answers. Just vibes.

## 💡 Inspiration

This assessment was inspired by the article [The 12 Developer Mindsets I've Seen in My Career](https://dev.to/notadevbuthere/the-12-developer-mindsets-ive-seen-in-my-career-and-what-they-teach-us-about-building-software-42de) by [@notadevbuthere](https://dev.to/notadevbuthere). The archetypes and core concepts are based on real developer behaviors and patterns observed in software teams.

---

## The Stack (kept it simple, promise)

I didn't want backend drama. No auth. No DB. No servers.
Just frontend fun.

- **React + Vite** – fast, clean, no pain
- **React Router** – with \`HashRouter\` because GitHub Pages 😅
- **Pure CSS** – no Tailwind, no frameworks, just vibes and CSS variables
- **html2canvas** – for downloading results as images (this was surprisingly fun)

That's it. No magic. No enterprise nonsense.

---

## Cool Stuff I'm Proud Of ✨

### 🧠 Smart-ish Scoring

Each answer gives **weighted points** to multiple archetypes.

So you're not just "one thing".
The algorithm can notice stuff like:

> "huh, this person scores high in _Ship It_ AND _Craftsman_… interesting tension 👀"

It actually felt like teaching the app to understand personalities. Kinda creepy. Kinda cool.

---

### 🔗 Shareable Results & Download

Results are encoded into the URL using base64.
No backend needed – just pure frontend magic ✨

Which means:

- share the link and anyone can see your result
- no retaking the test
- no database, no servers, my wallet is happy
- download your result as a PNG
- share directly to LinkedIn (yes, devs love this stuff)

Encoding state into the URL turned out to be insanely powerful. Sharing just works™ and I wanted it to feel like an **achievement unlock** 🎖️, not just text on a screen.

---

## The Questions (harder than coding tbh)

20 questions.
4 answers each.

This part took the longest.

Each answer had to:

- feel _real_
- map clearly to personality traits
- not scream "THIS IS THE CORRECT ANSWER" 🙃

Example question:

> **You find a messy file that somehow works. What do you do?**

- Rewrite it from scratch (perfectionist)
- Ship features and move on (pragmatic)
- Understand why it works first (detective)
- Refactor slowly over time (balanced dev)

If you read that and felt _personally attacked_… good 😈

---

## Things I Learned (aka: bugs taught me stuff)

### 🔑 React keys REALLY matter

I had a weird bug where answers from one question leaked into another.

Turns out:

\`\`\`js
key={answer.id}
\`\`\`

was NOT enough.

Fix:

\`\`\`js
key={\`\${question.id}-\${answer.id}\`}
\`\`\`

React stopped gaslighting me immediately.

---

### ⏱️ Tiny delays = better UX

That 300ms pause after clicking an answer?

Remove it and the app feels broken.
Add it and suddenly everything feels intentional.

UX is wild.

---

## Stats (because devs love numbers)

- 20 questions
- 12 archetypes
- ~5 minutes
- 0 backend servers
- Hosted on GitHub Pages
- Built in 2 hours

---

## Try It 👇

👉 **Take the test:**
[https://ehsanpo.github.io/developertype/](https://ehsanpo.github.io/developertype/)

👉 **Open source on GitHub:**
[https://github.com/ehsanpo/developertype](https://github.com/ehsanpo/developertype)

If you try it, tell me what type you got 👀
And if you read this far… wow. You're definitely not "The Ship It" 😅

Built for fun. Learned a ton.
Highly recommend building weird little projects like this.

Now excuse me while I add _one more feature_ that I definitely don't need. 🚀

![Developer Type Assessment Screenshot](./developer-type-calm-senior.png)
`}function _(){return l}function C(){return[{depth:2,slug:"the-idea-aka-what-was-i-thinking",text:"The Idea (aka: what was I thinking?)"},{depth:2,slug:"-inspiration",text:"💡 Inspiration"},{depth:2,slug:"the-stack-kept-it-simple-promise",text:"The Stack (kept it simple, promise)"},{depth:2,slug:"cool-stuff-im-proud-of",text:"Cool Stuff I’m Proud Of ✨"},{depth:3,slug:"-smart-ish-scoring",text:"🧠 Smart-ish Scoring"},{depth:3,slug:"-shareable-results--download",text:"🔗 Shareable Results & Download"},{depth:2,slug:"the-questions-harder-than-coding-tbh",text:"The Questions (harder than coding tbh)"},{depth:2,slug:"things-i-learned-aka-bugs-taught-me-stuff",text:"Things I Learned (aka: bugs taught me stuff)"},{depth:3,slug:"-react-keys-really-matter",text:"🔑 React keys REALLY matter"},{depth:3,slug:"️-tiny-delays--better-ux",text:"⏱️ Tiny delays = better UX"},{depth:2,slug:"stats-because-devs-love-numbers",text:"Stats (because devs love numbers)"},{depth:2,slug:"try-it",text:"Try It 👇"}]}const N=u((s,e,o)=>{const{layout:a,...n}=w;return n.file=v,n.url=k,c`${g()}${y(l)}`});export{N as Content,_ as compiledContent,N as default,v as file,w as frontmatter,C as getHeadings,R as rawContent,k as url};
