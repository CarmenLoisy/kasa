import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
				Accueil
			</NavLink>
			<NavLink
				to="/a-propos"
				className={({ isActive }) => (isActive ? "nav-active" : "")}>
				A Propos
			</NavLink>
		</nav>
	);
};

export default Navigation;
