import { Linkedin } from "lucide-react";

interface TeamMemberCardProps {
	name: string;
	role: string;
	linkedin?: string;
	img?: string;
}

export default function TeamMemberCard({ name, role, linkedin, img }: TeamMemberCardProps) {
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("");

	return (
		<div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
			<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 text-lg font-semibold text-white">
				{img ? <img src={img} alt={name} className="h-full w-full object-cover" /> : initials}
			</div>
			<div className="min-w-0 flex-1">
				<h4 className="truncate text-sm font-semibold text-gray-900 dark:text-white">{name}</h4>
				<p className="truncate text-xs text-gray-600 dark:text-gray-400">{role}</p>
			</div>
			{linkedin && (
				<a
					href={linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-shrink-0 p-2 text-gray-400 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
					aria-label={`${name}'s LinkedIn profile`}
				>
					<Linkedin size={18} />
				</a>
			)}
		</div>
	);
}
