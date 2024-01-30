import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import data from "../logements.json";
import LogementDetails from "../components/LogementDetails";

const Logement = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const dataDetails = data.find((item) => item.id === id);
		if (!dataDetails) {
			navigate("/error404", { replace: true });
		}
	}, [id, navigate]);

	const dataDetails = data.find((item) => item.id === id);

	return dataDetails ? (
		<main>
			<Slider data={dataDetails} />
			<LogementDetails data={dataDetails} />
		</main>
	) : null;
};

export default Logement;
