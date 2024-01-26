import React from "react";
import logo_w from "../assets/logo_w.png";

const Footer = () => {
	return (
		<footer>
			<div className="footer-logo">
				<img src={logo_w} alt="logo kasa" />
			</div>
			<div className="sous-titre">
				<p>c 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
