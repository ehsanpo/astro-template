import{c as a,r as n,m as t}from"./instance.AS_mdBWu.js";import{u as o}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const e=`<p>OMG, so you know how you have that one thing you use all the time, even when you know there are better options out there? For me, and apparently a lot of other devs, that thing is <code>useState</code> in React. I mean, it’s the first hook you learn, right? It’s so easy! You’re just like, <code>const [count, setCount] = useState(0);</code>, and boom, you have state. Woohoo!</p>
<p>But then I watched this insane talk by David Khourshid at React Miami, called “Goodbye, useState,” and my mind was totally blown. Seriously, I went in thinking, “This guy is probably gonna tell me to stop using my favorite hook,” and he pretty much did. But in a cool, “hey, let’s learn something new” kind of way.</p>
<p><em>The spaghetti diagram David showed that blew my mind</em></p>
<h2 id="the-usestate-problem">The useState Problem</h2>
<p>He basically said that <code>useState</code> is great for simple stuff, but for anything even a little bit complex, it’s a “foot gun.” He showed this crazy diagram of how <code>useState</code> and <code>useEffect</code> can get all tangled up, like a bowl of spaghetti. It becomes this mess where one thing changes, and it triggers a chain reaction of re-renders, and you’re just like, “What even is happening?!” It’s a nightmare to debug, and I’ve definitely been there, pulling my hair out trying to figure out why my component is re-rendering for the fifth time.</p>
<h2 id="the-better-alternatives">The Better Alternatives</h2>
<p>So, what’s a self-taught dev to do? David had some amazing suggestions that I’m totally going to try.</p>
<h3 id="1-dont-need-a-re-render-use-useref">1. Don’t need a re-render? Use useRef!</h3>
<p>This was such a “duh” moment for me. If I have some data I need to keep track of that doesn’t affect the UI, like a click counter that just logs to the console, I can just use <code>useRef</code> instead of <code>useState</code>. It’s like a secret hiding spot for my data, and React doesn’t even know about it. So smart!</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="javascript"><code><span class="line"><span style="color:#6A737D">// Instead of this useState mess...</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">clickCount</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setClickCount</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> handleClick</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">	setClickCount</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">prev</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> prev </span><span style="color:#F97583">+</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">	console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(clickCount); </span><span style="color:#6A737D">// Still shows old value!</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Use useRef for non-UI state!</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> clickCountRef</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> useRef</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> handleClick</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">	clickCountRef.current </span><span style="color:#F97583">+=</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">	console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(clickCountRef.current); </span><span style="color:#6A737D">// Always current!</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span></code></pre>
<h3 id="2-put-state-in-the-url">2. Put state in the URL</h3>
<p>Okay, this is so cool. I never thought about it, but you can actually put your filters or sorting preferences right in the URL. That way, if you refresh the page or send the link to a friend, all your settings are saved. No more getting frustrated when I lose my progress. It’s so simple, yet so powerful.</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="javascript"><code><span class="line"><span style="color:#6A737D">// Instead of useState for filters...</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">filter</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setFilter</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"all"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Use URL search params!</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> searchParams</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> URLSearchParams</span><span style="color:#E1E4E8">(window.location.search);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> filter</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> searchParams.</span><span style="color:#B392F0">get</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"filter"</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">||</span><span style="color:#9ECBFF"> "all"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span></code></pre>
<h3 id="3-stop-using-usestate-for-forms-and-fetching">3. Stop using useState for forms and fetching</h3>
<p>I’m so guilty of this. I’ve been creating a <code>useState</code> for every single input on my forms, and then another one for <code>isLoading</code>, and <code>error</code>, and <code>data</code>… it’s a mess! David said we should just use native browser APIs for forms and libraries like TanStack Query for data fetching. I’m all about using the right tool for the job, and if a library can handle all that messy stuff better than I can, I’m totally on board.</p>
<p><em>Old way vs. new way of handling forms</em></p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="javascript"><code><span class="line"><span style="color:#6A737D">// Instead of this useState nightmare...</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">name</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setName</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">email</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setEmail</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">isLoading</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setIsLoading</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">error</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setError</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Use FormData and proper form handling!</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> handleSubmit</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">event</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">	event.</span><span style="color:#B392F0">preventDefault</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#F97583">	const</span><span style="color:#79B8FF"> formData</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> FormData</span><span style="color:#E1E4E8">(event.target);</span></span>
<span class="line"><span style="color:#F97583">	const</span><span style="color:#79B8FF"> name</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> formData.</span><span style="color:#B392F0">get</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"name"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">	const</span><span style="color:#79B8FF"> email</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> formData.</span><span style="color:#B392F0">get</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"email"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#6A737D">	// Much cleaner!</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span></code></pre>
<h3 id="4-use-usereducer-for-complex-stuff">4. Use useReducer for complex stuff</h3>
<p>This one scares me a little, I’m not gonna lie. It seems way more complicated than <code>useState</code>. But David made a good point: when your logic is complex, like for a shopping cart, <code>useReducer</code> is better. It gives you a clear log of what’s happening and makes your code more organized. I’m a little nervous to try it, but I’m a big believer in “just do it,” so I’m gonna give it a shot.</p>
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="javascript"><code><span class="line"><span style="color:#6A737D">// Instead of multiple useState calls...</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">items</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setItems</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">([]);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">total</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setTotal</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">discount</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">setDiscount</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useState</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Use useReducer for related state!</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">cart</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">dispatch</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useReducer</span><span style="color:#E1E4E8">(cartReducer, initialCart);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> addItem</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">item</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#B392F0"> dispatch</span><span style="color:#E1E4E8">({ type: </span><span style="color:#9ECBFF">"ADD_ITEM"</span><span style="color:#E1E4E8">, payload: item });</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> removeItem</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#B392F0"> dispatch</span><span style="color:#E1E4E8">({ type: </span><span style="color:#9ECBFF">"REMOVE_ITEM"</span><span style="color:#E1E4E8">, payload: id });</span></span>
<span class="line"></span></code></pre>
<h2 id="the-philosophy-shift">The Philosophy Shift</h2>
<p>The whole talk really made me rethink how I approach state in React. It’s easy to just stick with what you know, but as a self-taught dev who loves to tinker and experiment, I know that’s not how you grow. The final takeaway from the talk was that <strong>simple is better than easy</strong>. And that’s a philosophy I can totally get behind.</p>
<p><code>useState</code> is <em>easy</em> - you can slap it anywhere and it works. But these alternatives are <em>simple</em> - they solve the right problem with the right tool, making your code cleaner and more maintainable in the long run.</p>
<h2 id="moving-forward">Moving Forward</h2>
<p>Now, if you’ll excuse me, I’m off to rewrite some of my GitHub projects. My code needs a serious glow-up after this talk!</p>
<p>Here’s my plan:</p>
<ul>
<li>✅ Replace unnecessary <code>useState</code> with <code>useRef</code> for non-UI state</li>
<li>✅ Move filter/search state to URL parameters</li>
<li>✅ Try TanStack Query for data fetching</li>
<li>⏳ Learn <code>useReducer</code> for complex state logic</li>
</ul>
<p>Anyone else had a similar “aha moment” with React hooks? I’d love to hear about your experiences breaking up with old patterns and embracing better alternatives!</p>
<hr>
<p><em>P.S. - If you haven’t watched David Khourshid’s “Goodbye, useState” talk, do yourself a favor and check it out. It’s a game-changer!</em></p>`,l={title:"My Breakup with useState",description:"How a talk by David Khourshid at React Miami completely changed my perspective on state management in React, and why useState might not be the answer to everything.",date:"2025-03-20",author:"Ehsan Pourhadi",category:["React","Frontend"],tag:["React","useState","State Management","Hooks"],featured:!0,draft:!1,cover:"cover.png"},r="C:/Users/Ehsan/dev/astro-template/src/content/blog/my-breakup-with-usestate/index.md",p=void 0;function f(){return`
OMG, so you know how you have that one thing you use all the time, even when you know there are better options out there? For me, and apparently a lot of other devs, that thing is \`useState\` in React. I mean, it's the first hook you learn, right? It's so easy! You're just like, \`const [count, setCount] = useState(0);\`, and boom, you have state. Woohoo!

But then I watched this insane talk by David Khourshid at React Miami, called "Goodbye, useState," and my mind was totally blown. Seriously, I went in thinking, "This guy is probably gonna tell me to stop using my favorite hook," and he pretty much did. But in a cool, "hey, let's learn something new" kind of way.

_The spaghetti diagram David showed that blew my mind_

## The useState Problem

He basically said that \`useState\` is great for simple stuff, but for anything even a little bit complex, it's a "foot gun." He showed this crazy diagram of how \`useState\` and \`useEffect\` can get all tangled up, like a bowl of spaghetti. It becomes this mess where one thing changes, and it triggers a chain reaction of re-renders, and you're just like, "What even is happening?!" It's a nightmare to debug, and I've definitely been there, pulling my hair out trying to figure out why my component is re-rendering for the fifth time.

## The Better Alternatives

So, what's a self-taught dev to do? David had some amazing suggestions that I'm totally going to try.

### 1. Don't need a re-render? Use useRef!

This was such a "duh" moment for me. If I have some data I need to keep track of that doesn't affect the UI, like a click counter that just logs to the console, I can just use \`useRef\` instead of \`useState\`. It's like a secret hiding spot for my data, and React doesn't even know about it. So smart!

\`\`\`javascript
// Instead of this useState mess...
const [clickCount, setClickCount] = useState(0);

const handleClick = () => {
	setClickCount((prev) => prev + 1);
	console.log(clickCount); // Still shows old value!
};

// Use useRef for non-UI state!
const clickCountRef = useRef(0);

const handleClick = () => {
	clickCountRef.current += 1;
	console.log(clickCountRef.current); // Always current!
};
\`\`\`

### 2. Put state in the URL

Okay, this is so cool. I never thought about it, but you can actually put your filters or sorting preferences right in the URL. That way, if you refresh the page or send the link to a friend, all your settings are saved. No more getting frustrated when I lose my progress. It's so simple, yet so powerful.

\`\`\`javascript
// Instead of useState for filters...
const [filter, setFilter] = useState("all");

// Use URL search params!
const searchParams = new URLSearchParams(window.location.search);
const filter = searchParams.get("filter") || "all";
\`\`\`

### 3. Stop using useState for forms and fetching

I'm so guilty of this. I've been creating a \`useState\` for every single input on my forms, and then another one for \`isLoading\`, and \`error\`, and \`data\`... it's a mess! David said we should just use native browser APIs for forms and libraries like TanStack Query for data fetching. I'm all about using the right tool for the job, and if a library can handle all that messy stuff better than I can, I'm totally on board.

_Old way vs. new way of handling forms_

\`\`\`javascript
// Instead of this useState nightmare...
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

// Use FormData and proper form handling!
const handleSubmit = (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const name = formData.get("name");
	const email = formData.get("email");
	// Much cleaner!
};
\`\`\`

### 4. Use useReducer for complex stuff

This one scares me a little, I'm not gonna lie. It seems way more complicated than \`useState\`. But David made a good point: when your logic is complex, like for a shopping cart, \`useReducer\` is better. It gives you a clear log of what's happening and makes your code more organized. I'm a little nervous to try it, but I'm a big believer in "just do it," so I'm gonna give it a shot.

\`\`\`javascript
// Instead of multiple useState calls...
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);
const [discount, setDiscount] = useState(0);

// Use useReducer for related state!
const [cart, dispatch] = useReducer(cartReducer, initialCart);

const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
\`\`\`

## The Philosophy Shift

The whole talk really made me rethink how I approach state in React. It's easy to just stick with what you know, but as a self-taught dev who loves to tinker and experiment, I know that's not how you grow. The final takeaway from the talk was that **simple is better than easy**. And that's a philosophy I can totally get behind.

\`useState\` is _easy_ - you can slap it anywhere and it works. But these alternatives are _simple_ - they solve the right problem with the right tool, making your code cleaner and more maintainable in the long run.

## Moving Forward

Now, if you'll excuse me, I'm off to rewrite some of my GitHub projects. My code needs a serious glow-up after this talk!

Here's my plan:

- ✅ Replace unnecessary \`useState\` with \`useRef\` for non-UI state
- ✅ Move filter/search state to URL parameters
- ✅ Try TanStack Query for data fetching
- ⏳ Learn \`useReducer\` for complex state logic

Anyone else had a similar "aha moment" with React hooks? I'd love to hear about your experiences breaking up with old patterns and embracing better alternatives!

---

_P.S. - If you haven't watched David Khourshid's "Goodbye, useState" talk, do yourself a favor and check it out. It's a game-changer!_
`}function g(){return e}function F(){return[{depth:2,slug:"the-usestate-problem",text:"The useState Problem"},{depth:2,slug:"the-better-alternatives",text:"The Better Alternatives"},{depth:3,slug:"1-dont-need-a-re-render-use-useref",text:"1. Don’t need a re-render? Use useRef!"},{depth:3,slug:"2-put-state-in-the-url",text:"2. Put state in the URL"},{depth:3,slug:"3-stop-using-usestate-for-forms-and-fetching",text:"3. Stop using useState for forms and fetching"},{depth:3,slug:"4-use-usereducer-for-complex-stuff",text:"4. Use useReducer for complex stuff"},{depth:2,slug:"the-philosophy-shift",text:"The Philosophy Shift"},{depth:2,slug:"moving-forward",text:"Moving Forward"}]}const w=a((c,i,y)=>{const{layout:h,...s}=l;return s.file=r,s.url=p,n`${t()}${o(e)}`});export{w as Content,g as compiledContent,w as default,r as file,l as frontmatter,F as getHeadings,f as rawContent,p as url};
