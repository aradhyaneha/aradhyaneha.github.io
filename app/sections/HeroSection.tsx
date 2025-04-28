import React from "react";
import HeroVideo from "../components/HeroVideo";
import Link from "next/link";
import localFont from "next/font/local";

const alluring = localFont({
	src: "../../public/fonts/Alluring_Delight_Free.woff2",
});

const HeroSection = () => {
	return (
		<div className="flex justify-between max-w-full max-h-full">
			<div className="pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
				<h1 className="text-4xl max-xl:text-3xl max-lg:text-2xl font-bold text-neutral-600">
					neha aradhya
				</h1>
				<div className="pt-8 max-lg:pt-3 max-xl:pt-5 flex flex-col text-2xl max-xl:text-base text-neutral-500 leading-10 max-xl:leading-6 font-poppins">
					<a href="#works" className="">
						/ my works
					</a>
					<Link href="/portfolio" className="">
						/ my portfolio
					</Link>
					<a href="#aboutme" className="">
						/ about me
					</a>
					<a href="#sayhello" className="">
						/ say hello
					</a>
				</div>
			</div>
			<div className="relative flex justify-end h-screen max-w-3/4">
				<HeroVideo />
				<div className="absolute left-0 top-1/2 -translate-y-1/8 max-xl:-translate-y-1/8 -translate-x-1/3 max-xl:-translate-x-2/5 max-lg:-translate-x-1/5 z-10 w-95 max-xl:w-70 max-lg:w-45">
					<h2
						className={`${alluring.className} text-5xl max-xl:text-4xl max-lg:text-2xl text-red-900 leading-15 max-xl:leading-10 max-lg:leading-7`}
					>
						The world is but a canvas to our imagination
					</h2>
					<p className="mt-4 max-xl:mt-2 max-lg:mt-1 text-neutral-500 text-2xl max-xl:text-xl max-lg:text-sm">
						- Henry David Thoreau
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
