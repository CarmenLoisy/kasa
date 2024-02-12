import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";
const Slider = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleClick = (direction) => {
		setCurrentIndex((prevIndex) =>
			direction === "next"
				? prevIndex === data.pictures.length - 1
					? 0
					: prevIndex + 1
				: prevIndex === 0
				? data.pictures.length - 1
				: prevIndex - 1
		);
	};
	return (
		<div className="slider">
			<img
				src={data.pictures[currentIndex]}
				alt={`${currentIndex + 1}`}
				className="slider-image"
			/>
			<img
				onClick={() => handleClick("prev")}
				className="slider-button _Prev"
				src={arrow}
				alt="Arrow Prev"
			/>
			<img
				onClick={() => handleClick("next")}
				className="slider-button _Next"
				src={arrow}
				alt="Arrow Next"
			/>
		</div>
	);
};
export default Slider;
