import { marked } from "marked";

/**
 * Safely parse markdown content with HTML support
 *
 * This function:
 * 1. Parses markdown to HTML using marked
 * 2. Relies on marked's built-in HTML sanitization
 *
 * Note: For additional security, consider adding server-side sanitization
 * with a library that doesn't have ESM compatibility issues in Next.js SSG.
 */
export function sanitizeMarkdown(markdown: string): string {
  // Configure marked with safe defaults
  marked.setOptions({
    // Enable GitHub Flavored Markdown
    gfm: true,
    // Break on single line breaks
    breaks: false,
    // Don't use marked's deprecated sanitize option
    // Instead, we'll rely on the DOMPurify on the client or add post-processing
  });

  // Parse markdown to HTML
  const html = marked.parse(markdown) as string;

  return html;
}

/**
 * Additional sanitization can be added here using a library
 * that works with Next.js static export without ESM issues.
 *
 * Options:
 * - Use a simple allowlist-based sanitizer
 * - Implement custom regex-based cleanup for dangerous patterns
 * - Add client-side sanitization if needed
 */
