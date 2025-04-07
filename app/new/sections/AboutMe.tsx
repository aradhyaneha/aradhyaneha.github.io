import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const AboutMe = () => {
	return (
		<div
			id={"aboutme"}
			className="relative flex flex-col items-start max-w-full min-h-svh"
		>
			<div>
				<h2 className="text-4xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#5b0000] italic pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
					/ about <span className="font-bold">ME</span>
				</h2>
			</div>
			{/* <div className="relative w-full px-11 mx-auto flex items-center justify-center max-xl:scale-70"> */}
			<div className="flex relative w-full mt-10 max-xl:mt-0 justify-center self-center p-5 max-lg:p-0 max-xl:pl-30 max-lg:mt-0">
				{/* Main collage image */}
				<div className="relative flex justify-center self-center">
					<Image
						src="/about-me/main.png"
						alt="Collage of Neha Aradhya, and her biography"
						width={1100}
						height={800}
						className="relative object-contain max-w-11/12 max-xl:max-w-4/5"
						priority
					/>

					{/* House sketch gif positioned over the bottom right corner of the image */}
					<div className="absolute bottom-10 w-2/5 max-xl:w-1/3 translate-x-4/5 -translate-y-20 max-xl:-translate-y-10">
						<Image
							src="/about-me/house-sketch.gif"
							alt="House Sketch"
							width={600}
							height={600}
							className="object-contain"
						/>
					</div>
					<div className="absolute max-md:pl-4 bottom-10 max-xl:bottom-7 max-lg:bottom-8 max-md:-bottom-10 rotate-357 -translate-x-2/10 max-lg:-translate-x-1/10 flex flex-col gap-8 max-lg:gap-6 justify-between max-w-3/12">
						{/* <div className="flex flex-col self-start w-1/8">

						</div> */}
						<div className="flex flex-row gap-5 text-2xl max-xl:text-xl text-gray-400">
							<a
								href="https://www.linkedin.com/in/neha-aradhya/"
								className="flex items-center hover:text-gray-500"
								aria-label="View LinkedIn profile"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="#sayhello"
								className="flex items-center hover:text-gray-500"
								aria-label="Send email"
							>
								<FaEnvelope />{" "}
							</a>
						</div>
						<div className="flex flex-col text-xl max-xl:text-sm">
							<div className="flex flex-col gap-5 max-lg:gap-3 text-gray-500">
								<Link
									href="/portfolio"
									className="px-6 py-0 border border-gray-400 rounded-full hover:bg-gray-100 transition"
									aria-label="View curated portfolio"
								>
									view curated portfolio
								</Link>
								<Link
									href="/cv"
									className="px-6 py-0 border border-gray-400 rounded-full hover:bg-gray-100 transition"
									aria-label="View curriculum vitae"
								>
									view curriculum vitae
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
