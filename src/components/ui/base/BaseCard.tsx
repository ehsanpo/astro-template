import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "gradient" | "transparent" | "bordered";

interface BaseCardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	variant?: CardVariant;
	/** Optional title for structured cards */
	title?: string;
	/** Optional subtitle */
	subtitle?: string;
	/** Optional icon element */
	icon?: ReactNode;
	/** Optional action element (button, menu, etc.) */
	action?: ReactNode;
	/** Custom animation on hover */
	hoverScale?: number;
	/** Disable initial animation */
	noAnimation?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
	default: " clip bg-white dark:bg-neutral-800 shadow-sm",
	gradient:
		"bg-gradient-to-br from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 shadow-md",
	transparent: "bg-white/50 dark:bg-neutral-800/50 backdrop-blur-lg",
	bordered: "bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700",
};

/**
 * BaseCard - Unified card component for consistent styling across the application
 *
 * Supports both simple (children-only) and structured (title/subtitle/icon) layouts.
 * Use this as the foundation for all card-based UI elements.
 *
 * @example
 * // Simple usage
 * <BaseCard>Content here</BaseCard>
 *
 * @example
 * // Structured usage
 * <BaseCard title="Card Title" subtitle="Description" icon={<Icon />}>
 *   Content here
 * </BaseCard>
 */
export function BaseCard({
	children,
	className = "",
	hover = true,
	variant = "default",
	title,
	subtitle,
	icon,
	action,
	hoverScale = 1.02,
	noAnimation = false,
}: BaseCardProps) {
	const isStructured = title || subtitle || icon || action;

	return (
		<motion.div
			initial={noAnimation ? undefined : { opacity: 0, y: 20 }}
			animate={noAnimation ? undefined : { opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			whileHover={hover ? { scale: hoverScale, transition: { duration: 0.2 } } : undefined}
			className={cn("rounded-lg p-6", variantStyles[variant], className)}
		>
			{isStructured ? (
				<>
					<div className="mb-4 flex items-start justify-between">
						<div className="flex items-center gap-3">
							{icon && <div className="text-4xl">{icon}</div>}
							<div>
								{title && (
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
								)}
								{subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
							</div>
						</div>
						{action && <div>{action}</div>}
					</div>
					{children && <div className="text-gray-600 dark:text-gray-400">{children}</div>}
				</>
			) : (
				children
			)}
		</motion.div>
	);
}
