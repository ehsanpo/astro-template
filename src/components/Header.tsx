"use client";

import Link from "next/link";
import { MainNav } from "./nav/MainNav";
import Toggle from "./Toggle";
import HamburgerMenu from "./ui/Menu";

export const Header = () => {
	return (
		<>
			<svg colorInterpolationFilters="sRGB" style={{ display: "none" }}>
				<defs>
					<filter id="mixed-ui-player-filter">
						<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blurred_source" />
					</filter>
				</defs>
			</svg>

			<header className="clip4 fixed top-0 z-50 w-full max-w-[100vw] overflow-hidden backdrop-blur-md">
				<div className="absolute inset-0 bg-white/80 dark:bg-neutral-900/80"></div>

				<div className="container relative z-10 mx-auto px-4">
					<nav className="flex h-16 items-center justify-center">
						<Link
							href="/"
							className="gradient-text-inv fixed left-4 top-3 font-basement text-2xl font-bold"
						>
							<svg
								width="36px"
								className="h-8 w-8 text-primary-500"
								data-rellax-speed="-7"
								version="1.1"
								id=""
								xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 27.8 26.7"
								style={{ transform: "translate3d(0px, 0px, 0px)" }}
								xmlSpace="preserve"
							>
								<path
									fill="currentColor"
									className="st1"
									d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
          c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
          c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
          c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
          l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
          c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
								></path>
							</svg>
						</Link>
						<MainNav />
						<HamburgerMenu />
						<Toggle />
					</nav>
				</div>
			</header>
		</>
	);
};
