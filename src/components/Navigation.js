import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const activeClassName = ({ isActive }) => (isActive ? "nav-active" : "");
	return (
		<nav>
			<NavLink to="/" className={activeClassName}>
				Accueil
			</NavLink>
			<NavLink to="/a-propos" className={activeClassName}>
				À propos
			</NavLink>
		</nav>
	);
};
export default Navigation;
