import { getPortfolioData } from "@/utils/data";
import TestimonialCard from "@/components/TestimonialCard";
import { Heading } from "@/components/ui/heading";
import Button from "@/components/Link";

interface Props {
	showAll?: boolean;
}

export const TestimonialsBlock = ({ showAll = false }: Props) => {
	// Sync data fetch
	const { testimonials } = getPortfolioData();

	return (
		<section className="clip5 bg-white py-20 dark:bg-neutral-800" id="testimonials">
			<div className="container mx-auto px-4">
				<Heading
					level="h2"
					gradient
					floating
					backplate
					subtitle="Testimonials from clients and colleagues"
				>
					What People Say
				</Heading>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{(showAll ? testimonials : testimonials.sort((a: any, b: any) => b.id - a.id).slice(0, 6)).map(
						(testimonial: any) => (
							<TestimonialCard key={testimonial.id} {...testimonial} />
						)
					)}
				</div>
				{!showAll && (
					<div className="mt-12 text-center">
						<Button href="/about/#testimonials" text="View All Testimonials →" variant="secondary" />
					</div>
				)}
			</div>
		</section>
	);
};
