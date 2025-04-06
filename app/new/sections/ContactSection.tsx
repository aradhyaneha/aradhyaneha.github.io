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
			className="max-w-xl mx-auto mt-10 p-6 border-2 border-dashed border-gray-300 bg-white shadow-lg rounded-2xl font-serif"
		>
			<h2 className="text-2xl font-bold mb-4">Write a Letter</h2>
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
	);
}
