import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import Invitees from "./components/Invitees";

interface IState {
	people: {
		name: string;
		age: number;
		img: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState["people"]>([
		{
			name: "LeBron James",
			age: 37,
			img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
			note: "Allegeric to staying on the same team",
		},
		{
			name: "Kobe Bryant",
			age: 39,
			img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
		},
	]);

	return (
		<div className="App">
			<h1> People invited to my party</h1>
			<Invitees people={people} />
			<AddToList />
		</div>
	);
}

export default App;
