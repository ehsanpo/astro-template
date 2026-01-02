import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer/Footer";
import KonamiCode from "@/components/KonamiCode";
import { GameHUD } from "@/components/game/GameHUD";
import { NavLockGuard } from "@/components/game/NavLockGuard";
import ScrollBottomEasterEgg from "@/components/ScrollBottomEasterEgg";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
	title: "Ehsan Portfolio",
	description: "Developer Portfolio",
	icons: {
		icon: "/favicon.svg",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100 antialiased">
				<Providers>
					<KonamiCode />
					<NavLockGuard />
					<Header />
					<GameHUD />
					<main className="min-h-screen">
						{children}
						<Footer />
						<ScrollBottomEasterEgg />
					</main>
				</Providers>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.toggle("dark", false);
              } else {
                document.documentElement.classList.toggle("dark", true);
              }
            `,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
			console.log(
				"%c" +
					"\\n███████╗██╗  ██╗███████╗ █████╗ ███╗   ██╗\\n" +
					"██╔════╝██║  ██║██╔════╝██╔══██╗████╗  ██║\\n" +
					"█████╗  ███████║███████╗███████║██╔██╗ ██║\\n" +
					"██╔══╝  ██╔══██║╚════██║██╔══██║██║╚██╗██║\\n" +
					"███████╗██║  ██║███████║██║  ██║██║ ╚████║\\n" +
					"╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝\\n",
				"color: #6366f1; font-weight: bold;"
			);
			console.log(
				"%c👋 Hey there, curious developer!",
				"font-size: 18px; font-weight: bold; color: #10b981;"
			);
			console.log(
				"%c🔍 I see you're checking out the console. I like your style!",
				"font-size: 14px; color: #8b5cf6;"
			);
			console.log(
				"%c💡 Fun fact: This portfolio is built with Next.js, React, and TailwindCSS",
				"font-size: 14px; color: #f59e0b;"
			);
			console.log(
				"%c🎮 Pro tip: Try the Konami Code! (↑↑↓↓←→←→BA)",
				"font-size: 14px; color: #ec4899; font-style: italic;"
			);
			console.log(
				"%c📧 Want to chat? Reach out at the contact page!",
				"font-size: 14px; color: #06b6d4;"
			);
			console.log("%c⭐ GitHub: github.com/ehsanpo", "font-size: 14px; color: #a855f7;");
            `,
					}}
				/>
			</body>
		</html>
	);
}
