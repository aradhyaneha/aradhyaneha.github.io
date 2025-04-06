"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../loading";

export default function HeroVideo() {
	const [assetsLoaded, setAssetsLoaded] = useState(false);

	useEffect(() => {
		const handleAssetsLoaded = () => setAssetsLoaded(true);

		if (document.readyState === "complete") {
			handleAssetsLoaded();
		} else {
			window.addEventListener("load", handleAssetsLoaded);
			return () => window.removeEventListener("load", handleAssetsLoaded);
		}
	}, []);

	return (
		<>
			{/* Loader overlay */}
			<AnimatePresence>
				{!assetsLoaded && (
					<motion.div
						key="loader"
						className="fixed inset-0 z-50 flex items-center justify-center max-w-vw"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Loading />
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main content */}
			<motion.video
				initial={{ opacity: 0 }}
				animate={{ opacity: assetsLoaded ? 1 : 0 }}
				transition={{ duration: 0.8, delay: assetsLoaded ? 0.2 : 0 }}
				src="/hero-video.mp4"
				autoPlay
				loop
				muted
				playsInline
				className="h-auto z-0 object-cover "
				onContextMenu={(e) => e.preventDefault()}
			></motion.video>
		</>
	);
}
