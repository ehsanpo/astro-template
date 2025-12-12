"use client";

import * as React from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/Link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import MainNav from "../nav/MainNav.astro";
import { getPortfolioData } from "@/utils/data";

type MenuItem = {
	text: string;
	href?: string;
	submenu?: MenuItem[];
};
const { navigation } = await getPortfolioData();

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	if (item.submenu) {
		return (
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<CollapsibleTrigger asChild>
					<button
						className={cn(
							"hover:text-primary flex w-full items-center justify-between py-2 text-lg font-medium transition-colors",
							depth > 0 && "pl-4"
						)}
					>
						{item.text}
						{isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
					</button>
				</CollapsibleTrigger>
				<CollapsibleContent>
					{item.submenu.map((subItem) => (
						<MenuItemComponent key={subItem.title} item={subItem} depth={depth + 1} />
					))}
				</CollapsibleContent>
			</Collapsible>
		);
	}

	return (
		<a
			href={item.href}
			className={cn(
				"hover:text-primary block py-2 text-lg font-medium transition-colors",
				depth > 0 && "pl-4",
				item.href === "/" && "text-primary"
			)}
		>
			{item.text}
		</a>
	);
};

export default function HamburgerMenu() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger>
				<Button
					className="md:hidden"
					text={
						<>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</>
					}
				/>
			</SheetTrigger>
			<SheetContent className="w-[240px] sm:w-[300px]">
				<nav className="flex flex-col space-y-4">
					{navigation.main.map((item) => (
						<MenuItemComponent key={item.text} item={item} />
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
