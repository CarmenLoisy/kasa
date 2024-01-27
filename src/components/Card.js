import React from "react";

const Card = ({ salon }) => {
	return (
		<article className="card">
			<img src={salon.cover} alt="" />
			<p>{salon.title}</p>
		</article>
	);
};

export default Card;
