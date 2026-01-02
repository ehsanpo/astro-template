"use client";

import React from "react";
import { Heading } from "../ui/heading";
import Tilt from "react-parallax-tilt";
// import BoxReveal from "../ui/box-reveal"; // unused in Astro file? Import was there.
// import { Parallax, ParallaxProvider } from "react-scroll-parallax"; // Unused in JSX

interface Props {
	text?: string;
	title: string;
	subtitle?: string | React.ReactNode;
	subtitleText?: string;
	children?: React.ReactNode;
	fullHeight?: boolean;
	img?: string;
}

export const Hero = ({
	title,
	subtitle,
	text,
	subtitleText,
	fullHeight = false,
	img,
	children,
}: Props) => {
	return (
		<section
			className={`bg-offwhite dark:bg-neutral-900 ${fullHeight ? "min-h-screen" : "pt-24 pb-8"} flex items-center`}
		>
			<div className={`container mx-auto px-4 ${img && "flex flex-col md:flex-row items-center gap-4"}`}>
				<div className="mx-auto flex-1 self-center">
					{text && (
						<Heading level="h6" className={`mb-1 !pt-0 !text-left !text-xl`}>
							{text}
						</Heading>
					)}

					<Heading
						level="h1"
						shadow
						gradient
						className={`${fullHeight ? "!text-4xl md:!text-7xl" : "text-4xl md:!text-5xl"} mb-1 !pt-0 !text-left`}
					>
						{title}
					</Heading>
					{subtitle && (
						<p
							className={`${fullHeight ? "text-xl font-bold md:text-4xl" : "text-xl"} mb-2 text-black dark:text-secondary-500`}
						>
							{subtitle}
						</p>
					)}
					{subtitleText && (
						<p className={`mb-6 max-w-sm text-xl text-gray-600 dark:text-gray-400`}>{subtitleText}</p>
					)}
					{children}
				</div>
				{img && (
					<div className="flex-1">
						<Tilt
							perspective={1000}
							className="portfolio-hero-image-tilt"
							glareEnable={true}
							glareMaxOpacity={0.8}
							glareColor="#ffffff"
							glarePosition="bottom"
							glareBorderRadius="20px"
						>
							<div className="w-full">
								<div>
									{" "}
									<img src={img} className="relative z-20 w-full rounded-lg object-cover shadow-lg" />
									<div className="absolute inset-0 z-20 rotate-3 transform rounded-lg bg-gradient-to-r from-primary-500/80 to-secondary-500/80 mix-blend-soft-light" />
								</div>
							</div>
						</Tilt>
					</div>
				)}
			</div>
		</section>
	);
};
