import React, { useState } from "react";

const AddToList = () => {
	const [input, setInput] = useState({
		name: "",
		age: "",
		img: "",
		note: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClick = (): void => {};

	return (
		<div className="AddToList">
			<input
				className="AddToList-input"
				type="text"
				placeholder="Name of Guest"
				value={input.name}
				onChange={handleChange}
				name="name"
			/>
			<input
				className="AddToList-input"
				type="text"
				placeholder="Age"
				value={input.age}
				onChange={handleChange}
				name="age"
			/>
			<input
				className="AddToList-input"
				type="text"
				placeholder="Image Url"
				value={input.img}
				onChange={handleChange}
				name="img"
			/>
			<textarea
				className="AddToList-input"
				placeholder="Notes"
				value={input.note}
				onChange={handleChange}
				name="note"
			/>
			<button className="AddToList-btn" onClick={handleClick}>
				Add to Guest List
			</button>
		</div>
	);
};

export default AddToList;