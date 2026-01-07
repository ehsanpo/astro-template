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

1. Cleanup & Types

   - Remove/convert `.astro` files in `src/blocks` and `src/components` to TSX equivalents.
   - Fix imports, props, and Next types; remove Astro-specific types/config.
   - Align `tsconfig.json` paths and strict settings; resolve current type error set.

2. Content Pipeline (MDX)

   - Introduce MDX with Contentlayer for blog/portfolio documents.
   - Use `remark-gfm`, `rehype-raw` (to parse HTML), and `rehype-sanitize` (custom schema) to keep HTML safe.
   - Define MDX component mapping for `img`, `a`, `code`, figures, etc.

3. Image Optimization (No `/public` move)

   - Create a build-time image metadata step using `sharp` to compute `width`, `height`, and blur placeholders.
   - Rewrite Markdown/HTML `<img>` to a custom `MDXImage` that wraps `next/image` with known dimensions.
   - Configure `next.config.ts` `images.remotePatterns` for any remote assets; keep `unoptimized: false` for runtime where possible, or precompute sizes for static export.

4. Missing Pages

   - Restore `/roles` and any other pages under `_astro_backup/pages` into `src/app/roles` (and siblings), porting components/data.
   - Verify navigation and links; add redirects if slugs changed.

5. HTML Hardening

   - Sanitize embedded HTML in Markdown via `rehype-sanitize` with an allowlist for classes, data-attrs, and necessary tags.
   - Add CI check to fail on disallowed tags/attrs; document safe HTML patterns.

6. Verification & Build
   - Add preview routes/components to validate MDX rendering and images.
   - Run `type-check`, `lint`, and `build` (static export) and fix regressions.
   - Remove unused Astro configs and backup artifacts once parity is confirmed.

Decisions

- Content: Use Contentlayer to model blog/portfolio, compute fields for image metadata, and streamline queries.
- Images: Prefer local content-relative paths, computed at build via `sharp`; support remote via `next.config.ts`.
- HTML: Allow raw HTML via `rehype-raw` but sanitize with a strict schema to avoid build breaks.

Milestones

- M1: Repo cleanup; type-safe build without `.astro` imports.
- M2: MDX + component mapping renders posts; HTML sanitized.
- M3: Images optimized (dimensions + blur) and visible in posts.
- M4: `/roles` and other missing pages restored and tested.
- M5: Static export passes; remove Astro leftovers; docs updated.

Risks & Mitigations

- Raw HTML variability: start with a permissive schema, log violations, iterate to tighten.
- Mixed image sources: implement path resolver for content-relative images; add remote patterns.
- Large content migrations: move incrementally and maintain a parity checklist.

Next Actions (Execution Order)

1. Audit Astro remnants in repo
2. Convert `.astro` blocks/components to TSX
3. Resolve TypeScript errors
4. Set up MDX + Contentlayer
5. Map MDX components (img, a, code)
6. Build-time image metadata via sharp
7. Fix blog post image paths
8. Sanitize HTML in Markdown
9. Restore roles and missing pages
10. Update `next.config` and `tsconfig`
11. Remove Astro config leftovers
12. Add docs and upgrade notes
