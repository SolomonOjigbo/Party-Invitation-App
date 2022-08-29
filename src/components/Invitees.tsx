interface IProps {
	people: {
		name: string;
		age: number;
		img: string;
		note?: string;
	}[];
}

const Invitees: React.FC<IProps> = ({ people }) => {
	const guestList = (): JSX.Element[] => {
		return people.map((person) => {
			return (
				<li className="List">
					<div className="List-header">
						<img className="List-img" src={person.img} />
						<h2> {person.name}</h2>
					</div>
					<p> {person.age} years old</p>
					<p className="List-note">{person.note} </p>
				</li>
			);
		});
	};

	return <ul>{guestList()}</ul>;
};

export default Invitees;
