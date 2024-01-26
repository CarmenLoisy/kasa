import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header>
			<div className="header_nav">
				<div className="logo">
					<img src={logo} alt="Logo Kasa" />
				</div>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
