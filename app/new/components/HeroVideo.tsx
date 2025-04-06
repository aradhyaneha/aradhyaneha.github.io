"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../loading";
import { useAutoPlayVideo } from "@/hooks/use-auto-play-video";

export default function HeroVideo() {
	const [assetsLoaded, setAssetsLoaded] = useState(false);
	const videoRef = useAutoPlayVideo();

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
				ref={videoRef}
				initial={{ opacity: 0 }}
				animate={{ opacity: assetsLoaded ? 1 : 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				src="/hero-video.mp4"
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className="h-auto z-0 object-cover"
				onContextMenu={(e) => e.preventDefault()}
			></motion.video>
		</>
	);
}
