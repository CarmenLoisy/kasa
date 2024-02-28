import React from "react";
import Banner from "../components/Banner";
import bgHome from "../assets/img/bg_home.png";
import { NavLink } from "react-router-dom";
import data from "../logements.json";
import Card from "../components/Card";
const Home = () => {
	return (
		<main>
			<Banner src={bgHome} />
			<section className="cards-container">
				{data.map((salon) => (
					<NavLink key={salon.id} to={`./logement/${salon.id}`}>
						<Card salon={salon} />
					</NavLink>
				))}
			</section>
		</main>
	);
};
export default Home;
