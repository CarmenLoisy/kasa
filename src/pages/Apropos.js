import React from "react";
import Banner from "../components/Banner";
import bg_propos from "../assets/img/bg_propos.jpg";
import Collapse from "../components/Collapse";
const Apropos = () => {
	return (
		<main>
			<Banner src={bg_propos} />
			<Collapse />
		</main>
	);
};

export default Apropos;
