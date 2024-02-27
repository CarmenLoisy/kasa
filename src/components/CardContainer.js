import React from "react";
import { NavLink } from "react-router-dom";
import data from "../logements.json";

const CardContainer = () => {
	return (
		<section className="cards-container">
			{data.map((salon) => (
				<NavLink key={salon.id} to={`./logement/${salon.id}`}>
					<article className="card">
						<img src={salon.cover} alt="" />
						<div className="overlay">
							<p>{salon.title}</p>
						</div>
					</article>
				</NavLink>
			))}
		</section>
	);
};

export default CardContainer;
