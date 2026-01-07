import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export type CollectionName = "blog" | "portfolio" | "products";

// Helper function to recursively find all .md and .mdx files
function findMarkdownFiles(dir: string): string[] {
	const results: string[] = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			// Recursively search subdirectories
			results.push(...findMarkdownFiles(fullPath));
		} else if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
			results.push(fullPath);
		}
	}

	return results;
}

export async function getCollection(collection: CollectionName, filterFn?: (entry: any) => boolean) {
	const dir = path.join(contentDirectory, collection);
	if (!fs.existsSync(dir)) return [];

	const markdownFiles = findMarkdownFiles(dir);
	const items = markdownFiles.map((fullPath) => {
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);
		// Extract slug from the filename (without extension)
		const fileName = path.basename(fullPath);
		let slug = fileName.replace(/\.mdx?$/, "");
		
		// Get the directory path relative to the content directory
		const dirPath = path.dirname(fullPath);
		const relativeDir = path.relative(dir, dirPath);

		// If the file is named "index", use the directory name as the slug
		if (slug === "index" && relativeDir) {
			slug = relativeDir.split(path.sep).pop() || slug;
		}

		return {
			id: slug,
			slug,
			body: content,
			collection,
			data: data,
			dirPath: relativeDir, // Store the relative directory path
		};
	});

	if (filterFn) {
		return items.filter(filterFn);
	}

	return items;
}
