import type { Metadata } from "next";
import { Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
	variable: "--font-poppins-sans",
	subsets: ["latin"],
	weight: "500",
});

const robotoSans = Roboto({
	variable: "--font-roboto-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Neha Aradhya",
	description:
		"Official website of Neha Aradhya. Licensed Architect and Interior Designer from India.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${poppinsSans.variable} ${geistMono.variable} ${robotoSans.variable}`}
			lang="en"
		>
			<body className={`font-sans antialiased`}>{children}</body>
		</html>
	);
}
