import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
	href?: string;
	text?: string | React.ReactNode;
	className?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
}

const Button: React.FC<ButtonProps> = ({ href, text, className, target = "_self" }) => {
	return (
		<a
			href={href}
			className={twMerge(
				"btn font-tomorrow group relative inline-block rounded-lg border border-primary-600 px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-600 transition-all hover:bg-primary-600 hover:text-white hover:shadow-sm hover:shadow-primary-500 active:border-primary-100",
				className
			)}
			target={target}
		>
			<div className="relative flex items-center justify-center overflow-hidden px-4 py-2">
				<div className="relative z-20">
					<div className="duration-[10s] ease-[cubic-bezier(0.19,1,0.22,1)] transform transition-transform group-hover:-translate-y-10">
						{text}
					</div>
					<div className="duration-[3000ms] absolute left-0 top-10 transition-all group-hover:top-0">
						{text}
					</div>
				</div>
			</div>
			<span className="glitch-effect absolute inset-0 z-10 hidden group-hover:block"></span>
		</a>
	);
};

export default Button;
