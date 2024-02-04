import React from "react";
import { useLocation } from "react-router-dom";

// une description significative pour l'attribut alt
const altText = "Bannière d'accueil";

const Banner = ({ src }) => {
	const location = useLocation();
	return (
		<div className="header-bg">
			<img
				src={src}
				alt={altText}
				className={location.pathname === "/" ? "home_bg" : "about_bg"}
			/>
			{location.pathname === "/" ? <p>Chez vous, partout et ailleurs</p> : ""}
		</div>
	);
};

export default Banner;
