import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header>
			<img className="header_logo" src={logo} alt="Logo Kasa" />
			<Navigation />
		</header>
	);
};

export default Header;
