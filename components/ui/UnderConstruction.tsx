import Image from "next/image";
import React from "react";

const UnderConstruction = () => {
	return (
		<Image
			src="/under_construction.png"
			alt="Page is under construction"
			width={650}
			height={650}
			className="object-cover w-full max-w-1/2 mt-40 max-xl:mt-20"
		/>
	);
};

export default UnderConstruction;
