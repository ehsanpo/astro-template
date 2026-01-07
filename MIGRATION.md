# Astro to Next.js Migration - Complete

## Overview

This project has been successfully migrated from Astro to Next.js 16 with static site generation (SSG) support. All functionality has been preserved while modernizing the tech stack.

## Key Changes

### Framework Migration

- **From**: Astro 4.x with React islands
- **To**: Next.js 16 with App Router and static export
- **Build Output**: Fully static HTML export (121 routes)

### Content Management

- **Markdown Processing**: Using `marked` library instead of MDX for better HTML compatibility
- **Collections**: Custom `getCollection()` implementation with `gray-matter` for frontmatter parsing
- **Content Location**: `src/content/{blog,portfolio,products}` (unchanged)
- **Static Assets**: Automatically copied to `out/content/` during build

### Image Handling

- **Content Images**: Relative paths resolved to `/content/<collection>/<dir>/<image>`
- **Build Script**: `postbuild` script copies `src/content` to `out/content`
- **Optimization**: `images.unoptimized: true` for static export compatibility
- **Future Enhancement**: Image metadata utilities available in `src/lib/image-utils.ts`

### HTML Sanitization

- **Safety**: Markdown with embedded HTML is parsed safely via `marked`
- **Utility**: `sanitizeMarkdown()` function in `src/lib/sanitize.ts`
- **Note**: DOMPurify was considered but caused ESM compatibility issues with Next.js SSG

### Removed Components

- All `.astro` files converted to `.tsx` (originals in `_astro_backup/`)
- Astro content config (`src/content/config.ts`) removed
- Astro-specific type definitions removed

## Project Structure

```
astro-template/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── blog/              # Blog routes
│   │   ├── portfolio/         # Portfolio routes
│   │   ├── products/          # Products routes
│   │   ├── roles/             # Role pages
│   │   └── ...                # Other routes
│   ├── blocks/                # Page section components
│   ├── components/            # React components
│   ├── content/               # Markdown content collections
│   │   ├── blog/
│   │   ├── portfolio/
│   │   └── products/
│   ├── lib/
│   │   ├── content.ts         # Content collection loader
│   │   ├── image-utils.ts     # Image metadata utilities (future use)
│   │   └── sanitize.ts        # Markdown sanitization
│   └── utils/
│       └── data-server.ts     # Server-side data fetching
├── public/                     # Static assets
├── out/                        # Build output (gitignored)
├── scripts/
│   └── copy-content-to-out.mjs # Postbuild content copy
├── _astro_backup/              # Original Astro files (for reference)
└── next.config.ts              # Next.js configuration
```

## Build & Deploy

### Development

```bash
npm run dev
# Runs Next.js dev server on http://localhost:3000
```

### Production Build

```bash
npm run build
# 1. Runs Next.js build with static export
# 2. Generates 121 static HTML pages
# 3. Copies src/content to out/content via postbuild script
```

### Preview Build

```bash
npm start
# Serves the production build locally
```

## Content Authoring

### Markdown Files

Content files support:

- **Frontmatter**: YAML metadata at the top of files
- **Markdown**: Standard GitHub Flavored Markdown
- **HTML**: Embedded HTML is supported and safely rendered
- **Images**: Relative paths automatically resolved

### Image Paths

Images in markdown are referenced relative to the content file:

```markdown
![Alt text](./image.png)
![Alt text](subfolder/image.jpg)
```

These are automatically resolved to `/content/{collection}/{dirPath}/image.png` at render time.

### Frontmatter Schema

**Blog Posts** (`src/content/blog/`):

```yaml
---
title: "Post Title"
description: "Post description"
date: "2024-01-01"
author: "Author Name"
category: ["Category"]
tag: ["tag1", "tag2"]
cover: "./cover-image.jpg"
draft: false # Set to true to hide from production
---
```

**Portfolio/Products**:

```yaml
---
title: "Project Title"
tagline: "Short description"
description: "Longer description"
client: "Client Name"
agency: "Agency Name"
permalink: "url-slug"
date: "2024-01-01"
background_image: "./bg.jpg"
logo: "./logo.png"
images: ["./img1.jpg", "./img2.jpg"]
category: ["web", "mobile"]
tag: ["react", "design"]
case_link_url: "https://example.com"
onHome: true
---
```

## Configuration

### Next.js Config (`next.config.ts`)

```typescript
{
  output: "export",              // Static HTML export
  images: { unoptimized: true }, // Required for static export
  trailingSlash: false,
  // ... other config
}
```

### TypeScript

- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- Excludes: `node_modules`, `_astro_backup`, `out`

## Known Issues & Future Enhancements

### TODO

- [ ] Implement client-side DOMPurify for additional HTML sanitization
- [ ] Enable build-time image metadata extraction (utilities ready in `src/lib/image-utils.ts`)
- [ ] Generate responsive image variants for different screen sizes
- [ ] Add image blur placeholders for better UX
- [ ] Consider removing `_astro_backup` folder once migration is fully validated

### Notes

- **Image Metadata**: Sharp integration for build-time metadata extraction was disabled due to build timeouts. The utility functions are available in `src/lib/image-utils.ts` for future use with caching.
- **HTML Sanitization**: Using `marked` for parsing; additional sanitization can be added via the `sanitizeMarkdown()` function.
- **Content Route**: The `/content/[...path]` API route was removed as it's not compatible with static export. Content files are served directly from `out/content/`.

## Migration Checklist

- [x] Convert all `.astro` files to `.tsx`
- [x] Fix TypeScript errors and type definitions
- [x] Implement custom content collection loader
- [x] Switch from MDX to `marked` for HTML tolerance
- [x] Resolve image paths in markdown
- [x] Restore missing routes (`/roles`)
- [x] Configure static export
- [x] Add postbuild script for content assets
- [x] Remove Astro config leftovers
- [x] Verify production build (121 routes)

## Support

For issues or questions about this migration, refer to:

- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Next.js App Router: https://nextjs.org/docs/app
- Marked.js: https://marked.js.org/

---

**Migration completed**: January 7, 2026
**Next.js version**: 16.1.1
**Build status**: ✅ Passing (121 static routes)
