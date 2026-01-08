"use client";

import * as React from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/Link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/game";
import type { UnlockablePage } from "@/game";

type MenuItem = {
	text: string;
	href?: string;
	submenu?: MenuItem[];
};

const navigationMain: MenuItem[] = [
	{ href: "/", text: "Home" },
	{ href: "/portfolio", text: "Work" },
	{ href: "/skills", text: "Skills" },
	{ href: "/services", text: "Services" },
	{ href: "/about", text: "About" },
	{ href: "/contact", text: "Contact" },
	{ href: "/life", text: "Life" },
];

const lifeItem: MenuItem = { href: "/life", text: "Life" };

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number; locked?: boolean }> = ({
	item,
	depth = 0,
	locked = false,
}) => {
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
			onClick={(e) => {
				if (locked) {
					e.preventDefault();
					e.stopPropagation();
				}
			}}
			aria-disabled={locked}
			title={locked ? "Locked , unlock in Shop" : undefined}
			className={cn(
				"block py-2 text-lg font-medium transition-colors",
				locked ? "cursor-not-allowed text-gray-400" : "hover:text-primary",
				depth > 0 && "pl-4",
				item.href === "/" && "text-primary"
			)}
			data-game-nav-link
			data-href={item.href}
		>
			{item.text}
		</a>
	);
};

export default function HamburgerMenu() {
	const [open, setOpen] = React.useState(false);
	const mode = useGameStore((s) => s.mode);
	const unlocks = useGameStore((s) => s.unlocks);

	const items: MenuItem[] = unlocks["/life" as UnlockablePage]
		? navigationMain
		: navigationMain.filter((item) => item.href !== "/life");

	const isLocked = (href?: string) => {
		if (!href || href === "/") return false;
		if (mode !== "active") return false;
		return !unlocks[href as UnlockablePage];
	};

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
			<SheetContent className="w-[240px] sm:w-[300px]" data-game-ignore>
				<nav className="flex flex-col space-y-4">
					{items.map((item) => (
						<MenuItemComponent key={item.text} item={item} locked={isLocked(item.href)} />
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
