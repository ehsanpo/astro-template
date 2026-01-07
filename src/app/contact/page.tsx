import PageHero from "@/components/hero/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import { DrawerDemo } from "@/components/drawer";
import { DiscordButton, LinkedInButton } from "@/components/contact/ContactButtons";

export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<>
			<PageHero
				title="Get in Touch"
				subtitle="Have a project in mind? Let's discuss how we can work together."
			/>

			<div className="py-20">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-4xl">
						<div className="grid gap-12 md:grid-cols-2">
							<div className="flex flex-col gap-4">
								<div>
									<DrawerDemo />
								</div>

								<div>
									<DiscordButton />
								</div>
								<div>
									<LinkedInButton />
								</div>
							</div>
							<div>
								<ContactInfo />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
