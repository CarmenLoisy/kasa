import React from "react";
import { useLocation } from "react-router-dom";

const Banner = ({ src }) => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const bgClassName = isHomePage ? "home_bg" : "about_bg";
	const displayText = isHomePage ? "Chez vous, partout et ailleurs" : null;

	return (
		<div className="header-bg">
			<img src={src} alt="Bannière paysage" className={bgClassName} />
			{displayText && <p>{displayText}</p>}
		</div>
	);
};

export default Banner;
