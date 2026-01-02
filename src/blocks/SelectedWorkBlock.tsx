import { SelectedWork } from "@/components/sections/SelectedWork";
import { Heading } from "@/components/ui/heading";

export const SelectedWorkBlock = () => {
	return (
		<>
			<div className="bg-offwhite dark:bg-neutral-900">
				<div className="container mx-auto px-4">
					<Heading level="h2" gradient floating backplate className="pb-12">
						Selected Work
					</Heading>
				</div>
			</div>
			<SelectedWork />
		</>
	);
};
