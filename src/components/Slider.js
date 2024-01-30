// Slider.js
import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";

const Slider = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1
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
				onClick={handlePrev}
				className="slider-button _Prev"
				src={arrow}
				alt="Arrow Prev"
			/>
			<img
				onClick={handleNext}
				className="slider-button _Next"
				src={arrow}
				alt="Arrow Next"
			/>
		</div>
	);
};

export default Slider;
