"use client";

import { Heading } from "@/components/ui/heading";
import GitHubContributions from "@/components/GitHubContributions";

export default function GitHubContributionsBlock() {
	return (
		<section className="bg-white py-16 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<Heading level="h2" gradient floating backplate>
						GitHub Activity
					</Heading>
					<p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						A visual representation of my coding activity and contributions over time.
					</p>
				</div>

				<div className="mx-auto max-w-6xl">
					<GitHubContributions
						username="ehsanpo"
						className="rounded-lg bg-gray-50 px-6 pb-2 pt-6 shadow-sm dark:bg-gray-800"
					/>
				</div>
			</div>
		</section>
	);
}
