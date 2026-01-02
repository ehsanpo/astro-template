
interface ServiceCardProps {
	title: string;
	description: string;
	icon: string;
	features?: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
	return (
		<div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-neutral-800">
			<div className="mb-4 text-4xl">{icon}</div>
			<h3 className="font-poppins mb-3 text-xl font-semibold text-gray-900 dark:text-white">
				{title}
			</h3>
			<p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
			{features && features.length > 0 && (
				<ul className="space-y-2">
					{features.map((feature) => (
						<li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
							<span className="mr-2 text-primary-600">•</span>
							{feature}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
