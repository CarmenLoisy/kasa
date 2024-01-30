import React from "react";
import { Ratings } from "./Rating";

const LogementDetails = ({ data }) => {
	const { title, description, host, rating, location, equipments, tags } = data;

	return (
		<div className="logement-details">
			<div className="logement-header">
				<h1>{title}</h1>
				<p>{location}</p>
				<ul className="tags">
					{tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			</div>
			<div className="logement-details-host">
				<div className="host-details">
					<img src={host.picture} alt={host.name} />
					<p>{host.name}</p>
				</div>
				<Ratings rating={rating} />
			</div>
			<div className="logement-details-content">
				<p>description{description}</p>
				<div className="equipments">
					Equipments:
					<ul>
						{equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LogementDetails;
