"use client";
import React from "react";
// import { useDarkMode } from "@/hooks/use-dark-mode";
import Image from "next/image";

const LogoBasedOnTheme = () => {
	// const isDarkMode = useDarkMode();
	// const logoSrc = isDarkMode ? "/na_logo_dark.png" : "/na_logo_new.png";
	const logoSrc = "/na_logo_new.png";
	return (
		<Image
			className={"max-xl:scale-70"}
			alt="Neha Aradhya logo"
			src={logoSrc}
			width="40"
			height="40"
		/>
	);
};

export default LogoBasedOnTheme;
