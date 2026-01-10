import { useState } from "react";
import { cn } from "../../lib/utils";

interface Prompt {
	title: string;
	slug: string;
	category?: string;
	icon?: string;
}

interface PromptSidebarProps {
	prompts: Prompt[];
	activeSlug?: string;
}

export function PromptSidebar({ prompts, activeSlug }: PromptSidebarProps) {
	const [isOpen, setIsOpen] = useState(false);

	// Group prompts by category
	const groupedPrompts = prompts.reduce(
		(acc, prompt) => {
			const category = prompt.category || "Other";
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(prompt);
			return acc;
		},
		{} as Record<string, Prompt[]>
	);

	const categories = Object.keys(groupedPrompts);

	return (
		<>
			{/* Mobile toggle button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="mb-4 flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 lg:hidden"
				aria-label="Toggle prompts menu"
			>
				<span>Browse AI Prompts</span>
				<svg
					className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{/* Overlay for mobile */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/50 lg:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={cn(
					"w-64 shrink-0",
					// Mobile styles
					"lg:block",
					isOpen
						? "animate-slide-down fixed left-0 right-0 top-0 z-50 max-h-[80vh] w-full overflow-y-auto lg:static lg:max-h-none lg:w-64"
						: "hidden lg:block"
				)}
			>
				<div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
					{/* Close button for mobile */}
					<button
						onClick={() => setIsOpen(false)}
						className="mb-4 ml-auto flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
						aria-label="Close menu"
					>
						<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<div className="mb-6">
						<h2 className="text-lg font-bold text-gray-900 dark:text-white">AI Prompts</h2>
						<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Select a prompt to view</p>
					</div>

					<nav className="space-y-6">
						{categories.map((category) => (
							<div key={category}>
								<h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									{category}
								</h3>
								<ul className="space-y-1">
									{groupedPrompts[category].map((prompt) => (
										<li key={prompt.slug}>
											<a
												href={`#${prompt.slug}`}
												className={cn(
													"flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
													activeSlug === prompt.slug
														? "bg-primary text-white"
														: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
												)}
												onClick={() => setIsOpen(false)}
											>
												{prompt.icon && <span className="text-base">{prompt.icon}</span>}
												<span>{prompt.title}</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
			</aside>
		</>
	);
}
