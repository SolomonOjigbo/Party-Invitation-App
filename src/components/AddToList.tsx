import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
	people: Props["people"];
	setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: "",
		age: "",
		img: "",
		note: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClick = (): void => {
		if (!input.name || !input.img || !input.age) {
			return;
		}
		setPeople([
			...people,
			{
				name: input.name,
				age: parseInt(input.age),
				img: input.img,
				note: input.note,
			},
		]);
		setInput({
			name: "",
			age: "",
			img: "",
			note: "",
		});
	};

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
