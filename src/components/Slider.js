import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({ images, title }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalImages = images.length;
	const imageRef = useRef(null);

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const imageElement = imageRef.current;
		if (imageElement) {
			imageElement.classList.add("slide-transition");
			imageElement.style.transform = "scaleX(0)";
			setTimeout(() => {
				imageElement.src = images[currentIndex];
				imageElement.style.transform = "scaleX(1)";
			}, 300); // Durée de l'animation
		}
	}, [currentIndex, images]);

	const handleKeyDown = (e) => {
		if (document.activeElement.classList.contains("slider")) {
			if (e.key === "ArrowLeft") {
				setCurrentIndex((prevIndex) =>
					prevIndex === 0 ? totalImages - 1 : prevIndex - 1
				);
			} else if (e.key === "ArrowRight") {
				setCurrentIndex((prevIndex) =>
					prevIndex === totalImages - 1 ? 0 : prevIndex + 1
				);
			}
		}
	};

	return (
		<div className="slider" tabIndex="0" onKeyDown={handleKeyDown}>
			{totalImages > 1 && (
				<button
					aria-label="Previous image"
					onClick={() =>
						goToSlide(currentIndex === 0 ? totalImages - 1 : currentIndex - 1)
					}
					className="arrow left">
					<FaAngleLeft />
				</button>
			)}
			<img
				ref={imageRef}
				className="slider-img"
				src={images[currentIndex]}
				alt={title}
			/>
			{totalImages > 1 && (
				<button
					aria-label="Next image"
					onClick={() =>
						goToSlide(currentIndex === totalImages - 1 ? 0 : currentIndex + 1)
					}
					className="arrow right">
					<FaAngleRight />
				</button>
			)}
			{totalImages > 1 && (
				<div className="image-counter">
					{currentIndex + 1} / {totalImages}
				</div>
			)}
		</div>
	);
};

Slider.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
};

export default Slider;
