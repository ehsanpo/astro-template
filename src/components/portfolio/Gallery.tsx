"use client";

import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";

interface Props {
	images: any[];
	alt: string;
}

export default function Gallery({ images, alt }: Props) {
	useEffect(() => {
		let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
			gallery: "#my-test-gallery",
			children: "a",
			pswpModule: () => import("photoswipe"),
		});
		lightbox.init();

		return () => {
			lightbox?.destroy();
			lightbox = null;
		};
	}, []);

	if (!images || images.length === 0) return null;

	return (
		<div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2" id="my-test-gallery">
			{images.map((image, index) => (
				<a
					key={image.src}
					href={image.src}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					target="_blank"
					rel="noreferrer"
					className="gallery-item cursor-pointer"
				>
					<Image
						src={image.src}
						alt={`${alt} - Image ${index + 1}`}
						width={image.width}
						height={image.height}
						sizes="(max-width: 768px) 100vw, 50vw"
						className="h-64 w-full rounded-lg object-cover transition-transform hover:scale-105"
					/>
				</a>
			))}
		</div>
	);
}
