import React from "react";
import LogoBasedOnTheme from "./ui/LogoBasedOnTheme";

const Footer = () => {
	return (
		<footer>
			<div className="max-w-8xl p-5 px-10 max-xl:p-1 max-xl:px-5 mx-auto flex justify-between items-center text-neutral-500 bg-[#F3F3F3]">
				<div className="flex items-center space-x-4 text-xl max-xl:text-sm">
					<LogoBasedOnTheme />
					<span className="text-sm">&#169; neha aradhya 2025.</span>
				</div>
				<div className="text-right">
					<span>Designing Spaces. Capturing Stories.</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
