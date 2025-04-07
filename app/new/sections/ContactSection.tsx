"use client";

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
			{/* <div className="relative w-full px-11 mx-auto flex items-center justify-center max-xl:scale-70"> */}
			<div className="flex relative justify-center mx-auto p-5 pl-45 max-lg:p-4 max-xl:pl-30 mt-30 max-xl:mt-10 max-lg:mt-0">
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
						placeholder="Your Query"
						rows={5}
						className="w-full border border-gray-300 p-2 rounded"
						onChange={handleChange}
						required
					/>
					<button
						type="submit"
						className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
					>
						Send
					</button>
				</form>
				{status && <p className="mt-4 text-green-600">{status}</p>}
			</div>
		</div>
	);
}
