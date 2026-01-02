import { getPortfolioData } from "@/utils/data";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";

// Import award images from assets
import cannen from "@/assets/awards/cannen.png";
import guldagg from "@/assets/awards/guldagg.png";
import svenskadesign from "@/assets/awards/svenskadesign.png";

const imageMap: Record<string, any> = {
	"/img/awards/cannen.png": cannen,
	"/img/awards/guldagg.png": guldagg,
	"/img/awards/svenskadesign.png": svenskadesign,
};

export const Awards = () => {
	const { awards } = getPortfolioData();

	const awardsWithImages = awards.map((award: any) => ({
		...award,
		image: imageMap[award.images] || award.images,
	}));

	return (
		<section className="bg-white py-20 dark:bg-neutral-800">
			<div className="container mx-auto px-4">
				<Heading level="h3" gradient floating backplate>
					{" "}
					Awards{" "}
				</Heading>

				<div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3">
					{awardsWithImages.map((award: any) => (
						<a
							key={award.name}
							href={award.link}
							className="clip group rounded-lg bg-opium p-6 transition-transform hover:-translate-y-1 dark:bg-secondary-900"
						>
							<div className="">
								<Image
									src={award.image}
									alt={award.name}
									sizes="(max-width: 768px) 100vw, 33vw"
									className="mx-auto mb-4 rounded-lg transition-transform group-hover:scale-105"
								/>
								<h3 className="mb-2 text-xl font-semibold text-secondary-400">{award.name}</h3>
								<p className="dark:text-secondary-200">{award.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};
