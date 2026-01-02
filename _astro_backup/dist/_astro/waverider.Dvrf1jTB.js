const s="waverider/waverider.md",n="products",o="waverider/waverider",a=`
<h2>The Origin Story:</h2>

At 2 AM, hunched over a MacBook like a possessed gremlin, tilting it left and right to play _Tunnel_ by Uri. No keyboard. No mouse. Just pure physical movement and one devastating realization: **What if I could play this inside my own music?**

The idea wouldn't leave. Weeks of thinking. Studio sessions layering kicks, sculpting reverb tails. A producer's life is built on digital signal processing—FFT analysis, spectral bands, RMS curves, transient detection. These tools shape sound. What if they shaped _geometry_ instead?

What if the music _was_ the level itself?

<h2>The Concept:</h2>

WaveRider is a hybrid experience at the intersection of music production and game design. It's not a game with a soundtrack. It's not a visualizer with gameplay. It's a **portal into the sonic worlds created through music**.

Every track is analyzed to extract:

- Frequency bands (bass, mids, treble)
- Amplitude envelopes
- BPM and beat timestamps
- Over 4,000 analysis points per song

These sonic details become tunnel geometry:

- 🥁 **Beats** make the tunnel pulse and narrow
- 🔊 **Bass** creates massive left-right movements
- ✨ **Treble** adds micro-wiggles and twitchy details
- 🌫 **Quiet moments** let the world open up and breathe

<br />

<h2>Technical Architecture:</h2>

<ul>
  <li>
    <h3>Audio Analysis Pipeline:</h3>
    Custom signal processing extracts frequency bands, amplitude envelopes, and beat timestamps from unreleased tracks. Pre-analysis generates 4,000+ analysis points per song, creating rich geometric data.
  </li>
  <li>
    <h3>Game Engine:</h3>
    Built with <strong>React Native</strong> and <strong>Expo</strong> for cross-platform mobile deployment. Custom SVG-based tunnel renderer runs at 60 FPS with real-time collision detection and accelerometer-based steering.
  </li>
  <li>
    <h3>Backend Infrastructure:</h3>
    <strong>Supabase</strong> serves as the backbone: Auth for player accounts, Storage for music uploads, Database for levels, scores, and pre-generated geometry. Pre-analysis prevents runtime generation overhead—everything is instant on every device.
  </li>
  <li>
    <h3>Game Systems:</h3>
    Real collision detection, accelerometer-based steering, unlockable ships, power-ups and enemies, endless looping gameplay, and live online leaderboards. The tunnel scrolls smoothly at 60 FPS with zero loading delays.
  </li>
  <li>
    <h3>Development Optimization:</h3>
    Pre-analyzed geometry is uploaded once to Supabase and instantly playable across all devices. No runtime generation. No battery drain. Pure responsiveness.
  </li>
</ul>

<br />

<h2>The Experience:</h2>

You're holding your phone. Tilt slightly left. The neon tunnel curves with you—smooth, responsive, _alive_. A kick drum hits. The tunnel _contracts_ around you like a heartbeat. Tilt right to dodge the narrowing walls. A bass drop throws you sideways. You're fighting to stay centered.

Treble kicks in—tiny, flickering movements, micro-adjustments you feel in your fingertips. You're not listening to music anymore.

**You're inside it.**

The tunnel isn't random. It's the producer's sound. Every twist, every pulse, every moment of space or chaos—a direct reflection of the music created. You're not playing a game with a soundtrack. You're falling into a wormhole made of sound.

<br />

<iframe width="100%" height="600" style="border-radius: 8px; margin: 2rem 0;" src="https://www.youtube.com/embed/laWv14Y59hg" title="WaveRider Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

<br />

<h2>Why This Matters:</h2>

For years, people said the music felt "dimensional" or "cinematic." They said it sounds like another place. So the challenge became simple: stop describing that place and build it.

WaveRider is the bridge between two worlds that shouldn't have been separate:

- **Music Producer** (signal processing, sound design, artistic vision)
- **Software Developer** (architecture, systems design, technical execution)

The result is something that can only exist at that intersection—a game designed entirely from the language of sound itself.

<br />

<h2>Outcome:</h2>

WaveRider successfully transforms abstract audio data into playable, engaging geometry. Players aren't just experiencing another playlist or game. They're riding inside the sonic architecture of unreleased tracks, tasting the producer's creative decisions through gameplay. Every kick drum, bass drop, and harmonic shimmer becomes tactile.

When someone tilts their phone, dodging neon walls sculpted from unreleased music, riding the bass drops and feeling the kick drums contract space around them—they're experiencing the same magic felt that night tilting a MacBook in the dark.

Except now, they're not just playing a game.

**They're riding inside the sound.**

🚀🎶🌌
`,i={title:"WaveRider",tagline:"Play inside the sound of your music",date:"2025-12-08",permalink:"waverider",client:"Self",agency:"Freelance",category:["Game"],tag:["React Native","Expo","TypeScript","Audio Analysis","Game Design","Supabase","Signal Processing"],background_image:new Proxy({src:"/_astro/Mockups_iPhone_15_Pro2.0gV_RuFd.jpg",width:1200,height:900,format:"jpg",orientation:1,fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"),r[e])}}),logo:new Proxy({src:"/_astro/cover2.Dt76Iihj.jpg",width:1440,height:1080,format:"jpg",orientation:1,fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"),r[e])}}),logo2:new Proxy({src:"/_astro/icon.3A9KaHNR.png",width:2048,height:2048,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/icon.png"),r[e])}}),images:[new Proxy({src:"/_astro/iPhone_14_Pro_Max_14.J9wqQnEO.jpg",width:1200,height:900,format:"jpg",orientation:1,fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/iPhone_14_Pro_Max_14.jpg"),r[e])}}),new Proxy({src:"/_astro/cover2.Dt76Iihj.jpg",width:1440,height:1080,format:"jpg",orientation:1,fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro.jpg"),r[e])}}),new Proxy({src:"/_astro/Mockups_iPhone_15_Pro2.0gV_RuFd.jpg",width:1200,height:900,format:"jpg",orientation:1,fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/Mockups_iPhone_15_Pro2.jpg"),r[e])}}),new Proxy({src:"/_astro/gameover.BzHBpICa.png",width:414,height:896,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameover.png"),r[e])}}),new Proxy({src:"/_astro/gameplay.B15tk6eP.png",width:414,height:896,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/gameplay.png"),r[e])}}),new Proxy({src:"/_astro/leaderboard.BSaP6dNk.png",width:414,height:896,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/leaderboard.png"),r[e])}}),new Proxy({src:"/_astro/levels.BH7jMucP.png",width:414,height:896,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/levels.png"),r[e])}}),new Proxy({src:"/_astro/settings.C7ex9owb.png",width:414,height:896,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/settings.png"),r[e])}}),new Proxy({src:"/_astro/ship-insop.DLicD345.png",width:1024,height:1024,format:"png",fsPath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png"},{get(r,e,t){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/ship-insop.png"),r[e])}})],onHome:!1,type:"product"},d={type:"content",filePath:"C:/Users/Ehsan/dev/astro-template/src/content/products/waverider/waverider.md",rawData:void 0};export{d as _internal,a as body,n as collection,i as data,s as id,o as slug};
