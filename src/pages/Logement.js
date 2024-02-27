import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import data from "../logements.json";
import Collapse from "../components/Collapse";
import { Ratings } from "../components/Rating";

const Logement = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [dataDetails, setDataDetails] = useState(null);

	useEffect(() => {
		const details = data.find((item) => item.id === id);
		if (!details) {
			navigate("/error404", { replace: true });
		} else {
			setDataDetails(details);
		}
	}, [id, navigate]);

	if (!dataDetails) {
		return null;
	}

	const { title, description, host, rating, location, equipments, tags } =
		dataDetails;

	const descriptionText = <p>{description}</p>;
	const equipmentsList = equipments.map((equipment, index) => (
		<li key={index}>{equipment}</li>
	));

	return (
		<main>
			<Slider data={dataDetails} />
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
				<Collapse
					data={[
						{ title: "Description", text: descriptionText },
						{ title: "Equipments", text: <ul>{equipmentsList}</ul> },
					]}
				/>
			</div>
		</main>
	);
};

export default Logement;
