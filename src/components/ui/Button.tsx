import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
	href?: string;
	text?: string | React.ReactNode;
	className?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
	variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
	href,
	text,
	className,
	target = "_self",
	variant = "primary",
}) => {
	const getColorClasses = () => {
		if (variant === "secondary") {
			return "border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:shadow-secondary-500 active:border-secondary-100";
		}
		return "border-primary-600 text-primary-600 hover:bg-primary-600 hover:shadow-primary-500 active:border-primary-100";
	};

	return (
		<a
			href={href}
			className={twMerge(
				`link-border btn font-tomorrow group relative inline-block rounded-lg border text-sm font-bold uppercase tracking-wide transition-all hover:text-white hover:shadow-sm ${getColorClasses()}`,
				className
			)}
			target={target}
		>
			<div className="relative flex items-center justify-center overflow-hidden px-4 py-2 font-basement">
				<div className="relative z-20">
					<div className="duration-[10s] ease-[cubic-bezier(0.19,1,0.22,1)] transform transition-transform group-hover:-translate-y-10">
						{text}
					</div>
					<div className="duration-[3000ms] absolute left-0 top-10 transition-all group-hover:top-0">
						{text}
					</div>
				</div>
			</div>
			<span
				style={{ "--bg": `var(--${variant})` } as React.CSSProperties}
				className="glitch-effect absolute inset-0 z-10 hidden group-hover:block"
			></span>
		</a>
	);
};

export default Button;
