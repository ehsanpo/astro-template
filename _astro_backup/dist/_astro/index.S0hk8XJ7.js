import{c as t,r as i,m as a}from"./instance.AS_mdBWu.js";import{u as s}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const n=`<p>So… funny story.</p>
<p>A while ago I was playing with <strong>PLCs</strong>. Yep. Industrial stuff. Sensors, relays, ladders, blinking lights. Very <em>factory-core</em>. At the time I didn’t think much of it — I was just trying to understand how machines think without exploding 💥 (spoiler: they’re very unforgiving).</p>
<p>Fast-forward to me learning <strong>React</strong>, sitting in front of my laptop at 2am, te cold, brain fried, staring at <code>useState</code> like it personally offended me.</p>
<p>And then…
💡 <em>WAIT A SECOND.</em></p>
<p>This feels… familiar???</p>
<hr>
<h2 id="-plc-brain-activated">🏭 PLC brain activated</h2>
<p>If you’ve ever touched PLC programming (ladder logic, function blocks, whatever flavor), you know the deal:</p>
<ul>
<li>Inputs come in (buttons, sensors, signals)</li>
<li>Logic runs every cycle</li>
<li>Outputs change based on the current state</li>
<li>Everything is <strong>predictable</strong>, <strong>reactive</strong>, and <strong>stateful</strong></li>
</ul>
<p>Back then I didn’t call it “state”.
I called it “why is this motor still ON???” 😭</p>
<p>But yeah, PLCs are basically:</p>
<blockquote>
<p><strong>Infinite loops that react to changes</strong></p>
</blockquote>
<p>Sound familiar yet?</p>
<hr>
<h2 id="️-enter-react-aka-plc-but-with-jsx">⚛️ Enter React (aka “PLC but with JSX”)</h2>
<p>When I first learned React, I was like:</p>
<blockquote>
<p>“Why is my UI not updating??
Why is this state stale??
Why is everything re-rendering?? omg”</p>
</blockquote>
<p>Classic beginner pain. Been there. Still there sometimes.</p>
<p>Then I realized something embarrassing:</p>
<p><strong>React is just automation logic wearing a hoodie.</strong></p>
<p>Hear me out 👇</p>
<hr>
<h2 id="-plc-scan-cycle--react-render-cycle">🔁 PLC Scan Cycle = React Render Cycle</h2>
<p>In PLCs:</p>
<ol>
<li>Read inputs</li>
<li>Execute logic</li>
<li>Update outputs</li>
<li>Repeat forever ♾️</li>
</ol>
<p>In React:</p>
<ol>
<li>State/props change</li>
<li>Component re-renders</li>
<li>UI updates</li>
<li>Repeat forever ♾️</li>
</ol>
<p>BRO.</p>
<p>Same movie. Different actors.</p>
<p>Except React yells at you if you mutate state
and PLCs yell at you by breaking real machines 🫠</p>
<hr>
<h2 id="-state-is-just-memory-stop-overthinking-it">🧠 State is just memory (stop overthinking it)</h2>
<p>In PLC land:</p>
<ul>
<li>You store flags</li>
<li>You latch bits</li>
<li>You remember what happened last cycle</li>
</ul>
<p>In React:</p>
<ul>
<li><code>useState</code></li>
<li><code>useReducer</code></li>
<li><code>useRef</code> (aka “pls don’t re-render” button)</li>
</ul>
<p>Same idea.
Different syntax.
More memes.</p>
<p>Once I stopped treating React state like magic and started treating it like <strong>PLC memory</strong>, everything clicked.</p>
<p>Like:</p>
<ul>
<li>A button click = digital input</li>
<li><code>setState</code> = coil energizing</li>
<li>Conditional rendering = contacts opening/closing</li>
</ul>
<p>I felt so smart for like 3 minutes 😂</p>
<hr>
<h2 id="-building-an-interactive-story-because-why-not">🎮 Building an interactive story (because why not?)</h2>
<p>So naturally, instead of just understanding this quietly like a normal person…</p>
<p>I built a tiny interactive thing.</p>
<p>An app where:</p>
<ul>
<li>Inputs toggle state</li>
<li>Logic decides what happens next</li>
<li>UI reacts visually</li>
</ul>
<p>Basically a <strong>PLC simulator disguised as a React app</strong>.</p>
<p>Was it overkill? Yes.
Did it help me learn? BIG YES.
Did I push it to GitHub at 3am with a messy commit message? Absolutely.</p>
<hr>
<h2 id="-my-struggles-aka-honesty-time">😵 My struggles (aka honesty time)</h2>
<p>Let’s be real:</p>
<ul>
<li>I broke stuff</li>
<li>I misunderstood hooks</li>
<li>I forgot dependencies in <code>useEffect</code> (don’t judge me)</li>
<li>I re-rendered the universe by accident</li>
</ul>
<p>Multiple times.</p>
<p>But that’s kinda the point, right?
I’m just a curious dev smashing concepts together and seeing what survives 🔥</p>
<hr>
<h2 id="-why-this-mindset-helped-me">🚀 Why this mindset helped me</h2>
<p>Thinking in <strong>automation logic</strong> made React less scary.</p>
<p>Instead of:</p>
<blockquote>
<p>“React is confusing”</p>
</blockquote>
<p>It became:</p>
<blockquote>
<p>“Oh, this is just reactive logic with prettier outputs”</p>
</blockquote>
<p>And that mindset shift?
Game changer.</p>
<p>If you come from:</p>
<ul>
<li>PLCs</li>
<li>Arduino</li>
<li>Game dev</li>
<li>Even Excel formulas 😅</li>
</ul>
<p>You already understand React more than you think.</p>
<hr>
<h2 id="-final-thoughts-before-i-overthink-this">💬 Final thoughts (before I overthink this)</h2>
<p>If you’re learning React and feel stuck:</p>
<ul>
<li>Build weird things</li>
<li>Compare it to stuff you already know</li>
<li>Don’t wait to “feel ready”</li>
</ul>
<p>Just do it™️.</p>
<p>Worst case?
You learn something.
Best case?
You accidentally connect factories to frontends and feel like a wizard 🧙‍♂️✨</p>
<p>Alright, I’ll stop here before this turns into a book.
Thanks for reading, Now go break something and learn 💙</p>`,o={title:"From Automation to Apps",description:"How PLC logic accidentally taught me React state management. Turns out, industrial automation and React aren't that different after all.",date:"2025-12-12",author:"Ehsan Pourhadi",category:["Web Development","Learning"],tag:["React","PLC","State Management","Automation"],featured:!1,draft:!1,cover:"cover.jpg"},r="C:/Users/Ehsan/dev/astro-template/src/content/blog/from-automation-to-apps/index.md",l=void 0;function f(){return`
So… funny story.

A while ago I was playing with **PLCs**. Yep. Industrial stuff. Sensors, relays, ladders, blinking lights. Very _factory-core_. At the time I didn't think much of it — I was just trying to understand how machines think without exploding 💥 (spoiler: they're very unforgiving).

Fast-forward to me learning **React**, sitting in front of my laptop at 2am, te cold, brain fried, staring at \`useState\` like it personally offended me.

And then…
💡 _WAIT A SECOND._

This feels… familiar???

---

## 🏭 PLC brain activated

If you've ever touched PLC programming (ladder logic, function blocks, whatever flavor), you know the deal:

- Inputs come in (buttons, sensors, signals)
- Logic runs every cycle
- Outputs change based on the current state
- Everything is **predictable**, **reactive**, and **stateful**

Back then I didn't call it "state".
I called it "why is this motor still ON???" 😭

But yeah, PLCs are basically:

> **Infinite loops that react to changes**

Sound familiar yet?

---

## ⚛️ Enter React (aka "PLC but with JSX")

When I first learned React, I was like:

> "Why is my UI not updating??
> Why is this state stale??
> Why is everything re-rendering?? omg"

Classic beginner pain. Been there. Still there sometimes.

Then I realized something embarrassing:

**React is just automation logic wearing a hoodie.**

Hear me out 👇

---

## 🔁 PLC Scan Cycle = React Render Cycle

In PLCs:

1. Read inputs
2. Execute logic
3. Update outputs
4. Repeat forever ♾️

In React:

1. State/props change
2. Component re-renders
3. UI updates
4. Repeat forever ♾️

BRO.

Same movie. Different actors.

Except React yells at you if you mutate state
and PLCs yell at you by breaking real machines 🫠

---

## 🧠 State is just memory (stop overthinking it)

In PLC land:

- You store flags
- You latch bits
- You remember what happened last cycle

In React:

- \`useState\`
- \`useReducer\`
- \`useRef\` (aka "pls don't re-render" button)

Same idea.
Different syntax.
More memes.

Once I stopped treating React state like magic and started treating it like **PLC memory**, everything clicked.

Like:

- A button click = digital input
- \`setState\` = coil energizing
- Conditional rendering = contacts opening/closing

I felt so smart for like 3 minutes 😂

---

## 🎮 Building an interactive story (because why not?)

So naturally, instead of just understanding this quietly like a normal person…

I built a tiny interactive thing.

An app where:

- Inputs toggle state
- Logic decides what happens next
- UI reacts visually

Basically a **PLC simulator disguised as a React app**.

Was it overkill? Yes.
Did it help me learn? BIG YES.
Did I push it to GitHub at 3am with a messy commit message? Absolutely.

---

## 😵 My struggles (aka honesty time)

Let's be real:

- I broke stuff
- I misunderstood hooks
- I forgot dependencies in \`useEffect\` (don't judge me)
- I re-rendered the universe by accident

Multiple times.

But that's kinda the point, right?
I'm just a curious dev smashing concepts together and seeing what survives 🔥

---

## 🚀 Why this mindset helped me

Thinking in **automation logic** made React less scary.

Instead of:

> "React is confusing"

It became:

> "Oh, this is just reactive logic with prettier outputs"

And that mindset shift?
Game changer.

If you come from:

- PLCs
- Arduino
- Game dev
- Even Excel formulas 😅

You already understand React more than you think.

---

## 💬 Final thoughts (before I overthink this)

If you're learning React and feel stuck:

- Build weird things
- Compare it to stuff you already know
- Don't wait to "feel ready"

Just do it™️.

Worst case?
You learn something.
Best case?
You accidentally connect factories to frontends and feel like a wizard 🧙‍♂️✨

Alright, I'll stop here before this turns into a book.
Thanks for reading, Now go break something and learn 💙
`}function k(){return n}function b(){return[{depth:2,slug:"-plc-brain-activated",text:"🏭 PLC brain activated"},{depth:2,slug:"️-enter-react-aka-plc-but-with-jsx",text:"⚛️ Enter React (aka “PLC but with JSX”)"},{depth:2,slug:"-plc-scan-cycle--react-render-cycle",text:"🔁 PLC Scan Cycle = React Render Cycle"},{depth:2,slug:"-state-is-just-memory-stop-overthinking-it",text:"🧠 State is just memory (stop overthinking it)"},{depth:2,slug:"-building-an-interactive-story-because-why-not",text:"🎮 Building an interactive story (because why not?)"},{depth:2,slug:"-my-struggles-aka-honesty-time",text:"😵 My struggles (aka honesty time)"},{depth:2,slug:"-why-this-mindset-helped-me",text:"🚀 Why this mindset helped me"},{depth:2,slug:"-final-thoughts-before-i-overthink-this",text:"💬 Final thoughts (before I overthink this)"}]}const I=t((c,u,d)=>{const{layout:h,...e}=o;return e.file=r,e.url=l,i`${a()}${s(n)}`});export{I as Content,k as compiledContent,I as default,r as file,o as frontmatter,b as getHeadings,f as rawContent,l as url};
