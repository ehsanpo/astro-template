import{s as l,g as h}from"./_astro_assets.BZASrr0d.js";import{c as g,r as d,m as u}from"./instance.AS_mdBWu.js";import{u as m}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const y={src:"/_astro/pigpen-cipher-key.D6gOT3l0.png",width:1024,height:1024,format:"png"},f=async function(s){const e={};{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./pigpen-cipher-key\\.png[^"]*)"',"g");let o,t=0;for(;(o=a.exec(s))!==null;){const n="./pigpen-cipher-key.png_"+t,r=JSON.parse(o[1].replace(/&#x22;/g,'"')),{src:i,...c}=r;e[n]=await h({src:y,...c}),t++}}return e};async function b(s){return f(s).then(e=>s.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(a,o)=>{const t=JSON.parse(o.replace(/&#x22;/g,'"')),n=t.src+"_"+t.index;e[n].srcSet&&e[n].srcSet.values.length>0&&(e[n].attributes.srcset=e[n].srcSet.attribute);const{index:r,...i}=e[n].attributes;return l({src:e[n].src,...i})}))}const p=await b(`<p>I’ve been using React for years, but somehow never touched <strong>React Native</strong>. No reason — just never had a project idea.
Then one day I saw a random Reddit post about the <strong>Pigpen cipher</strong> (yep, that funky symbol-based code thing 🕵️‍♂️), and suddenly I was like:</p>
<blockquote>
<p>“Wait… what if I turned this into an app so I can send secret messages to friends?”</p>
</blockquote>
<p>And that’s how the chaos began.</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./pigpen-cipher-key.png&#x22;,&#x22;alt&#x22;:&#x22;Pigpen cipher key diagram&#x22;,&#x22;index&#x22;:0}">
<em>The classic Pigpen cipher key — letters turned into secret symbols</em></p>
<hr>
<h2 id="discovering-expo">Discovering Expo 🚀</h2>
<p>After a quick Google dive, I found <a href="https://expo.io/"><strong>Expo</strong></a> — basically React Native’s best friend. It sets up everything for you, zero config.</p>
<p>I ran:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#B392F0">npm</span><span style="color:#9ECBFF"> install</span><span style="color:#79B8FF"> -g</span><span style="color:#9ECBFF"> expo-cli</span></span>
<span class="line"><span style="color:#B392F0">expo</span><span style="color:#9ECBFF"> init</span><span style="color:#9ECBFF"> Pigpen-cipher</span></span>
<span class="line"><span style="color:#B392F0">expo</span><span style="color:#9ECBFF"> start</span><span style="color:#79B8FF"> --web</span></span>
<span class="line"></span></code></pre>
<p>Boom. Instant app with working tabs. One for <strong>encrypting</strong>, one for <strong>decrypting</strong>. I could even preview it in my browser — felt like magic.</p>
<hr>
<h2 id="the-svg-meltdown">The SVG Meltdown 🎨💀</h2>
<p>Then I tested it on iOS and… my SVG symbols were <em>gone</em>. Poof.
Hours of Googling later, I tried different libraries, converted all my SVGs into React components, and still — nothing.
Turns out, I just <strong>forgot to set width and height</strong> on each SVG. 😭</p>
<iframe allowfullscreen class="giphy-embed" frameborder="0" height="300" src="https://giphy.com/embed/6xcqPF9MTwChq" width="300" style="margin: 20px auto; display: block;"></iframe>
_That “ohhhh” moment when the bug finally makes sense 😅_
<hr>
<h2 id="success">Success! 🎉</h2>
<p>Once I fixed that, everything worked perfectly. You could tap the symbols to <strong>decrypt messages</strong> or type and <strong>encrypt text</strong> back into Pigpen symbols.</p>
<p>Next on the list: let users <strong>save</strong> their secret message as an image to share.</p>
<hr>
<h2 id="whats-next">What’s Next</h2>
<p>Pushed everything to GitHub (because of course 😎):
👉 <a href="https://github.com/ehsanpo/Pigpen-cipher"><strong>Pigpen Cipher App on GitHub</strong></a></p>
<p>My plan:</p>
<ul>
<li>Use <code>react-native-view-shot</code> to convert the screen to an image</li>
<li>Use <code>react-native-cameraroll</code> to save it locally</li>
</ul>
<p>Basically, turning secret code into shareable art.</p>
<hr>
<h2 id="key-takeaways">Key Takeaways 💡</h2>
<ol>
<li><strong>Expo is amazing</strong> — zero setup, instant app.</li>
<li><strong>SVGs need explicit width &#x26; height</strong> (learned that the hard way).</li>
<li><strong>Test on real devices</strong>, not just web.</li>
<li>Sometimes the “bug” is just… you. 😅</li>
</ol>
<p>If you’re new to React Native — start with Expo, mess around, break stuff, fix it, and repeat. You’ll learn <em>so fast</em>.</p>
<hr>
<p><em>Wanna try decoding your own messages? Check out the <a href="https://github.com/ehsanpo/Pigpen-cipher">GitHub repo</a> and send me your secret notes 🕶️</em></p>`),w={title:"Getting Started with React Native",description:"My journey into React Native development, building a Pigpen cipher app from idea to implementation. Learn about the challenges and solutions when working with SVGs in React Native.",date:"2020-01-14",author:"Ehsan Pourhadi",category:["Mobile Development","React Native"],tag:["React Native","Expo","Mobile","JavaScript","SVG"],featured:!1,draft:!1,cover:"./pigpen-cover.png"},x="C:/Users/Ehsan/dev/astro-template/src/content/blog/getting-started-with-react-native/index.md",v=void 0;function S(){return`
I’ve been using React for years, but somehow never touched **React Native**. No reason — just never had a project idea.
Then one day I saw a random Reddit post about the **Pigpen cipher** (yep, that funky symbol-based code thing 🕵️‍♂️), and suddenly I was like:

> “Wait… what if I turned this into an app so I can send secret messages to friends?”

And that’s how the chaos began.

![Pigpen cipher key diagram](./pigpen-cipher-key.png)
_The classic Pigpen cipher key — letters turned into secret symbols_

---

## Discovering Expo 🚀

After a quick Google dive, I found [**Expo**](https://expo.io/) — basically React Native’s best friend. It sets up everything for you, zero config.

I ran:

\`\`\`bash
npm install -g expo-cli
expo init Pigpen-cipher
expo start --web
\`\`\`

Boom. Instant app with working tabs. One for **encrypting**, one for **decrypting**. I could even preview it in my browser — felt like magic.

---

## The SVG Meltdown 🎨💀

Then I tested it on iOS and… my SVG symbols were _gone_. Poof.
Hours of Googling later, I tried different libraries, converted all my SVGs into React components, and still — nothing.
Turns out, I just **forgot to set width and height** on each SVG. 😭

<iframe allowfullscreen="" class="giphy-embed" frameborder="0" height="300" src="https://giphy.com/embed/6xcqPF9MTwChq" width="300" style="margin: 20px auto; display: block;"></iframe>
_That “ohhhh” moment when the bug finally makes sense 😅_

---

## Success! 🎉

Once I fixed that, everything worked perfectly. You could tap the symbols to **decrypt messages** or type and **encrypt text** back into Pigpen symbols.

Next on the list: let users **save** their secret message as an image to share.

---

## What’s Next

Pushed everything to GitHub (because of course 😎):
👉 [**Pigpen Cipher App on GitHub**](https://github.com/ehsanpo/Pigpen-cipher)

My plan:

- Use \`react-native-view-shot\` to convert the screen to an image
- Use \`react-native-cameraroll\` to save it locally

Basically, turning secret code into shareable art.

---

## Key Takeaways 💡

1. **Expo is amazing** — zero setup, instant app.
2. **SVGs need explicit width & height** (learned that the hard way).
3. **Test on real devices**, not just web.
4. Sometimes the “bug” is just… you. 😅

If you’re new to React Native — start with Expo, mess around, break stuff, fix it, and repeat. You’ll learn _so fast_.

---

_Wanna try decoding your own messages? Check out the [GitHub repo](https://github.com/ehsanpo/Pigpen-cipher) and send me your secret notes 🕶️_
`}function T(){return p}function R(){return[{depth:2,slug:"discovering-expo",text:"Discovering Expo 🚀"},{depth:2,slug:"the-svg-meltdown",text:"The SVG Meltdown 🎨💀"},{depth:2,slug:"success",text:"Success! 🎉"},{depth:2,slug:"whats-next",text:"What’s Next"},{depth:2,slug:"key-takeaways",text:"Key Takeaways 💡"}]}const E=g((s,e,a)=>{const{layout:o,...t}=w;return t.file=x,t.url=v,d`${u()}${m(p)}`});export{E as Content,T as compiledContent,E as default,x as file,w as frontmatter,R as getHeadings,S as rawContent,v as url};
