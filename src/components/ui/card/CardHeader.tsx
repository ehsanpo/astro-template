import type { ReactNode } from "react";

interface CardHeaderProps {
	title: string;
	subtitle?: string;
	icon?: ReactNode;
	action?: ReactNode;
}

export function CardHeader({ title, subtitle, icon, action }: CardHeaderProps) {
	return (
		<div className="mb-4 flex items-start justify-between">
			<div className="flex items-center gap-3">
				{icon && <div className="text-4xl">{icon}</div>}
				<div>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
					{subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
				</div>
			</div>
			{action && <div>{action}</div>}
		</div>
	);
}
