"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContactCard as ContactCard } from "@/components/ui/contact-card";
import Image from "next/image";

export default function AppleCardsCarouselDemo() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full py-20">
			<div className="max-w-7xl pl-4 mx-auto flex px-auto">
				<Image
					src={"/na_logo.png"}
					width="100"
					height="100"
					sizes="(max-width: 768px) 10rem, 10rem"
					style={{
						objectFit: "contain",
						backgroundColor: "white",
						color: "white",
						height: "fit-content",
					}}
					alt="Neha Aradhya logo"
					priority={false}
				/>
				<div>
					<h2 className="max-w-7xl pl-4 mx-auto text-5xl max-md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
						{/* <TextGenerateEffect words="Neha Aradhya"/> */}
						Neha Aradhya
					</h2>
					<h3 className="max-w-7xl pl-4 my-2 max-md:my-0.5 mx-auto text-2xl max-md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 font-sans">
						Architect and Interior Designer.
					</h3>
				</div>
			</div>
			<Carousel items={cards} />
		</div>
	);
}

const data = [
	{
		category: "Portfolio",
		title: "",
		src: "/portfolio-cover.jpg",
		content: (
			<iframe
				allowFullScreen={true}
				scrolling="no"
				className="fp-iframe"
				src="https://heyzine.com/flip-book/9b931e5eb2.html"
				style={{ border: "0px", width: "100%", height: "600px" }}
			></iframe>
		),
	},
	{
		category: "Resume",
		title: "",
		src: "/resume-cover.jpg",
		content: (
			<iframe
				allowFullScreen={true}
				scrolling="no"
				className="fp-iframe"
				style={{ border: "0px", width: "100%", height: "600px" }}
				src="https://heyzine.com/flip-book/46c037e875.html"
			></iframe>
		),
	},
	{
		category: "Contact Details",
		title: "",
		src: "/contact.jpg",
		content: <ContactCard />,
	},
];
