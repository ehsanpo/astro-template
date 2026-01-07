import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function generateStaticParams() {
	const contentDir = path.join(process.cwd(), "src/content");
	
	function getFiles(dir: string): string[] {
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		const files = entries.flatMap((entry) => {
			const res = path.join(dir, entry.name);
			return entry.isDirectory() ? getFiles(res) : res;
		});
		return files;
	}

	const allFiles = getFiles(contentDir);
	return allFiles.map((file) => {
		const relativePath = path.relative(contentDir, file);
		return {
			path: relativePath.split(path.sep),
		};
	});
}

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ path: string[] }> }
) {
	try {
		const { path: pathSegments } = await params;
		const relativePath = pathSegments.join("/");
		console.log(`[Content Route] Requested: ${relativePath}`);
		
		const fullPath = path.join(process.cwd(), "src/content", ...pathSegments);
		console.log(`[Content Route] Full Path: ${fullPath}`);

		// Security: Ensure the path is within src/content
		const contentDir = path.join(process.cwd(), "src/content");
		if (!fullPath.startsWith(contentDir)) {
			console.error(`[Content Route] Forbidden: ${fullPath} is outside of ${contentDir}`);
			return new NextResponse("Forbidden", { status: 403 });
		}

		if (!fs.existsSync(fullPath)) {
			console.error(`[Content Route] Not Found: ${fullPath}`);
			return new NextResponse("Not Found", { status: 404 });
		}

		const fileBuffer = fs.readFileSync(fullPath);
		const ext = path.extname(fullPath).toLowerCase();

		const mimeTypes: { [key: string]: string } = {
			".png": "image/png",
			".jpg": "image/jpeg",
			".jpeg": "image/jpeg",
			".gif": "image/gif",
			".svg": "image/svg+xml",
			".webp": "image/webp",
		};

		const contentType = mimeTypes[ext] || "application/octet-stream";

		return new Response(fileBuffer, {
			headers: {
				"Content-Type": contentType,
				"Cache-Control": "public, max-age=31536000, immutable",
			},
		});
	} catch (error: any) {
		console.error(`[Content Route] Error: ${error.message}`);
		return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
	}
}
