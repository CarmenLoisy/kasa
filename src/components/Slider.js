import React, { useState } from "react";
import arrow from "../assets/arrow_back.svg";

const Slider = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const picturesLength = data.pictures.length;

	const handleClick = (direction) => {
		setCurrentIndex((prevIndex) => {
			if (direction === "next") {
				return prevIndex === picturesLength - 1 ? 0 : prevIndex + 1;
			} else {
				return prevIndex === 0 ? picturesLength - 1 : prevIndex - 1;
			}
		});
	};

	const shouldShowPagination = picturesLength > 1;

	return (
		<div className="slider">
			{shouldShowPagination && (
				<div className="pagination">
					{currentIndex + 1}/{picturesLength}
				</div>
			)}
			<img
				src={data.pictures[currentIndex]}
				alt={`${currentIndex + 1}`}
				className="slider-image"
			/>
			{shouldShowPagination && (
				<>
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
				</>
			)}
		</div>
	);
};

export default Slider;
