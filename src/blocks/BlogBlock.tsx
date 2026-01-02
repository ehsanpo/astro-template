import { getBlogPosts } from "@/utils/data";
import { BlogCard } from "@/components/blog/BlogCard";
import Button from "@/components/Link";

export const BlogBlock = async () => {
	const blogPosts = await getBlogPosts();
	const latestPosts = blogPosts.slice(0, 3);

	if (latestPosts.length === 0) return null;

	return (
		<section className="bg-gray-50 py-20 dark:bg-neutral-900">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
						Insights, tutorials, and thoughts on web development and technology.
					</p>
				</div>

				<div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{latestPosts.map((post: any) => (
						<BlogCard key={post.slug} post={post} />
					))}
				</div>

				<div className="text-center">
					<Button href="/blog" text="View All Posts →" variant="secondary" />
				</div>
			</div>
		</section>
	);
};
