"use client";

import Image from "next/image";
import { useState } from "react";

export default function LetterForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		query: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		// todo add validation
		e.preventDefault();
		setStatus("Sending...");
		const res = await fetch("/api/send-letter", {
			method: "POST",
			body: JSON.stringify(formData),
		});
		const data = await res.json();
		setStatus(data.message || "Sent!");
	};

	return (
		<div
			id={"sayhello"}
			className="flex flex-col items-start max-w-full min-h-svh"
		>
			<div>
				<h2 className="text-4xl max-xl:text-3xl max-lg:text-2xl font-bold text-[#5b0000] italic pl-28 pt-28 max-lg:pt-8 max-lg:pl-8 max-xl:pl-15 max-xl:pt-15">
					/ say <span className="font-bold">HELLO</span>
				</h2>
			</div>
			<div
				className={
					"flex relative w-full mt-10 max-xl:mt-0 justify-center self-center p-5 max-lg:p-0 max-xl:pl-30 max-lg:mt-0"
				}
			>
				<div className="relative flex justify-center self-center">
					<Image
						src="/letter.png"
						alt="Collage of Neha Aradhya, and her biography"
						width={1100}
						height={800}
						className="relative object-contain max-w-4/5 max-xl:max-w-1/2"
						priority
					/>
					<div className="absolute right-1/5 max-xl:right-26/100 max-2xl:scale-80 max-xl:scale-70 max-lg:scale-65 max-lg:text-sm top-1/4 max-xl:top-1/14 max-lg:top-0 flex flex-col max-w-1/4 ">
						<form onSubmit={handleSubmit} className="space-y-4">
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="w-full border-b-2 border-gray-400 outline-none p-2"
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Your Email Address"
								className="w-full border-b-2 border-gray-400 outline-none p-2"
								onChange={handleChange}
								required
							/>
							<textarea
								name="query"
								placeholder="Hello Neha..."
								rows={5}
								className="w-full p-2 rounded"
								onChange={handleChange}
								required
							/>
						</form>
						{/* {status && (
							<p className="mt-4 text-green-600">{status}</p>
						)} */}
						<button
							onClick={handleSubmit}
							className="mt-60 max-xl:mt-50 max-lg:mt-30 w-1/2 self-center px-6 py-0 border border-gray-400 rounded-full hover:bg-gray-100 transition hover:cursor-pointer"
							aria-label="View curated portfolio"
						>
							Submit
						</button>
						{status && <p className="mt-4 self-center">{status}</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
