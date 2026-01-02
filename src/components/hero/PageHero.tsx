"use client";

import { Heading } from "../ui/heading";

interface Props {
	title: string;
	subtitle?: string;
}

export default function PageHero({ title, subtitle }: Props) {
	return (
		<section className="bg-gray-50 pb-8 pt-14 dark:bg-neutral-800">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl text-center">
					<Heading
						level="h1"
						gradient
						shadow
						className="mb-4 text-4xl md:text-5xl"
						client="idle" // Astro prop, ignored in React or passed to custom Heading? 
                        // Heading.tsx likely accepts HTMLAttributes or custom props.
					>
						{title}
					</Heading>
					{subtitle && <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
				</div>
			</div>
		</section>
	);
}
