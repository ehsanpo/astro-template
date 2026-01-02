import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
	name: string;
	title: string;
	img: string;
	short: string;
	desc: string;
}

export default function TestimonialCard({ name, title, img, short, desc }: TestimonialProps) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	return (
		<motion.div
			className="clip cursor-pointer rounded-lg bg-secondary-900/80 px-6 pb-6 pt-10 backdrop-blur-lg dark:bg-secondary-900"
			whileHover={{ scale: 1.02 }}
			onClick={() => setIsExpanded(!isExpanded)}
		>
			<div className="mb-4 flex items-center gap-4">
				<img src={img} alt={name} className="h-16 w-16 rounded-full object-cover" />
				<div>
					<h3 className="font-basement text-xl text-secondary-400">{name}</h3>
					<p className="text-secondary-500">{title}</p>
				</div>
			</div>
			<motion.div
				initial={false}
				animate={{ height: isExpanded ? "auto" : "100px" }}
				className="overflow-hidden"
			>
				<p className="whitespace-pre-line text-secondary-200">{isExpanded ? desc : short}</p>
			</motion.div>
			<button
				className="mt-4 text-secondary-500 transition-colors hover:text-white"
				onClick={(e) => {
					e.stopPropagation();
					setIsExpanded(!isExpanded);
				}}
			>
				{isExpanded ? "Show less" : "Read more"}
			</button>
		</motion.div>
	);
}
