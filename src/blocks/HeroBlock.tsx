import { Hero } from "@/components/hero/Hero";
import Button from "@/components/Link";
import { getPortfolioData, getPortfolioItems } from "@/utils/data";
import React from "react";

export const HeroBlock = async () => {
    // In Astro, this component fetched data. We can do the same in RSC.
	const { contact } = getPortfolioData(); // sync
	const portfolioItems = await getPortfolioItems(); // async

	return (
		<Hero
			title={contact.name}
			subtitle={contact.role}
			subtitleText={contact.description}
			fullHeight={true}
			text="Hey! ✌️ I'm"
		>
			<React.Fragment>
				<div className="flex flex-wrap gap-4">
					<Button href="/portfolio" text="View My Work" />
					<Button href="/contact" text="Get in Touch" />
				</div>
				<div>
					<ul className="align-items-start mt-4 flex flex-wrap">
						<li className="hero-info-item">
							<div className="align-items-center flex">
								<h3 className="text-4xl font-bold">
									<span className="gradient-text font-bold">{contact.yearsOfExperience}</span>
								</h3>
								<h6 className="ml-2 border-l border-primary-500 pl-2 text-sm leading-tight text-gray-800 dark:text-gray-400">
									Years <br />of Experience
								</h6>
							</div>
						</li>
						<li className="hero-info-item md:ml-8">
							<div className="align-items-center flex">
								<h3 className="text-4xl">
									<span className="gradient-text font-bold">{portfolioItems.length}</span>
								</h3>
								<h6 className="ml-2 border-l border-primary-500 pl-2 text-sm leading-tight text-gray-800 dark:text-gray-400">
									Projects <br />Completed
								</h6>
							</div>
						</li>
					</ul>
				</div>
			</React.Fragment>
		</Hero>
	);
};
