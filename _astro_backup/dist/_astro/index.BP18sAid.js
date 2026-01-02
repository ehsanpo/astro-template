import{c as s,r as n,m as o}from"./instance.AS_mdBWu.js";import{u as a}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const t=`<p>Hey friends — I’ve been fiddling with TypeScript lately, trying to understand all those little gotchas. One thing that kept biting me was <strong>excess property checks</strong>, plus the difference between <code>object</code>, <code>{}</code>, <code>Object</code> types. I want to share what I learned, because earlier I was confused, maybe you will too, and maybe this helps you avoid stepping on the same banana peel 🍌.</p>
<hr>
<h3 id="what-even-are-excess-property-checks">What even <em>are</em> excess property checks?</h3>
<p>So imagine I define:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#F97583">type</span><span style="color:#B392F0"> Person</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> { </span><span style="color:#FFAB70">firstName</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">; </span><span style="color:#FFAB70">age</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> number</span><span style="color:#E1E4E8"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> logPerson</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">person</span><span style="color:#F97583">:</span><span style="color:#B392F0"> Person</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">	console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(person);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>
<p>Then I try</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> person2</span><span style="color:#F97583">:</span><span style="color:#B392F0"> Person</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> { firstName: </span><span style="color:#9ECBFF">"potato"</span><span style="color:#E1E4E8">, age: </span><span style="color:#79B8FF">21</span><span style="color:#E1E4E8">, extraProp: </span><span style="color:#9ECBFF">"hello!"</span><span style="color:#E1E4E8"> }; </span><span style="color:#6A737D">// &#x3C;-- error</span></span>
<span class="line"></span></code></pre>
<p>At first I was like “wtf, I thought TypeScript was structural, isn’t extraProp ok if it has all the required ones?” But no — TS is stricter when you assign an <em>object literal</em> directly to a typed variable (or pass literal directly to a function). It checks: “does this literal have any properties I don’t know about (i.e. not in the target type)?” If yes → error. That’s the “excess property check.” (<a href="https://www.typescriptlang.org/docs/handbook/2/objects.html?utm_source=chatgpt.com" title="Documentation - Object Types">TypeScript</a>)</p>
<p>But then, I did this:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> person3</span><span style="color:#F97583">:</span><span style="color:#B392F0"> Person</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">	firstName: </span><span style="color:#9ECBFF">"potato"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">	age: </span><span style="color:#79B8FF">21</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#F97583">	...</span><span style="color:#E1E4E8">{ extraProp: </span><span style="color:#9ECBFF">"hello!"</span><span style="color:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#E1E4E8">}; </span><span style="color:#6A737D">// fine</span></span>
<span class="line"></span></code></pre>
<p>AND it passed. And I was like “omg why?” 🤔 Turns out: because of how TS handles spreads and variables/inference. If you spread in extra props, or assign literal to a variable first, TS doesn’t always trigger that excess prop check. The literal isn’t “fresh” in a sense, so TS is more forgiving. (<a href="https://www.allthingstypescript.dev/p/mid-week-scoop-understanding-excess/comments?utm_source=chatgpt.com" title="Mid-week Scoop: Understanding Excess Property Checking in ...">allthingstypescript.dev</a>)</p>
<hr>
<h3 id="why-this-behavior-exists-and-my-struggle">Why this behavior exists (and my struggle)</h3>
<ul>
<li>It’s super helpful for catching little mistakes: typos, misspelling property names, etc. For example, you meant <code>color</code> but typed <code>colour</code>, TS might warn. (<a href="https://www.typescriptlang.org/docs/handbook/2/objects.html?utm_source=chatgpt.com" title="Documentation - Object Types">TypeScript</a>)</li>
<li>But the inconsistency annoyed me. I kept wondering: “why does doing <code>.push(...)</code> in one case break, but in another, no?” Or “why does spreading let me sneak extra props in?”</li>
<li>Eventually I saw: TS is structural (duck typing), but it gives special treatment to object <em>literals</em> when creating or assigning them. If something has already been inferred (object assigned to a variable first), then “excess property” checks are often skipped. (<a href="https://www.allthingstypescript.dev/p/mid-week-scoop-understanding-excess/comments?utm_source=chatgpt.com" title="Mid-week Scoop: Understanding Excess Property Checking in ...">allthingstypescript.dev</a>)</li>
</ul>
<p>So yeah, it feels inconsistent if you don’t know the rules. But once you know them, you can predict what will happen. (Still sometimes surprises me, don’t lie.)</p>
<hr>
<h3 id="object-vs--vs-object--my-head-almost-exploded"><code>object</code> vs <code>{}</code> vs <code>Object</code> — my head almost exploded</h3>
<p>While learning excess props, I also got confused about these three. They seem like they’d be the same, but noooo. TS is picky in its own special way. Here’s how I think of them (after many StackOverflow lurks + making tiny example code to test) :</p>

















<table><thead><tr><th>let foo: object;</th><th>let foo : {};</th></tr></thead><tbody><tr><td><br>foo = { hello: 0}; ✅<br>foo = []; ✅<br>foo = false;❌<br>foo = null;❌<br>foo = undefined; ❌<br>foo = 42;❌<br>foo = ‘bar’;❌<br><br></td><td><br>foo = { hello: 0}; ✅<br>foo = [];✅<br>foo = false;✅<br>foo = null;❌<br>foo = undefined;❌<br>foo = 42; ✅<br>foo = ‘bar’✅</td></tr><tr><td></td><td></td></tr></tbody></table>





























<table><thead><tr><th>Type</th><th>What it allows</th><th>What it forbids</th><th>When I might use it</th></tr></thead><tbody><tr><td><code>object</code> (lowercase)</td><td>non-primitive things: objects, arrays, functions etc. (<a href="https://dev.to/dipakahirav/differences-between-object-and-object-in-typescript-4cca?utm_source=chatgpt.com" title="Differences Between Object, {}, and object in TypeScript">DEV Community</a>)</td><td>primitives like number, string, boolean, symbol etc. (<a href="https://dev.to/dipakahirav/differences-between-object-and-object-in-typescript-4cca?utm_source=chatgpt.com" title="Differences Between Object, {}, and object in TypeScript">DEV Community</a>)</td><td>When I really want “this must be an object (or array etc.), not just a string or number”</td></tr><tr><td><code>{}</code> (empty object type)</td><td>almost everything except <code>null</code> or <code>undefined</code> — yes you can pass string, number, bool etc. (<a href="https://type-level-typescript.com/articles/difference-between-object-types-in-typescript?utm_source=chatgpt.com" title="what&#x27;s the difference between object and {} in TypeScript?">Type-Level TypeScript</a>)</td><td>basically only <code>null</code> and <code>undefined</code> are excluded (if <code>strictNullChecks</code> on) (<a href="https://type-level-typescript.com/articles/difference-between-object-types-in-typescript?utm_source=chatgpt.com" title="what&#x27;s the difference between object and {} in TypeScript?">Type-Level TypeScript</a>)</td><td>When I don’t care much about structure, or I want super loose type (but that’s dangerous)</td></tr><tr><td><code>Object</code> (capital O)</td><td>similar to <code>{}</code>, lots of overlap; but has some weirdness, prototypical methods etc. (<a href="https://jser.dev/typescript/2023/01/12/typescript-object-Object/?utm_source=chatgpt.com" title="&#x60;{}&#x60; vs &#x60;object&#x60; vs &#x60;Object&#x60; in TypeScript.">jser.dev</a>)</td><td>maybe stricter in some built-in method typings; also semantically confusing (some people avoid using it)</td><td>I try to avoid; if I use it, it’s for “just anything with the base Object” but clarity suffers</td></tr></tbody></table>
<p>So: if I want more type safety, <code>object</code> is usually safer than <code>{}</code> in my code. <code>{}</code> is too broad; you can accidentally pass a <code>"hello"</code> or <code>123</code> and TS won’t complain. (Yes, I tested this.) (<a href="https://type-level-typescript.com/articles/difference-between-object-types-in-typescript?utm_source=chatgpt.com" title="what&#x27;s the difference between object and {} in TypeScript?">Type-Level TypeScript</a>)</p>
<hr>
<h3 id="that-array-union-snippet--mutation-weirdness">That “array union” snippet &#x26; mutation weirdness</h3>
<p>You also gave the snippet:</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> foo</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">[] </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> [</span><span style="color:#9ECBFF">"1"</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"2"</span><span style="color:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> bar</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">things</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> (</span><span style="color:#79B8FF">number</span><span style="color:#F97583"> |</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">)[]) {</span></span>
<span class="line"><span style="color:#E1E4E8">	things.</span><span style="color:#B392F0">push</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">); </span><span style="color:#6A737D">// passes type check</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"><span style="color:#B392F0">bar</span><span style="color:#E1E4E8">(foo);</span></span>
<span class="line"></span></code></pre>
<p>I remember doing similar stupid stuff. What’s going on:</p>
<ul>
<li><code>foo</code> is <code>string[]</code></li>
<li><code>bar</code> wants <code>(number|string)[]</code></li>
<li>Because every <code>string</code> is acceptable where <code>(number|string)</code> is expected, <code>string[]</code> is assignable to <code>(string|number)[]</code>. (Covariance in this context)</li>
<li>So TS lets you call <code>bar(foo)</code>. Then inside <code>bar</code>, pushing <code>3</code> (a number) is allowed because the type of <code>things</code> is <code>(string|number)[]</code>. So at runtime, you end up with a mix. Type safety is “ok” by TS’s rules, but logically your <code>foo</code> array has now numbers in it (which you might not expect). Scary.</li>
</ul>
<p>So TS gives you power, but also begs you to pay attention. If I want safer, I might use <code>readonly string[]</code> or avoid that mutation. (One of my dev regrets: I didn’t use readonly arrays earlier.)</p>
<hr>
<h3 id="my-aha-moments--little-tips">My “aha!” moments &#x26; little tips</h3>
<p>Here are some bits I picked up that really helped me stop banging my head:</p>
<ul>
<li>If you want to catch extra props always, try to annotate variables explicitly rather than letting TS infer, especially with literals. The moment you introduce a variable, sometimes the excess check is skipped.</li>
<li>Use <strong>spreads</strong> carefully. Spreads sometimes “hide” excess props, which might be what you want, but sometimes what you <em>don’t want</em>, so know when it happens.</li>
<li>Consider tools / lint rules. There are TS/ESLint rules that enforce stricter property checks, type assertions policies etc. These help keep things consistent.</li>
<li>Be conservative with <code>object</code>, <code>{}</code> etc. If you know your data shape, define interface/type. Don’t default to “anything goes.” Saves future debugging.</li>
</ul>
<hr>
<h3 id="final-thoughts-because-im-still-learning">Final thoughts (because I’m still learning!)</h3>
<p>Honestly, understanding these quirks felt like unlocking secret levels in TS. Sometimes I feel TS is beautiful, other times it’s like one more trap waiting. But the more I write, experiment, make mistakes (omg so many), the more these behavior patterns stick.</p>
<p>If you’re a beginner: don’t let it discourage you. It’s OK to get weird errors. Try small isolated examples like above. Try modifying them and see what TS complains about. Throw in a spread, move to variable first, assign literal, pass directly to function — see where TS flips. That kind of play is what taught me.</p>
<p>If you want, I can write up a mini-cheat sheet you can keep open, with all these “when does excess prop check happen / when not / object vs {} etc.” Want me to drop that?</p>`,r={title:"My TypeScript Adventures: Excess Props, `object` vs `{}`, and Why My Code Sometimes Explodess",description:"Tripped over excess property checks in TypeScript — sharing what I learned so you don’t.",date:"2025-09-24",author:"Ehsan Pourhadi",category:["TypeScript","Best Practices"],tag:["TypeScript","JavaScript","Development","Code Quality"],featured:!0,draft:!1,cover:"cover.png"},i="C:/Users/Ehsan/dev/astro-template/src/content/blog/typescript-best-practices/index.md",l=void 0;function g(){return`
Hey friends — I’ve been fiddling with TypeScript lately, trying to understand all those little gotchas. One thing that kept biting me was **excess property checks**, plus the difference between \`object\`, \`{}\`, \`Object\` types. I want to share what I learned, because earlier I was confused, maybe you will too, and maybe this helps you avoid stepping on the same banana peel 🍌.

---

### What even _are_ excess property checks?

So imagine I define:

\`\`\`ts
type Person = { firstName: string; age: number };

function logPerson(person: Person) {
	console.log(person);
}
\`\`\`

Then I try

\`\`\`ts
const person2: Person = { firstName: "potato", age: 21, extraProp: "hello!" }; // <-- error
\`\`\`

At first I was like “wtf, I thought TypeScript was structural, isn’t extraProp ok if it has all the required ones?” But no — TS is stricter when you assign an _object literal_ directly to a typed variable (or pass literal directly to a function). It checks: “does this literal have any properties I don’t know about (i.e. not in the target type)?” If yes → error. That’s the “excess property check.” ([TypeScript][1])

But then, I did this:

\`\`\`ts
const person3: Person = {
	firstName: "potato",
	age: 21,
	...{ extraProp: "hello!" },
}; // fine
\`\`\`

AND it passed. And I was like “omg why?” 🤔 Turns out: because of how TS handles spreads and variables/inference. If you spread in extra props, or assign literal to a variable first, TS doesn’t always trigger that excess prop check. The literal isn’t “fresh” in a sense, so TS is more forgiving. ([allthingstypescript.dev][2])

---

### Why this behavior exists (and my struggle)

- It’s super helpful for catching little mistakes: typos, misspelling property names, etc. For example, you meant \`color\` but typed \`colour\`, TS might warn. ([TypeScript][1])
- But the inconsistency annoyed me. I kept wondering: “why does doing \`.push(...)\` in one case break, but in another, no?” Or “why does spreading let me sneak extra props in?”
- Eventually I saw: TS is structural (duck typing), but it gives special treatment to object _literals_ when creating or assigning them. If something has already been inferred (object assigned to a variable first), then “excess property” checks are often skipped. ([allthingstypescript.dev][2])

So yeah, it feels inconsistent if you don’t know the rules. But once you know them, you can predict what will happen. (Still sometimes surprises me, don’t lie.)

---

### \`object\` vs \`{}\` vs \`Object\` — my head almost exploded

While learning excess props, I also got confused about these three. They seem like they'd be the same, but noooo. TS is picky in its own special way. Here’s how I think of them (after many StackOverflow lurks + making tiny example code to test) :

| let foo: object;                                                                                                                             | let foo : {};                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <br>foo = { hello: 0}; ✅<br>foo = []; ✅<br>foo = false;❌<br>foo = null;❌<br>foo = undefined; ❌<br>foo = 42;❌<br>foo = 'bar';❌<br><br> | <br>foo = { hello: 0}; ✅<br>foo = [];✅<br>foo = false;✅<br>foo = null;❌<br>foo = undefined;❌<br>foo = 42; ✅<br>foo = 'bar'✅ |
|                                                                                                                                              |                                                                                                                                    |

| Type                     | What it allows                                                                                                           | What it forbids                                                                                            | When I might use it                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| \`object\` (lowercase)     | non-primitive things: objects, arrays, functions etc. ([DEV Community][3])                                               | primitives like number, string, boolean, symbol etc. ([DEV Community][3])                                  | When I really want “this must be an object (or array etc.), not just a string or number”       |
| \`{}\` (empty object type) | almost everything except \`null\` or \`undefined\` — yes you can pass string, number, bool etc. ([Type-Level TypeScript][4]) | basically only \`null\` and \`undefined\` are excluded (if \`strictNullChecks\` on) ([Type-Level TypeScript][4]) | When I don’t care much about structure, or I want super loose type (but that’s dangerous)      |
| \`Object\` (capital O)     | similar to \`{}\`, lots of overlap; but has some weirdness, prototypical methods etc. ([jser.dev][5])                      | maybe stricter in some built-in method typings; also semantically confusing (some people avoid using it)   | I try to avoid; if I use it, it’s for “just anything with the base Object” but clarity suffers |

So: if I want more type safety, \`object\` is usually safer than \`{}\` in my code. \`{}\` is too broad; you can accidentally pass a \`"hello"\` or \`123\` and TS won’t complain. (Yes, I tested this.) ([Type-Level TypeScript][4])

---

### That “array union” snippet & mutation weirdness

You also gave the snippet:

\`\`\`ts
const foo: string[] = ["1", "2"];

function bar(things: (number | string)[]) {
	things.push(3); // passes type check
}
bar(foo);
\`\`\`

I remember doing similar stupid stuff. What’s going on:

- \`foo\` is \`string[]\`
- \`bar\` wants \`(number|string)[]\`
- Because every \`string\` is acceptable where \`(number|string)\` is expected, \`string[]\` is assignable to \`(string|number)[]\`. (Covariance in this context)
- So TS lets you call \`bar(foo)\`. Then inside \`bar\`, pushing \`3\` (a number) is allowed because the type of \`things\` is \`(string|number)[]\`. So at runtime, you end up with a mix. Type safety is “ok” by TS’s rules, but logically your \`foo\` array has now numbers in it (which you might not expect). Scary.

So TS gives you power, but also begs you to pay attention. If I want safer, I might use \`readonly string[]\` or avoid that mutation. (One of my dev regrets: I didn’t use readonly arrays earlier.)

---

### My “aha!” moments & little tips

Here are some bits I picked up that really helped me stop banging my head:

- If you want to catch extra props always, try to annotate variables explicitly rather than letting TS infer, especially with literals. The moment you introduce a variable, sometimes the excess check is skipped.
- Use **spreads** carefully. Spreads sometimes “hide” excess props, which might be what you want, but sometimes what you _don’t want_, so know when it happens.
- Consider tools / lint rules. There are TS/ESLint rules that enforce stricter property checks, type assertions policies etc. These help keep things consistent.
- Be conservative with \`object\`, \`{}\` etc. If you know your data shape, define interface/type. Don’t default to “anything goes.” Saves future debugging.

---

### Final thoughts (because I'm still learning!)

Honestly, understanding these quirks felt like unlocking secret levels in TS. Sometimes I feel TS is beautiful, other times it's like one more trap waiting. But the more I write, experiment, make mistakes (omg so many), the more these behavior patterns stick.

If you’re a beginner: don’t let it discourage you. It’s OK to get weird errors. Try small isolated examples like above. Try modifying them and see what TS complains about. Throw in a spread, move to variable first, assign literal, pass directly to function — see where TS flips. That kind of play is what taught me.

If you want, I can write up a mini-cheat sheet you can keep open, with all these “when does excess prop check happen / when not / object vs {} etc.” Want me to drop that?

[1]: https://www.typescriptlang.org/docs/handbook/2/objects.html?utm_source=chatgpt.com "Documentation - Object Types"
[2]: https://www.allthingstypescript.dev/p/mid-week-scoop-understanding-excess/comments?utm_source=chatgpt.com "Mid-week Scoop: Understanding Excess Property Checking in ..."
[3]: https://dev.to/dipakahirav/differences-between-object-and-object-in-typescript-4cca?utm_source=chatgpt.com "Differences Between Object, {}, and object in TypeScript"
[4]: https://type-level-typescript.com/articles/difference-between-object-types-in-typescript?utm_source=chatgpt.com "what's the difference between object and {} in TypeScript?"
[5]: https://jser.dev/typescript/2023/01/12/typescript-object-Object/?utm_source=chatgpt.com "\`{}\` vs \`object\` vs \`Object\` in TypeScript."
`}function f(){return t}function w(){return[{depth:3,slug:"what-even-are-excess-property-checks",text:"What even are excess property checks?"},{depth:3,slug:"why-this-behavior-exists-and-my-struggle",text:"Why this behavior exists (and my struggle)"},{depth:3,slug:"object-vs--vs-object--my-head-almost-exploded",text:"object vs {} vs Object — my head almost exploded"},{depth:3,slug:"that-array-union-snippet--mutation-weirdness",text:"That “array union” snippet & mutation weirdness"},{depth:3,slug:"my-aha-moments--little-tips",text:"My “aha!” moments & little tips"},{depth:3,slug:"final-thoughts-because-im-still-learning",text:"Final thoughts (because I’m still learning!)"}]}const v=s((p,c,d)=>{const{layout:h,...e}=r;return e.file=i,e.url=l,n`${o()}${a(t)}`});export{v as Content,f as compiledContent,v as default,i as file,r as frontmatter,w as getHeadings,g as rawContent,l as url};
