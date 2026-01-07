import PageHero from "@/components/hero/PageHero";
import ServiceDetails from "@/components/FullScroll";
import Button from "@/components/Link";

export const metadata = {
	title: "Services",
};

export default function ServicesPage() {
	return (
		<>
			<PageHero title="Services" subtitle="Comprehensive solutions tailored to your needs" />

			<div className="py-20">
				<ServiceDetails />
				<div className="container mx-auto px-4 py-4">
					<div className="gradient-bg mt-[100vh] rounded-lg py-8 text-center">
						<h3 className="mb-6 text-4xl text-gray-600 dark:text-gray-100">
							Ready to start next project?
						</h3>
						<Button
							href="/contact"
							text="Get in Touch"
							variant="primary" // Assuming Button/Link component handles variant or style
                            // The original had custom SVG icon in button. Link component might not support children easily if it's strictly props based.
                            // Checking src/components/Link.tsx or Button usage in other files.
						/>
					</div>
				</div>
			</div>
		</>
	);
}
