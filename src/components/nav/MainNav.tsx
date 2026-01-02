import { getPortfolioData } from "@/utils/data";
import { NavLink } from "./NavLink";

export const MainNav = () => {
	const { navigation } = getPortfolioData();
	return (
		<div className="hidden items-center gap-6 font-basement md:flex">
			{navigation.main.map((link: any) => (
				<NavLink key={link.href} href={link.href}>
					{link.text}
				</NavLink>
			))}
		</div>
	);
};
