"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function RotatePageToView() {
	const [isPortrait, setIsPortrait] = useState(false);
	const isMobile = useIsMobile();

	useEffect(() => {
		const checkOrientation = () => {
			setIsPortrait(window.innerHeight > window.innerWidth);
		};

		checkOrientation();
		window.addEventListener("resize", checkOrientation);

		return () => window.removeEventListener("resize", checkOrientation);
	}, []);

	if (!isMobile || !isPortrait) return null;

	return (
		<div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center gap-6 p-4">
			<div className="relative">
				{/* Phone SVG */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="120"
					height="120"
					viewBox="0 0 24 24"
					className="text-neutral-800"
				>
					<g>
						{/* Phone frame */}
						<rect
							x="6"
							y="2"
							width="12"
							height="20"
							rx="2"
							className="fill-none stroke-current"
							strokeWidth="1.5"
							strokeLinecap="round"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 12 12;-90 12 12;-90 12 12;0 12 12"
								keyTimes="0;0.4;0.8;1"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</rect>
						{/* Screen */}
						<rect
							x="7"
							y="3"
							width="10"
							height="18"
							rx="1"
							className="fill-current"
							opacity="0.1"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 12 12;-90 12 12;-90 12 12;0 12 12"
								keyTimes="0;0.4;0.8;1"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</rect>
						{/* Home bar */}
						<rect
							x="9"
							y="20.5"
							width="6"
							height="0.4"
							rx="0.2"
							className="fill-current"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 12 12;-90 12 12;-90 12 12;0 12 12"
								keyTimes="0;0.4;0.8;1"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</rect>
						{/* Notch */}
						<rect
							x="9"
							y="3"
							width="6"
							height="1"
							rx="0.5"
							className="fill-current"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								values="0 12 12;-90 12 12;-90 12 12;0 12 12"
								keyTimes="0;0.4;0.8;1"
								dur="2.5s"
								repeatCount="indefinite"
							/>
						</rect>
					</g>
				</svg>
				{/* Static Arrow SVG */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="60"
					height="60"
					viewBox="0 0 100 100"
					xmlSpace="preserve"
					className="absolute -right-20 top-1/2 -translate-y-1/2 text-neutral-800"
				>
					<g>
						<path
							d="M 16.09 14.336 l 9.855 5.69 l 9.855 5.69 c 1.056 0.609 2.375 -0.152 2.375 -1.371 v -7.171 c 16.1 1.969 28.613 15.717 28.613 32.34 c 0 17.573 -13.98 31.942 -31.403 32.57 c -0.66 0.024 -1.189 0.549 -1.189 1.209 l 0 5.486 c 0 0.681 0.561 1.242 1.241 1.221 c 21.763 -0.658 39.264 -18.567 39.264 -40.486 c 0 -20.992 -16.053 -38.302 -36.527 -40.307 l 0 -7.62 c 0 -1.219 -1.32 -1.981 -2.375 -1.371 l -9.855 5.69 l -9.855 5.69 C 15.034 12.203 15.034 13.727 16.09 14.336 z"
							transform=" matrix(1 0 0 1 0 0) "
							stroke-linecap="round"
						/>
					</g>
				</svg>
			</div>
			<p className="text-xl font-medium text-center text-neutral-800">
				Please rotate your device
				<br />
				<span className="text-sm font-normal text-neutral-600">
					for the best viewing experience
				</span>
			</p>
		</div>
	);
}
