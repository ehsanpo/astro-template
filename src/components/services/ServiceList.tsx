import ServiceCard from "./ServiceCard";
import { getPortfolioData } from "@/utils/data";

interface Props {
	className?: string;
}

export default function ServiceList({ className = "" }: Props) {
	const { services } = getPortfolioData();

	return (
		<div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
			{services.map((service: any) => (
				<ServiceCard key={service.title} {...service} />
			))}
		</div>
	);
}
