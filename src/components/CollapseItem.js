import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";
const CollapseItem = ({ title, text }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`collapse_Item${isOpen ? "_Open" : ""}`} onClick={handleToggle}>
			<h3>{title}</h3>
			<img
				className={`arrow_${isOpen ? "rotate" : ""}`}
				src={arrow}
				alt="Arrow icon"
			/>
			{isOpen && <p className="content">{text}</p>}
		</div>
	);
};

export default CollapseItem;