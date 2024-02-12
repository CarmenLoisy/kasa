import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<header>
			<NavLink to="/" onClick={scrollToTop}>
				<img className="header_logo" src={logo} alt="Logo Kasa" />
			</NavLink>
			<Navigation />
		</header>
	);
};
export default Header;
