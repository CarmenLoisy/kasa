import React from "react";

const Card = ({ salon: { cover, title } }) => {
	return (
		<article className="card">
			<img src={cover} alt="" />
			<p>{title}</p>
		</article>
	);
};

export default Card;
