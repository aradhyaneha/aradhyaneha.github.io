import React from "react";
import { delay } from "@/lib/utils";
import Footer from "@/components/footer";
import HeroSection from "./sections/HeroSection";
import WorksSection from "./sections/WorksSection";
import AboutMe from "./sections/AboutMe";
import ContactSection from "./sections/ContactSection";
import RotatePageToView from "./components/RotatePageToView";

export default async function page() {
	await delay(2000);
	return (
		<div className="w-full">
			<RotatePageToView />
			<HeroSection />
			<WorksSection />
			<AboutMe />
			<ContactSection />
			<Footer />
		</div>
	);
}
