import React from "react";
// import Image from "next/image";
// import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const AboutMe = () => {
	return (
		<div
			id={"aboutme"}
			className="flex flex-col items-start max-w-full h-dvh"
		>
			<div>
				<h2 className="text-5xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#5b0000] italic pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
					/ about <span className="font-bold">ME</span>
				</h2>
			</div>
		</div>
	);
};

export default AboutMe;

// const AboutMe = () => {
// 	return (
// 		<div id={"aboutme"} className="px-6 py-16 md:px-20 bg-white">
// 			<h2 className="text-2xl md:text-3xl font-semibold text-left text-[#5b0000] italic mb-12">
// 				/ about <span className="font-bold">ME</span>
// 			</h2>

// 			<div className="flex flex-col lg:flex-row items-start gap-10">
// 				{/* Left Column */}
// 				<div className="relative w-60 lg:w-1/3">
// 					<div className="bg-white p-6 relative z-10">
// 						<h3 className="text-3xl font-bold text-gray-700 italic mb-2">
// 							CIAO
// 						</h3>
// 						<p className="text-gray-500 text-lg">
// 							I am Neha Aradhya, an architect, interior designer,
// 							artist and an avid architectural photographer.
// 						</p>
// 					</div>

// 					<div className="absolute bottom-0 left-0">
// 						<Image
// 							src="/pantheon.png"
// 							alt="Pantheon"
// 							width={500}
// 							height={300}
// 							className="object-contain w-full h-auto"
// 						/>
// 					</div>
// 				</div>

// 				{/* Middle Photo */}
// 				<div className="relative z-10 -mt-10 lg:-mt-0">
// 					<div className="relative w-[240px] md:w-[280px] lg:w-[320px]">
// 						<Image
// 							src="/neha.png"
// 							alt="Portrait"
// 							width={320}
// 							height={400}
// 							className="w-full h-auto border-white border-[12px] shadow-md"
// 						/>
// 						<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-rose-400 rounded-md rotate-12 z-20"></div>
// 					</div>
// 				</div>

// 				{/* Right Text Note */}
// 				<div className="relative w-[300px] md:w-[400px]">
// 					<div className="relative bg-[url('/tape-paper.png')] bg-no-repeat bg-contain px-6 py-4 text-gray-600 text-sm md:text-base">
// 						<p className="max-w-[250px] md:max-w-[350px] mx-auto">
// 							I am obsessed with buildings, so much so that you
// 							will find me observing a simple bracket, or
// 							anatomizing that facade which everyone ignores. This
// 							passion spills over into my love for travel, where
// 							exploring new places fuels my curiosity even
// 							further. Whether it&apos;s expressing my creativity
// 							through art or design or staying active with a
// 							workout, I&apos;m always seeking new ways to engage
// 							with the world and have fun.
// 						</p>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom Section */}
// 			<div className="mt-12 flex flex-col md:flex-row items-start gap-10">
// 				<div className="flex flex-col gap-4 text-gray-500 text-xl">
// 					<a href="#" className="flex items-center gap-2">
// 						<FaLinkedinIn />
// 					</a>
// 					<a
// 						href="mailto:test@example.com"
// 						className="flex items-center gap-2"
// 					>
// 						<FaEnvelope />{" "}
// 					</a>
// 					<a
// 						href="tel:+1234567890"
// 						className="flex items-center gap-2"
// 					>
// 						<FaPhoneAlt />{" "}
// 					</a>
// 				</div>

// 				<div className="flex flex-col gap-4">
// 					<a
// 						href="#"
// 						className="px-6 py-1 border border-gray-400 rounded-full hover:bg-gray-100 transition"
// 					>
// 						view curated portfolio
// 					</a>
// 					<a
// 						href="#"
// 						className="px-6 py-1 border border-gray-400 rounded-full hover:bg-gray-100 transition"
// 					>
// 						view curriculum vitae
// 					</a>
// 				</div>

// 				<div className="hidden lg:block">
// 					<Image
// 						src="/images/sketch-house.png"
// 						alt="Sketch"
// 						width={400}
// 						height={250}
// 						className="object-contain"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AboutMe;
