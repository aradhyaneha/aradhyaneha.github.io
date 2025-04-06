import React from "react";
import HeroVideo from "../components/HeroVideo";

const HeroSection = () => {
	return (
		<div className="flex justify-between max-w-full max-h-full">
			<div className="pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
				<h1 className="intro-title text-6xl max-xl:text-4xl max-lg:text-2xl font-bold text-neutral-600">
					neha aradhya
				</h1>
				<div className="pt-8 max-lg:pt-3 max-xl:pt-5 flex flex-col text-3xl max-xl:text-base text-neutral-500 leading-12 max-xl:leading-6">
					<a href="#works" className="font-poppins">
						/ my works
					</a>
					<a href="#portfolio" className="font-poppins">
						/ my portfolio
					</a>
					<a href="#aboutme" className="font-poppins">
						/ about me
					</a>
					<a href="#sayhello" className="font-poppins">
						/ say hello
					</a>
					{/* <a href="#about" className="leading-5">
						Scroll to About
					</a> */}
				</div>
			</div>
			<div className="relative flex justify-end max-h-screen max-w-3/4">
				<HeroVideo />
				<div className="absolute left-0 top-1/2 translate-y-1/3 -translate-x-1/4 max-xl:-translate-x-2/5 z-10 w-110 max-xl:w-70 max-lg:w-55">
					<h2 className="text-6xl max-xl:text-4xl max-lg:text-3xl text-red-900 font-bold leading-15 max-xl:leading-10 max-lg:leading-7">
						The world is but a canvas to our imagination
					</h2>
					<p className="mt-5 max-xl:mt-2 text-neutral-500 text-3xl max-xl:text-xl max-lg:text-sm">
						- Henry David Thoreau
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
