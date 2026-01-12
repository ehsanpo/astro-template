import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPortfolioData } from "@/utils/client-data";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ServiceDetails - Full-screen scrolling service showcase
 *
 * Displays services in a pinned scroll animation. Each service
 * takes up full viewport and pins while scrolling.
 */
const ServiceDetails: React.FC = () => {
	const serviceWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
	const { services } = getPortfolioData();

	useEffect(() => {
		const headerHeight = 50;

		serviceWrappersRef.current.forEach((serviceBlock, index) => {
			if (serviceBlock) {
				ScrollTrigger.create({
					trigger: serviceBlock,
					start: `top ${headerHeight}`,
					end: `bottom ${headerHeight}`,
					pin: true,
					pinSpacing: false,
					scrub: true,
					toggleClass: "active",
					toggleActions: "play none reverse none",
					invalidateOnRefresh: true,
				});
			}
		});

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const updateServiceWrappersRef = (el: HTMLDivElement | null, index: number) => {
		serviceWrappersRef.current[index] = el;
	};

	return (
		<ParallaxProvider>
			<div className="service-details-wrapper">
				{services.map((service, index) => (
					<div
						key={service.id}
						className={`pin-spacer flex w-full bg-offwhite/80 backdrop-blur-md dark:bg-neutral-900/80`}
						ref={(el) => updateServiceWrappersRef(el, index)}
					>
						<div
							className={`justify-content-center container relative mx-auto flex h-[calc(100vh-99px)] w-full flex-row flex-wrap overflow-hidden p-0 px-4 md:flex-col ${
								index % 2 === 0 ? "image-right" : "image-left"
							} `}
						>
							<div className="service-detail-image-hold z-2 relative top-0 h-[40%] overflow-hidden bg-black md:h-full md:w-1/2">
								<img
									src={service.image}
									alt={service.title}
									className="w-full !object-cover md:h-[120%]"
								/>
							</div>
							<div className="flex h-full md:w-1/2 md:items-center">
								<Parallax speed={20}>
									<div className={` ${index % 2 === 0 ? "" : "ml-6"}`}>
										<div className="service-details-box position-relative d-flex flex-column">
											<div className="service-details-box-body animate-child trigger">
												<h2 className="gradient-text mb-1 text-9xl font-bold">{`0${service.id}.`}</h2>

												<h3 className="mb-2 text-5xl text-secondary-500">{service.title}</h3>
												<p className="text-xl">{service.description}</p>
												<ul className="services-list-ul mt-3">
													{service.features.map((item, idx) => (
														<li key={idx}>{item}</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</Parallax>
							</div>
						</div>
					</div>
				))}
			</div>
		</ParallaxProvider>
	);
};

export default ServiceDetails;
