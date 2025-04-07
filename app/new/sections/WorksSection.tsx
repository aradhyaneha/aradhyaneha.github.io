import React from "react";
import Image from "next/image";

const WorksSection = () => {
	return (
		<div
			id={"works"}
			className="flex flex-col items-start max-w-full h-lvh"
		>
			<div>
				<h2 className="text-4xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#5b0000] italic pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
					/ my <span className="font-bold">WORKS</span>
				</h2>
			</div>
			<div className="flex justify-center mx-auto p-5 pl-45 max-lg:p-4 max-xl:pl-30 mt-30 max-xl:mt-10 max-lg:mt-0">
				{/* Architecture & Interiors */}
				<div>
					<div className="relative inline-block p-4 -rotate-6 translate-x-5 max-xl:translate-x-10 max-xl:scale-95">
						<Image
							src="/work-section/architecture.png"
							alt="Architecture and Interiors"
							width={650}
							height={650}
							className="object-cover"
						/>
					</div>
				</div>

				{/* Photography */}
				<div>
					<div className="relative inline-block p-4 translate-y-22 max-xl:translate-y-18 max-lg:translate-y-10">
						<Image
							src="/work-section/photography.png"
							alt="Photography"
							width={710}
							height={710}
							className="object-cover"
						/>
					</div>
				</div>

				{/* Art */}
				<div>
					<div className="relative inline-block p-4 -translate-x-50 max-xl:-translate-x-35 max-lg:-translate-x-20">
						<Image
							src="/work-section/art.png"
							alt="Art"
							width={550}
							height={550}
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorksSection;
