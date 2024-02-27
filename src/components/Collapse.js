import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";

const Collapse = ({ title, text }) => {
	const [isOpen, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!isOpen);
	};

	return (
		<div className={`collapse_Item${isOpen ? "_Open" : ""}`} onClick={handleToggle}>
			<h3>{title}</h3>
			<img
				className={`arrow_${isOpen ? "rotate" : ""}`}
				src={arrow}
				alt="Arrow icon"
			/>
			{isOpen && <div className="content">{text}</div>}
		</div>
	);
};

export default Collapse;
