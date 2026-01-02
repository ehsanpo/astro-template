import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export type CollectionName = "blog" | "portfolio" | "products";

export async function getCollection(collection: CollectionName, filterFn?: (entry: any) => boolean) {
	const dir = path.join(contentDirectory, collection);
	if (!fs.existsSync(dir)) return [];

	const files = fs.readdirSync(dir);
	const items = files
		.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
		.map((file) => {
			const fullPath = path.join(dir, file);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);
			const slug = file.replace(/\.mdx?$/, "");

			return {
				id: slug,
				slug,
				body: content,
				collection,
				data: data,
			};
		});

	if (filterFn) {
		return items.filter(filterFn);
	}

	return items;
}
