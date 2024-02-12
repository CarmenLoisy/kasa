import React from "react";
import CollapseItem from "./CollapseItem";

const Collapse = ({ data }) => {
	return (
		<div className="collapse">
			{data.map(({ id, title, text }) => (
				<CollapseItem key={id} title={title} text={<p>{text}</p>} />
			))}
		</div>
	);
};

export default Collapse;
