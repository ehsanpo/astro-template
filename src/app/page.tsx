import { HeroBlock } from "@/blocks/HeroBlock";
import { SelectedWorkBlock } from "@/blocks/SelectedWorkBlock";
import { TechStackBlock } from "@/blocks/TechStackBlock";
import { CertificatesBlock } from "@/blocks/CertificatesBlock";
import { TestimonialsBlock } from "@/blocks/TestimonialsBlock";
import { Awards } from "@/components/sections/Awards";
import { BlogBlock } from "@/blocks/BlogBlock";
import { ClientMarquee } from "@/components/clients/ClientMarquee";
import { getPortfolioData } from "@/utils/data";

export default function Home() {
	const { stacks } = getPortfolioData();

	return (
		<>
			<HeroBlock />
			<SelectedWorkBlock />
			<TechStackBlock stacks={stacks.slice(0, 3)} />
			<CertificatesBlock />
			<TestimonialsBlock />
			<Awards />
			<BlogBlock />
			<ClientMarquee />
		</>
	);
}
