
import { getProductItems } from "@/utils/data-server";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import Gallery from "@/components/portfolio/Gallery";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const items = await getProductItems();
	return items.map((item: any) => ({
		slug: item.permalink,
	}));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
	const items = await getProductItems();
	const item = items.find((i: any) => i.permalink === slug);

	if (!item) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: `${item.title} - Products`,
		description: item.description || item.tagline || `${item.title} - ${item.client}`,
	};
}

export default async function ProductItemPage({ params }: Props) {
    const { slug } = await params;
	const items = await getProductItems();
	const item = items.find((i: any) => i.permalink === slug);

	if (!item) {
		return <div>Product not found</div>;
	}

	return (
		<article className="relative min-h-screen bg-white pt-4 dark:bg-neutral-900">
			<PortfolioHeader item={item} />

			<div className="relative z-10 mx-auto max-w-6xl px-4 pt-10">
				<div className="prose mx-auto mb-20 max-w-3xl dark:prose-invert">
					<MDXRemote source={item.content.body} />
				</div>

				<Gallery images={item.bilder} alt={item.title} />

				{item.case_link_url && (
					<div className="pb-20 text-center">
						<a
							href={item.case_link_url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
						>
							Visit Project
							<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				)}
			</div>
		</article>
	);
}
