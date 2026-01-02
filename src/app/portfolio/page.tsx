import PageHero from "@/components/hero/PageHero";
import { getPortfolioItems } from "@/utils/data";
import PortfolioFilter from "@/components/PortfolioFilter";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export const metadata = {
	title: "Portfolio - Work",
	description: "A showcase of my selected works and projects",
};

export default async function PortfolioPage() {
	const portfolioItems = await getPortfolioItems();

	const sortedItems = portfolioItems.sort((a: any, b: any) => {
		if (a.onHome !== b.onHome) return b.onHome ? 1 : -1;
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const allCategories = [
		...new Set(portfolioItems.flatMap((entry: any) => entry.category || [])),
	] as string[];

	return (
		<>
			<PageHero title="Portfolio" subtitle="A showcase of my selected works and projects" />
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
