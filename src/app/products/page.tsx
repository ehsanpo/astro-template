import PageHero from "@/components/hero/PageHero";
import { getProductItems } from "@/utils/data-server";
import PortfolioFilter from "@/components/PortfolioFilter";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export const metadata = {
	title: "Products - Work",
	description: "A showcase of my products and digital creations",
};

export default async function ProductsPage() {
	const productItems = await getProductItems();

	const sortedItems = productItems.sort((a: any, b: any) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const allCategories = [
		...new Set(productItems.flatMap((entry: any) => entry.category || [])),
	] as string[];

	return (
		<>
			<PageHero title="Products" subtitle="A showcase of my products and digital creations" />
			<div className="py-20">
				<div className="container mx-auto px-4">
					<PortfolioFilter categories={allCategories} category="all" />
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{sortedItems.map((item: any) => (
							<ProjectCard item={item} key={item.slug} className="portfolio-card" />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
