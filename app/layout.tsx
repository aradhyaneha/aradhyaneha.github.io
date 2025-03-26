import type { Metadata } from "next";
import { Arimo, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Arimo({
	variable: "--font-arimo-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins-sans",
	subsets: ["latin"],
	weight: "300",
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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
