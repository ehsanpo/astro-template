import Button from "@/components/Link";
import SkillsInfo from "@/components/Skillsinfo";
import StackCard from "@/components/StackCard";
import { Heading } from "@/components/ui/heading";

interface Props {
	stacks: any[];
}

export const TechStackBlock = ({ stacks }: Props) => {
	return (
		<section className="">
			<div className="container mx-auto">
				<h2 className="text-primary mb-12 text-center font-basement text-4xl"></h2>
				<Heading
					level="h2"
					gradient
					floating
					backplate
					className="pb-12 text-center text-4xl"
				>
					Stacks
				</Heading>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{stacks.map((stack, index) => (
						<StackCard key={stack.slug} {...stack} parentIndex={index} />
					))}
				</div>
				<SkillsInfo />
				<div className="mt-12 text-center">
					<Button href="/skills" text="View All Stacks →" />
				</div>
			</div>
		</section>
	);
};
