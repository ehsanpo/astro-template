---
title: Bookmark Library
date: "2025-12-23"
status: publish
permalink: bookmark-library
author: Ehsan
id: 316
agency: Personal
category:
  - Backend
  - Front-end
tag:
  - Spring Boot
  - React
  - PostgreSQL
  - Java
  - Tailwind CSS
  - Docker
  - Supabase
client: Self
tagline: "When your bookmarks become digital hoarding"
onHome: false
background_image: "cover.jpg"
logo: "logo.png"
images:
  - "home.png"
  - "upload.png"

port_date:
  - "2025"
---

<h2>The Moment of Digital Shame:</h2>

Picture this: It's 11:47 PM. I'm frantically searching through my browser bookmarks for that one React tutorial I saved "for later" three months ago. You know the one—the tutorial that would've saved me hours if I'd actually watched it back then.

I'm clicking through folders. "Development" → "React Stuff" → "Maybe Watch" → "Important (Actually Important)" → "URGENT READ THESE" (spoiler: they weren't urgent).

After 20 minutes of digital archaeology, I find it buried in a folder called "Random Tuesday" with 47 other links I have zero memory of saving. And that's when it hit me: **I had 2,847 bookmarks scattered across 97 folders, and I couldn't find anything.**

I felt like that person whose desktop is covered in files named "untitled-1", "untitled-1-copy", "untitled-final-FINAL-v2". Except my browser. For _years_.

<h2>The Breaking Point:</h2>

The worst part? Chrome's bookmark manager felt like using a filing cabinet designed by someone who'd never filed anything in their life. No descriptions. No search that actually worked. No way to see if links were still alive. Just... chaos.

I sat there staring at my bookmark bar, those little folders mocking me with names like "Cool Stuff" and "Read Later" (spoiler: I never read later). And I thought: _There has to be a better way._

Then my brain did that thing where a simple problem becomes a side project. You know what I mean. That moment when "I just need to organize my bookmarks" becomes "I'm going to build an entire web application with a backend API and database migrations."

Yeah. That happened.

<h2>The Java Plot Twist:</h2>

Here's where I surprised myself. Instead of reaching for my usual Node.js comfort blanket, I thought: _What if I finally learned Spring Boot properly?_

I'd been dancing around Java for years—writing it for work, but never really _enjoying_ it. It always felt verbose and corporate. But something about Spring Boot's "convention over configuration" philosophy intrigued me. Plus, I was tired of setting up Express servers from scratch every time.

So there I was, a JavaScript developer about to voluntarily write Java. My friends were concerned. My past self would've been concerned. But I was curious, and curiosity is dangerous. 🤷‍♂️

<h2>The 2,847 Link Reality Check:</h2>

I exported my bookmarks (that weird Netscape HTML format browsers spit out) and started parsing. The numbers were... embarrassing:

- 2,847 total bookmarks
- 97 folders (some nested 4 levels deep)
- Links dating back to 2018 (half were probably dead)
- Folder names like "Might be useful", "Coding maybe?", and "WHY DID I SAVE THIS"

But here's the thing about having a programming problem: you can either spend 30 minutes manually cleaning it up, or 30 hours building a tool to do it for you. Guess which route I took? 😅

<h2>Spring Boot: The Pleasant Surprise:</h2>

I expected Java to feel clunky. I expected boilerplate hell. I expected to miss the simplicity of `app.get()` and callback functions.

Instead, I fell in love.

```java
@RestController
public class BookmarkController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadBookmarks(@RequestParam("file") MultipartFile file) {
        bookmarkService.processBookmarksAsync(file);
        return ResponseEntity.ok("Processing started!");
    }
}
```

That's it. File upload endpoint. JSON responses. Error handling. Spring just... handled everything. The auto-configuration felt like magic. Add a dependency, get features. No manual wiring. No configuration hell.

And **Spring Data JPA**? Chef's kiss. I defined my entity classes with annotations, and suddenly I had a database layer:

```java
@Entity
public class Bookmark {
    @Id @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String url;

    private String title;
    private String description;
    private String category;
}
```

The framework generated repositories, CRUD operations, queries—everything. Coming from manually writing SQL and Sequelize models, this felt like having a really smart assistant.

<h2>The Async Awakening:</h2>

Then came the reality check. I uploaded my 2,847-link file and my app... died. Just straight-up froze for 30 seconds, then crashed with a timeout error.

Turns out, trying to fetch metadata from thousands of websites simultaneously is a **terrible idea**. The browser would send the file, my server would try to process everything at once, and the HTTP request would time out while I was busy making 3,000 network requests to random websites.

Classic mistake. Classic learning moment.

Enter Spring's `@Async` annotation:

```java
@Service
public class BookmarkService {

    @Async
    public void processBookmarksAsync(MultipartFile file) {
        // This runs in a separate thread!
        // User gets immediate response
        // I can take as long as I need to process
        log.info("Processing {} bookmarks in background...", bookmarks.size());
    }
}
```

Suddenly I had proper queue processing. Upload file → instant success response → background processing with logging. Users could upload and immediately go do something else while their bookmarks got organized behind the scenes.

It felt very "enterprise" and professional. Like I'd accidentally built real software. 🎉

<h2>The PostgreSQL Adventure:</h2>

For the database, I went with **Supabase** (PostgreSQL in the cloud) because honestly? Setting up and maintaining a local database for a side project felt like overkill.

Supabase was ridiculously easy. Create project → copy connection string → add to environment variables → done. The Spring Boot auto-configuration picked up the PostgreSQL driver and just... worked.

The schema migrations happened automatically. I defined my entities, added some JPA annotations, and Spring created the tables on startup. Coming from manually writing database migrations, this felt like cheating.

<h2>React: The Familiar Friend:</h2>

For the frontend, I stuck with React and Tailwind. When you're already learning Spring Boot and wrestling with async processing, why add more complexity?

The UI ended up clean and functional:

- Browse bookmarks by category (preserving your original folder structure)
- Full-text search through titles and descriptions
- Sort by date added or click count (yes, it tracks which links you actually use!)
- Responsive design that doesn't hurt your eyes

I used Lucide Icons because they're just perfect for everything, and the whole thing felt cohesive. Sometimes sticking with what you know is the right call.

<h2>The Docker Rabbit Hole:</h2>

Then I caught the deployment bug. Because what's a side project without proper containerization? 🐳

I'd done Docker before, but never for a Java app. Turns out Spring Boot makes this surprisingly pleasant too:

```dockerfile
FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

That's... it? No complex build processes. No weird configuration. Spring Boot produces a "fat JAR" with everything bundled, so deployment becomes trivial.

I added proper security (non-root user), optimized the layers, set up health checks—the whole nine yards. Felt like a real DevOps engineer for a hot minute.

<h2>The Production Features Obsession:</h2>

This is where I might have gone overboard. But in a good way? I added:

- **Spring Boot Actuator** for monitoring endpoints (`/actuator/health`)
- **Global error handling** (proper JSON responses, no scary stack traces)
- **CORS configuration** (learned this the hard way when frontend couldn't talk to backend)
- **Environment-based configuration** (dev vs prod settings)
- **Graceful shutdown** handling
- **Gzip compression** for static assets

Was it overkill for organizing bookmarks? Absolutely. Did it teach me tons about building production-ready apps? Also absolutely.

<h2>The Render Deployment Win:</h2>

Deployed on Render and it was shockingly smooth. Connect GitHub repo → set environment variables → deploy. The Docker build took forever the first time (Java compilation is not fast), but subsequent deploys were quick thanks to layer caching.

<h2>What Actually Mattered:</h2>

After all that building, here's what I learned:

**Java isn't the enemy.** Modern Java with Spring Boot feels productive and fun. The ecosystem is mature, the tooling is excellent, and the "it just works" factor is real.

**Async processing is crucial.** Never underestimate how slow external APIs can be. Always give users immediate feedback and do the heavy work in the background.

**Production features matter,** even for side projects. Monitoring, proper error handling, and graceful degradation make everything better.

**Sometimes the journey is the destination.** I built this to organize 2,847 bookmarks. I kept it because I learned Spring Boot, async processing, Docker optimization, and deployed something I'm genuinely proud of.

<h2>For Fellow Digital Hoarders:</h2>

If you're drowning in bookmarks too, you're not alone. We've all got those "Read Later" folders that turned into digital graveyards. We've all saved 47 versions of the same React tutorial "just in case."

The solution doesn't have to be building an entire web app (though I highly recommend it for the learning experience 😄). It could be as simple as doing a monthly bookmark purge, or using browser extensions, or just... accepting that digital hoarding is part of developer life.

But if you do want to build something, pick a technology you're curious about. I chose Spring Boot and fell in love. You might choose Go, or Rust, or give Supabase edge functions a try.

The worst that can happen? You learn something new and still have messy bookmarks. The best that can happen? You build something cool and accidentally become a Java developer. 🎉

**Build stuff. Break stuff. Learn stuff.** Your future self will thank you for the journey, even if they're still confused about why you saved 17 different articles about CSS flexbox.

## 🔗 Try It Live:

**[bookmark-0s4v.onrender.com](https://bookmark-0s4v.onrender.com/)**

Upload your own bookmark file and see if you can tame your digital chaos too!

_P.S. The app successfully organized my 2,847 bookmarks into a searchable, categorized, click-tracked system. I can finally find that React tutorial. Victory! 🏆_
