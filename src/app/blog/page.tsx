import PageHero from "@/components/hero/PageHero";
import { getBlogPosts } from "@/utils/data-server";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
	title: "Blog - Thoughts and Insights",
	description: "Thoughts, insights, and stories from my journey as a developer",
};

export default async function BlogPage() {
	const blogPosts = await getBlogPosts();
	const featuredPosts = blogPosts.filter((post: any) => post.featured === true);
	const regularPosts = blogPosts.filter((post: any) => post.featured !== true);

	return (
		<>
			<PageHero
				title="Blog"
				subtitle="Thoughts, insights, and stories from my journey as a developer"
			/>
			<div className="py-20">
				<div className="container mx-auto px-4">
					{featuredPosts.length > 0 && (
						<div className="mb-16">
							<h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
								Featured Posts
							</h2>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
								{featuredPosts.map((post: any) => (
									<BlogCard key={post.slug} post={post} featured={true} />
								))}
							</div>
						</div>
					)}

					<div className="mb-8">
						<h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
							{featuredPosts.length > 0 ? "All Posts" : "Latest Posts"}
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{regularPosts.map((post: any) => (
							<BlogCard key={post.slug} post={post} />
						))}
					</div>

					{blogPosts.length === 0 && (
						<div className="py-16 text-center">
							<h3 className="mb-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
								No blog posts yet
							</h3>
							<p className="text-gray-500 dark:text-gray-500">
								Stay tuned for upcoming articles and insights!
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
