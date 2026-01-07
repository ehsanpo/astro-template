import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

// Serve files from src/content at /content/* during dev. For static export, files are copied to out/content.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: segments } = await params;
    const root = process.cwd();
    const baseDir = path.join(root, "src", "content");
    const target = path.join(baseDir, ...segments);

    // Prevent path traversal
    const resolved = path.resolve(target);
    if (!resolved.startsWith(path.resolve(baseDir))) {
      return new Response("Forbidden", { status: 403 });
    }

    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      return new Response("Not Found", { status: 404 });
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType =
      MIME[ext as keyof typeof MIME] || "application/octet-stream";

    const buffer = fs.readFileSync(resolved);
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
  ".ico": "image/x-icon",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".ogg": "video/ogg",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript",
} as const;
