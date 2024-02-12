import React from "react";
import FullStar from "../assets/start-pink.png";
import EmptyStar from "../assets/start-gray.png";

const Star = ({ filled }) => (
	<img className="star" src={filled ? FullStar : EmptyStar} alt="Star" />
);

export const Ratings = ({ rating }) => {
	return (
		<div className="ratingsCard">
			{[...Array(5)].map((_, index) => (
				<Star key={index} filled={index < rating} />
			))}
		</div>
	);
};
