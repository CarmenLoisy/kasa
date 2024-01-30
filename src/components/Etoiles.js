import React from "react";
import StarGray from "../assets/start-gray.png";
import StarPink from "../assets/start-pink.png";

const Etoiles = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, index) => (
		<div className="star" key={`star-${index}`}>
			<img
				src={index + 1 <= rating ? StarGray : StarPink}
				alt={`Star ${index + 1}`}
			/>
		</div>
	));

	return <ul className="stars-container">{stars}</ul>;
};

export default Etoiles;
