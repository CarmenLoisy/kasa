import React from "react";
import { Ratings } from "./Rating";
import CollapseItem from "./CollapseItem";
const LogementDetails = ({ data }) => {
	const { title, description, host, rating, location, equipments, tags } = data;
	const descriptionText = <p>{description}</p>;
	const equipmentsList = equipments.map((equipment, index) => (
		<li key={index}>{equipment}</li>
	));
	const tagsList = tags.map((tag, index) => <li key={index}>{tag}</li>);
	return (
		<div className="logement-details">
			<div className="logement-header">
				<h1>{title}</h1>
				<p>{location}</p>
				<ul className="tags">{tagsList}</ul>
			</div>
			<div className="logement-details-host">
				<div className="host-details">
					<img src={host.picture} alt={host.name} />
					<p>{host.name}</p>
				</div>
				<Ratings rating={rating} />
			</div>
			<div className="logement-details-content">
				<CollapseItem title="Description" text={descriptionText} />
				<CollapseItem title="Equipments" text={<ul>{equipmentsList}</ul>} />
			</div>
		</div>
	);
};
export default LogementDetails;
