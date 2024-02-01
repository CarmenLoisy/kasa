import React from "react";
import CollapseItem from "./CollapseItem";

const Collapse = ({ data }) => {
	const renderText = (item) => <p>{item.text}</p>;
	return (
		<div className="collapse">
			{data.map((item) => (
				<CollapseItem key={item.id} title={item.title} text={renderText(item)} />
			))}
		</div>
	);
};

export default Collapse;
