import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const activeClassName = ({ isActive }) => (isActive ? "nav-active" : "");

	return (
		<header>
			<NavLink to="/" onClick={scrollToTop}>
				<img className="header_logo" src={logo} alt="Logo Kasa" />
			</NavLink>
			<nav>
				<NavLink to="/" className={activeClassName}>
					Accueil
				</NavLink>
				<NavLink to="/a-propos" className={activeClassName}>
					À propos
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
