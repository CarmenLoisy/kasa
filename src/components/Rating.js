import React from "react";
import FullStar from "../assets/start-pink.png";
import EmptyStar from "../assets/start-gray.png";

export const Ratings = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, index) => (
		<img
			key={index}
			className="star"
			src={rating >= index + 1 ? FullStar : EmptyStar}
			alt="Star"
		/>
	));
	return <div className="ratingsCard">{stars}</div>;
};
