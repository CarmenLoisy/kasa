import React from "react";
import Banner from "../components/Banner";
import bgHome from "../assets/img/bg_home.png";
import CardContainer from "../components/CardContainer";
const Home = () => {
	return (
		<main>
			<Banner src={bgHome} />
			<CardContainer />
		</main>
	);
};
export default Home;
