"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface TooltipProps {
	children: React.ReactNode;
	content: string;
	position?: "top" | "bottom" | "left" | "right";
	className?: string;
}

export function Tooltip({ children, content, position = "top", className }: TooltipProps) {
	const [isVisible, setIsVisible] = useState(false);

	const getPositionClasses = () => {
		switch (position) {
			case "top":
				return "bottom-full left-1/2 -translate-x-1/2 mb-2";
			case "bottom":
				return "top-full left-1/2 -translate-x-1/2 mt-2";
			case "left":
				return "right-full top-1/2 -translate-y-1/2 mr-2";
			case "right":
				return "left-full top-1/2 -translate-y-1/2 ml-2";
			default:
				return "bottom-full left-1/2 -translate-x-1/2 mb-2";
		}
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && (
				<div
					className={cn(
						"absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg transition-opacity duration-200",
						"before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-gray-900",
						position === "top" && "before:left-1/2 before:top-full before:-translate-x-1/2",
						position === "bottom" && "before:bottom-full before:left-1/2 before:-translate-x-1/2",
						position === "left" && "before:left-full before:top-1/2 before:-translate-y-1/2",
						position === "right" && "before:right-full before:top-1/2 before:-translate-y-1/2",
						getPositionClasses(),
						className
					)}
				>
					{content}
				</div>
			)}
		</div>
	);
}
