import { Heading } from "../ui/heading";
import { getPortfolioItems } from "@/utils/data-server";
import { AnimatedScrollSection } from "../AnimatedScrollSection";

export const SelectedWork = async () => {
	const portfolioItems = await getPortfolioItems();

	const filteredAndSortedItems = portfolioItems
		.filter((item: any) => item.onHome)
		.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return (
		<section className="clip overflow-hidden bg-white dark:bg-neutral-800">
			{filteredAndSortedItems.map((item: any, index: number) => (
				<AnimatedScrollSection
					key={item.slug}
					titleUp={item.title}
					imageSrc={item.cover?.src || item.logo?.src || (item.images && item.images[0])}
					text={item.description}
					link={`/portfolio/${item.permalink}`}
					layout={index}
					imageWidth={item.cover?.width || item.logo?.width}
					imageHeight={item.cover?.height || item.logo?.height}
				/>
			))}
		</section>
	);
};
