import React from "react";
import LogoBasedOnTheme from "./ui/LogoBasedOnTheme";

const Footer = () => {
	return (
		<footer>
			<div className="max-w-8xl p-5 px-15 max-xl:p-1 max-xl:px-5 mx-auto flex justify-between items-center text-neutral-500 bg-[#F3F3F3]">
				<div className="flex items-center space-x-7 text-xl max-xl:text-sm">
					<LogoBasedOnTheme />
					<h3 className="font-semibold">&#169; neha aradhya 2025.</h3>
				</div>
				<div className="text-right">
					<span>Designing Spaces. Capturing Stories.</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
