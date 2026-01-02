import { getPortfolioData } from "@/utils/data";

export default function ContactInfo() {
	const { contact } = getPortfolioData();

	return (
		<div className="space-y-4">
			<div>
				<h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
				<p className="mt-2 text-gray-600 dark:text-gray-400">{contact.location}</p>
			</div>

			<div>
				<h3 className="text-lg font-medium text-gray-900 dark:text-white">Connect</h3>
				<div className="mt-2 flex gap-4">
					{Object.entries(contact.socialLinks).map(([platform, url]) => (
						<a
							key={platform}
							href={url as string}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
						>
							<span className="capitalize">{platform}</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
