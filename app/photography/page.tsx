import UnderConstruction from "@/components/ui/UnderConstruction";
import React from "react";

const Photography = () => {
	return (
		<div className="flex flex-col max-w-full h-lvh">
			<div className="flex flex-col items-start gap-10">
				<h2 className="text-4xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#5b0000] italic pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
					/ <span className="font-bold">PHOTOGRAPHY</span>
				</h2>
			</div>
			<div className="flex justify-center items-center">
				<UnderConstruction />
			</div>
		</div>
	);
};

export default Photography;
