"use client";
import React, {
	useEffect,
	useRef,
	useState,
	createContext,
	useContext,
	JSX,
} from "react";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const data = [
	{
		category: "Portfolio",
		title: "View curated portfolio",
		src: "/portfolio-cover.jpg",
		src_mobile: "/portfolio-cover-mobile.jpg",
		loader: true,
		content: (setLoading: (loading: boolean) => void) => (
			<iframe
				allowFullScreen={true}
				scrolling="no"
				className="fp-iframe"
				src="https://heyzine.com/flip-book/9b931e5eb2.html"
				style={{ border: "0px", width: "100%", height: "55vh" }}
				onLoad={() => setLoading(false)}
			></iframe>
		),
	},
	{
		category: "Resume",
		title: "View curriculum vitae",
		src: "/resume-cover.jpg",
		src_mobile: "/resume-cover-mobile.jpg",
		loader: true,
		content: (setLoading: (loading: boolean) => void) => (
			<iframe
				allowFullScreen={true}
				scrolling="no"
				className="fp-iframe"
				style={{ border: "0px", width: "100%", height: "55vh" }}
				src="https://heyzine.com/flip-book/d1469d1516.html"
				onLoad={() => setLoading(false)}
			></iframe>
		),
	},
];

const PortfolioAndCVViewer = () => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
			setCurrentIndex(index);
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	const buttons = data.map((card, index) => (
		<Button key={card.src} card={card} index={index} />
	));
	return (
		<CarouselContext.Provider
			value={{ onCardClose: handleCardClose, currentIndex }}
		>
			<div className="flex flex-col gap-5 max-lg:gap-3 text-gray-500">
				{buttons.map((item, index) => (
					<motion.div
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.5,
								delay: 0.2 * index,
								ease: "easeOut",
								once: true,
							},
						}}
						key={"card" + index}
						className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
					>
						{item}
					</motion.div>
				))}
			</div>
		</CarouselContext.Provider>
	);
};

export default PortfolioAndCVViewer;

type Card = {
	src: string;
	title: string;
	category: string;
	content: (setLoading: (loading: boolean) => void) => JSX.Element;
	src_mobile: string;
	loader: boolean;
};

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => {},
	currentIndex: 0,
});

export const Button = ({
	card,
	index,
	layout = false,
}: {
	card: Card;
	index: number;
	layout?: boolean;
}) => {
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const { onCardClose } = useContext(CarouselContext);
	const [loading, setLoading] = useState(card.loader);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				handleClose();
			}
		}

		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
		handleClose()
	);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		onCardClose(index);
		setLoading(card.loader ? true : false);
	};

	return (
		<>
			<AnimatePresence>
				{open && (
					<div className="fixed inset-0 h-screen z-50 overflow-auto">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0 rotate-357"
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							ref={containerRef}
							layoutId={layout ? `card-${card.title}` : undefined}
							className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
						>
							<button
								className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
								onClick={handleClose}
							>
								<IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
							</button>
							<motion.p
								layoutId={
									layout
										? `category-${card.title}`
										: undefined
								}
								className="text-xl md:text-2xl font-bold text-black dark:text-white font-(family-name:--font-poppins-sans)"
							>
								{card.category}
							</motion.p>
							<motion.p
								layoutId={
									layout ? `title-${card.title}` : undefined
								}
								className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
							>
								{card.title}
							</motion.p>
							{loading && (
								<div className="flex flex-col items-center">
									<p className="absolute w-12 h-12 border-4 border-background border-t-current rounded-full animate-spin"></p>
								</div>
							)}
							<div className="py-10">
								{card.content(() => setLoading(false))}
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<motion.button
				layoutId={layout ? `card-${card.title}` : undefined}
				onClick={handleOpen}
				className="relative px-6 py-0 border border-gray-400 rounded-full hover:bg-gray-100 transition"
				aria-label="View curriculum vitae"
			>
				<motion.span>{card.title}</motion.span>
			</motion.button>
		</>
	);
};
