import React from "react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Pour un défilement fluide
		});
	};
	return (
		<main className="error-container">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<NavLink to="/" onClick={scrollToTop}>
				Retourner sur la page d'accueil
			</NavLink>
		</main>
	);
};
export default ErrorPage;
