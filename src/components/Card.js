import React from "react";

const Card = ({ salon }) => {
	return (
		<article className="card">
			<img src={salon.cover} alt="" />
			<div className="overlay">
				<p>{salon.title}</p>
			</div>
		</article>
	);
};

export default Card;
