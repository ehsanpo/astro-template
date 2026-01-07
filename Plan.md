# Plan: Complete Next.js Migration (Astro → Next)

Objectives

- Eliminate Astro remnants and type errors across the codebase.
- Implement robust MDX content pipeline with safe HTML support.
- Add build-time, responsive image optimization without moving assets to `public`.
- Restore missing routes (e.g., `/roles`) and verify static export.

Scope

- `src/blocks` and `src/components` contain `.astro` files and mixed patterns.
- Blog/portfolio content includes Markdown with raw HTML and local images.
- `_astro_backup` has pages/assets not yet migrated.

Phases

1. ✅ Cleanup & Types

   - ✅ Remove/convert `.astro` files in `src/blocks` and `src/components` to TSX equivalents.
   - ✅ Fix imports, props, and Next types; remove Astro-specific types/config.
   - ✅ Align `tsconfig.json` paths and strict settings; resolve current type error set.

2. 🔄 Content Pipeline (Markdown via `marked`)

   - ✅ Switched from MDX to `marked` for blog/portfolio/products to handle raw HTML without build breaks.
   - ✅ Implemented relative image path resolver: rewrites `<img src="...">` to `/content/<collection>/<dirPath>/...`.
   - ⏳ Contentlayer integration deferred; using custom `getCollection` with gray-matter.
   - ⏳ Optional: Add `sanitize-html` with allowlist for classes/data-attrs.

3. 🔄 Image Optimization (No `/public` move)

   - ✅ Static export copies `src/content/**` to `out/content/**` via postbuild script.
   - ✅ Images render in blog/portfolio via resolved `/content/...` paths.
   - ✅ Set `next.config.ts` `images.unoptimized: true` for static export.
   - ⏳ Build-time image metadata via `sharp` (dimensions + blur placeholders) pending.
   - ⏳ Replace `<img>` with responsive `<picture>` or `next/image` with known dimensions.

4. ✅ Missing Pages

   - ✅ Restored `/roles` list page and dynamic `/roles/[slug]` pages.
   - ✅ Navigation and links verified; routes statically generated.

5. ⏳ HTML Hardening

   - ✅ Raw HTML rendered via `marked` (tolerant parser).
   - ⏳ Add server-side sanitization with `sanitize-html` or similar.
   - ⏳ Document safe HTML patterns and add CI checks.

6. ✅ Verification & Build
   - ✅ Type-check passes; no `.astro` imports.
   - ✅ Static export (`output: 'export'`) succeeds with 121 routes.
   - ✅ Postbuild script copies content assets to `out/content`.
   - ⏳ Remove unused Astro configs and `_astro_backup` once parity confirmed.

Decisions

- Content: Using custom `getCollection` with `gray-matter` for blog/portfolio/products. Contentlayer deferred.
- Rendering: Switched from MDX to `marked` to handle embedded HTML gracefully without build breaks.
- Images: Content-relative paths rewritten to `/content/<collection>/<dirPath>/...` at render; static export copies `src/content/**` to `out/content/**`.
- Image optimization: Currently `images.unoptimized: true`; build-time `sharp` metadata and responsive variants pending.
- HTML: `marked` parses raw HTML tolerantly; optional server-side sanitization with `sanitize-html` can be added.

Milestones

- ✅ M1: Repo cleanup; type-safe build without `.astro` imports.
- ✅ M2: Markdown rendering via `marked`; HTML handled gracefully.
- 🔄 M3: Images visible in posts via `/content/...` paths; build-time optimization pending.
- ✅ M4: `/roles` and other missing pages restored and tested.
- 🔄 M5: Static export passes; Astro leftovers cleanup and docs pending.

Risks & Mitigations

- Raw HTML variability: start with a permissive schema, log violations, iterate to tighten.
- Mixed image sources: implement path resolver for content-relative images; add remote patterns.
- Large content migrations: move incrementally and maintain a parity checklist.

Next Actions (Execution Order)

1. ✅ Audit Astro remnants in repo
2. ✅ Convert `.astro` blocks/components to TSX
3. ✅ Resolve TypeScript errors
4. ⏳ Set up MDX + Contentlayer (deferred; using `marked` instead)
5. ✅ Map image paths in Markdown (via regex rewrite to `/content/...`)
6. ⏳ Build-time image metadata via sharp
7. ✅ Fix blog post image paths
8. 🔄 Sanitize HTML in Markdown (using `marked`; optional sanitization layer pending)
9. ✅ Restore roles and missing pages
10. ✅ Update `next.config` and `tsconfig`
11. ⏳ Remove Astro config leftovers
12. ⏳ Add docs and upgrade notes
