"use client";
import { IconX } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import RotatePageToView from "../components/RotatePageToView";

const PortfolioPage = () => {
	const [loading, setLoading] = useState(true);
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<RotatePageToView />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				ref={containerRef}
			>
				<Link
					className="absolute top-4 left-10 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
					href={"/"}
				>
					<IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
				</Link>
				{loading && (
					<div className="flex flex-col items-center">
						<p className="absolute mt-40 w-12 h-12 border-4 border-background border-t-current rounded-full animate-spin"></p>
					</div>
				)}
				<div className="py-5">
					<iframe
						allowFullScreen={true}
						scrolling="no"
						className="fp-iframe"
						style={{ border: "0px", width: "100%", height: "90vh" }}
						src="https://heyzine.com/flip-book/9b931e5eb2.html"
						onLoad={() => setLoading(false)}
					></iframe>
				</div>
			</motion.div>
		</>
	);
};

export default PortfolioPage;
