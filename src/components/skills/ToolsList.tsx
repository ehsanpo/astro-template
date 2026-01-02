import { getPortfolioData } from "@/utils/data";
import { Heading } from "@/components/ui/heading";

export default function ToolsList() {
	const { tools } = getPortfolioData();

	return (
		<div className="container mx-auto py-20">
			<Heading level="h2" gradient floating backplate>
				Development Tools
			</Heading>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{tools.map((tool: any) => (
					<div
						key={tool.name}
						className="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"
					>
						<div className="mb-4 flex items-center">
							<img src={tool.icon} alt={tool.name} className="mr-3 h-8 w-8" />
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{tool.name}
							</h3>
						</div>
						<p className="mb-4 text-gray-600 dark:text-gray-400">{tool.description}</p>
						<div className="flex items-center">
							<div className="flex-1">
								<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-neutral-700">
									<div
										className="h-2 rounded-full bg-primary-600"
										style={{ width: `${tool.proficiency * 10}%` }}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
