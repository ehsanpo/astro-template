import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollBottomEasterEgg() {
	const [showBanner, setShowBanner] = useState(false);
	const [extraScrollAttempts, setExtraScrollAttempts] = useState(0);
	const [lastWheelTime, setLastWheelTime] = useState(0);
	const [lastScrollPos, setLastScrollPos] = useState(0);

	useEffect(() => {
		let attemptTimeout: NodeJS.Timeout;
		const THROTTLE_MS = 300; // Only count one scroll every 300ms

		const handleWheel = (e: WheelEvent) => {
			const now = Date.now();

			// Throttle: ignore if less than 300ms since last wheel event
			if (now - lastWheelTime < THROTTLE_MS) {
				return;
			}
			setLastWheelTime(now);

			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPosition = window.scrollY;
			const isAtBottom = scrollPosition >= scrollableHeight - 10; // 10px tolerance

			// If at bottom and user is scrolling down
			if (isAtBottom && e.deltaY > 0) {
				setExtraScrollAttempts((prev) => {
					const newAttempts = prev + 1;
					console.log(
						"Scroll attempts:",
						newAttempts,
						"deltaY:",
						e.deltaY,
						"isAtBottom:",
						isAtBottom
					);

					// Show banner after 8+ attempts of "extra scrolling" at the bottom
					if (newAttempts > 7) {
						setShowBanner(true);
					}

					return newAttempts;
				});

				// Reset counter after 2 seconds of no scrolling
				clearTimeout(attemptTimeout);
				attemptTimeout = setTimeout(() => {
					setExtraScrollAttempts(0);
				}, 2000);
			} else if (!isAtBottom && e.deltaY < 0) {
				// Reset when user scrolls up
				setExtraScrollAttempts(0);
				setShowBanner(false);
			}

			setLastScrollPos(scrollPosition);
		};

		const handleScroll = () => {
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPosition = window.scrollY;
			const isAtBottom = scrollPosition >= scrollableHeight - 10;

			// If scrolled up (using scrollbar or any other method), hide banner
			if (!isAtBottom && scrollPosition < lastScrollPos) {
				setExtraScrollAttempts(0);
				setShowBanner(false);
			}

			setLastScrollPos(scrollPosition);
		};

		window.addEventListener("wheel", handleWheel, { passive: true });
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(attemptTimeout);
		};
	}, [lastWheelTime, lastScrollPos]);

	return (
		<motion.div
			className="pointer-events-none fixed bottom-0 left-0 right-0 z-40"
			initial={{ y: "100%" }}
			animate={{ y: showBanner ? "0%" : "100%" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<motion.img
				src="/img/banner.gif"
				alt="Easter Egg Banner"
				className="h-auto w-full object-cover"
				initial={{ opacity: 0 }}
				animate={{ opacity: showBanner ? 1 : 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
			/>
		</motion.div>
	);
}
