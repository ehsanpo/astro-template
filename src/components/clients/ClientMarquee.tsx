import { getPortfolioItems } from "@/utils/data-server";

const MarqueeContent = ({ clients }: { clients: string[] }) => (
	<div className="flex items-center gap-12 px-4">
		{clients.map((client) => (
			<div
				key={client}
				className="clip2 whitespace-nowrap rounded-md bg-secondary-400 p-3 font-basement text-lg font-medium text-secondary-900"
			>
				{client}
			</div>
		))}
	</div>
);

export const ClientMarquee = async () => {
	const portfolioItems = await getPortfolioItems();
	const uniqueClients = [...new Set(portfolioItems.map((item: any) => item.client))].filter(
		Boolean
	) as string[];

	return (
		<div className="clip bg-white py-12 dark:bg-neutral-800">
			<div className="container mx-auto mb-8 px-4">
				<h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
					Trusted By
				</h2>
			</div>

			<div className="relative overflow-hidden">
				<div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] min-w-full">
					<MarqueeContent clients={uniqueClients} />
					<MarqueeContent clients={uniqueClients} />
				</div>
			</div>
			{/* Inline style for this component or add to globals.css. 
                Using style block here is fine in Next.js if "jsx-style" or just classNames.
                But CSS keyframes 'scroll' was defined in globals.css/index.css? 
                index.css had .animate-scroll? 
                The astro file had a <style> block defining scroll.
                I should add this keyframe to globals.css or use Tailwind animate-scroll if defined.
                Tailwind config has `scroll: "scroll 30s linear infinite"`.
                And keyframes `scroll`.
                So I can just use `animate-scroll` class!
            */}
		</div>
	);
};
