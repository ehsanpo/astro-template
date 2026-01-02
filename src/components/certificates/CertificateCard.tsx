import BoxReveal from "../ui/box-reveal";
import Image, { StaticImageData } from "next/image";

interface Props {
	name: string;
	image: StaticImageData | string;
	year: string;
	index: number;
}

export default function CertificateCard({ name, image, year, index }: Props) {
	return (
		<BoxReveal boxColor="bg-primary-400 h-full" duration={0.5} delay={(index % 4) * 0.2}>
			<div className="overflow-hidden rounded-lg text-center">
				<Image
					src={image}
					alt={name}
					sizes="(max-width: 768px) 100vw, 25vw"
					className="w-full object-cover"
				/>
				<div className="p-4">
					<h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						<p className="text-sm text-gray-600 dark:text-gray-400">{year}</p>
						{name}
					</h3>
				</div>
			</div>
		</BoxReveal>
	);
}
