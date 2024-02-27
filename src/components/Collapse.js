import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";
import { useLocation } from "react-router-dom";

const Collapse = ({ data }) => {
	const [openIndexes, setOpenIndexes] = useState([]);
	const location = useLocation();
	const isAboutPage = location.pathname === "/a-propos";

	const isOpen = (index) => openIndexes.includes(index);

	const handleToggle = (index) => {
		setOpenIndexes((prevIndexes) =>
			isOpen(index)
				? prevIndexes.filter((prevIndex) => prevIndex !== index)
				: [...prevIndexes, index]
		);
	};

	const containerClassName = isAboutPage
		? "collapse"
		: "logement-details-content";

	return (
		<div className={containerClassName}>
			{data.map(({ id, title, text }, index) => {
				const isOpenItem = isOpen(index);
				return (
					<div
						key={`${id}-${index}`} // Ensure uniqueness by concatenating id with index
						className={`collapse_Item${isOpenItem ? "_Open" : ""}`}
						onClick={() => handleToggle(index)}>
						<h3>{title}</h3>
						<img
							className={`arrow_${isOpenItem ? "rotate" : ""}`}
							src={arrow}
							alt="Arrow icon"
						/>
						{isOpenItem && <div className="content">{text}</div>}
					</div>
				);
			})}
		</div>
	);
};

export default Collapse;
