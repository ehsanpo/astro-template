"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
	href: string;
	children: React.ReactNode;
}

export const NavLink = ({ href, children }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

	return (
		<Link
			href={href}
			data-game-nav-link
			data-href={href}
			className={cn(
				"text font-medium transition-colors hover:text-primary-600",
				isActive ? "text-primary-600" : "text-gray-600 dark:text-gray-300"
			)}
		>
			{children}
		</Link>
	);
};
