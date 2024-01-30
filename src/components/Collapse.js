import React from "react";
import CollapseItem from "./CollapseItem";

const Collapse = ({ data }) => {
	return (
		<div className="collapse">
			{data.map((item) => (
				<CollapseItem key={item.id} title={item.title} text={item.text} />
			))}
		</div>
	);
};

export default Collapse;
