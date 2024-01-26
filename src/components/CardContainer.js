import React from "react";
import data from "../logements.json";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const CardContainer = () => {
	return (
		<section className="cards-container">
			{data.map((salon) => (
				<NavLink key={salon.id} to={`./logement/${salon.id}`}>
					<Card salon={salon} />
				</NavLink>
			))}
		</section>
	);
};

export default CardContainer;
